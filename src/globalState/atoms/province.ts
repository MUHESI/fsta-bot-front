import { atom, selector } from "recoil";
import { IProvince } from "../../types/stateSchema/province";
import { PROVINCE_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { RES_RECOIL } from "@/constants/initForm";


export const getProvincesState = selector({
    key: PROVINCE_KEYS.GET_PRONVINCES_STATE,
    get: async ({ get }) => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, keyResource: PROVINCE_KEYS.GET_PRONVINCES_STATE, }
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<IFetchData<IProvince[]> | undefined>('listprovince', token);
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
export const currentProvinceIDState = atom<string | null>({
    key: PROVINCE_KEYS.CURRENT_PRONVINCE_ID_STATE,
    default: null,
});


