import { IBaseInterfaceSchema } from "../commonTypes";

export type ICreateTerritory = {
    name: string;
    provinceid: string;
};
export interface ITerritory extends IBaseInterfaceSchema {
    name: string;
}