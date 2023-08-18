import { selector } from "recoil";
import { IHealthArea } from "../../types/stateSchema/healthArea";
import { HEALTH_AREAS_KEYS, } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { currentTerritoryIDState } from './territory'

export const getListHealthAreasByTerritory = selector({
    key: HEALTH_AREAS_KEYS.GET_HEALTH_AREAS_BY_PROPS_STATE,
    get: async ({ get }) => {
        const territoryId = get(currentTerritoryIDState)
        const { token } = get(userAuthenticatedState)
        if (territoryId === null) return [];
        const res = await getAPI<IFetchData<IHealthArea[]> | undefined>(`listzon/${territoryId}`, token);

        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            return res?.data?.data ?? []
        }
    },
});


