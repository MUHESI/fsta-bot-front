import { keyStorage } from "../services/storage/localSTorageHandler";

export interface IDataStoredLocalStorage<TData> {
    date: {
        day: number,
        year: number,
        month: number,
        timestamp: number,
    }
    type: keyStorage
    user?: string,
    data: TData,
    metadata?: { [key: string]: any }
}
export interface IMetadataAuthUser {
    token: string
}