import { selector, selectorFamily } from "recoil";

import { IGap } from "../../types/stateSchema/gap";
import { ALERTS_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';

export const getAllAlerts = selector({
    key: ALERTS_KEYS.GET_ALERTS,
    get: async ({ get }) => {
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IGap[]> | undefined>('alert/listalert', token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            return res?.data?.data ?? []
        }
    },
});

export const getInfoAlert = selectorFamily({
    key: ALERTS_KEYS.GET_ALERTS,
    get: params => async () => {
        let { idGap, token } = params as { idGap: string, token: string }
        const res = await getAPI<any>(`gap/detailgap/${idGap}`, token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else return res?.data?.data

    },
});

