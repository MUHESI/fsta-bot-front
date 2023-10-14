import { IBaseInterfaceSchema } from "../commonTypes";

export interface IAlert extends IBaseInterfaceSchema {
    name_point_focal: string,
    phone: string,
    airid: string,
    date_notification: string,
    datealert: string,
    timealert: string,
    nbr_touche: string,
    dece_disponible: "" | "oui" | "non",
    nbr_dece: string,
    animal_malade: "" | "oui" | "non",
    animal_mort: "" | "oui" | "non",
    evenement: "" | "oui" | "non",
    mesure: string,
    description: string,
    maladieid: string
    //FIELDS ADDED
    nb_animal_malade: string,
    nb_animal_mort: string,
    date_detection: string
    time_detection: string,
    dataaire: {
        id: string,
        name: string,
    },
    maladie: {
        id: string,
        name: string,
    },
}

export interface ICreateAlert {
    name_point_focal: string,
    phone: string,
    airid: string,
    date_notification: string,
    datealert: string,
    timealert: string,
    nbr_touche: string,
    dece_disponible: "" | "oui" | "non",
    nbr_dece: string,
    animal_malade: "" | "oui" | "non",
    animal_mort: "" | "oui" | "non",
    evenement: "" | "oui" | "non",
    mesure: string,
    description: string,
    maladieid: string
    //FIELDS ADDED
    nb_animal_malade: string,
    nb_animal_mort: string,
    date_detection: string
    time_detection: string
}