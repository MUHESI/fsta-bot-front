import { IBaseInterfaceSchema } from "../commonTypes";

export interface IMedicament extends IBaseInterfaceSchema {
    name: string;
    // psedo: string;
}
export type ICreateMedicament = {
    name: string
};