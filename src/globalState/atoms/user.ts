import { selector, selectorFamily } from "recoil";
import { IUser } from "../../types/stateSchema/user";
import { USERS_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { IAffectation, getPermissionsofCurrentUser } from './permissions';

export const getUsers = selector({
    key: USERS_KEYS.GET_USERS,
    get: async ({ get }) => {
        const { token } = get(userAuthenticatedState)
        // const res = await getAPI<IFetchData<IUser[]> | undefined>(`users/listeUsers`, token);
        // TODO:: fixe me later
        const res = await getAPI<any>(`users/listeUsers`, token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            // DATA IMPROVED BEFORE
            let users: { metaData: { permissions: IAffectation[] } }[] = []
            res?.data?.data.data.map((item: any) => {
                let user = {
                    ...item,
                    metaData: {
                        permissions: getPermissionsofCurrentUser(item)
                    }
                }
                users.push(user)
            })

            return users ?? []
        }
    },
});



export const getInfoUser_ = selector({
    key: USERS_KEYS.GET_INFO_USER,
    get: userId => async ({ get }: any) => {
        const { token } = get(userAuthenticatedState)
        // const userId = "9a2c90d6-195f-4f8a-a797-552bfb9ba291"
        // TODO:: fixe me later
        const res = await getAPI<any>(`users/getuserid/${userId}`, token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            // DATA IMPROVED BEFORE
            let user = {
                ...res?.data?.data,
                metaData: {
                    permissions: getPermissionsofCurrentUser(res?.data?.data)
                }
            }
            return user
        }
    },
});


export const getInfoUser = selectorFamily({
    key: USERS_KEYS.GET_INFO_USER,
    get: params => async () => {
        // TODO:: fixe me later

        let { idUser, token } = params as { idUser: string, token: string }
        const res = await getAPI<any>(`users/getuserid/${idUser}`, token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            // DATA IMPROVED BEFORE
            let user = {
                ...res?.data?.data,
                metaData: {
                    permissions: getPermissionsofCurrentUser(res?.data?.data)
                }
            }
            return user
        }
    },
});


