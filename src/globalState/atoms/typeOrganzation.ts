import { atom, selector } from "recoil";
import { IOrganization } from "../../types/stateSchema/organization";
import { ORGANIZATIONS_KEYS, PROVINCE_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { BsJoystick } from "react-icons/bs";

export const getTypeOrganizations = selector({
    key: ORGANIZATIONS_KEYS.GET_ORGANIZATIONS,
    get: async ({ get }) => {
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IOrganization[]> | undefined>('list_org', token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            return res?.data?.data ?? []
        }
    },
});


