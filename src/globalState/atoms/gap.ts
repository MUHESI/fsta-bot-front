import { atom, selector, selectorFamily } from "recoil";
import { ICreateGap, IGap } from "../../types/stateSchema/gap";
import { GAPS_KEYS, SCORE_CARD_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { currentProvinceIDState } from './province'
import { INIT_FORM_CREATE_GAP } from "@/constants/initForm";


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

export const currentGapIDState = atom<string | null>({
    key: GAPS_KEYS.CURRENT_GAP_ID_STATE,
    default: null,
});


export const getInfoGap = selectorFamily({
    key: GAPS_KEYS.GET_INFO_GAP,
    get: params => async () => {
        let { idGap, token } = params as { idGap: string, token: string }
        const res = await getAPI<any>(`gap/detailgap/${idGap}`, token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            console.clear()
            console.log('res?.data?.data', res?.data?.data)
            return res?.data?.data
        }
    },
});

export const createGap = atom<ICreateGap>({
    key: GAPS_KEYS.CREATE_GAP,
    default: {
        ...INIT_FORM_CREATE_GAP
    }
})


//SCORE GARD
export const createScoreCard = atom<ICreateGap>({
    key: SCORE_CARD_KEYS.CREATE_SCORE_CARD,
    default: {
        ...INIT_FORM_CREATE_GAP
    }
})


