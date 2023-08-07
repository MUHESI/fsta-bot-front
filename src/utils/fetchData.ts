import axios from "axios";
// import { ModeApp } from '../config/config.env'

export const BASE_URL_API_CLOUD_DEV = import.meta.env.VITE_REACT_URL_API_BASE_CLOUD_DEV;
export const BASE_URL_API_CLOUD_PROD = import.meta.env.VITE_REACT_URL_API_BASE_CLOUD_PROD;
export const REACT_MODE = import.meta.env.VITE_REACT_MODE;

// export const BASE_URL_API = REACT_MODE === ModeApp.DEV ?
//     BASE_URL_API_CLOUD_DEV : BASE_URL_API_CLOUD_PROD
const BASE_URL_API = 'https://afiagap.afianetrdc.com'

export const postAPI = async<TData>(url: string, post: TData) => {
    const res = await axios({
        method: "post",
        url: `${BASE_URL_API}/api/${url}`,
        data: post,
    });
    return res;
};

export const postAPI_ = async <TData>(url: string, post: TData) => {
    const res = await axios.post(`${BASE_URL_API}/api/${url}`, post);
    return res;
};

export const getAPI = async (url: string, token?: string) => {
    const res = await axios.get(`${BASE_URL_API}/api/${url}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res;
};

export const getAPI_ = async (url: string, token?: string) => {
    const res = await axios.get(`${'https://jsonplaceholder.typicode.com'}/api/${url}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res;
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
