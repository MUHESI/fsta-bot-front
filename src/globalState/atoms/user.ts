import { selector } from "recoil";
import { IUser } from "../../types/stateSchema/user";
import { USERS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
// import { userAuthenticatedState } from './auth';
import { token } from "@/constants/constants";

export const getUsers = selector({
    key: USERS.GET_USERS,
    get: async ({ get }) => {
        // const { token } = get(userAuthenticatedState)
        // const res = await getAPI<IFetchData<IUser[]> | undefined>(`users/listeUsers`, token);
        // TODO:: fixe me later
        const res = await getAPI<any>(`users/listeUsers`, token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
        }
        return res?.data?.data.data ?? []
    },
});



