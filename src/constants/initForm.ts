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
import { ICreateGap } from "@/types/stateSchema/gap";

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
    orgid: "",
    name_point_focal: "",
    phone: "",
    airid: "",
    date_notification: "",
    datealert: "",
    timealert: "",
    nbr_touche: "",
    dece_disponible: "non",
    nbr_dece: "",
    animal_malade: "non",
    animal_mort: "non",
    evenement: "non",
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

export const INIT_FORM_CREATE_GAP: ICreateGap = {
    //
    metaData: {
        validateur: false
    },
    orgid: "",
    // id: "",
    provinceid: "",
    territoirid: "",
    zoneid: "",
    airid: "",
    structureid: "",
    population: 0,
    pop_deplace: 0,
    pop_site: 0,
    pop_retourne: 0,
    semaine_epid: 0,
    annee_epid: 0,
    // etat_infra: "NO DETRUITE",
    equipement: "",
    nbr_lit: 0,
    taux_occupation: 0,
    nbr_reco: 0,
    pop_eloigne: 0,
    pop_vulnerable: 0,
    cout_ambulatoire: 0,
    cout_hospitalisation: 0,
    cout_accouchement: 0,
    cout_cesarienne: 0,
    barriere: 0,
    pop_handicap: 0,
    couvertureDtc3: 0,
    mortaliteLessfiveyear: 0,
    covid19_nbrcas: 0,
    covid19_nbrdeces: 0,
    covid19_nbrtest: 0,
    covid19_vacciDispo: 0,
    malnutrition: 0,
    pourcentCleanWater: 0,
    //
    datacriseid: [""],
    datapopulationeloigne: [// Good
        {
            localite: "",
            nbr: 0
        },

    ],
    datamaladie: [ // good
        {
            nbrCas: 2,
            nbrDeces: 0,
            maladieid: ""
        },
    ],
    datamedocid: [],
    datapartenaireid: [
        {
            orgid: "",
            date_debut: "",
            date_fin: "",
            email: "", // SOUCIS
            datatindicateur: []
        },
    ],
    datatypepersonnel: [
        {
            typepersonnelid: "",
            nbr: 0
        }
    ],
    dateadd: "", //dateReportage: "",
    etat_infra: 'NON DETRUITE',
    pop_retournes: 0

}