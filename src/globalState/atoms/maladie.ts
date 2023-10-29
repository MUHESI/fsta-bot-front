import { atom, selector } from "recoil";
import { IMaladie } from "../../types/stateSchema/maladie";
import { MALADIES_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { RES_RECOIL } from "@/constants/initForm";

export const getMaladies = selector({
    key: MALADIES_KEYS.GET_MALADIES,
    get: async ({ get }) => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, keyResource: MALADIES_KEYS.GET_MALADIES, }
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IMaladie[]> | undefined>('maladie/list', token);
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

export const currentMaladieIDState = atom<string | null>({
    key: MALADIES_KEYS.CURRENT_MALADIE_ID_STATE,
    default: null,
});

