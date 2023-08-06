export interface ILogin {
    email: string,
    pswd: string,
}

export interface IAutherUSer {
    email: string | null,
    full_name: string | null,
}

export interface IResetPassword {
    email: string,
    pswd: string,
    pswdconfirm: string
}

