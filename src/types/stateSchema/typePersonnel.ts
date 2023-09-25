import { IBaseInterfaceSchema } from "../commonTypes";
import { GLOBAL_PERMISSIONS } from '../permissions'

export interface ITypePersonnel extends IBaseInterfaceSchema {
    name: string;
    // psedo: string;
}
export type ICreateTypePersonnel = {
    name: string
};