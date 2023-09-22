import { ICreateHealthArea } from "@/types/stateSchema/healthArea";
import { ForgotPswdScreen } from "../types/commonTypes";
import { ILogin, IResetPassword } from "../types/stateSchema/auth";
import { ICreateProvince } from "../types/stateSchema/province";
import { ICreateMenage } from "../types/stateSchema/menage";
// import { GLOBAL_PERMISSIONS } from "@/types/permissions";


import { ICreateTerritory } from "../types/stateSchema/territory";
import { ICreatePermission } from "@/types/stateSchema/permissions";
import { ICreateOrganization } from "@/types/stateSchema/organization";
import { ICreateTypeOrganization } from "../types/stateSchema/organization";
import { ICreateIndication } from "@/types/stateSchema/indication";

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

export const INIT_FORM_CREATE_ROLE: ICreateProvince = {
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
export const INIT_FORM_CREATE_ORGANIZATION: ICreateOrganization = {
    phone: '',
    adresse: '',
    email: '',
    name: '',
    sigle: '',
    description: '',
    pointfocal: '',
    typeorgid: ''
}
export const INIT_FORM_CREATE_PERMSSION: ICreatePermission = {
    psedo: '',
    name: ''
}
export const INIT_FORM_CREATE_TYPE_ORGANIZATION: ICreateTypeOrganization = {
    email: '',
    name: ''
}

export const INIT_FORM_CREATE_INDICATION: ICreateIndication = {
    psedo: '',
    name: ''
}