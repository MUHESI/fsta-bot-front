export class HandlePermission {
    static check = (refPerm: string | string[], permissionsUser: string[]) => {
        if (typeof refPerm === 'string') return permissionsUser.includes(refPerm);
        else return refPerm.find(perm => permissionsUser.includes(perm)) ? true : false;
    }

}