import { IBaseInterfaceSchema } from "../commonTypes";

export interface IIndicateur extends IBaseInterfaceSchema {
    name: string;
    value: string;
}
export type ICreateIndicateur = {
    name: string
    value: string;
};