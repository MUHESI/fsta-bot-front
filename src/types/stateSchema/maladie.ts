import { IBaseInterfaceSchema } from "../commonTypes";
import { GLOBAL_PERMISSIONS } from '../permissions'

export interface IMaladie extends IBaseInterfaceSchema {
    name: string;
    psedo: string;
}
export type ICreateMaladie = {
    name: string
};