import { IBaseInterfaceSchema } from "../commonTypes";

export type ICreateStructureHealth = {
    name: string;
    airid: string;
};
export interface IStructureHealth extends IBaseInterfaceSchema {
    name: string;
}
