import { atom, selector } from "recoil";
import { IOrganization } from "../../types/stateSchema/organization";
import { ORGANIZATIONS, PROVINCE_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';

export const getOrganizations = selector({
    key: ORGANIZATIONS.GET_ORGANIZATIONS,
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
