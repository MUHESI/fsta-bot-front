import { IBaseInterfaceSchema } from "../commonTypes";

export interface ITypeOrganization {
    name: string;
    nbPersonel: number;
    nbInfirmiersA1: number;
    bbSageFemme: number;
    BbBeds: number;
}
export enum Type {
    MZD = 'MCZ',
    DPS = 'DPS'
}

export interface IOrganization_ extends IBaseInterfaceSchema {
    // id?: number;
    name: string;
    email: string;
    description: string;
    address: string;
    cityId: string;
    communeId: string;
    quarterId: string;
    provinceId: string;
    date_created: string;
    phone: string;
    createdBy: string // DELETE ME
    dateCreation: string // DELETE ME
    type: Type
    metadata?: ITypeOrganization
}


export interface IOrganization extends IBaseInterfaceSchema {
    name: string;
    email: string;
    description: string;
    addresse: string;
    descritption: string;
    pointfocal: string;
    date_created: string;
    phone: string;
    typeorgid: string;
    sigle: string;
    logo: string;
}


export interface ICreateOrganization {
    name: string;
    email: string;
    description: string;
    adresse: string;
    pointfocal: string;
    phone: string;
    typeorgid: string;
    sigle: string;
}

export interface ITypeOrganization extends IBaseInterfaceSchema {
    name: string;
    email: string;
    created_at: string;
    updated_at: string;

}