import { IBaseInterfaceSchema } from "../commonTypes";

export type ICreateTerritory = {
    name: string;
    provinceId: string;
};

export interface ITerritory extends IBaseInterfaceSchema {
    name: string;
}

