import { atom, selector, selectorFamily } from "recoil";
import { USERS_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { userAuthenticatedState } from './auth';
import { IAffectation, getPermissionsofCurrentUser } from './permissions';
import { IDataPagination, IResRecoil } from "@/types/commonTypes";
import { RES_RECOIL } from "@/constants/initForm";


export const getUsers = selector({
    key: USERS_KEYS.GET_USERS,
    get: async ({ get }) => {
        const { token } = get(userAuthenticatedState)
        const { page } = get(handlePaginationUsers)
        let resData: IResRecoil<any[]> = { ...RES_RECOIL, keyResource: USERS_KEYS.GET_USERS }
        const res = await getAPI<any>(`users/listeUsers?page=${page}`, token);
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
            // DATA IMPROVED BEFORE
            const pagination: Partial<IDataPagination> = {
                count: res?.data?.data.total,
                limit: res?.data?.data.per_page,
                page: res?.data?.data.current_page,
            }
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
            resData = {
                ...resData,
                success: true,
                data: users || [],
                message: "",
                metaData: {
                    pagination
                }
            }
            return resData
        }
    },
});



export const getInfoUser_ = selector({
    key: USERS_KEYS.GET_INFO_USER,
    get: userId => async ({ get }: any) => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, keyResource: USERS_KEYS.GET_INFO_USER }
        const { token } = get(userAuthenticatedState)
        const res = await getAPI<any>(`users/getuserid/${userId}`, token);
        if (res === undefined || res instanceof Error) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: res,
                message: "Opps, something went wrong, please try again.| undefined"
            }
            return resData
        } else {
            // DATA IMPROVED BEFORE
            let user = {
                ...res?.data?.data,
                metaData: {
                    permissions: getPermissionsofCurrentUser(res?.data?.data)
                }
            }
            resData = {
                ...resData,
                success: true,
                data: user,
                error: null,
                message: "",
            }
            return resData
        }
    },
});

export const getInfoUser = selectorFamily({
    key: USERS_KEYS.GET_INFO_USER,
    get: params => async () => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, keyResource: USERS_KEYS.GET_INFO_USER }
        let { idUser, token } = params as { idUser: string, token: string }
        const res = await getAPI<any>(`users/getuserid/${idUser}`, token);
        if (res === undefined || res instanceof Error) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: res,
                message: "Opps, something went wrong, please try again.| undefined"
            }
            return resData
        } else {
            // DATA IMPROVED BEFORE
            let user = {
                ...res?.data?.data,
                metaData: {
                    permissions: getPermissionsofCurrentUser(res?.data?.data)
                }
            }
            resData = {
                ...resData,
                success: true,
                data: user,
                error: res,
                message: ""
            }
            return resData

        }
    },
});
export const defaultPaginationProperty: IDataPagination = {
    limit: 10,
    nextPage: 1,
    previousPage: 1,
    page: 1,
}
export const handlePaginationUsers = atom<IDataPagination>({
    key: USERS_KEYS.HANDLE_PAGINATION_USERS,
    default: { ...defaultPaginationProperty },
});






