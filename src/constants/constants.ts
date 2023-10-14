import { IOrganization, Type } from "@/types/stateSchema/organization";
import { keyStorage } from "../services/storage/localSTorageHandler";
import { IDataStoredLocalStorage } from "../types/storageTypes";
import { IUser } from '@/types/stateSchema/user'
import { IDataPagination } from '@/types/commonTypes'
import { IAlert } from '@/types/stateSchema/alert'
import { IProvince } from "@/types/stateSchema/province";
import { ITerritory } from "@/types/stateSchema/territory";
import { IAutherUSer } from "@/types/stateSchema/auth";

export const AG_URL = {
    LOGO_AFIA_GAP: 'https://res.cloudinary.com/chanel-muhesi/image/upload/v1689081211/afia-gap/afia-gap-png_nhtaff.png',
    AVATAR_USER: 'https://res.cloudinary.com/chanel-muhesi/image/upload/v1646826119/cresJoinAfrik/user_ifzful.png',
    USER_IMG_PROFILE: 'https://res.cloudinary.com/chanel-muhesi/image/upload/v1646826119/cresJoinAfrik/user_ifzful.png',
    USER_IMG_PROFILE2: 'https://res.cloudinary.com/chanel-muhesi/image/upload/v1676725367/porfolio/profile-pic_2_a7jub9.png'
}
export const defaultStateUserAuth: IAutherUSer = {
    full_name: null,
    email: null,
    token: '',
    id: null
}
export const token = "13|6j40bGlo9LYE3OJv42eWVJdFzLFfFrLEtaqt5cI4"
// TODO: Fixe me later
// export const defaultStateUserAuth: IAutherUSer = {
//     full_name: 'MUHESI',
//     email: 'user@hmail.com',
//     token: '13|6j40bGlo9LYE3OJv42eWVJdFzLFfFrLEtaqt5cI4',
//     id: "9a2b57a0-c7c4-4304-b803-5c837afb5b83"

// }

export const baseFormLocaStorage: IDataStoredLocalStorage<any> = {
    date: {
        day: 0,
        year: 0,
        month: 0,
        timestamp: 0,
    },
    user: "",
    type: keyStorage.AFIAGAP_AUTH_USER,
    data: {},
};


export const dataUsers = [
    {
        id: 3,
        full_name: "MUHESI Moises",
        email: "Sincere@april.biz",
        address: "Kulas Light",
        phone: "1-770-736-8031 x56442",
        status: "active",
        date_created: '2022-01-01T00:00:00.000Z',
        roles: [
            {
                id: 1,
                name: "Romaguera-Crona",
            }
        ],
        organization: {
            id: 1,
            name: "COSAMED",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        full_name: "Leanne Graham",
        email: "Sincere@april.biz",
        address: "Kulas Light",
        phone: "1-770-736-8031 x56442",
        status: "active",
        date_created: '2022-01-01T00:00:00.000Z',
        roles: [
            {
                id: 1,
                name: "Romaguera-Crona",
            }
        ],
        organization: {
            id: 1,
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 3,
        full_name: "Leanne Graham",
        email: "Sincere@april.biz",
        address: "Kulas Light",
        phone: "1-770-736-8031 x56442",
        status: "active",
        date_created: '2022-01-01T00:00:00.000Z',
        roles: [
            {
                id: 1,
                name: "Romaguera-Crona",
            }
        ],
        organization: {
            id: 1,
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 3,
        full_name: "Leanne Graham",
        email: "Sincere@april.biz",
        address: "Kulas Light",
        phone: "1-770-736-8031 x56442",
        status: "active",
        date_created: '2022-01-01T00:00:00.000Z',
        roles: [
            {
                id: 1,
                name: "Romaguera-Crona",
            }
        ],
        organization: {
            id: 1,
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 3,
        full_name: "Leanne Graham",
        email: "Sincere@april.biz",
        address: "Kulas Light",
        phone: "1-770-736-8031 x56442",
        status: "active",
        date_created: '2022-01-01T00:00:00.000Z',
        roles: [
            {
                id: 1,
                name: "Romaguera-Crona",
            }
        ],
        organization: {
            id: 1,
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
];


export const dataOrganizations: IOrganization[] = [
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'ALT-VIP',
        status: 'active',
        email: 'user@gmailcom',
        addresse: 'Kulas Light',
        phone: '1-770-736-8031 x56442',
        description: '',
        date_created: '2022-01-01T00:00:00.000Z',
        descritption: '',
        logo: '',
        pointfocal: '',
        sigle: "",
        typeorgid: ''
    },
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'ALT-VIP',
        status: 'active',
        email: 'user@gmailcom',
        addresse: 'Kulas Light',
        phone: '1-770-736-8031 x56442',
        description: '',
        date_created: '2022-01-01T00:00:00.000Z',
        descritption: '',
        logo: '',
        pointfocal: '',
        sigle: "",
        typeorgid: ''
    },
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'ALT-VIP',
        status: 'active',
        email: 'user@gmailcom',
        addresse: 'Kulas Light',
        phone: '1-770-736-8031 x56442',
        description: '',
        date_created: '2022-01-01T00:00:00.000Z',
        descritption: '',
        logo: '',
        pointfocal: '',
        sigle: "",
        typeorgid: ''
    },

    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'ALT-VIP',
        status: 'active',
        email: 'user@gmailcom',
        addresse: 'Kulas Light',
        phone: '1-770-736-8031 x56442',
        description: '',
        date_created: '2022-01-01T00:00:00.000Z',
        descritption: '',
        logo: '',
        pointfocal: '',
        sigle: "",
        typeorgid: ''
    },
]

// TODO: DELETE THIS LATER
export const dataProvices: IProvince[] = [
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'NORD-KIVU',
        status: 'active',

    },
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'SUD-KIVU',
        status: 'active',

    },
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'KATANGA',
        status: 'active',

    },
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'LUBUMBASHI',
        status: 'active',

    }
]
// TODO: DELETE THIS LATER
export const dataTerritories: ITerritory[] = [

    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'GOMA',
        status: 'active',

    },
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'LUBERO',
        status: 'active',

    },
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'BUTEMBO',
        status: 'active',

    },
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'BENI',
        status: 'active',

    }
]

export const dataPagination: { data: {}, pagination: IDataPagination } = {
    data: {},
    pagination: {
        count: 20,
        limit: 10,
        previousPage: 0,
        page: 1,
        nextPage: 2
    }

}
export const provinces = [
    {
        id: 1,
        label: "Province",
        category: "ProvinceValue",
    },
    {
        id: 2,
        label: "Province2",
        category: "ProvinceValue2",
    },
    {
        id: 3,
        label: "Province3",
        category: "ProvinceValue3",
    },
    {
        id: 4,
        label: "Province4",
        category: "ProvinceValue4",
    },
];

// TODO: DELETE THIS

export const dataAlerts: any[] = [
    {
        code: '1',
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'ALT-VIP',
        typeAlert: 'typeAlert-01',
        status: 'active',
        typeMaldies: 'typeMaldie-01',
        healthArea: 'GOMA',
        nbPeopleAffected: 20,
        date_created: "2023-08-03T11:28:32.000000Z",
        nameResp: "MUHESI Moses",
        phoneResp: "+243 999 999 999",
        nbPeopleDead: 0,
        mesure: ' typeMaldie-01 typeMaldie-01 typeMaldie-01  typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01',
        createdBy: 'user',
        dateCreation: '2022-01-01T00:00:00.000Z',
    },
    {
        code: '1',
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'ALT-VIP',
        typeAlert: 'typeAlert-0.1',
        status: 'active',
        typeMaldies: 'typeMaldie-0.2',
        healthArea: 'GOMA',
        nbPeopleAffected: 20,
        date_created: "2023-08-03T11:28:32.000000Z",
        nameResp: "MULOLWA KUTA",
        phoneResp: "+243 999 999 999",
        nbPeopleDead: 5,
        mesure: ' typeMaldie-01 typeMaldie-01 typeMaldie-01  typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01',
        createdBy: 'user',
        dateCreation: '2022-01-01T00:00:00.000Z',
    },
    {
        code: '3',
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'ALT-VIP',
        typeAlert: 'typeAlert-0.1',
        status: 'active',
        typeMaldies: 'typeMaldie-0.2',
        healthArea: 'GOMA',
        nbPeopleAffected: 20,
        date_created: "2023-08-03T11:28:32.000000Z",
        nameResp: "SHEKINAH KUTA",
        phoneResp: "+243 999 999 999",
        nbPeopleDead: 5,
        mesure: ' typeMaldie-01 typeMaldie-01 typeMaldie-01  typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01',
        createdBy: 'user',
        dateCreation: '2022-01-01T00:00:00.000Z',
    },
    {
        code: '4',
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'ALT-VIP',
        typeAlert: 'typeAlert-0.1',
        status: 'active',
        typeMaldies: 'typeMaldie-0.2',
        healthArea: 'KARISIMBI',
        nbPeopleAffected: 20,
        date_created: "2023-08-03T11:28:32.000000Z",
        nameResp: "SERGE SADIKI",
        phoneResp: "+243 999 999 999",
        nbPeopleDead: 3,
        mesure: ' typeMaldie-01 typeMaldie-01 typeMaldie-01  typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01 typeMaldie-01',
        createdBy: 'user',
        dateCreation: '2022-01-01T00:00:00.000Z',
    },

]

// TODO:: imorve later

export interface IGapProvince {
    id: string,
    created_at: string,
    province: string,
    pDeplaces: number,
    pRetournees: number,

    pElogines: number,
    pin: number,
    typeCrise: string,
    structureSante: string,
    barrieres: string[],
    typeAlert: string,
    status: string,
    healthArea: string,
    acteur: string,

}

export const dataGaProvince: IGapProvince[] = [
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03",
        province: 'NORD-KIVU',
        pDeplaces: 20,
        pRetournees: 20,
        pElogines: 20,
        pin: 4.40,
        typeCrise: 'Type-1',
        structureSante: 'KARISIMBI',
        barrieres: ['structure Sante non accessible', "Manque d'eau", 'etc...'],
        typeAlert: 'typeAlert-0.1',
        status: 'active',
        healthArea: 'KARISIMBI',
        acteur: 'COSAMED',
    },
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03",
        province: 'SUD-KIVU',
        pDeplaces: 205,
        pRetournees: 206,
        pElogines: 2440,
        pin: 5.44,
        typeCrise: 'Type-1',
        structureSante: 'KARISIMBI',
        barrieres: ['structure Sante non accessible', "Manque d'eau", 'etc...'],
        typeAlert: 'typeAlert-0.1',
        status: 'active',
        healthArea: 'KARISIMBI',
        acteur: 'MUSACA',
    },
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03",
        province: 'ITURI',
        pDeplaces: 900,
        pRetournees: 206,
        pElogines: 2440,
        pin: 5.44,
        typeCrise: 'Type-1',
        structureSante: 'KARISIMBI',
        barrieres: ['structure Sante non accessible', "Manque d'eau", 'etc...'],
        typeAlert: 'typeAlert-0.1',
        status: 'active',
        healthArea: 'KARISIMBI',
        acteur: 'MUSANOVI',
    },
]


// DASHBOARD
export const getEpidemioLogicWeek = (): { id: number | string, value: number }[] => {
    let count = 57
    let data = []
    for (let i = 0; i <= count; i++) {
        data.push({
            id: i + 1,
            value: i + 1
        })
    }
    return data
}

export const getYearsInInterval = (minYear: number, maxYear: number): { id: number | string, value: number }[] => {
    let count = 57
    minYear = minYear
    let data = []
    for (let i = minYear; i <= maxYear; i++) {
        data.push({
            id: i,
            value: i
        })

    }
    return data
}


export const DETAIL_GAP = {
    "id": "9a459acc-2328-4b3c-b52e-235c3386540a",
    "title": "Centre de santé DON BOSCO 2023-10-02 00:00:0009:03:24",
    "provinceid": "99cd151b-dc63-4437-b9fc-514a1cf8fd89",
    "territoirid": "99cd1785-765a-49c5-a3fc-b5435a65c665",
    "zoneid": "99cd2008-0fb1-4a7a-8c67-f28248779712",
    "airid": "99cd25b4-d5d8-48ae-91d2-7f667d1e1649",
    "orgid": "9a318be3-6677-49c3-bc2b-1d74ebd93d89",
    "population": 250,
    "pop_deplace": 55,
    "pop_retourne": 56565,
    "pop_site": 565,
    "userid": "9a457fff-0386-4a01-afb2-610b5c2148ab",
    "semaine_epid": "2",
    "annee_epid": "2023",
    "created_at": "2023-10-02T09:03:24.000000Z",
    "updated_at": "2023-10-02T09:03:24.000000Z",
    "etat_top": 0,
    "status": 0,
    "deleted": 0,
    "dataprovince": {
        "id": "99cd151b-dc63-4437-b9fc-514a1cf8fd89",
        "name": "Nord-kivu",
        "created_at": "2023-08-03T16:10:15.000000Z",
        "updated_at": "2023-08-03T16:10:15.000000Z"
    },
    "dataterritoir": {
        "id": "99cd1785-765a-49c5-a3fc-b5435a65c665",
        "name": "Territoire de Goma",
        "provinceid": "99cd151b-dc63-4437-b9fc-514a1cf8fd89",
        "created_at": "2023-08-03T16:16:59.000000Z",
        "updated_at": "2023-08-03T16:16:59.000000Z"
    },
    "datazone": {
        "id": "99cd2008-0fb1-4a7a-8c67-f28248779712",
        "name": "Karisimbi",
        "territoirid": "99cd1785-765a-49c5-a3fc-b5435a65c665",
        "created_at": "2023-08-03T16:40:47.000000Z",
        "updated_at": "2023-08-03T16:40:47.000000Z"
    },
    "dataaire": {
        "id": "99cd25b4-d5d8-48ae-91d2-7f667d1e1649",
        "name": "Albert Barthel",
        "zoneid": "99cd2008-0fb1-4a7a-8c67-f28248779712",
        "created_at": "2023-08-03T16:56:39.000000Z",
        "updated_at": "2023-08-03T16:56:39.000000Z"
    },
    "datapopulation_eloigne": [],
    "datamaladie": [
        {
            "id": "9a459acc-2463-46af-8fbd-f5bc54e90612",
            "gapid": "9a459acc-2328-4b3c-b52e-235c3386540a",
            "maladieid": "9a303d84-51cf-4e0f-971d-5dc17895abb4",
            "nbrCas": 900,
            "nbrDeces": 8,
            "created_at": "2023-10-02T09:03:24.000000Z",
            "updated_at": "2023-10-02T09:03:24.000000Z",
            "status": 0,
            "deleted": 0,
            "maladie": {
                "id": "9a303d84-51cf-4e0f-971d-5dc17895abb4",
                "name": "Thyphoide",
                "created_at": "2023-09-21T18:10:11.000000Z",
                "updated_at": "2023-09-21T18:10:11.000000Z",
                "status": 0,
                "deleted": 0
            }
        },
        {
            "id": "9a459acc-2463-46af-8fbd-f5bc54e90612",
            "gapid": "9a459acc-2328-4b3c-b52e-235c3386540a",
            "maladieid": "9a303d84-51cf-4e0f-971d-5dc17895abb4",
            "nbrCas": 900,
            "nbrDeces": 8,
            "created_at": "2023-10-02T09:03:24.000000Z",
            "updated_at": "2023-10-02T09:03:24.000000Z",
            "status": 0,
            "deleted": 0,
            "maladie": {
                "id": "9a303d84-51cf-4e0f-971d-5dc17895abb4",
                "name": "Thyphoide",
                "created_at": "2023-09-21T18:10:11.000000Z",
                "updated_at": "2023-09-21T18:10:11.000000Z",
                "status": 0,
                "deleted": 0
            }
        },
        {
            "id": "9a459acc-2463-46af-8fbd-f5bc54e90612",
            "gapid": "9a459acc-2328-4b3c-b52e-235c3386540a",
            "maladieid": "9a303d84-51cf-4e0f-971d-5dc17895abb4",
            "nbrCas": 900,
            "nbrDeces": 8,
            "created_at": "2023-10-02T09:03:24.000000Z",
            "updated_at": "2023-10-02T09:03:24.000000Z",
            "status": 0,
            "deleted": 0,
            "maladie": {
                "id": "9a303d84-51cf-4e0f-971d-5dc17895abb4",
                "name": "Thyphoide",
                "created_at": "2023-09-21T18:10:11.000000Z",
                "updated_at": "2023-09-21T18:10:11.000000Z",
                "status": 0,
                "deleted": 0
            }
        },
        {
            "id": "9a459acc-2463-46af-8fbd-f5bc54e90612",
            "gapid": "9a459acc-2328-4b3c-b52e-235c3386540a",
            "maladieid": "9a303d84-51cf-4e0f-971d-5dc17895abb4",
            "nbrCas": 900,
            "nbrDeces": 8,
            "created_at": "2023-10-02T09:03:24.000000Z",
            "updated_at": "2023-10-02T09:03:24.000000Z",
            "status": 0,
            "deleted": 0,
            "maladie": {
                "id": "9a303d84-51cf-4e0f-971d-5dc17895abb4",
                "name": "Thyphoide",
                "created_at": "2023-09-21T18:10:11.000000Z",
                "updated_at": "2023-09-21T18:10:11.000000Z",
                "status": 0,
                "deleted": 0
            }
        },
        {
            "id": "9a459acc-2463-46af-8fbd-f5bc54e90612",
            "gapid": "9a459acc-2328-4b3c-b52e-235c3386540a",
            "maladieid": "9a303d84-51cf-4e0f-971d-5dc17895abb4",
            "nbrCas": 900,
            "nbrDeces": 8,
            "created_at": "2023-10-02T09:03:24.000000Z",
            "updated_at": "2023-10-02T09:03:24.000000Z",
            "status": 0,
            "deleted": 0,
            "maladie": {
                "id": "9a303d84-51cf-4e0f-971d-5dc17895abb4",
                "name": "Thyphoide",
                "created_at": "2023-09-21T18:10:11.000000Z",
                "updated_at": "2023-09-21T18:10:11.000000Z",
                "status": 0,
                "deleted": 0
            }
        },
        {
            "id": "9a459acc-2463-46af-8fbd-f5bc54e90612",
            "gapid": "9a459acc-2328-4b3c-b52e-235c3386540a",
            "maladieid": "9a303d84-51cf-4e0f-971d-5dc17895abb4",
            "nbrCas": 900,
            "nbrDeces": 8,
            "created_at": "2023-10-02T09:03:24.000000Z",
            "updated_at": "2023-10-02T09:03:24.000000Z",
            "status": 0,
            "deleted": 0,
            "maladie": {
                "id": "9a303d84-51cf-4e0f-971d-5dc17895abb4",
                "name": "Thyphoide",
                "created_at": "2023-09-21T18:10:11.000000Z",
                "updated_at": "2023-09-21T18:10:11.000000Z",
                "status": 0,
                "deleted": 0
            }
        }
    ],
    "datamedicament": [
        {
            "id": "9a459acc-24a3-4f88-bb5d-f353ce66d164",
            "medocid": "9a3044bd-224d-4c61-8c56-2820f78eb9ba",
            "gapid": "9a459acc-2328-4b3c-b52e-235c3386540a",
            "created_at": "2023-10-02T09:03:24.000000Z",
            "updated_at": "2023-10-02T09:03:24.000000Z",
            "etat_top": 0,
            "status": 0,
            "deleted": 0,
            "medicament": {
                "id": "9a3044bd-224d-4c61-8c56-2820f78eb9ba",
                "name": "Aspirine",
                "created_at": "2023-09-21T18:30:23.000000Z",
                "updated_at": "2023-09-21T18:30:23.000000Z",
                "etat_top": 0,
                "status": 0,
                "deleted": 0
            }
        },
        {
            "id": "9a459acc-24d4-4615-b21c-b1ed14bdd374",
            "medocid": "9a304767-2f32-423f-a694-783e1f5b10f8",
            "gapid": "9a459acc-2328-4b3c-b52e-235c3386540a",
            "created_at": "2023-10-02T09:03:24.000000Z",
            "updated_at": "2023-10-02T09:03:24.000000Z",
            "etat_top": 0,
            "status": 0,
            "deleted": 0,
            "medicament": {
                "id": "9a304767-2f32-423f-a694-783e1f5b10f8",
                "name": "Paracetamole",
                "created_at": "2023-09-21T18:37:50.000000Z",
                "updated_at": "2023-09-21T18:37:50.000000Z",
                "etat_top": 0,
                "status": 0,
                "deleted": 0
            }
        }
    ],
    "datapartenaire": [
        {
            "id": "9a459acc-2511-467d-b62a-c411dd70a489",
            "gapid": "9a459acc-2328-4b3c-b52e-235c3386540a",
            "orgid": "9a301185-12a9-43ad-a28b-f236fda2cd6b",
            "contact_point_facal": "7",
            "date_debut": "2023-10-12",
            "date_fin": "2023-11-17",
            "created_at": "2023-10-02T09:03:24.000000Z",
            "updated_at": "2023-10-02T09:03:24.000000Z",
            "status": 0,
            "deleted": 0,
            "partenaire": {
                "id": "9a301185-12a9-43ad-a28b-f236fda2cd6b",
                "name": "HCR",
                "email": "salasisaac2022@cosamed.org",
                "phone": "+243973760643",
                "description": "-",
                "sigle": "-",
                "logo": "logo.jpeg",
                "adresse": "-",
                "activite": null,
                "typeorgid": "9a2bbd04-ac04-4fd9-98d0-a8091ed0a94a",
                "pointfocal": null,
                "status": 0,
                "delete": 0,
                "created_at": "2023-09-21T16:07:10.000000Z",
                "updated_at": "2023-09-21T16:07:10.000000Z",
                "dataindicateur": null
            },
            indicateurs: [
                {
                    id: "232",
                    indicator: {
                        id: '2342',
                        name: "indicateur 01"

                    }
                },
                {
                    id: "232",
                    indicator: {
                        id: '2342',
                        name: "indicateur 02"

                    }
                }
            ]
        },
        {
            "id": "9a459acc-2511-467d-b62a-c411dd70a489",
            "gapid": "9a459acc-2328-4b3c-b52e-235c3386540a",
            "orgid": "9a301185-12a9-43ad-a28b-f236fda2cd6b",
            "contact_point_facal": "7",
            "date_debut": "2023-10-12",
            "date_fin": "2023-11-17",
            "created_at": "2023-10-02T09:03:24.000000Z",
            "updated_at": "2023-10-02T09:03:24.000000Z",
            "status": 0,
            "deleted": 0,
            "partenaire": {
                "id": "9a301185-12a9-43ad-a28b-f236fda2cd6b",
                "name": "HCR",
                "email": "salasisaac2022@cosamed.org",
                "phone": "+243973760643",
                "description": "-",
                "sigle": "-",
                "logo": "logo.jpeg",
                "adresse": "-",
                "activite": null,
                "typeorgid": "9a2bbd04-ac04-4fd9-98d0-a8091ed0a94a",
                "pointfocal": null,
                "status": 0,
                "delete": 0,
                "created_at": "2023-09-21T16:07:10.000000Z",
                "updated_at": "2023-09-21T16:07:10.000000Z",
                "dataindicateur": null
            },
            indicateurs: [
                {
                    id: "232",
                    indicator: {
                        id: '2342',
                        name: "indicateur 01"

                    }
                },
                {
                    id: "232",
                    indicator: {
                        id: '2342',
                        name: "indicateur 02"

                    }
                }
            ]
        }
    ],
    "datatypepersonnel": [
        {
            "id": "9a459acc-258f-46b7-a327-1c9a3284a0ec",
            "personnelid": "9a304c22-944e-45a1-869e-b96aa4a28341",
            "gapid": "9a459acc-2328-4b3c-b52e-235c3386540a",
            "nbr": 5,
            "created_at": "2023-10-02T09:03:24.000000Z",
            "updated_at": "2023-10-02T09:03:24.000000Z",
            "typepersonnel": {
                "id": "9a304c22-944e-45a1-869e-b96aa4a28341",
                "name": "Médecin",
                "created_at": "2023-09-21T18:51:04.000000Z",
                "updated_at": "2023-09-21T18:51:04.000000Z"
            }
        }
    ]
}
