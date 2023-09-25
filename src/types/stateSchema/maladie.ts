import { IBaseInterfaceSchema } from "../commonTypes";

export interface IMaladie extends IBaseInterfaceSchema {
    name: string;
    psedo: string;
}
export type ICreateMaladie = {
    name: string
};