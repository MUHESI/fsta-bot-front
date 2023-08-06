import { baseFormLocaStorage } from "../../constants/constants";
import { IDataStoredLocalStorage } from "../../types/storageTypes";

export const handleBaseFormLocalStorage =
    <TData>({ user, type, data }: Pick<IDataStoredLocalStorage<TData>, 'user' | 'type' | 'data'>): IDataStoredLocalStorage<TData> => {
        const f: IDataStoredLocalStorage<TData> = baseFormLocaStorage;
        const { date, } = f
        date.day = new Date().getDay();
        date.month = new Date().getMonth();
        date.year = new Date().getFullYear();
        date.timestamp = new Date().getTime();
        return { ...f, date, data, user, type }
    };