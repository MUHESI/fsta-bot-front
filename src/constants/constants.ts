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
    AVATAR_USER: 'https://res.cloudinary.com/chanel-muhesi/image/upload/v1638616999/blog-hight-tec/user_gjxqrh.png',
    USER_IMG_PROFILE: 'https://res.cloudinary.com/chanel-muhesi/image/upload/v1685807109/orgi_2_aotayp-Circle_y112qy.jpg',
    USER_IMG_PROFILE2: 'https://res.cloudinary.com/chanel-muhesi/image/upload/v1676725367/porfolio/profile-pic_2_a7jub9.png'
}
// export const defaultStateUserAuth: IAutherUSer = {
//     full_name: null,
//     email: null,
//     token: '',
//     id: null
// }
export const token = "13|6j40bGlo9LYE3OJv42eWVJdFzLFfFrLEtaqt5cI4"
// TODO: Fixe me later
export const defaultStateUserAuth: IAutherUSer = {
    full_name: 'MUHESI',
    email: 'user@hmail.com',
    token: '13|6j40bGlo9LYE3OJv42eWVJdFzLFfFrLEtaqt5cI4',
    id: "9a2b57a0-c7c4-4304-b803-5c837afb5b83"

}

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


export const dataUsers: IUser[] = [
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
        address: 'Kulas Light',
        phone: '1-770-736-8031 x56442',
        createdBy: 'user',
        dateCreation: '2022-01-01T00:00:00.000Z',
        description: '',
        cityId: 'BUKAVU',
        communeId: '',
        quarterId: '',
        provinceId: '',
        date_created: '2022-01-01T00:00:00.000Z',
        type: Type.DPS,
    },
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'COSAMED',
        status: 'active',
        email: 'cosamed@gmailcom',
        address: 'Kulas Light',
        phone: '1-770-736-8031 x56442',
        createdBy: 'user',
        dateCreation: '2022-01-01T00:00:00.000Z',
        description: '',
        cityId: 'GOMA',
        communeId: '',
        quarterId: '',
        provinceId: '',
        date_created: '2022-01-01T00:00:00.000Z',
        type: Type.DPS,
    },
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'DPS',
        status: 'active',
        email: 'cosamed@gmailcom',
        address: 'Kulas Light',
        phone: '1-770-736-8031 x56442',
        createdBy: 'user',
        dateCreation: '2022-01-01T00:00:00.000Z',
        description: '',
        cityId: 'BENI',
        communeId: '',
        quarterId: '',
        provinceId: '',
        date_created: '2022-01-01T00:00:00.000Z',
        type: Type.DPS,
    },
    {
        id: "99cc8572-0389-49c5-8c68-c9dc2861a908",
        created_at: "2023-08-03T11:28:32.000000Z",
        updated_at: "2023-08-03T11:28:32.000000Z",
        name: 'DPS',
        status: 'active',
        email: 'cosamed@gmailcom',
        address: 'Kulas Light',
        phone: '1-770-736-8031 x56442',
        createdBy: 'user',
        dateCreation: '2022-01-01T00:00:00.000Z',
        description: '',
        cityId: 'BENI',
        communeId: '',
        quarterId: '',
        provinceId: '',
        date_created: '2022-01-01T00:00:00.000Z',
        type: Type.DPS,
    }
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



export const dataAlerts: IAlert[] = [
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

