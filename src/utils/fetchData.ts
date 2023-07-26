import axios from "axios";

// const URL_API_BASE_CLOUD = process.env.URL_API_BASE_CLOUD;
const URL_API_BASE_CLOUD = "https://afiagap.afianetrdc.com";
// const URL_API_BASE_CLOUD = "http://localhost:5008";

export const postAPI = async<T>(url: string, post: T) => {
    const res = await axios({
        method: "post",
        url: `${URL_API_BASE_CLOUD}/api/${url}`,
        data: post,
    });

    return res;
};

export const postAPI_ = async (url: string, post: any) => {
    const res = await axios.post(`${URL_API_BASE_CLOUD}/api/${url}`, post);
    return res;
};

export const getAPI = async (url: string, token?: string) => {
    const res = await axios.get(`${URL_API_BASE_CLOUD}/api/${url}`, {
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
export const patchAPI = async (url: string, post: any) => {
    const res = await axios({
        method: "patch",
        url: `${URL_API_BASE_CLOUD}/api/${url}`,
        data: post,
    });
    return res;
};

export const putAPI = async (url: string, post: any) => {
    const res = await axios({
        method: "put",
        url: `${URL_API_BASE_CLOUD}/api/${url}`,
        data: post,
    });
    return res;
};

export const deleteAPI = async (url: string, id: string) => {
    const res = await axios.delete(`${URL_API_BASE_CLOUD}api/${url}`);
    return res;
};

export function setAuthorizationToken(token: string) {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}
