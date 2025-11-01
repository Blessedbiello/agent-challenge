import { z } from "zod";
declare const GitFileChangeSchema: z.ZodObject<{
    path: z.ZodString;
    headStatus: z.ZodString;
    worktreeStatus: z.ZodString;
}, "strip", z.ZodTypeAny, {
    path: string;
    headStatus: string;
    worktreeStatus: string;
}, {
    path: string;
    headStatus: string;
    worktreeStatus: string;
}>;
declare const GitStatusSchema: z.ZodObject<{
    branch: z.ZodNullable<z.ZodString>;
    tracking: z.ZodNullable<z.ZodString>;
    ahead: z.ZodNumber;
    behind: z.ZodNumber;
    isClean: z.ZodBoolean;
    staged: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        headStatus: z.ZodString;
        worktreeStatus: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        headStatus: string;
        worktreeStatus: string;
    }, {
        path: string;
        headStatus: string;
        worktreeStatus: string;
    }>, "many">;
    unstaged: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        headStatus: z.ZodString;
        worktreeStatus: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        headStatus: string;
        worktreeStatus: string;
    }, {
        path: string;
        headStatus: string;
        worktreeStatus: string;
    }>, "many">;
    untracked: z.ZodArray<z.ZodString, "many">;
    created: z.ZodArray<z.ZodString, "many">;
    deleted: z.ZodArray<z.ZodString, "many">;
    modified: z.ZodArray<z.ZodString, "many">;
    conflicted: z.ZodArray<z.ZodString, "many">;
    renamed: z.ZodArray<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        from: string;
        to: string;
    }, {
        from: string;
        to: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    branch: string | null;
    tracking: string | null;
    ahead: number;
    behind: number;
    isClean: boolean;
    staged: {
        path: string;
        headStatus: string;
        worktreeStatus: string;
    }[];
    unstaged: {
        path: string;
        headStatus: string;
        worktreeStatus: string;
    }[];
    untracked: string[];
    created: string[];
    deleted: string[];
    modified: string[];
    conflicted: string[];
    renamed: {
        from: string;
        to: string;
    }[];
}, {
    branch: string | null;
    tracking: string | null;
    ahead: number;
    behind: number;
    isClean: boolean;
    staged: {
        path: string;
        headStatus: string;
        worktreeStatus: string;
    }[];
    unstaged: {
        path: string;
        headStatus: string;
        worktreeStatus: string;
    }[];
    untracked: string[];
    created: string[];
    deleted: string[];
    modified: string[];
    conflicted: string[];
    renamed: {
        from: string;
        to: string;
    }[];
}>;
declare const GitDiffFileSchema: z.ZodObject<{
    file: z.ZodString;
    changes: z.ZodNumber;
    insertions: z.ZodNumber;
    deletions: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    file: string;
    changes: number;
    insertions: number;
    deletions: number;
}, {
    file: string;
    changes: number;
    insertions: number;
    deletions: number;
}>;
declare const GitDiffSchema: z.ZodObject<{
    cached: z.ZodBoolean;
    files: z.ZodArray<z.ZodObject<{
        file: z.ZodString;
        changes: z.ZodNumber;
        insertions: z.ZodNumber;
        deletions: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        file: string;
        changes: number;
        insertions: number;
        deletions: number;
    }, {
        file: string;
        changes: number;
        insertions: number;
        deletions: number;
    }>, "many">;
    insertions: z.ZodNumber;
    deletions: z.ZodNumber;
    changes: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    changes: number;
    insertions: number;
    deletions: number;
    cached: boolean;
    files: {
        file: string;
        changes: number;
        insertions: number;
        deletions: number;
    }[];
}, {
    changes: number;
    insertions: number;
    deletions: number;
    cached: boolean;
    files: {
        file: string;
        changes: number;
        insertions: number;
        deletions: number;
    }[];
}>;
declare const GitStatusOutputSchema: z.ZodObject<{
    enabled: z.ZodBoolean;
    status: z.ZodNullable<z.ZodObject<{
        branch: z.ZodNullable<z.ZodString>;
        tracking: z.ZodNullable<z.ZodString>;
        ahead: z.ZodNumber;
        behind: z.ZodNumber;
        isClean: z.ZodBoolean;
        staged: z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            headStatus: z.ZodString;
            worktreeStatus: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }, {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }>, "many">;
        unstaged: z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            headStatus: z.ZodString;
            worktreeStatus: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }, {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }>, "many">;
        untracked: z.ZodArray<z.ZodString, "many">;
        created: z.ZodArray<z.ZodString, "many">;
        deleted: z.ZodArray<z.ZodString, "many">;
        modified: z.ZodArray<z.ZodString, "many">;
        conflicted: z.ZodArray<z.ZodString, "many">;
        renamed: z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            to: string;
        }, {
            from: string;
            to: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        branch: string | null;
        tracking: string | null;
        ahead: number;
        behind: number;
        isClean: boolean;
        staged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        unstaged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        untracked: string[];
        created: string[];
        deleted: string[];
        modified: string[];
        conflicted: string[];
        renamed: {
            from: string;
            to: string;
        }[];
    }, {
        branch: string | null;
        tracking: string | null;
        ahead: number;
        behind: number;
        isClean: boolean;
        staged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        unstaged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        untracked: string[];
        created: string[];
        deleted: string[];
        modified: string[];
        conflicted: string[];
        renamed: {
            from: string;
            to: string;
        }[];
    }>>;
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    status: {
        branch: string | null;
        tracking: string | null;
        ahead: number;
        behind: number;
        isClean: boolean;
        staged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        unstaged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        untracked: string[];
        created: string[];
        deleted: string[];
        modified: string[];
        conflicted: string[];
        renamed: {
            from: string;
            to: string;
        }[];
    } | null;
    enabled: boolean;
    error?: {
        code: string;
        message: string;
    } | undefined;
}, {
    status: {
        branch: string | null;
        tracking: string | null;
        ahead: number;
        behind: number;
        isClean: boolean;
        staged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        unstaged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        untracked: string[];
        created: string[];
        deleted: string[];
        modified: string[];
        conflicted: string[];
        renamed: {
            from: string;
            to: string;
        }[];
    } | null;
    enabled: boolean;
    error?: {
        code: string;
        message: string;
    } | undefined;
}>;
declare const GitDiffOutputSchema: z.ZodObject<{
    enabled: z.ZodBoolean;
    diff: z.ZodNullable<z.ZodObject<{
        cached: z.ZodBoolean;
        files: z.ZodArray<z.ZodObject<{
            file: z.ZodString;
            changes: z.ZodNumber;
            insertions: z.ZodNumber;
            deletions: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            file: string;
            changes: number;
            insertions: number;
            deletions: number;
        }, {
            file: string;
            changes: number;
            insertions: number;
            deletions: number;
        }>, "many">;
        insertions: z.ZodNumber;
        deletions: z.ZodNumber;
        changes: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        changes: number;
        insertions: number;
        deletions: number;
        cached: boolean;
        files: {
            file: string;
            changes: number;
            insertions: number;
            deletions: number;
        }[];
    }, {
        changes: number;
        insertions: number;
        deletions: number;
        cached: boolean;
        files: {
            file: string;
            changes: number;
            insertions: number;
            deletions: number;
        }[];
    }>>;
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    diff: {
        changes: number;
        insertions: number;
        deletions: number;
        cached: boolean;
        files: {
            file: string;
            changes: number;
            insertions: number;
            deletions: number;
        }[];
    } | null;
    error?: {
        code: string;
        message: string;
    } | undefined;
}, {
    enabled: boolean;
    diff: {
        changes: number;
        insertions: number;
        deletions: number;
        cached: boolean;
        files: {
            file: string;
            changes: number;
            insertions: number;
            deletions: number;
        }[];
    } | null;
    error?: {
        code: string;
        message: string;
    } | undefined;
}>;
declare const GitStageInputSchema: z.ZodObject<{
    paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    paths?: string[] | undefined;
}, {
    paths?: string[] | undefined;
}>;
declare const GitStageOutputSchema: z.ZodObject<{
    enabled: z.ZodBoolean;
    success: z.ZodBoolean;
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    success: boolean;
    error?: {
        code: string;
        message: string;
    } | undefined;
}, {
    enabled: boolean;
    success: boolean;
    error?: {
        code: string;
        message: string;
    } | undefined;
}>;
declare const GitCommitInputSchema: z.ZodObject<{
    message: z.ZodString;
    allowEmpty: z.ZodOptional<z.ZodBoolean>;
    signoff: z.ZodOptional<z.ZodBoolean>;
    author: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        email?: string | undefined;
    }, {
        name: string;
        email?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    message: string;
    allowEmpty?: boolean | undefined;
    signoff?: boolean | undefined;
    author?: {
        name: string;
        email?: string | undefined;
    } | undefined;
}, {
    message: string;
    allowEmpty?: boolean | undefined;
    signoff?: boolean | undefined;
    author?: {
        name: string;
        email?: string | undefined;
    } | undefined;
}>;
declare const GitCommitOutputSchema: z.ZodObject<{
    enabled: z.ZodBoolean;
    commit: z.ZodNullable<z.ZodObject<{
        sha: z.ZodString;
        summary: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sha: string;
        summary: string;
    }, {
        sha: string;
        summary: string;
    }>>;
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    commit: {
        sha: string;
        summary: string;
    } | null;
    error?: {
        code: string;
        message: string;
    } | undefined;
}, {
    enabled: boolean;
    commit: {
        sha: string;
        summary: string;
    } | null;
    error?: {
        code: string;
        message: string;
    } | undefined;
}>;
declare const GitPushInputSchema: z.ZodObject<{
    remote: z.ZodOptional<z.ZodString>;
    branch: z.ZodOptional<z.ZodString>;
    force: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    branch?: string | undefined;
    remote?: string | undefined;
    force?: boolean | undefined;
}, {
    branch?: string | undefined;
    remote?: string | undefined;
    force?: boolean | undefined;
}>;
declare const GitPushOutputSchema: z.ZodObject<{
    enabled: z.ZodBoolean;
    result: z.ZodNullable<z.ZodObject<{
        remote: z.ZodString;
        branch: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        branch: string;
        remote: string;
    }, {
        branch: string;
        remote: string;
    }>>;
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    result: {
        branch: string;
        remote: string;
    } | null;
    error?: {
        code: string;
        message: string;
    } | undefined;
}, {
    enabled: boolean;
    result: {
        branch: string;
        remote: string;
    } | null;
    error?: {
        code: string;
        message: string;
    } | undefined;
}>;
declare const GitBranchInputSchema: z.ZodObject<{
    name: z.ZodString;
    base: z.ZodOptional<z.ZodString>;
    checkout: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name: string;
    base?: string | undefined;
    checkout?: boolean | undefined;
}, {
    name: string;
    base?: string | undefined;
    checkout?: boolean | undefined;
}>;
declare const GitBranchOutputSchema: z.ZodObject<{
    enabled: z.ZodBoolean;
    branch: z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        checkedOut: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        checkedOut: boolean;
    }, {
        name: string;
        checkedOut: boolean;
    }>>;
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    branch: {
        name: string;
        checkedOut: boolean;
    } | null;
    enabled: boolean;
    error?: {
        code: string;
        message: string;
    } | undefined;
}, {
    branch: {
        name: string;
        checkedOut: boolean;
    } | null;
    enabled: boolean;
    error?: {
        code: string;
        message: string;
    } | undefined;
}>;
export declare const gitStatusTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, z.ZodObject<{
    enabled: z.ZodBoolean;
    status: z.ZodNullable<z.ZodObject<{
        branch: z.ZodNullable<z.ZodString>;
        tracking: z.ZodNullable<z.ZodString>;
        ahead: z.ZodNumber;
        behind: z.ZodNumber;
        isClean: z.ZodBoolean;
        staged: z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            headStatus: z.ZodString;
            worktreeStatus: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }, {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }>, "many">;
        unstaged: z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            headStatus: z.ZodString;
            worktreeStatus: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }, {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }>, "many">;
        untracked: z.ZodArray<z.ZodString, "many">;
        created: z.ZodArray<z.ZodString, "many">;
        deleted: z.ZodArray<z.ZodString, "many">;
        modified: z.ZodArray<z.ZodString, "many">;
        conflicted: z.ZodArray<z.ZodString, "many">;
        renamed: z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            to: string;
        }, {
            from: string;
            to: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        branch: string | null;
        tracking: string | null;
        ahead: number;
        behind: number;
        isClean: boolean;
        staged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        unstaged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        untracked: string[];
        created: string[];
        deleted: string[];
        modified: string[];
        conflicted: string[];
        renamed: {
            from: string;
            to: string;
        }[];
    }, {
        branch: string | null;
        tracking: string | null;
        ahead: number;
        behind: number;
        isClean: boolean;
        staged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        unstaged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        untracked: string[];
        created: string[];
        deleted: string[];
        modified: string[];
        conflicted: string[];
        renamed: {
            from: string;
            to: string;
        }[];
    }>>;
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    status: {
        branch: string | null;
        tracking: string | null;
        ahead: number;
        behind: number;
        isClean: boolean;
        staged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        unstaged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        untracked: string[];
        created: string[];
        deleted: string[];
        modified: string[];
        conflicted: string[];
        renamed: {
            from: string;
            to: string;
        }[];
    } | null;
    enabled: boolean;
    error?: {
        code: string;
        message: string;
    } | undefined;
}, {
    status: {
        branch: string | null;
        tracking: string | null;
        ahead: number;
        behind: number;
        isClean: boolean;
        staged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        unstaged: {
            path: string;
            headStatus: string;
            worktreeStatus: string;
        }[];
        untracked: string[];
        created: string[];
        deleted: string[];
        modified: string[];
        conflicted: string[];
        renamed: {
            from: string;
            to: string;
        }[];
    } | null;
    enabled: boolean;
    error?: {
        code: string;
        message: string;
    } | undefined;
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>> & {
    inputSchema: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    outputSchema: z.ZodObject<{
        enabled: z.ZodBoolean;
        status: z.ZodNullable<z.ZodObject<{
            branch: z.ZodNullable<z.ZodString>;
            tracking: z.ZodNullable<z.ZodString>;
            ahead: z.ZodNumber;
            behind: z.ZodNumber;
            isClean: z.ZodBoolean;
            staged: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                headStatus: z.ZodString;
                worktreeStatus: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }, {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }>, "many">;
            unstaged: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                headStatus: z.ZodString;
                worktreeStatus: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }, {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }>, "many">;
            untracked: z.ZodArray<z.ZodString, "many">;
            created: z.ZodArray<z.ZodString, "many">;
            deleted: z.ZodArray<z.ZodString, "many">;
            modified: z.ZodArray<z.ZodString, "many">;
            conflicted: z.ZodArray<z.ZodString, "many">;
            renamed: z.ZodArray<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                to: string;
            }, {
                from: string;
                to: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            branch: string | null;
            tracking: string | null;
            ahead: number;
            behind: number;
            isClean: boolean;
            staged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            unstaged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            untracked: string[];
            created: string[];
            deleted: string[];
            modified: string[];
            conflicted: string[];
            renamed: {
                from: string;
                to: string;
            }[];
        }, {
            branch: string | null;
            tracking: string | null;
            ahead: number;
            behind: number;
            isClean: boolean;
            staged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            unstaged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            untracked: string[];
            created: string[];
            deleted: string[];
            modified: string[];
            conflicted: string[];
            renamed: {
                from: string;
                to: string;
            }[];
        }>>;
        error: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            message: string;
        }, {
            code: string;
            message: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        status: {
            branch: string | null;
            tracking: string | null;
            ahead: number;
            behind: number;
            isClean: boolean;
            staged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            unstaged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            untracked: string[];
            created: string[];
            deleted: string[];
            modified: string[];
            conflicted: string[];
            renamed: {
                from: string;
                to: string;
            }[];
        } | null;
        enabled: boolean;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }, {
        status: {
            branch: string | null;
            tracking: string | null;
            ahead: number;
            behind: number;
            isClean: boolean;
            staged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            unstaged: {
                path: string;
                headStatus: string;
                worktreeStatus: string;
            }[];
            untracked: string[];
            created: string[];
            deleted: string[];
            modified: string[];
            conflicted: string[];
            renamed: {
                from: string;
                to: string;
            }[];
        } | null;
        enabled: boolean;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
declare const GitDiffInputSchema: z.ZodObject<{
    cached: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    cached?: boolean | undefined;
}, {
    cached?: boolean | undefined;
}>;
export declare const gitDiffTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{
    cached: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    cached?: boolean | undefined;
}, {
    cached?: boolean | undefined;
}>>, z.ZodObject<{
    enabled: z.ZodBoolean;
    diff: z.ZodNullable<z.ZodObject<{
        cached: z.ZodBoolean;
        files: z.ZodArray<z.ZodObject<{
            file: z.ZodString;
            changes: z.ZodNumber;
            insertions: z.ZodNumber;
            deletions: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            file: string;
            changes: number;
            insertions: number;
            deletions: number;
        }, {
            file: string;
            changes: number;
            insertions: number;
            deletions: number;
        }>, "many">;
        insertions: z.ZodNumber;
        deletions: z.ZodNumber;
        changes: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        changes: number;
        insertions: number;
        deletions: number;
        cached: boolean;
        files: {
            file: string;
            changes: number;
            insertions: number;
            deletions: number;
        }[];
    }, {
        changes: number;
        insertions: number;
        deletions: number;
        cached: boolean;
        files: {
            file: string;
            changes: number;
            insertions: number;
            deletions: number;
        }[];
    }>>;
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    diff: {
        changes: number;
        insertions: number;
        deletions: number;
        cached: boolean;
        files: {
            file: string;
            changes: number;
            insertions: number;
            deletions: number;
        }[];
    } | null;
    error?: {
        code: string;
        message: string;
    } | undefined;
}, {
    enabled: boolean;
    diff: {
        changes: number;
        insertions: number;
        deletions: number;
        cached: boolean;
        files: {
            file: string;
            changes: number;
            insertions: number;
            deletions: number;
        }[];
    } | null;
    error?: {
        code: string;
        message: string;
    } | undefined;
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
    cached: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    cached?: boolean | undefined;
}, {
    cached?: boolean | undefined;
}>>, any, any>> & {
    inputSchema: z.ZodOptional<z.ZodObject<{
        cached: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        cached?: boolean | undefined;
    }, {
        cached?: boolean | undefined;
    }>>;
    outputSchema: z.ZodObject<{
        enabled: z.ZodBoolean;
        diff: z.ZodNullable<z.ZodObject<{
            cached: z.ZodBoolean;
            files: z.ZodArray<z.ZodObject<{
                file: z.ZodString;
                changes: z.ZodNumber;
                insertions: z.ZodNumber;
                deletions: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                file: string;
                changes: number;
                insertions: number;
                deletions: number;
            }, {
                file: string;
                changes: number;
                insertions: number;
                deletions: number;
            }>, "many">;
            insertions: z.ZodNumber;
            deletions: z.ZodNumber;
            changes: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            changes: number;
            insertions: number;
            deletions: number;
            cached: boolean;
            files: {
                file: string;
                changes: number;
                insertions: number;
                deletions: number;
            }[];
        }, {
            changes: number;
            insertions: number;
            deletions: number;
            cached: boolean;
            files: {
                file: string;
                changes: number;
                insertions: number;
                deletions: number;
            }[];
        }>>;
        error: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            message: string;
        }, {
            code: string;
            message: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        diff: {
            changes: number;
            insertions: number;
            deletions: number;
            cached: boolean;
            files: {
                file: string;
                changes: number;
                insertions: number;
                deletions: number;
            }[];
        } | null;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }, {
        enabled: boolean;
        diff: {
            changes: number;
            insertions: number;
            deletions: number;
            cached: boolean;
            files: {
                file: string;
                changes: number;
                insertions: number;
                deletions: number;
            }[];
        } | null;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
        cached: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        cached?: boolean | undefined;
    }, {
        cached?: boolean | undefined;
    }>>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare const gitStageTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{
    paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    paths?: string[] | undefined;
}, {
    paths?: string[] | undefined;
}>>, z.ZodObject<{
    enabled: z.ZodBoolean;
    success: z.ZodBoolean;
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    success: boolean;
    error?: {
        code: string;
        message: string;
    } | undefined;
}, {
    enabled: boolean;
    success: boolean;
    error?: {
        code: string;
        message: string;
    } | undefined;
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
    paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    paths?: string[] | undefined;
}, {
    paths?: string[] | undefined;
}>>, any, any>> & {
    inputSchema: z.ZodOptional<z.ZodObject<{
        paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        paths?: string[] | undefined;
    }, {
        paths?: string[] | undefined;
    }>>;
    outputSchema: z.ZodObject<{
        enabled: z.ZodBoolean;
        success: z.ZodBoolean;
        error: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            message: string;
        }, {
            code: string;
            message: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        success: boolean;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }, {
        enabled: boolean;
        success: boolean;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
        paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        paths?: string[] | undefined;
    }, {
        paths?: string[] | undefined;
    }>>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare const gitCommitTool: import("@mastra/core/tools").Tool<z.ZodObject<{
    message: z.ZodString;
    allowEmpty: z.ZodOptional<z.ZodBoolean>;
    signoff: z.ZodOptional<z.ZodBoolean>;
    author: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        email?: string | undefined;
    }, {
        name: string;
        email?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    message: string;
    allowEmpty?: boolean | undefined;
    signoff?: boolean | undefined;
    author?: {
        name: string;
        email?: string | undefined;
    } | undefined;
}, {
    message: string;
    allowEmpty?: boolean | undefined;
    signoff?: boolean | undefined;
    author?: {
        name: string;
        email?: string | undefined;
    } | undefined;
}>, z.ZodObject<{
    enabled: z.ZodBoolean;
    commit: z.ZodNullable<z.ZodObject<{
        sha: z.ZodString;
        summary: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sha: string;
        summary: string;
    }, {
        sha: string;
        summary: string;
    }>>;
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    commit: {
        sha: string;
        summary: string;
    } | null;
    error?: {
        code: string;
        message: string;
    } | undefined;
}, {
    enabled: boolean;
    commit: {
        sha: string;
        summary: string;
    } | null;
    error?: {
        code: string;
        message: string;
    } | undefined;
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
    message: z.ZodString;
    allowEmpty: z.ZodOptional<z.ZodBoolean>;
    signoff: z.ZodOptional<z.ZodBoolean>;
    author: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        email?: string | undefined;
    }, {
        name: string;
        email?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    message: string;
    allowEmpty?: boolean | undefined;
    signoff?: boolean | undefined;
    author?: {
        name: string;
        email?: string | undefined;
    } | undefined;
}, {
    message: string;
    allowEmpty?: boolean | undefined;
    signoff?: boolean | undefined;
    author?: {
        name: string;
        email?: string | undefined;
    } | undefined;
}>, any, any>> & {
    inputSchema: z.ZodObject<{
        message: z.ZodString;
        allowEmpty: z.ZodOptional<z.ZodBoolean>;
        signoff: z.ZodOptional<z.ZodBoolean>;
        author: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            email: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            email?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        allowEmpty?: boolean | undefined;
        signoff?: boolean | undefined;
        author?: {
            name: string;
            email?: string | undefined;
        } | undefined;
    }, {
        message: string;
        allowEmpty?: boolean | undefined;
        signoff?: boolean | undefined;
        author?: {
            name: string;
            email?: string | undefined;
        } | undefined;
    }>;
    outputSchema: z.ZodObject<{
        enabled: z.ZodBoolean;
        commit: z.ZodNullable<z.ZodObject<{
            sha: z.ZodString;
            summary: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            sha: string;
            summary: string;
        }, {
            sha: string;
            summary: string;
        }>>;
        error: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            message: string;
        }, {
            code: string;
            message: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        commit: {
            sha: string;
            summary: string;
        } | null;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }, {
        enabled: boolean;
        commit: {
            sha: string;
            summary: string;
        } | null;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        message: z.ZodString;
        allowEmpty: z.ZodOptional<z.ZodBoolean>;
        signoff: z.ZodOptional<z.ZodBoolean>;
        author: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            email: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            email?: string | undefined;
        }, {
            name: string;
            email?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        allowEmpty?: boolean | undefined;
        signoff?: boolean | undefined;
        author?: {
            name: string;
            email?: string | undefined;
        } | undefined;
    }, {
        message: string;
        allowEmpty?: boolean | undefined;
        signoff?: boolean | undefined;
        author?: {
            name: string;
            email?: string | undefined;
        } | undefined;
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare const gitPushTool: import("@mastra/core/tools").Tool<z.ZodOptional<z.ZodObject<{
    remote: z.ZodOptional<z.ZodString>;
    branch: z.ZodOptional<z.ZodString>;
    force: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    branch?: string | undefined;
    remote?: string | undefined;
    force?: boolean | undefined;
}, {
    branch?: string | undefined;
    remote?: string | undefined;
    force?: boolean | undefined;
}>>, z.ZodObject<{
    enabled: z.ZodBoolean;
    result: z.ZodNullable<z.ZodObject<{
        remote: z.ZodString;
        branch: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        branch: string;
        remote: string;
    }, {
        branch: string;
        remote: string;
    }>>;
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    result: {
        branch: string;
        remote: string;
    } | null;
    error?: {
        code: string;
        message: string;
    } | undefined;
}, {
    enabled: boolean;
    result: {
        branch: string;
        remote: string;
    } | null;
    error?: {
        code: string;
        message: string;
    } | undefined;
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
    remote: z.ZodOptional<z.ZodString>;
    branch: z.ZodOptional<z.ZodString>;
    force: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    branch?: string | undefined;
    remote?: string | undefined;
    force?: boolean | undefined;
}, {
    branch?: string | undefined;
    remote?: string | undefined;
    force?: boolean | undefined;
}>>, any, any>> & {
    inputSchema: z.ZodOptional<z.ZodObject<{
        remote: z.ZodOptional<z.ZodString>;
        branch: z.ZodOptional<z.ZodString>;
        force: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        branch?: string | undefined;
        remote?: string | undefined;
        force?: boolean | undefined;
    }, {
        branch?: string | undefined;
        remote?: string | undefined;
        force?: boolean | undefined;
    }>>;
    outputSchema: z.ZodObject<{
        enabled: z.ZodBoolean;
        result: z.ZodNullable<z.ZodObject<{
            remote: z.ZodString;
            branch: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            branch: string;
            remote: string;
        }, {
            branch: string;
            remote: string;
        }>>;
        error: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            message: string;
        }, {
            code: string;
            message: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        result: {
            branch: string;
            remote: string;
        } | null;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }, {
        enabled: boolean;
        result: {
            branch: string;
            remote: string;
        } | null;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodOptional<z.ZodObject<{
        remote: z.ZodOptional<z.ZodString>;
        branch: z.ZodOptional<z.ZodString>;
        force: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        branch?: string | undefined;
        remote?: string | undefined;
        force?: boolean | undefined;
    }, {
        branch?: string | undefined;
        remote?: string | undefined;
        force?: boolean | undefined;
    }>>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export declare const gitBranchTool: import("@mastra/core/tools").Tool<z.ZodObject<{
    name: z.ZodString;
    base: z.ZodOptional<z.ZodString>;
    checkout: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name: string;
    base?: string | undefined;
    checkout?: boolean | undefined;
}, {
    name: string;
    base?: string | undefined;
    checkout?: boolean | undefined;
}>, z.ZodObject<{
    enabled: z.ZodBoolean;
    branch: z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        checkedOut: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        checkedOut: boolean;
    }, {
        name: string;
        checkedOut: boolean;
    }>>;
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
    }, {
        code: string;
        message: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    branch: {
        name: string;
        checkedOut: boolean;
    } | null;
    enabled: boolean;
    error?: {
        code: string;
        message: string;
    } | undefined;
}, {
    branch: {
        name: string;
        checkedOut: boolean;
    } | null;
    enabled: boolean;
    error?: {
        code: string;
        message: string;
    } | undefined;
}>, any, any, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
    name: z.ZodString;
    base: z.ZodOptional<z.ZodString>;
    checkout: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name: string;
    base?: string | undefined;
    checkout?: boolean | undefined;
}, {
    name: string;
    base?: string | undefined;
    checkout?: boolean | undefined;
}>, any, any>> & {
    inputSchema: z.ZodObject<{
        name: z.ZodString;
        base: z.ZodOptional<z.ZodString>;
        checkout: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        base?: string | undefined;
        checkout?: boolean | undefined;
    }, {
        name: string;
        base?: string | undefined;
        checkout?: boolean | undefined;
    }>;
    outputSchema: z.ZodObject<{
        enabled: z.ZodBoolean;
        branch: z.ZodNullable<z.ZodObject<{
            name: z.ZodString;
            checkedOut: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            name: string;
            checkedOut: boolean;
        }, {
            name: string;
            checkedOut: boolean;
        }>>;
        error: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            message: string;
        }, {
            code: string;
            message: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        branch: {
            name: string;
            checkedOut: boolean;
        } | null;
        enabled: boolean;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }, {
        branch: {
            name: string;
            checkedOut: boolean;
        } | null;
        enabled: boolean;
        error?: {
            code: string;
            message: string;
        } | undefined;
    }>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        name: z.ZodString;
        base: z.ZodOptional<z.ZodString>;
        checkout: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        base?: string | undefined;
        checkout?: boolean | undefined;
    }, {
        name: string;
        base?: string | undefined;
        checkout?: boolean | undefined;
    }>, any, any>, options: import("@mastra/core/tools").ToolInvocationOptions) => Promise<any>;
};
export { GitStatusSchema, GitDiffSchema, GitFileChangeSchema, GitDiffFileSchema, GitStatusOutputSchema, GitDiffOutputSchema, GitDiffInputSchema, GitStageInputSchema, GitStageOutputSchema, GitCommitInputSchema, GitCommitOutputSchema, GitPushInputSchema, GitPushOutputSchema, GitBranchInputSchema, GitBranchOutputSchema, };
