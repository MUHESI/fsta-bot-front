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

export type IOrganization = {
    id?: number;
    name: string;
    status: "active" | "blocked" | "deleted";
    email: string;
    description: string;
    address: string;
    cityId: string;
    communeId: string;
    quarterId: string;
    provinceId: string;
    date_created: string;
    phone: string;
    createdBy: string
    dateCreation: string
    type: Type
    metadata?: ITypeOrganization
};
