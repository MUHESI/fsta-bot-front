import { IBaseInterfaceSchema } from "../commonTypes";

export type ICreateHealthArea = {
    name: string;
    territoirid: string;
};
export interface IHealthArea extends IBaseInterfaceSchema {
    name: string;
}