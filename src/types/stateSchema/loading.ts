interface ILoading {
    status: boolean,
    [key: string]: string | boolean
}

export interface IStateLoading {
    [key: string]: ILoading
} 