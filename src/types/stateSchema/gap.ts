// import { IBaseInterfaceSchema } from "../commonTypes"

interface IDatapopulationeloigne {
    localite: string,
    nbr: number
}

export interface IDatamaladie {
    nbrCas: number,
    nbrDeces: number,
    maladieid: string
}
interface IDatatypepersonnel {
    typepersonnelid: string,
    nbr: number

}
export interface IDataPartenaire {
    orgid: string,
    date_debut: string,
    date_fin: string,
    email: string,
    datatindicateur: string[]
}
export interface ICreateGap {
    // META_DATA
    metaData?: {
        validateur: boolean,
    }

    orgid: string
    dateadd: string; //dateReportage 
    id?: string;
    //  ADDRESS
    provinceid: string;
    zoneid: string;
    territoirid: string;
    airid: string;
    structureid: string;

    // POPULATION
    population: number;
    pop_deplace: number;
    pop_retournes: number | string;
    pop_site: number | string;
    pop_retourne: number | string;
    pop_handicap: number | string;
    //
    semaine_epid: number | string;
    annee_epid: number;
    etat_infra: "DETRUITE" | "NON DETRUITE";

    equipement: string;
    nbr_lit: number | string;
    nbr_reco: number | string;
    pop_eloigne: number | string;
    pop_vulnerable: number | string;
    cout_ambulatoire: number | string;
    cout_hospitalisation: number | string;
    cout_accouchement: number | string;
    cout_cesarienne: number | string;
    barriere: number | string;
    taux_occupation: number | string;
    couvertureDtc3: number;
    mortaliteLessfiveyear: number;
    covid19_nbrcas: number;
    covid19_nbrdeces: number;
    covid19_nbrtest: number;
    covid19_vacciDispo: number;
    malnutrition: number;
    pourcentCleanWater: number;
    datacriseid: string[];
    datapopulationeloigne: IDatapopulationeloigne[];
    datamaladie: IDatamaladie[];
    datamedocid: string[];
    datapartenaireid: IDataPartenaire[];
    datatypepersonnel: IDatatypepersonnel[];

}

// ===================
const popEloigneStructureSante_MoreHour =
    [
        {
            nameLocality: "Localité-01",
            nb: 200
        },
        {
            nameLocality: "Localité-02",
            nb: 20
        },
        {
            nameLocality: "Localité-03",
            nb: 300
        },

    ]
const barrieresToAccessHealf = [
    "barriere-01",
    "barriere-02",
    "barriere-03",
]

export const maladies = [
    {
        maladieId: 'if of maladie',
        nbCas: 200,
        nbDecesId: 0

    },
    {
        maladieId: '',
        nbCas: 24,
        nbDecesId: 0

    },

]


const partenairePresents = [
    {
        partenaireId: '',
        paquetAppui: ['padquetId_1', 'padquetId_2', 'padquetId_3'],
        startDate: '',
        endDate: '',
        contactFocal: "+234 998799306"

    },
    {
        partenaireId: '',
        paquetAppui: ['padquetId_1', 'padquetId_2', 'padquetId_3'],
        startDate: '',
        endDate: '',
        contactFocal: "+234 998799306"
    }
]
export interface IGap extends ICreateGap {
    // TODO: FIX THIS LATER
    id: string;
    titleGap: string;
    title: string;
    created_at: Date | string;
    updated_at: Date | string;
    //
}
export enum GAP_ACTIONS_STATUS {
    CREATE_GAP = "CREATE_GAP",
    UPDATE_GAP = "UPDATE_GAP",
    VALIDATE_GAP = "VALIDATE_GAP",
}