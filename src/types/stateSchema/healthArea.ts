import { IBaseInterfaceSchema } from "../commonTypes";

export type ICreateHealthArea = {
    name: string;
    provinceid: string;
};
export interface IHealthArea extends IBaseInterfaceSchema {
    name: string;
}