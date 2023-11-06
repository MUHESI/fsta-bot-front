import { selector } from "recoil";
import { IRole } from "../../types/stateSchema/permissionRole";
import { PERMISSIONS_ROLES_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { RES_RECOIL } from "@/constants/initForm";


export const getRoles = selector({
    key: PERMISSIONS_ROLES_KEYS.GET_ROLES,
    get: async ({ get }) => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, keyResource: PERMISSIONS_ROLES_KEYS.GET_ROLES }
        const { token, metaData } = get(userAuthenticatedState)
        if (metaData?.affectationSelected === undefined) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: new Error("res is undefined"),
                message: "Opps, something went wrong, Affectation selected not found, verify logout and login again"
            }
            return resData
        }
        const res = await getAPI<IFetchData<IRole[]> | undefined>(`role/list/${metaData?.affectationSelected[0]?.organisation.id}`, token);
        if (res instanceof Error || res === undefined) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: new Error("res is undefined"),
                message: "Opps, something went wrong, please try again."
            }
            return resData
        }
        resData = {
            ...resData,
            success: true,
            data: res?.data?.data ?? [],
            error: null,
            message: "",
        }
        return resData
    },
});


