import { IBaseInterfaceSchema } from "../commonTypes";
import { GLOBAL_PERMISSIONS } from '../permissions'

export interface IIndication extends IBaseInterfaceSchema {
    name: string;
    psedo: string;
}
export type ICreateIndication = {
    name: GLOBAL_PERMISSIONS | ''
    psedo: string;
};