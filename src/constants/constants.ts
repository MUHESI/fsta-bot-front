import { IOrganization, Type } from "@/types/stateSchema/organization";
import { keyStorage } from "../services/storage/localSTorageHandler";
import { IDataStoredLocalStorage } from "../types/storageTypes";
import { IUser } from '@/types/stateSchema/user'
import { IDataPagination } from '@/types/commonTypes'
import { IProvince } from "@/types/stateSchema/province";

export const AG_URL = {
    LOGO_AFIA_GAP: 'https://res.cloudinary.com/chanel-muhesi/image/upload/v1689081211/afia-gap/afia-gap-png_nhtaff.png',
    AVATAR_USER: 'https://res.cloudinary.com/chanel-muhesi/image/upload/v1638616999/blog-hight-tec/user_gjxqrh.png',
    USER_IMG_PROFILE: 'https://res.cloudinary.com/chanel-muhesi/image/upload/v1685807109/orgi_2_aotayp-Circle_y112qy.jpg',
    USER_IMG_PROFILE2: 'https://res.cloudinary.com/chanel-muhesi/image/upload/v1676725367/porfolio/profile-pic_2_a7jub9.png'
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
        id: 1,
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