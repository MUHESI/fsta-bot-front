import { IBaseInterfaceSchema } from "../commonTypes";


export interface ICreateMenage extends IBaseInterfaceSchema {
    village: string;
    currentAdress: string;
    housing: string;
    nbMemberMenage: number;
    criteriaVulnerability: string[];
}
