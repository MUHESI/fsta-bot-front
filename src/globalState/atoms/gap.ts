import { atom, selector } from "recoil";
import { IGap } from "../../types/stateSchema/gap";
import { GAPS_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';

export const getAllGaps = selector({
    key: GAPS_KEYS.GET_GAPS,
    get: async ({ get }) => {
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IGap[]> | undefined>('listprovince', token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            return res?.data?.data ?? []
        }
    },
});

