import { selector } from "recoil";
import { IPermission } from "../../types/stateSchema/permission";
import { PERMISSIONS_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { RES_RECOIL } from "@/constants/initForm";


export const getPermissions = selector({
    key: PERMISSIONS_KEYS.GET_PERMISSIONS,
    get: async ({ get }) => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, keyResource: PERMISSIONS_KEYS.GET_PERMISSIONS, }
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IPermission[]> | undefined>(`permission/listpermission`, token);
        if (res instanceof Error || res === undefined) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: new Error("res is undefined"),
                message: "Opps, something went wrong, please try again."
            }
            return resData
        } resData = {
            ...resData,
            success: true,
            data: res?.data?.data ?? [],
            error: null,
            message: "",
        }
        return resData
    },
});

export interface IAffectation {
    name: string,
    psedo: string,
    id: string
    permission: {}
    oragnization: any;
}

export interface ICurrentUserPermission {
    affectation: { allpermission: any[], oragnisation: any }[]
}
export const getPermissionsofCurrentUser = (currentUser: ICurrentUserPermission): IAffectation[] => {
    let tapPermissions: IAffectation[] = []
    if (Object.keys(currentUser).length > 0) {
        currentUser.affectation.map((item: any) => {
            let permissions: any[] = []
            item.allpermission.map((perm: any) => {
                perm = {
                    ...perm,
                    psedo: perm.permission.psedo,
                    name: perm.permission.name,
                    permission: {}
                }
                permissions.push(perm)
            })
            tapPermissions.push({
                ...item,
                allpermission: permissions
            })
        });
        return tapPermissions
    }
    return tapPermissions
}

