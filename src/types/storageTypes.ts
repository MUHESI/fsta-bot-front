import { keyStorage } from "../services/storage/localSTorageHandler";

export interface IDataStoredLocalStorage {
    date: {
        day: number,
        year: number,
        month: number,
        timestamp: number,
    }
    type: keyStorage
    user?: string,
    data: any,
}

