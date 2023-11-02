import { IBaseInterfaceSchema } from "../commonTypes";
import { GLOBAL_PERMISSIONS } from '../permissions'

export interface IPermission extends IBaseInterfaceSchema {
    name: string;
    psedo: string;
}
export type ICreatePermission = {
    // id?: string;
    name: GLOBAL_PERMISSIONS | ''
    psedo: string;
};
export type ICreateAffectation = {
    orgid: string;
    roleid: string;
    userid: string;
};