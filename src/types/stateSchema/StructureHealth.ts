import { IBaseInterfaceSchema } from "../commonTypes";

export type ICreateStructureHealth = {
    name: string;
    aireid: string;
    contact: string;
};
export interface IStructureHealth extends IBaseInterfaceSchema {
    name: string;
    contact: string;
}
