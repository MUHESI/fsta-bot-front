import { atom, selector } from "recoil";
import { IMaladie } from "../../types/stateSchema/maladie";
import { MALADIES_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';

export const getMaladies = selector({
    key: MALADIES_KEYS.GET_MALADIES,
    get: async ({ get }) => {
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IMaladie[]> | undefined>('maladie/list', token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            return res?.data?.data ?? []
        }
    },
});

