import { atom, selector } from "recoil";
import { IPermission } from "../../types/stateSchema/permission";
import { PERMISSIONS_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
// import { token } from "@/constants/constants";

export const getPermissions = selector({
    key: PERMISSIONS_KEYS.GET_PERMISSIONS,
    get: async ({ get }) => {
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IPermission[]> | undefined>(`permission/listpermission`, token);

        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
        }
        return res?.data?.data ?? []
    },
});


