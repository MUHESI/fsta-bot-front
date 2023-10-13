import { atom, selector } from "recoil";
import { STRUCTURE_HEALTH_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { currentHalthAreaIDState } from './healthArea'
import { IHealthArea } from "@/types/stateSchema/healthArea";

export const getListStuctureHealthByAreas = selector({
    key: STRUCTURE_HEALTH_KEYS.GET_STRUCTURES_HEALTH_BY_PROPS_STATE,
    get: async ({ get }) => {
        const halthAreaId = get(currentHalthAreaIDState)
        const { token } = get(userAuthenticatedState)
        if (halthAreaId === null) return [];
        const res = await getAPI<IFetchData<IHealthArea[]> | undefined>(`structure/liststructure/${halthAreaId}`, token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            return res?.data?.data ?? []
        }
    },
});

export const currentStructureIDState = atom<string | null>({
    key: STRUCTURE_HEALTH_KEYS.CURRENT_STRUCTURE_HEALTH_ID_STATE,
    default: null,
});



