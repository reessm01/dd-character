export interface CommonFetchHookInputs {
    setIsLoading: Function;
    setError: Function;
    setData: Function;
}

export interface GetSpellParams extends CommonFetchHookInputs {
    urlRef: string;
}
