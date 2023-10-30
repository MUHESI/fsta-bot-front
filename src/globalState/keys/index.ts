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
    TOOGLE_DIALOG_STATE: 'RECOIL::DIAKOG:://TOOGLE_DIALOG_STATE',
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
export const ZONE_SANTE_KEYS = {
    GET_ZONE_SANTES_STATE: 'RECOIL::ZONE_SANTE:://GET_ZONE_SANTES_STATE',
    GET_ZONE_SANTES_BY_PROPS_STATE: 'RECOIL::ZONE_SANTE:://GET_ZONE_SANTES_BY_PROPS_STATE',
    CURRENT_ZONE_SANTE_ID_STATE: 'RECOIL::ZONE_SANTE:://CURRENT_ZONE_SANTE_ID_STATE',
}
export const PERMISSIONS_ROLES_KEYS = {
    GET_ROLES: 'RECOIL::ROLE:://GET_ROLES',
}
export const PERMISSIONS_KEYS = {
    GET_PERMISSIONS: 'RECOIL::PERMISSION:://GET_ROLES',
}
export const ORGANIZATIONS_KEYS = {
    GET_ORGANIZATIONS: 'RECOIL::ORGANIZATION:://GET_ORGANIZATIONS',
    GET_TYPES_ORGANIZATIONS: 'RECOIL::TYPE_ORGANIZATION:://GET_TYPES_ORGANIZATIONS',
}
export const USERS_KEYS = {
    GET_USERS: 'RECOIL::USER:://GET_USERS',
    GET_INFO_USER: 'RECOIL::USER:://GET_INFO_USER',
    HANDLE_PAGINATION_USERS: 'RECOIL::USER:://HANDLE_PAGINATION_USERS',

}
export const INDICATIONS_KEYS = {
    GET_INDICATIONS: 'RECOIL::INDICATION:://GET_INDICATIONS',
}
export const GAPS_KEYS = {
    GET_GAPS: 'RECOIL::GAP:://GET_GAPS',
    GET_INFO_GAP: 'RECOIL::GAP:://GET_INFO_GAP',
    CREATE_GAP: 'RECOIL::GAP:://CREATE_GAP',
    CURRENT_GAP_ID_STATE: 'RECOIL::GAP:://CURRENT_GAP_ID_STATE',
    CURRENT_ITEM_VALIDATE_GAP: 'RECOIL::GAP:://CURRENT_ITEM_VALIDATE_GAP',

}
export const SCORE_CARD_KEYS = {
    SCORE_CARDS: 'RECOIL::GAP_SCORE_CARD:://SCORE_CARDS',
    GET_INFO_SCORE_CARD: 'RECOIL::GAP_SCORE_CARD:://GET_INFO_SCORE_CARD',
    CREATE_SCORE_CARD: 'RECOIL::GAP_SCORE_CARD:://CREATE_SCORE_CARD',
}
export const MALADIES_KEYS = {
    GET_MALADIES: 'RECOIL::MALADIE:://GET_MALADIES',
    CURRENT_MALADIE_ID_STATE: 'RECOIL::MALADIE:://CURRENT_MALADIE_ID_STATE',
}
export const CRISES_KEYS = {
    GET_CRISES: 'RECOIL::CRISE:://GET_CRISES',
}
export const MEDICAMENTS_KEYS = {
    GET_MEDICAMENTS: 'RECOIL::MEDICAMENT:://GET_MEDICAMENTS',
}
export const TYPE_PERSONNELS_KEYS = {
    GET_TYPE_PERSONNELS: 'RECOIL::TYPE_PERSONNEL:://GET_TYPE_PERSONNELS',
}

export const STRUCTURE_HEALTH_KEYS = {
    GET_STRUCTURES_HEALTH_STATE: 'RECOIL::STRUCTURE:://GET_STRUCTURES_HEALTH_STATE',
    GET_STRUCTURES_HEALTH_BY_PROPS_STATE: 'RECOIL::STRUCTURE-:://GET_STRUCTURES_HEALTH_BY_PROPS_STATE',
    CURRENT_STRUCTURE_HEALTH_ID_STATE: 'RECOIL::STRUCTURE:://CURRENT_STRUCTURE_HEALTH_ID_STATE',
}
export const ALERTS_KEYS = {
    GET_ALERTS: 'RECOIL::ALERT:://ALERTS',
    GET_INFO_ALERT: 'RECOIL::GAP:://GET_INFO_ALERT',

}

