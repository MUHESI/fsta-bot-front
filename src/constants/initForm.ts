import { ICreateHealthArea } from "@/types/stateSchema/healthArea";
import { ForgotPswdScreen } from "../types/commonTypes";
import { ILogin, IResetPassword } from "../types/stateSchema/auth";
import { ICreateProvince } from "../types/stateSchema/province";
import { ICreateMenage } from "../types/stateSchema/menage";
// import { GLOBAL_PERMISSIONS } from "@/types/permissions";
import { ICreateTerritory } from "../types/stateSchema/territory";
import { ICreatePermission, ICreateAffectation } from "@/types/stateSchema/permission";
import { ICreateOrganization } from "@/types/stateSchema/organization";
import { ICreateTypeOrganization } from "../types/stateSchema/organization";
import { ICreateIndication } from "@/types/stateSchema/indication";
import { ICreateMaladie } from "@/types/stateSchema/maladie";
import { ICreateMedicament } from "@/types/stateSchema/medicament";
import { ICreateTypePersonnel } from "@/types/stateSchema/typePersonnel";
import { ICreateStructureHealth } from "@/types/stateSchema/StructureHealth";
import { ICreateAlert } from "@/types/stateSchema/alert";

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
    name: '',
    value: ''
}
export const INIT_FORM_CREATE_MALADIE: ICreateMaladie = {
    name: '',
}
export const INIT_FORM_CREATE_CRISE: ICreateMaladie = {
    name: '',
}
export const INIT_FORM_CREATE_MEDICAMENT: ICreateMedicament = {
    name: '',
}
export const INIT_FORM_CREATE_TYPE_PERSONNEL: ICreateTypePersonnel = {
    name: '',
}
export const INIT_FORM_CREATE_STRUCTURE: ICreateStructureHealth = {
    name: '',
    contact: '',
    aireid: ''
}

const CREATE_AFFECTION: ICreateAffectation = {
    orgid: "",
    roleid: "",
    userid: "",

}
export const INIT_FORM_CREATE_AFFECTATION: {
    createAffectation: ICreateAffectation;
    givePermission: {
        affectationid: string;
        permissionid: string[];
    }
} = {
    createAffectation: CREATE_AFFECTION,
    givePermission: {
        affectationid: "",
        permissionid: [],
    }
}
export const INIT_FORM_CREATE_ALERT: ICreateAlert = {
    name_point_focal: "",
    phone: "",
    airid: "",
    date_notification: "",
    datealert: "",
    timealert: "",
    nbr_touche: "",
    dece_disponible: "NON",
    nbr_dece: "",
    animal_malade: "NON",
    animal_mort: "NON",
    evenement: "NON",
    mesure: "",
    description: "",
    maladieid: "",
    // 
    // time_notification: "",
    date_detection: "",
    time_detection: "",
    nb_animal_malade: "",
    nb_animal_mort: "",

    // nb_animal_touche: "",

}