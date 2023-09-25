import { atom, selector } from "recoil";
import { IOrganization } from "../../types/stateSchema/organization";
import { INDICATIONS_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';

export const getIndications = selector({
    key: INDICATIONS_KEYS.GET_INDICATIONS,
    get: async ({ get }) => {
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IOrganization[]> | undefined>('liste_indicateur', token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            return res?.data?.data ?? []
        }
    },
});
