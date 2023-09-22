// import { IBaseInterfaceSchema } from "../commonTypes"

export interface ICreateGap {
    dateReportage: Date | string
    //  ADDRESS
    provinceId: string
    zoneSanteId: string
    aireSanteId: string
    structureSanteId: string
    typeStructureSanteId: string // It should be a  id typeStructureSante 

    // POPULATION
    pop_aireSante: number
    pop_moved: number
    pop_retournes: number
    //
    typeCrises: string[]
    pop_inMovedZone: number
    medRuptureStock: string[] // array of id
    etatInfrastructure: 'NON_DETRUITE' | 'DETRUITE'
    etatEquipement: string
    // PERSONNEL
    nb_medecin: number
    nb_infirmierA1: number
    nb_infirmierA2: number
    nb_sageFemme: number
    //
    nb_lits: number
    tauxOccupation: number
    nb_recoActifs: number
    // POPULATION 
    popEloigneStructureSante_MoreHour: {
        nameLocality: string
        nb: number
    }[]
    popEloigneStructureSante: number
    // COUT DE SANTE
    popVulnerableHaveNotAccessHealfInNeed: number
    coutSoinsSante_ambulatoire: number
    coutSoinsSante_hospitalisation: number
    coutSoinsSante_accouchement: number
    coutSoinsSante_cesarienne: number

    barrieresToAccessHealf: string[]
    pop_handicap: number
    couvertureDTC3: number
    mortalityLessFiveYear: number
    maladies: {
        maladieId: string
        nbCas: string
        nbDeces: string
    }[]
    covid19_nbCas: number
    covid19_nbDeces: number
    covid19_nbTest: number
    covid19_vaccinsDispo: number
    poucentMenagesHaveAccessCleanWater: number
    malnitrutionAigueSevere: number
    partenairePresents: {
        partenaireId: string
        paquetAppui: string[]
        startDate: Date | string
        endDate: Date | string
        contactFocal: string
    }[]
    semaineEpid: number
    yaer: number
    // OTHER FIELDS
    titleGap: string
    gapId: string // IN ORDER TO LINK gap taken as monitoring 
    createdBy: string// It should be id of use who creates this item
    status: "MONITORING" | "ANALYSE" | "SEEN" | "COVERED"
    dateAnalyzed: Date | string
    dateSeen: Date | string
    dateCoverd: Date | string

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
    created_at: Date | string;
    updated_at: Date | string;
    //

}






