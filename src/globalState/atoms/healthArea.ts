import { atom, selector } from "recoil";
import { IHealthArea } from "../../types/stateSchema/healthArea";
import { HEALTH_AREAS_KEYS, } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { currentZoneSanteIDState } from './zoneSante'
import { RES_RECOIL } from "@/constants/initForm";


export const getListHealthAreasByZone = selector({
    key: HEALTH_AREAS_KEYS.GET_HEALTH_AREAS_BY_PROPS_STATE,
    get: async ({ get }) => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, keyResource: HEALTH_AREAS_KEYS.GET_HEALTH_AREAS_BY_PROPS_STATE, }
        const zoneSanteId = get(currentZoneSanteIDState)
        const { token } = get(userAuthenticatedState)
        if (zoneSanteId === null) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: new Error("res is undefined"),
                message: "zoneSanteId is null, data not found"
            }
            return resData
        };
        const res = await getAPI<IFetchData<IHealthArea[]> | undefined>(`listair/${zoneSanteId}`, token);
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
export const currentHalthAreaIDState = atom<string | null>({
    key: HEALTH_AREAS_KEYS.CURRENT_HEALTH_AREA_ID_STATE,
    default: null,
});





