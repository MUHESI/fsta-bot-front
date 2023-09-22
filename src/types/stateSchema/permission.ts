import { IBaseInterfaceSchema } from "../commonTypes";
import { GLOBAL_PERMISSIONS } from '../permissions'

export interface IPermission extends IBaseInterfaceSchema {
    name: string;
    psedo: string;
}

export type ICreatePermission = {
    name: GLOBAL_PERMISSIONS | ''
    psedo: string;

};