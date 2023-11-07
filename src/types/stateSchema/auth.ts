import { IBaseInterfaceSchema } from "../commonTypes";
import { IOrganization } from "./organization";

export interface ILogin {
    email: string,
    pswd: string,
}

export interface IMetaData {
    permissions?: any[];
    affectationSelected: {
        id: string
        organisation: IOrganization
    }[];

}

export interface IAutherUSer {
    email: string | null,
    full_name: string | null,
    token: string,
    id: string | null,
    profil: string | null,
    metaData?: null | IMetaData, //TODO type this later
}
export interface ICurrentUser extends IBaseInterfaceSchema {
    email: string | null,
    full_name: string | null,
    phone: string,
    address: string;
    roles: { id: number; name: string }[];
    date_created: string;
    profil?: string;
}
export interface IResetPassword {
    email: string,
    pswd: string,
    pswdconfirm: string
}


