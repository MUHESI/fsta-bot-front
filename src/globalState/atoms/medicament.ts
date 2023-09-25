import { atom, selector } from "recoil";
import { MEDICAMENTS_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { IMedicament } from "../../types/stateSchema/medicament";

export const getMedicaments = selector({
    key: MEDICAMENTS_KEYS.GET_MEDICAMENTS,
    get: async ({ get }) => {
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IMedicament[]> | undefined>('medicament/list', token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            return res?.data?.data ?? []
        }
    },
});

