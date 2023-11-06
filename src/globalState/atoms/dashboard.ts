import { atom, selector } from "recoil";
import { IHealthArea } from "../../types/stateSchema/healthArea";
import { HEALTH_AREAS_KEYS, } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { currentZoneSanteIDState } from './zoneSante'
import { RES_RECOIL } from "@/constants/initForm";
// import { DETAIL_GAP } from "@/constants/constants";


export const getListHealthAreasByZone = selector({
    key: HEALTH_AREAS_KEYS.GET_HEALTH_AREAS_BY_PROPS_STATE,
    get: async ({ get }) => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, keyResource: HEALTH_AREAS_KEYS.GET_HEALTH_AREAS_BY_PROPS_STATE, }
        const zoneSanteId = get(currentZoneSanteIDState)
        const { token } = get(userAuthenticatedState)
        if (zoneSanteId === null) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: new Error("res is undefined"),
                message: "zoneSanteId is null, data not found"
            }
            return resData
        };
        const res = await getAPI<IFetchData<IHealthArea[]> | undefined>(`listair/${zoneSanteId}`, token);
        if (res instanceof Error || res === undefined) {
            resData = {
                ...resData,
                success: false,
                data: [],
                error: new Error("res is undefined"),
                message: "Opps, something went wrong, please try again."
            }
            return resData
        }
        resData = {
            ...resData,
            success: true,
            data: res?.data?.data ?? [],
            error: null,
            message: "",
        }
        return resData
    },
});
export const currentHalthAreaIDState = atom<string | null>({
    key: HEALTH_AREAS_KEYS.CURRENT_HEALTH_AREA_ID_STATE,
    default: null,
});
interface IFilter {
    statusItem: {
        value: string | "ALL",
        metaData: {}
    },
    provinceId: {
        value: string | "ALL",
        metaData: {}
    },
    territoryId: {
        value: string | "ALL",
        metaData: {}
    },
    zoneSanteId: {
        value: string | "ALL",
        metaData: {}
    },
    airSanteId: {
        value: string | "ALL",
        metaData: {}
    },
    structureSanteId: {
        value: string | "ALL",
        metaData: {}
    },
    epidemYear: {
        value: number | "ALL",
        metaData: {}
    },
    epidemWeek: {
        value: number | "ALL",
        metaData: {}
    },
    maladieId: {
        value: string | "ALL",
        metaData: {}
    },
}
const FILTER: IFilter = {
    statusItem: {
        value: "ALL",
        metaData: {}
    },
    provinceId: {
        value: "ALL",
        metaData: {}
    },
    territoryId: {
        value: "ALL",
        metaData: {}
    },
    zoneSanteId: {
        value: "ALL",
        metaData: {}
    },
    airSanteId: {
        value: "ALL",
        metaData: {}
    },
    structureSanteId: {
        value: "ALL",
        metaData: {}
    },
    epidemYear: {
        value: "ALL",
        metaData: {}
    },
    epidemWeek: {
        value: "ALL",
        metaData: {}
    },
    maladieId: {
        value: "ALL",
        metaData: {}
    },
}


interface IResumeItemsByStatus {
    noValidated: number
    validated: number
    answered: number
}
interface IPopulation {
    population: number;
    pop_deplace: number;
    pop_site: number;
    pop_retourne: number;
    pop_eloigne: number;
    pop_vulnerable: number;
    pop_handicap: number;
    pop_retournes: number;
    pin: number//  pop_deplace + pop_retournees + pop_retournees +  pop_handicap 

}
interface IDataFilter {
    dataGaps: {
        reference: any[],
        refValited: any[],
        refUnValited: any[],
        refAnswered: any[],
        data: any[],
        meataData: {}
        lenghtGapsByStatus: IResumeItemsByStatus
        sumPopulation: IPopulation
    },
    dataAlerts: {
        reference: any[],
        refValited: any[],
        refUnValited: any[],
        refAnswered: any[],
        data: any[],
        meataData: {}
        lenghtAlertsByStatus: IResumeItemsByStatus
    },
    metaData: {}

}
export const filterDashboardState = atom<IFilter>({
    key: HEALTH_AREAS_KEYS.CURRENT_HEALTH_AREA_ID_STATE,
    default: FILTER
});

export const appyFilterDashboard = selector({
    key: "appyFilterDashboard", // TODO: FIXE THIS LATER
    get: async ({ get }) => {
        let resData: IResRecoil<any> = { ...RES_RECOIL, keyResource: HEALTH_AREAS_KEYS.GET_HEALTH_AREAS_BY_PROPS_STATE, data: {} }
        const resFilter = get(filterDashboardState)
        //STATUS
        const data: IDataFilter | any = {} // TODO: IMPROVE THIS LATER | IT MUST  CAME FROM BACKEND
        // let data: IDataFilter  // TODO: IMPROVE THIS LATER | IT MUST  CAME FROM BACKEND
        // let data: IDataFilter;
        data.dataGaps.data = [...data.dataGaps.reference]
        if (resFilter.maladieId.value !== "ALL") {
            data.dataGaps.data = filterByMaladieId(data.dataGaps.data, resFilter.maladieId.value)
        }
        else if (resFilter.epidemYear.value !== "ALL") {
            data.dataGaps.data = filterByEpidemYear(data.dataGaps.data, resFilter.epidemYear.value)
        }
        //MALADIE
        else if (resFilter.epidemWeek.value !== "ALL") {
            data.dataGaps.data = filterByEpidemWeek(data.dataGaps.data, resFilter.epidemWeek.value)
        }
        //MALADIE
        else if (resFilter.provinceId.value !== "ALL") {
            data.dataGaps.data = filterByProvinceId(data.dataGaps.data, resFilter.provinceId.value)
        }
        else if (resFilter.territoryId.value !== "ALL") {
            data.dataGaps.data = filterByTerritoryId(data.dataGaps.data, resFilter.territoryId.value)
        }
        else if (resFilter.zoneSanteId.value !== "ALL") {
            data.dataGaps.data = filterByZoneId(data.dataGaps.data, resFilter.zoneSanteId.value)
        }
        //SECOND FILTER
        data.dataGaps.sumPopulation = getSumPopulation(data.dataGaps.data)
        // let resFirstFilterData = { ...data.dataGaps.data }
        resData = { ...resData, data: data, message: "success", error: null, }
        return resData
    },
});



// else if (resFilter.airSanteId.value !== "ALL") {
//     data.dataGaps.data = filterByAireSanteId(data.dataGaps.data, resFilter.airSanteId.value)
// }
// else if (resFilter.structureSanteId.value !== "ALL") {
//     data.dataGaps.data = filterByStructureId(data.dataGaps.data, resFilter.structureSanteId.value)
// }

const filterByMaladieId = (data: any, maladieId: string): any[] => {
    let resData = []
    if (data.length === 0) return []
    for (let index = 0; index < data.length; index++) {
        if (data[index].datamaladie) {
            for (let i = 0; i < data[index].datamaladie.length; index++) {
                if (data[index].datamaladie[i].maladieid === maladieId) {
                    resData.push(data[index])
                    break;
                }
            }

        }
    }
    return resData
}

const filterByEpidemYear = (data: any, annee_epid: number): any[] => {
    let resData = []
    if (data.length === 0) return []
    for (let index = 0; index < data.length; index++) {
        if (Number(data[index].annee_epid) === annee_epid) {
            resData.push(data[index])
            break;
        }
    }
    return resData
}
const filterByEpidemWeek = (data: any, week_epid: number): any[] => {
    let resData = []
    if (data.length === 0) return []
    for (let index = 0; index < data.length; index++) {
        if (Number(data[index].semaine_epid) === week_epid) {
            resData.push(data[index])
            break;
        }

    }
    return resData
}
const filterByProvinceId = (data: any, provinceId: string): any[] => {
    let resData = []
    if (data.length === 0) return []
    resData = data.filter((item: any) => item.provinceid === provinceId)
    return resData
}
const filterByTerritoryId = (data: any, territoryId: string): any[] => {
    let resData = []
    if (data.length === 0) return []
    resData = data.filter((item: any) => item.territoirid === territoryId)
    return resData
}
const filterByZoneId = (data: any, zoneId: string): any[] => {
    let resData = []
    if (data.length === 0) return []
    resData = data.filter((item: any) => item.zoneid === zoneId)
    return resData
}
const filterByAireSanteId = (data: any, aireSanteId: string): any[] => {
    let resData = []
    if (data.length === 0) return []
    resData = data.filter((item: any) => item.airid === aireSanteId)
    return resData
}
const filterByStructureId = (data: any, structureId: string): any[] => {
    let resData = []
    if (data.length === 0) return []
    resData = data.filter((item: any) => item.airid === structureId) // todo FIXME
    return resData
}

const getSumPopulation = (data: any,): IPopulation => {
    const pop = {
        population: 0,
        pop_deplace: 0,
        pop_site: 0,
        pop_retourne: 0,
        pop_eloigne: 0,
        pop_vulnerable: 0,
        pop_handicap: 0,
        pop_retournes: 0,
        pin: 0//  pop_deplace + pop_retournees + pop_retournees +  pop_handicap 
    }
    for (let index = 0; index < data.length; index++) {
        pop.population = pop.population + Number(data[index].population)
        pop.pop_deplace = pop.pop_deplace + Number(data[index].pop_deplace)
        pop.pop_site = pop.pop_site + Number(data[index].pop_site)
        pop.pop_retourne = pop.pop_retourne + Number(data[index].pop_retourne)
        pop.pop_eloigne = pop.pop_eloigne + Number(data[index].pop_eloigne)
        pop.pop_vulnerable = pop.pop_vulnerable + Number(data[index].pop_vulnerable)
        pop.pop_handicap = pop.pop_handicap + Number(data[index].pop_handicap)
        pop.pop_retournes = pop.pop_retournes + Number(data[index].pop_retournes)
    }
    pop.pin = pop.pin + pop.pop_deplace + pop.pop_retourne + pop.pop_eloigne + pop.pop_handicap
    return { ...pop }
}