import { selector } from "recoil";
import { IGap } from "../../types/stateSchema/gap";
import { TYPE_PERSONNELS_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { RES_RECOIL } from "@/constants/initForm";

export const getTypePersonnels = selector({
    key: TYPE_PERSONNELS_KEYS.GET_TYPE_PERSONNELS,
    get: async ({ get }) => {
        const { token } = get(userAuthenticatedState)
        let resData: IResRecoil<any[]> = { ...RES_RECOIL, keyResource: TYPE_PERSONNELS_KEYS.GET_TYPE_PERSONNELS }
        const res = await getAPI<IFetchData<IGap[]> | undefined>('personnel/list', token);
        if (res instanceof Error || res === undefined) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: new Error("res is undefined"),
                message: "Opps, something went wrong, please try again."
            }
            return resData
        } else {
            resData = {
                ...resData,
                success: true,
                data: res?.data?.data ?? [],
                message: "",
            }
            return resData
        }
    },
});

