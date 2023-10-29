import { atom, selector } from "recoil";
import { IZoneSante } from "../../types/stateSchema/zoneSante";
import { ZONE_SANTE_KEYS, } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { currentTerritoryIDState } from './territory'
import { RES_RECOIL } from "@/constants/initForm";

export const getListZoneSanteByTerritory = selector({
    key: ZONE_SANTE_KEYS.GET_ZONE_SANTES_STATE,
    get: async ({ get }) => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, keyResource: ZONE_SANTE_KEYS.GET_ZONE_SANTES_STATE }

        const territoryId = get(currentTerritoryIDState)
        const { token } = get(userAuthenticatedState)
        if (territoryId === null) {
            resData = {
                ...resData,
                success: true,
                data: [],
                message: "No territoryId found, No data found",
            }
            return resData

        }
        const res = await getAPI<IFetchData<IZoneSante[]> | undefined>(`listzon/${territoryId}`, token);
        if (res === undefined || res instanceof Error) {
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
            success: false,
            data: res?.data?.data ?? [],
            error: new Error("res is undefined"),
            message: "Opps, something went wrong, please try again."
        }
        return resData

    },
});
export const currentZoneSanteIDState = atom<string | null>({
    key: ZONE_SANTE_KEYS.CURRENT_ZONE_SANTE_ID_STATE,
    default: null,
});





