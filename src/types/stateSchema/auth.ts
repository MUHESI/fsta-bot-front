import { IBaseInterfaceSchema } from "../commonTypes";

export interface ILogin {
    email: string,
    pswd: string,
}
export interface IAutherUSer {
    email: string | null,
    full_name: string | null,
    token: string,
    id: string | null,
}
export interface ICurrentUser extends IBaseInterfaceSchema {
    email: string | null,
    full_name: string | null,
    phone: string,
    address: string;
    roles: { id: number; name: string }[];
    date_created: string;

}
export interface IResetPassword {
    email: string,
    pswd: string,
    pswdconfirm: string
}


