import { selector, selectorFamily } from "recoil";

import { IGap } from "../../types/stateSchema/gap";
import { GAPS_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { currentProvinceIDState } from './province'


export const getAllGaps = selector({
    key: GAPS_KEYS.GET_GAPS,
    get: async ({ get }) => {
        const { token } = get(userAuthenticatedState)
        const provinceId = get(currentProvinceIDState)
        // TODO: Type this correctly  later
        let res: any = {}
        if (provinceId === null) {
            res = await getAPI<IFetchData<IGap[]> | undefined>('gap/listgap', token);
        }
        else {
            res = await getAPI<IFetchData<IGap[]> | undefined>(`gap/listgap_province/${provinceId}`, token);
        }
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            return res?.data?.data ?? []
        }
    },
});

