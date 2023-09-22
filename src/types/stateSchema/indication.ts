import { IBaseInterfaceSchema } from "../commonTypes";
import { GLOBAL_PERMISSIONS } from '../permissions'

export interface IIndication extends IBaseInterfaceSchema {
    name: string;
    value: string;
}
export type ICreateIndication = {
    name: string
    value: string;
};