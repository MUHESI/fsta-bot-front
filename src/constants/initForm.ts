import { ICreateHealthArea } from "@/types/stateSchema/healthArea";
import { ForgotPswdScreen } from "../types/commonTypes";
import { ILogin, IResetPassword } from "../types/stateSchema/auth";
import { ICreateProvince } from "../types/stateSchema/province";
import { ICreateMenage } from "../types/stateSchema/menage";

import { ICreateTerritory } from "../types/stateSchema/territory";

export const INIT_FORM_LOGIN: ILogin = {
    email: '',
    pswd: ''
}
export const INIT_FORM_RESET_PASSWORD: IResetPassword = {
    email: '',
    pswd: '',
    pswdconfirm: ''
}
export const INIT_FORM_FORGOT_PSWD_SCREEN: ForgotPswdScreen = {
    forgotPaswd: false,
    resetPswd: false,
    testOpt: false,
}
export const INIT_FORM_CREATE_PROVINCE: ICreateProvince = {
    name: '',
}
export const INIT_FORM_CREATE_TERRITORY: ICreateTerritory = {
    name: '',
    provinceid: ''
}

export const INIT_FORM_CREATE_HEALTH_AREA: ICreateHealthArea = {
    name: '',
    territoirid: ''
}

export const INIT_FORM_CREATE_MENAGE: ICreateMenage = {
    village: '',
    housing: '',
    criteriaVulnerability: [''],
    nbMemberMenage: 0,
    currentAdress: '',
    created_at: '',
    id: '',
    status: 'active',
    updated_at: '',
}


