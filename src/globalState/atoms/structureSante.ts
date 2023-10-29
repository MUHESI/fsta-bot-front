import { atom, selector } from "recoil";
import { STRUCTURE_HEALTH_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { currentHalthAreaIDState } from './healthArea'
import { IHealthArea } from "@/types/stateSchema/healthArea";
import { RES_RECOIL } from "@/constants/initForm";


export const getListStuctureHealthByAreas = selector({
    key: STRUCTURE_HEALTH_KEYS.GET_STRUCTURES_HEALTH_BY_PROPS_STATE,
    get: async ({ get }) => {
        let resData: IResRecoil<any[]> = { ...RES_RECOIL, keyResource: STRUCTURE_HEALTH_KEYS.GET_STRUCTURES_HEALTH_BY_PROPS_STATE, }
        const halthAreaId = get(currentHalthAreaIDState)
        const { token } = get(userAuthenticatedState)
        if (halthAreaId === null) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: new Error("res is undefined"),
                message: "halthAreaId is null, No data found"
            }
            return resData
        }
        const res = await getAPI<IFetchData<IHealthArea[]> | undefined>(`structure/liststructure/${halthAreaId}`, token);
        if (res === undefined || res instanceof Error) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: new Error("res is undefined"),
                message: "Opps, something went wrong, please try again.| undefined"
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
export const currentStructureIDState = atom<string | null>({
    key: STRUCTURE_HEALTH_KEYS.CURRENT_STRUCTURE_HEALTH_ID_STATE,
    default: null,
});