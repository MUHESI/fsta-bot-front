import { IBaseInterfaceSchema } from "../commonTypes";


export interface IRole extends IBaseInterfaceSchema {
    name: string;
}

export type ICreateRole = {
    name: string;
};