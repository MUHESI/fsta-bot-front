import { IBaseInterfaceSchema } from "../commonTypes";
import { GLOBAL_PERMISSIONS } from '../permissions'

export interface ICrise extends IBaseInterfaceSchema {
    name: string;
    psedo: string;
}
export type ICreateCrise = {
    name: string
};