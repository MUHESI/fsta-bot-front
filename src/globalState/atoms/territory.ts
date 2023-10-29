import { atom, selector } from "recoil";
import { ITerritory } from "../../types/stateSchema/territory";
import { TERRITORIES_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { currentProvinceIDState } from './province'
import { RES_RECOIL } from "@/constants/initForm";


export const getTerritoriesByProvinceState = selector({
    key: TERRITORIES_KEYS.GET_TERRITORIES_BY_PROVINCE_STATE,
    get: async ({ get }) => {
        let resData: IResRecoil<any[]> = { ...RES_RECOIL, keyResource: TERRITORIES_KEYS.GET_TERRITORIES_BY_PROVINCE_STATE, }
        const provinceId = get(currentProvinceIDState)
        const { token } = get(userAuthenticatedState)
        if (provinceId === null) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: new Error("res is undefined"),
                message: "Opps,provinceId is null, no data found"
            }
            return resData
        }
        const res = await getAPI<IFetchData<ITerritory[]> | undefined>(`listterritoir/${provinceId}`, token);
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
            message: "",

        }
        return resData

    },
});

export const currentTerritoryIDState = atom<string | null>({
    key: TERRITORIES_KEYS.CURRENT_TERRITORY_ID_STATE,
    default: null,
});



