import { IBaseInterfaceSchema } from "../commonTypes";
import { PERMISSIONS } from '../permissions'

export interface IPermission extends IBaseInterfaceSchema {
    name: string;
}

export type ICreatePermission = {
    name: PERMISSIONS;
};