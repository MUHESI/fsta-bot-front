export enum GLOBAL_PERMISSIONS {
    // USERS
    CREATE_USER = 'CAN::USERS:://CREATE_USER',
    READ_INFO_USER = 'CAN::USERS:://READ_INFO_USER',
    GET_USERS = 'CAN::USERS:://GET_USERS',
    UPDATE_USER = 'CAN::USERS:://UPDATE_USER',
    // ETC
    MANAGE_GAP = 'CAN::GAP:://MANAGE_GAP',
    // ORGANIZATIONS
    CREATE_ORAGNIZATION = 'CAN::ORG:://CREATE_ORAGNISATION',
    // PERMISSIONS
    CREATE_ROLE = 'ROLE//CAN::CREATE_ROLE',
    READ_ROLES = 'ROLE//CAN::READ_ROLES',
    UPDATE_ROLE = 'ROLE::CAN::UPDATE_ROLE',
    READ_CURRENT_ROLE = 'ROLE::CAN::READ_CURRENT_ROLE',
    // 
    READ_PERMISSIONS = 'PERMISSION//CAN::READ_PERMISSIONS',
    // GAPS
    READ_ALL_GAPS = 'GAP//CAN::READ_ALL_GAPS',
    CREATE_GAP = 'GAP//CAN::CREATE_GAP',

    // MALADIES
    READ_MALADIES = 'MALADIE//CAN::READ_MALADIES',

    // CRISES
    READ_CRISES = 'CRISE//CAN::READ_CRISES',
    // MEDICAMENTS
    READ_MEDICAMENTS = 'MEDICAMENT//CAN::READ_MEDICAMENTS',
    // TYPE_PERSONNELS
    READ_TYPE_PERSONNELS = 'TYPE_PERSONNEL//CAN::READ_TYPE_PERSONNELS'
}
