import { selector } from "recoil";
import { MEDICAMENTS_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { IMedicament } from "../../types/stateSchema/medicament";
import { RES_RECOIL } from "@/constants/initForm";


export const getMedicaments = selector({
    key: MEDICAMENTS_KEYS.GET_MEDICAMENTS,
    get: async ({ get }) => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, keyResource: MEDICAMENTS_KEYS.GET_MEDICAMENTS, }
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IMedicament[]> | undefined>('medicament/list', token);
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

