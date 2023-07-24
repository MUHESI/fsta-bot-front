import { ForgotPswdScreen } from "../types/commonTypes";
import { ILogin, IResetPassword } from "../types/stateSchema/auth";

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

