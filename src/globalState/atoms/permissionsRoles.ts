import { atom, selector } from "recoil";
import { IRole } from "../../types/stateSchema/permissionRole";
import { PERMISSIONS_ROLES_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
// import { token } from "@/constants/constants";

export const getRoles = selector({
    key: PERMISSIONS_ROLES_KEYS.GET_ROLES,
    get: async ({ get }) => {
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IRole[]> | undefined>(`role/list`, token);

        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
        }
        return res?.data?.data ?? []
    },
});


