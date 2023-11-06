import { selector, selectorFamily } from "recoil";
import { IGap } from "../../types/stateSchema/gap";
import { ALERTS_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { RES_RECOIL } from "@/constants/initForm";
import { IMetaData } from "@/types/stateSchema/auth";


export const getAllAlerts = selector({
    key: ALERTS_KEYS.GET_ALERTS,
    get: async ({ get }) => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, data: [], keyResource: ALERTS_KEYS.GET_ALERTS, }
        const { token, metaData } = get(userAuthenticatedState)
        if (metaData?.affectationSelected === undefined) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: new Error("res is undefined"),
                message: "Opps, something went wrong, Affectation selected not found, verify logout and login again"
            }
            return resData
        }
        const res = await getAPI<IFetchData<IGap[]> | undefined>(`alert/listalert/${metaData?.affectationSelected[0]?.organisation.id}`, token);
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

        let { idGap, token, metaData } = params as { idGap: string, token: string, metaData: any } // TODO: TYPE THIS LATER
        // const { token, metaData } = get(userAuthenticatedState)
        if (metaData?.affectationSelected === undefined) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: new Error("res is undefined"),
                message: "Opps, something went wrong, Affectation selected not found, verify logout and login again"
            }
            return resData
        }
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

