import { keyStorage } from "../services/storage/localSTorageHandler";
import { IDataStoredLocalStorage } from "../types/storageTypes";

export const AG_URL = {
    LOGO_AFIA_GAP: 'https://res.cloudinary.com/chanel-muhesi/image/upload/v1689081211/afia-gap/afia-gap-png_nhtaff.png',
    AVATAR_USER: 'https://res.cloudinary.com/chanel-muhesi/image/upload/v1638616999/blog-hight-tec/user_gjxqrh.png',
    USER_IMG_PROFILE: 'https://res.cloudinary.com/chanel-muhesi/image/upload/v1685807109/orgi_2_aotayp-Circle_y112qy.jpg',
    USER_IMG_PROFILE2: 'https://res.cloudinary.com/chanel-muhesi/image/upload/v1676725367/porfolio/profile-pic_2_a7jub9.png'
}


export const baseFormLocaStorage: IDataStoredLocalStorage = {
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