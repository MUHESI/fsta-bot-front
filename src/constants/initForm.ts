import { ForgotPswdScreen } from "../types/commonTypes";
import { ILogin, IResetPassword } from "../types/stateSchema/auth";
import { ICreateProvince } from "../types/stateSchema/province";

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

