import { atom, selector } from "recoil";
import { IHealthArea } from "../../types/stateSchema/healthArea";
import { HEALTH_AREAS_KEYS, } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { currentZoneSanteIDState } from './zoneSante'

export const getListHealthAreasByZone = selector({
    key: HEALTH_AREAS_KEYS.GET_HEALTH_AREAS_BY_PROPS_STATE,
    get: async ({ get }) => {
        const zoneSanteId = get(currentZoneSanteIDState)
        const { token } = get(userAuthenticatedState)
        if (zoneSanteId === null) return [];
        const res = await getAPI<IFetchData<IHealthArea[]> | undefined>(`listair/${zoneSanteId}`, token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {

            return res?.data?.data ?? []
        }

    },
});

export const currentHalthAreaIDState = atom<string | null>({
    key: HEALTH_AREAS_KEYS.CURRENT_HEALTH_AREA_ID_STATE,
    default: null,
});





