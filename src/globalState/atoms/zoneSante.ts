import { atom, selector } from "recoil";
import { IZoneSante } from "../../types/stateSchema/zoneSante";
import { ZONE_SANTE_KEYS, } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { currentTerritoryIDState } from './territory'

export const getListZoneSanteByTerritory = selector({
    key: ZONE_SANTE_KEYS.GET_ZONE_SANTES_STATE,
    get: async ({ get }) => {
        const territoryId = get(currentTerritoryIDState)
        const { token } = get(userAuthenticatedState)
        if (territoryId === null) return [];
        const res = await getAPI<IFetchData<IZoneSante[]> | undefined>(`listzon/${territoryId}`, token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else return res?.data?.data ?? []

    },
});
export const currentZoneSanteIDState = atom<string | null>({
    key: ZONE_SANTE_KEYS.CURRENT_ZONE_SANTE_ID_STATE,
    default: null,
});





