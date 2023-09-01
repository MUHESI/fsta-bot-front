import { IBaseInterfaceSchema } from "../commonTypes";

export interface IAlert extends IBaseInterfaceSchema {
    code: string;
    name: string;
    date_created: string;
    nameResp: string;
    phoneResp: string;
    createdBy: string // DELETE ME
    dateCreation: string // DELETE ME
    typeAlert: string
    typeMaldies: string
    healthArea: string
    nbPeopleAffected: number
    nbPeopleDead: number
    mesure: string,

}