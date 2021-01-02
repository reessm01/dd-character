export type HookFetchResponse<T> = {
    isLoading: boolean;
    error: string;
} & { [key: string]: T };
