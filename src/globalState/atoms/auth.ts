import { atom } from "recoil";
import { IAutherUSer, ICurrentUser, ILogin } from "../../types/stateSchema/auth";
import { ForgotPswdScreen } from "../../types/commonTypes";
import { AUTH_KEYS } from "../keys";
import { defaultStateUserAuth } from "@/constants/constants";


export const loginState = atom<ILogin>({
    key: AUTH_KEYS.LOGIN_STATE,
    default: {
        email: '',
        pswd: ''
    }
})
// export const currentUserState = atom<ICurrentUser>({
//     key: AUTH_KEYS.CURRENT_USER_STATE,
//     default: {
//         email: '',
//         full_name: '',
//         phone: '',
//         address: '',
//         roles: [{ id: 2, name: '' }],
//         date_created: '',
//         id: '',
//         created_at: '',
//         updated_at: '',
//         status: "active"
//     }
// })

export const userAuthenticatedState = atom<IAutherUSer>({
    key: AUTH_KEYS.USER_AUTHENTICATED_STATE,
    default: {
        ...defaultStateUserAuth
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
