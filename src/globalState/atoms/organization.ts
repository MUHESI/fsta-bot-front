import { atom, selector } from "recoil";
import { IOrganization } from "../../types/stateSchema/organization";
import { ORGANIZATIONS_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { RES_RECOIL } from "@/constants/initForm";


export const getOrganizations = selector({
    key: ORGANIZATIONS_KEYS.GET_ORGANIZATIONS,
    get: async ({ get }) => {
        let resData: IResRecoil<any[]> = { ...RES_RECOIL, keyResource: ORGANIZATIONS_KEYS.GET_ORGANIZATIONS, }

        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IOrganization[]> | undefined>('list_org', token);

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

export const getTypeOrganizations = selector({
    key: ORGANIZATIONS_KEYS.GET_TYPES_ORGANIZATIONS,
    get: async ({ get }) => {
        let resData: IResRecoil<any[]> = { ...RES_RECOIL, keyResource: ORGANIZATIONS_KEYS.GET_TYPES_ORGANIZATIONS, }
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IOrganization[]> | undefined>('listtyp', token);
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
