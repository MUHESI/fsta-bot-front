import { IBaseInterfaceSchema } from "../commonTypes";

export type ICreateZoneSante = {
    name: string;
    territoirid: string;
};
export interface IZoneSante extends IBaseInterfaceSchema {
    name: string;
}