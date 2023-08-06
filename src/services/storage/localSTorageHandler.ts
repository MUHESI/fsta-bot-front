import { IDataStoredLocalStorage } from "../../types/storageTypes";

export enum keyStorage {
    AFIAGAP_AUTH_USER = "AFIAGAP::AUTH//AUTH_USER",
    AFIAGAP_FORGORT_PASSWORD = "AFIAGAP::AUTH:://FORGORT_PASSWORD",
};

export default class LocalStorage {
    static attachChangeDetection = (
        callback: (this: Window, ev: StorageEvent) => void
    ) => {
        window.addEventListener("storage", callback);
    };

    static detachChangeDetection = <TRes>(
        callback: (this: Window, ev: StorageEvent) => TRes | null
    ) => {
        window.removeEventListener("storage", callback);
    };

    static setItem = <TData>(storageKey: string, storageValue: TData) => {
        localStorage.setItem(storageKey, JSON.stringify(storageValue));
    };

    static getItem = <TRes>(storageKey: string): TRes | null => {
        const res: any = localStorage.getItem(storageKey);
        return JSON.parse(res);
        // return JSON.parse(localStorage.getItem(storageKey));
    };

    static removeItem = (storageKey: string) => {
        localStorage.removeItem(storageKey);
    };

    static clear = () => { };
}


