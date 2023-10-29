
import { IBaseInterfaceSchema } from "../commonTypes";

export interface IUser extends IBaseInterfaceSchema {
    full_name: string;
    status: "active" | "blocked" | "deleted";
    email: string;
    address: string;
    roles: { id: number; name: string }[];
    date_created: string;
    phone: string;
    pofil: string;
    organization: { id: number; name: string, [key: string]: string | number };
};
