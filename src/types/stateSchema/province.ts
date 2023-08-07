import { IBaseInterfaceSchema } from "../commonTypes";

export type ICreateProvince = {
    name: string;
};

export interface IProvince extends IBaseInterfaceSchema {
    name: string;
}

