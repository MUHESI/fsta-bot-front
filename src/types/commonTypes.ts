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