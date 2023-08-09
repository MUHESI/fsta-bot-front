export type ForgotPswdScreen = {
    forgotPaswd: boolean,
    resetPswd: boolean,
    testOpt: boolean,
}
export type IDataPagination = {
    limit: number;
    page: number;
    count: number;
    previousPage: number;
    nextPage: number;
}
export type IBaseInterfaceSchema = {
    id: string;
    created_at: Date | string;
    updated_at: Date | string;
    status: "active" | "blocked" | "deleted";
}
export type IBaseData = {
    data: any
}

export interface IFetchData<TData> {
    data: {
        message: string
        data: TData
        code: number,
        status?: number
        token?: string
    }
    // headers

}

