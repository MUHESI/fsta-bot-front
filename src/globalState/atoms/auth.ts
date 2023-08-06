import { atom } from "recoil";
import { ILogin } from "../../types/stateSchema/auth";
import { ForgotPswdScreen } from "../../types/commonTypes";
import { AUTH_KEYS } from "../keys";

export const loginState = atom<ILogin>({
    key: AUTH_KEYS.LOGIN_STATE,
    default: {
        email: '',
        pswd: ''
    }
})

// SCREEN
export const forgotPswdScreenState = atom<ForgotPswdScreen>({
    key: AUTH_KEYS.FORGOT_PSWD_SCREEN_STATE,
    default: {
        forgotPaswd: false,
        resetPswd: false,
        testOpt: false,
    }
}) 
