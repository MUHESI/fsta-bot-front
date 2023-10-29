import { selector } from "recoil";
import { IGap } from "../../types/stateSchema/gap";
import { CRISES_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { RES_RECOIL } from "@/constants/initForm";

export const getCrises = selector({
    key: CRISES_KEYS.GET_CRISES,
    get: async ({ get }) => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, keyResource: CRISES_KEYS.GET_CRISES, }
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IGap[]> | undefined>('crise/list', token);
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

