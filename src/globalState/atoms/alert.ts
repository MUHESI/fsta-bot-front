import { selector, selectorFamily } from "recoil";
import { IGap } from "../../types/stateSchema/gap";
import { ALERTS_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { RES_RECOIL } from "@/constants/initForm";


export const getAllAlerts = selector({
    key: ALERTS_KEYS.GET_ALERTS,
    get: async ({ get }) => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, data: [], keyResource: ALERTS_KEYS.GET_ALERTS, }
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IGap[]> | undefined>('alert/listalert', token);
        if (res instanceof Error || res === undefined) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: new Error("res is undefined"),
                message: "Opps, something went wrong, please try again."
            }
            return resData
        }
        resData = {
            ...resData,
            success: true,
            data: res?.data?.data ?? [],
            error: null,
            message: "",
        }
        return resData
    },
});
export const getInfoAlert = selectorFamily({
    key: ALERTS_KEYS.GET_INFO_ALERT,
    get: params => async () => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, data: {}, keyResource: ALERTS_KEYS.GET_INFO_ALERT, }

        let { idGap, token } = params as { idGap: string, token: string }
        const res = await getAPI<any>(`gap/detailgap/${idGap}`, token);
        if (res instanceof Error || res === undefined) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: new Error("res is undefined"),
                message: "Opps, something went wrong, please try again."
            }
            return resData
        }
        resData = {
            ...resData,
            success: true,
            data: res?.data?.data ?? {},
            error: null,
            message: "",
        }
        return resData
    },
});

