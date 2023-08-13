import { atom, selector } from "recoil";
import { IProvince } from "../../types/stateSchema/province";
import { PROVINCE_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';

export const getProvincesState = selector({
    key: PROVINCE_KEYS.GET_PRONVINCES_STATE,
    get: async ({ get }) => {
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IProvince[]> | undefined>('listprovince', token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            return res?.data?.data ?? []
        }
    },
});
export const currentProvinceIDState = atom<string | null>({
    key: PROVINCE_KEYS.CURRENT_PRONVINCE_ID_STATE,
    default: null,
});


