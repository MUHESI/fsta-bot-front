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

export interface ICreateAlert {
    name_point_focal: string,
    phone: string,
    airid: string,
    date_notification: string,
    datealert: string,
    timealert: string,
    nbr_touche: string,
    dece_disponible: string,
    nbr_dece: string,
    animal_malade: "" | "OUI" | "NON",
    animal_mort: "" | "OUI" | "NON",
    evenement: "" | "OUI" | "NON",
    mesure: string,
    description: string,
    maladieid: string
    //FIELDS ADDED
    nb_animal_malade: string,
    nb_animal_mort: string,
    date_detection: string
    time_detection: string
}