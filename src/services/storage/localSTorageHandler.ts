import { IDataStoredLocalStorage } from "../../types/storageTypes";

export enum keyStorage {
    AFIAGAP_AUTH_USER = "AFIAGAP::AUTH//AUTH_USER",
    AFIAGAP_FORGORT_PASSWORD = "AFIAGAP::AUTH:://FORGORT_PASSWORD",
};

export default class LocalStorage {
    static attachChangeDetection = (
        callback: (this: Window, ev: StorageEvent) => any
    ) => {
        window.addEventListener("storage", callback);
    };

    static detachChangeDetection = (
        callback: (this: Window, ev: StorageEvent) => any
    ) => {
        window.removeEventListener("storage", callback);
    };

    static setItem = (storageKey: string, storageValue: any) => {
        localStorage.setItem(storageKey, JSON.stringify(storageValue));
    };

    static getItem = (storageKey: string): IDataStoredLocalStorage | null => {
        const res: any = localStorage.getItem(storageKey);
        return JSON.parse(res);
        // return JSON.parse(localStorage.getItem(storageKey));
    };

    static removeItem = (storageKey: string) => {
        localStorage.removeItem(storageKey);
    };

    static clear = () => { };
}


