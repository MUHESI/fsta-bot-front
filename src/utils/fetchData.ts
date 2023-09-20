import axios from "axios";
// import { ModeApp } from '../config/config.env'

export const BASE_URL_API_CLOUD_DEV = import.meta.env.VITE_REACT_URL_API_BASE_CLOUD_DEV;
export const BASE_URL_API_CLOUD_PROD = import.meta.env.VITE_REACT_URL_API_BASE_CLOUD_PROD;
export const REACT_MODE = import.meta.env.VITE_REACT_MODE;

// export const BASE_URL_API = REACT_MODE === ModeApp.DEV ?
//     BASE_URL_API_CLOUD_DEV : BASE_URL_API_CLOUD_PROD
const BASE_URL_API = 'https://apiafiagap.cosamed.org'

export const postAPI = async<Tfecth, TData>(url: string, post: TData, token?: string) => {
    const res: Tfecth = await axios({
        method: "post",
        url: `${BASE_URL_API}/api/${url}`,
        data: post,
        headers: { Authorization: `Bearer ${token}` },
    });
    return res;
};

export const getAPI = async<TRes>(url: string, token?: string): Promise<TRes | undefined> => {
    try {
        const res: TRes = await axios.get(`${BASE_URL_API}/api/${url}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return res;
    } catch (error) {
        return undefined
    }
};
export const patchAPI = async <TData>(url: string, post: TData) => {
    const res = await axios({
        method: "patch",
        url: `${BASE_URL_API}/api/${url}`,
        data: post,
    });
    return res;
};
export const putAPI = async <TData>(url: string, post: TData) => {
    const res = await axios({
        method: "put",
        url: `${BASE_URL_API}/api/${url}`,
        data: post,
    });
    return res;
};
export const deleteAPI = async (url: string, id: string) => {
    const res = await axios.delete(`${BASE_URL_API}api/${url}/${id}`);
    return res;
};
export function setAuthorizationToken(token: string) {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

