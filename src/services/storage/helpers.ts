import { baseFormLocaStorage } from "../../constants/constants";
import { IDataStoredLocalStorage } from "../../types/storageTypes";

export const handleBaseFormLocalStorage = ({ user, type, data }: Pick<IDataStoredLocalStorage, 'user' | 'type' | 'data'>): IDataStoredLocalStorage => {
    let f: IDataStoredLocalStorage = baseFormLocaStorage;
    let { date, } = f
    date.day = new Date().getDay();
    date.month = new Date().getMonth();
    date.year = new Date().getFullYear();
    date.timestamp = new Date().getTime();
    return { ...f, date, data, user, type }
};