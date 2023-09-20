export const AUTH_KEYS = {
    LOGIN_STATE: 'RECOIL::AUTH:://LOGIN_STATE',
    USER_AUTHENTICATED_STATE: 'RECOIL::AUTH:://USER_AUTHENTICATED_STATE',
    // CURRENT_USER_STATE: 'RECOIL::AUTH:://CURRENT_USER_STATE',
    FORGOT_PSWD_SCREEN_STATE: 'RECOIL::AUTH:://FORGOT_PSWD_SCREEN_STATE',
}
export const SCREEN_MANAGER_KEYS = {
    ACTIVE_MENU_STATE: 'RECOIL::SCREEN_MANAGER:://ACTIVE_MENU_STATE',
    SCREEN_SIZE_STATE: 'RECOIL::SCREEN_MANAGER:://SCREEN_SIZE_STATE',
    CURRENT_MODE_STATE: 'RECOIL::SCREEN_MANAGER:://CURRENT_MODE_STATE',
    CURRENT_COLOR_STATE: 'RECOIL::SCREEN_MANAGER:://CURRENT_COLOR_STATE',
    THEME_SETTINGS_STATE: 'RECOIL::SCREEN_MANAGER:://THEME_SETTINGS_STATE',
    IS_CLICKED_STATE: 'RECOIL::SCREEN_MANAGER:://IS_CLICKED_STATE',
    INITIAL_STATE: 'RECOIL::SCREEN_MANAGER:://INITIAL_STATE',
}
export const PROVINCE_KEYS = {
    GET_PRONVINCES_STATE: 'RECOIL::PROVINCE:://GET_PRONVINCES_STATE',
    GET_PRONVINCE_BY_PROPS_STATE: 'RECOIL::PROVINCE:://GET_PRONVINCE_BY_PROPS_STATE',
    UPDATE_PRONVINCE_STATE: 'RECOIL::PROVINCE:://UPDATE_PRONVINCE_STATE',
    DELETE_PRONVINCE_STATE: 'RECOIL::PROVINCE:://DELETE_PRONVINCE_STATE',
    CURRENT_PRONVINCE_ID_STATE: 'RECOIL::PROVINCE:://CURRENT_PRONVINCE_ID_STATE',
}
export const TERRITORIES_KEYS = {
    GET_TERRITORIES_BY_PROVINCE_STATE: 'RECOIL::TERRITORY:://GET_TERRITORIES_BY_PROVINCE_STATE',
    CURRENT_TERRITORY_ID_STATE: 'RECOIL::PROVINCE:://CURRENT_TERRITORY_ID_STATE',

}
export const HEALTH_AREAS_KEYS = {
    GET_HEALTH_AREAS_STATE: 'RECOIL::PROVINCE:://GET_HEALTH_AREAS_STATE',
    GET_HEALTH_AREAS_BY_PROPS_STATE: 'RECOIL::PROVINCE:://GET_HEALTH_AREAS_BY_PROPS_STATE',
    CURRENT_HEALTH_AREA_ID_STATE: 'RECOIL::PROVINCE:://CURRENT_HEALTH_AREA_ID_STATE',
}

export const PERMISSIONS_ROLES = {
    GET_ROLES: 'RECOIL::ROLE:://GET_ROLES',
}