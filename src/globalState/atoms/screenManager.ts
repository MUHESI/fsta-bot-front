import { atom } from "recoil";
import { SCREEN_MANAGER_KEYS } from "../keys";

const IinitialState = {

    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const screenSizeState = atom<number | undefined>({
    key: SCREEN_MANAGER_KEYS.ACTIVE_MENU_STATE,
    default: undefined
})
export const currentColorState = atom<string>({
    key: SCREEN_MANAGER_KEYS.CURRENT_COLOR_STATE,
    default: "#03C9D7"
})

export const activeMenuState = atom<boolean>({
    key: SCREEN_MANAGER_KEYS.SCREEN_SIZE_STATE,
    default: false
})
export const currentModeState = atom<string>({
    key: SCREEN_MANAGER_KEYS.CURRENT_MODE_STATE,
    default: "Light"
})
export const themeSettingsState = atom<boolean>({
    key: SCREEN_MANAGER_KEYS.THEME_SETTINGS_STATE,
    default: false
})
export const isCLickedState = atom<any>({
    key: SCREEN_MANAGER_KEYS.IS_CLICKED_STATE,
    default: IinitialState
})
export const initialState = atom<any>({
    key: SCREEN_MANAGER_KEYS.INITIAL_STATE,
    default: IinitialState
})
export const tooggleDialogState = atom<boolean>({
    key: SCREEN_MANAGER_KEYS.TOOGLE_DIALOG_STATE,
    default: false
})


