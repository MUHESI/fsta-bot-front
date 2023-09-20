import { IBaseInterfaceSchema } from "../commonTypes";


export interface IRoles extends IBaseInterfaceSchema {
    name: string;
}

export type ICreateRole = {
    name: string;
};