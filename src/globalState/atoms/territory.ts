import { atom, selector } from "recoil";
import { IProvince } from "../../types/stateSchema/province";
import { ITerritory } from "../../types/stateSchema/territory";
import { PROVINCE_KEYS, TERRITORIES_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { currentProvinceIDState } from './province'

export const getTerritoriesByProvinceState = selector({
    key: TERRITORIES_KEYS.GET_TERRITORIES_BY_PROVINCE_STATE,
    get: async ({ get }) => {
        const provinceId = get(currentProvinceIDState)
        const { token } = get(userAuthenticatedState)
        if (provinceId === null) return [];
        const res = await getAPI<IFetchData<ITerritory[]> | undefined>(`listterritoir/${provinceId}`, token);

        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            return res?.data?.data ?? []
        }
    },
});

