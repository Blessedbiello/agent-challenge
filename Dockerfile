# syntax=docker/dockerfile:1

FROM node:lts AS deps

RUN corepack enable

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Disable Analytics/Telemetry
ENV DISABLE_TELEMETRY=true
ENV POSTHOG_DISABLED=true
ENV MASTRA_TELEMETRY_DISABLED=true
ENV DO_NOT_TRACK=1

WORKDIR /app

# Copy workspace manifests (sufficient for caching)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Bring in the full workspace (including prebuilt artifacts)
COPY . .

# Install only production deps (workspace links remain intact)
RUN pnpm install --prod --frozen-lockfile

FROM node:lts AS runtime

RUN groupadd -g 1001 appgroup && \
  useradd -u 1001 -g appgroup -m -d /app -s /bin/false appuser

WORKDIR /app

# Copy runtime dependencies and required artifacts
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=deps /app/pnpm-workspace.yaml ./pnpm-workspace.yaml

# Application artifacts (must be prebuilt before docker build)
COPY --from=deps /app/apps/server/dist ./apps/server/dist
COPY --from=deps /app/apps/web/.next ./apps/web/.next
COPY --from=deps /app/.mastra/output ./.mastra/output
COPY --from=deps /app/apps/web/public ./apps/web/public
COPY --from=deps /app/apps/web/next.config.ts ./apps/web/next.config.ts
COPY --from=deps /app/apps/web/postcss.config.mjs ./apps/web/postcss.config.mjs
COPY --from=deps /app/apps/web/tsconfig.json ./apps/web/tsconfig.json

# Copy shared assets
COPY --from=deps /app/assets ./assets

ENV NODE_ENV=production \
  NODE_OPTIONS="--enable-source-maps" \
  DISABLE_TELEMETRY=true \
  POSTHOG_DISABLED=true \
  MASTRA_TELEMETRY_DISABLED=true \
  DO_NOT_TRACK=1

USER appuser

EXPOSE 3000
EXPOSE 4111

ENTRYPOINT ["npm", "start"]
