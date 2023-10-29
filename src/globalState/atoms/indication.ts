import { atom, selector } from "recoil";
import { IOrganization } from "../../types/stateSchema/organization";
import { INDICATIONS_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { RES_RECOIL } from "@/constants/initForm";

export const getIndicateurs = selector({
    key: INDICATIONS_KEYS.GET_INDICATIONS,
    get: async ({ get }) => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, keyResource: INDICATIONS_KEYS.GET_INDICATIONS, }
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IOrganization[]> | undefined>('liste_indicateur', token);
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
