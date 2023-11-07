import { atom, selector } from "recoil";
import { IHealthArea } from "../../types/stateSchema/healthArea";
import { HEALTH_AREAS_KEYS, } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData, IResRecoil } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { currentZoneSanteIDState } from './zoneSante'
// import { dashobard_getAllGaps } from './gap'
import { RES_RECOIL } from "@/constants/initForm";
import { handleDate } from "@/helpers/handleDate";
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
        value: "ALL", // THYPHOIDE
        metaData: {}
    },
}


interface IResumeItemsByStatus {
    noValidated: number
    validated: number
    answered: number
}
export interface IPopulation {
    population: number;
    pop_deplace: number;
    pop_site: number;
    pop_retourne: number;
    pop_eloigne: number;
    pop_vulnerable: number;
    pop_handicap: number;
    pin: number//  pop_deplace + pop_retournees + pop_retournees +  pop_handicap 

}

interface ILineData {
    currentMonth: number
    dataMonth: number[]
    dataAxisValidated: number[],
    dataAxisNoValidated: number[],
    dataAxisAnswered: number[],
}
export interface IDataFilter {
    dataGaps: {
        reference: any[],
        refValidated: any[],
        refUnValidated: any[],
        refAnswered: any[],
        data: any[],
        meataData: {}
        lenghtGapsByStatus: IResumeItemsByStatus
        sumPopulation: IPopulation
        lineData: ILineData,
        dataFiltered: {
            unValidated: any[],
            validated: any[],
            answered: any[],
        }
    },
    dataAlerts?: {
        reference: any[],
        refValidated: any[],
        refUnValidated: any[],
        refAnswered: any[],
        data: any[],
        meataData: {}
        lenghtAlertsByStatus: IResumeItemsByStatus
    },
    metaData: {}
}
const INIT_DataFilter: IDataFilter = {
    dataGaps: {
        reference: [],
        refValidated: [],
        refUnValidated: [],
        refAnswered: [],
        data: [],
        meataData: {},
        dataFiltered: {
            unValidated: [],
            validated: [],
            answered: [],
        },
        lenghtGapsByStatus: {
            noValidated: 0,
            validated: 0,
            answered: 0,
        },
        lineData: {
            currentMonth: 0,
            dataMonth: [],
            dataAxisValidated: [],
            dataAxisNoValidated: [],
            dataAxisAnswered: [],
        },
        sumPopulation: {
            population: 0,
            pop_deplace: 0,
            pop_site: 0,
            pop_retourne: 0,
            pop_eloigne: 0,
            pop_vulnerable: 0,
            pop_handicap: 0,
            // pop_retournes: 0,
            pin: 0,//  pop_deplace + pop_retournees + pop_retournees +  pop_handicap 
        }
    },

    metaData: {}

}
export const filterDashboardState = atom<IFilter>({
    key: HEALTH_AREAS_KEYS.CURRENT_HEALTH_AREA_ID_STATE,
    default: FILTER
});

interface IArgAppyFilterDashboard {
    resFilter: IFilter,
    resDBLocal: {
        reference: any[];
        refValidated: any[];
        refUnValidated: any[];
        refAnswered: any[];
    }
}

export const appyFilter_ = ({ resFilter, dataToFilter }: { dataToFilter: any[], resFilter: IFilter }): IDataFilter => {

    const data: IDataFilter = { ...INIT_DataFilter } // TODO: IMPROVE THIS LATER | IT MUST  CAME FROM BACKEND

    data.dataGaps.data = [...dataToFilter]
    // console.log('==dataToFilter==', dataToFilter)

    if (resFilter.maladieId.value !== "ALL") {
        data.dataGaps.data = filterByMaladieId(data.dataGaps.data, resFilter.maladieId.value)
    }
    if (resFilter.epidemYear.value !== "ALL") {
        data.dataGaps.data = filterByEpidemYear(data.dataGaps.data, Number(resFilter.epidemYear.value))
    }
    //  MALADIE
    if (resFilter.epidemWeek.value !== "ALL") {
        data.dataGaps.data = filterByEpidemWeek(data.dataGaps.data, Number(resFilter.epidemWeek.value))
    }
    //MALADIE
    if (resFilter.provinceId.value !== "ALL") {
        data.dataGaps.data = filterByProvinceId(data.dataGaps.data, resFilter.provinceId.value)
    }
    if (resFilter.territoryId.value !== "ALL") {
        data.dataGaps.data = filterByTerritoryId(data.dataGaps.data, resFilter.territoryId.value)
    }
    if (resFilter.zoneSanteId.value !== "ALL") {
        data.dataGaps.data = filterByZoneId(data.dataGaps.data, resFilter.zoneSanteId.value)
    }
    // console.log('REF', resDBLocal.reference)
    // console.log('AFTER FILTER', data.dataGaps.data)
    // console.log('++data++', data.dataGaps.data.length)
    return { ...data }
};

export const appyFilter = ({ resFilter, dataToFilter }: { dataToFilter: any[], resFilter: IFilter }): any[] => {

    // let data: IDataFilter = { ...INIT_DataFilter } // TODO: IMPROVE THIS LATER | IT MUST  CAME FROM BACKEND

    let data = [...dataToFilter]
    // console.log('==dataToFilter==', dataToFilter)

    if (resFilter.maladieId.value !== "ALL") {
        data = filterByMaladieId(data, resFilter.maladieId.value)
    }
    if (resFilter.epidemYear.value !== "ALL") {
        data = filterByEpidemYear(data, Number(resFilter.epidemYear.value))
    }
    //  MALADIE
    if (resFilter.epidemWeek.value !== "ALL") {
        data = filterByEpidemWeek(data, Number(resFilter.epidemWeek.value))
    }
    //MALADIE
    if (resFilter.provinceId.value !== "ALL") {
        data = filterByProvinceId(data, resFilter.provinceId.value)
    }
    if (resFilter.territoryId.value !== "ALL") {
        data = filterByTerritoryId(data, resFilter.territoryId.value)
    }
    if (resFilter.zoneSanteId.value !== "ALL") {
        data = filterByZoneId(data, resFilter.zoneSanteId.value)
    }
    // console.log('REF', resDBLocal.reference)
    // console.log('AFTER FILTER', data.dataGaps.data)
    // console.log('++data++', data.dataGaps.data.length)
    return [...data]
};
export const appyFilterDashboard = ({ resFilter, resDBLocal }: IArgAppyFilterDashboard): IDataFilter => {
    // get: async ({ get }) => {
    let resData: IResRecoil<any> = { ...RES_RECOIL, keyResource: HEALTH_AREAS_KEYS.GET_HEALTH_AREAS_BY_PROPS_STATE, data: {} }


    const data: IDataFilter = { ...INIT_DataFilter } // TODO: IMPROVE THIS LATER | IT MUST  CAME FROM BACKEND
    // let data: IDataFilter  // TODO: IMPROVE THIS LATER | IT MUST  CAME FROM BACKEND
    console.clear()

    data.dataGaps.data = [...resDBLocal.reference]
    // console.clear()
    console.log('resDBLocal.refAnswered||', resDBLocal.refUnValidated.length)


    const resGap_valited = appyFilter({ resFilter, dataToFilter: resDBLocal.refValidated })
    const resGap_answered = appyFilter({ resFilter, dataToFilter: resDBLocal.refAnswered })
    const resGap_unvalited = appyFilter({ resFilter, dataToFilter: resDBLocal.refUnValidated })

    data.dataGaps.dataFiltered.unValidated = [...resGap_unvalited]
    data.dataGaps.dataFiltered.validated = [...resGap_valited]
    data.dataGaps.dataFiltered.answered = [...resGap_answered]
    // console.log('data.dataGaps.dataFiltered', data.dataGaps.dataFiltered)
    // const { lenghtAlertsByStatus, lenghtGapsByStatus } = getLenghtItemsByStatus({ dataAlerts, dataGaps })

    const lenghtGapsByStatus: IResumeItemsByStatus = {
        noValidated: resGap_unvalited.length,
        validated: resGap_valited.length,
        answered: resGap_answered.length,
    }
    const lenghtAlertsByStatus: IResumeItemsByStatus = {
        // noValidated: data.dataAlerts.refUnValidated.length,
        // validated: data.dataAlerts.refValidated.length,
        // answered: data.dataAlerts.refAnswered.length,
        noValidated: 0,
        validated: 0,
        answered: 0,
    }


    // const resGap_ref = appyFilter({ resFilter, dataToFilter: resDBLocal.reference })

    // console.log('REF', resDBLocal.reference)
    // console.log('AFTER FILTER', data.dataGaps.data)
    // console.log('resGap_unvalited||', resGap_unvalited.dataGaps.data)
    // console.log('resGap_valited', resGap_valited.dataGaps.data.length)
    // console.log('resGap_answered', resGap_answered.dataGaps.data.length)
    //
    // console.log('resGap_unvalited||', resGap_unvalited.length)
    // console.log('resGap_valited', resGap_valited.length)
    // console.log('resGap_valited', resGap_valited)
    // console.log('resGap_answered', resGap_answered)
    console.log('lenghtGapsByStatus', lenghtGapsByStatus)
    data.dataGaps.lenghtGapsByStatus = lenghtGapsByStatus

    //CHART
    let lineDataGaps = { ...data.dataGaps.lineData }
    const tabsMonth = handleDate.getMonths()
    lineDataGaps.dataMonth = tabsMonth
    lineDataGaps.currentMonth = handleDate.currentMonth
    lineDataGaps.dataAxisNoValidated = getDataChart(resGap_unvalited, tabsMonth)
    lineDataGaps.dataAxisValidated = getDataChart(resGap_valited, tabsMonth)
    // lineDataGaps.dataAxisAnswered = getDataChart(resGap_answered, tabsMonth)
    lineDataGaps.dataAxisAnswered = [0, 0, 0, 0, 0, 0, 3, 1, 2, 3, 5]
    data.dataGaps.lineData = lineDataGaps
    console.log('lineDataGaps', lineDataGaps)
    console.log('tabsMonth', tabsMonth)

    //SECOND FILTER
    data.dataGaps.sumPopulation = getSumPopulation(resGap_unvalited)
    // let resFirstFilterData = { ...data.dataGaps.data }
    resData = { ...resData, data: data, message: "success", error: null, }
    return data
    // },
};

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
            for (let i = 0; i < data[index].datamaladie.length; i++) {
                if (data[index].datamaladie[i].maladieid === maladieId) {
                    resData.push(data[index])
                    break;
                }
            }

        }
        // resData.push(data[index])
    }
    return resData
}

const filterByEpidemYear = (data: any, annee_epid: number): any[] => {
    let resData = []
    if (data.length === 0) return []
    for (let index = 0; index < data.length; index++) {
        if (Number(data[index].annee_epid) === annee_epid) {
            resData.push(data[index])
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

export const INIT_POPULATION_FORM: IPopulation = {
    population: 0,
    pop_deplace: 0,
    pop_site: 0,
    pop_retourne: 0,
    pop_eloigne: 0,
    pop_vulnerable: 0,
    pop_handicap: 0,
    pin: 0//  pop_deplace + pop_retournees + pop_retournees +  pop_handicap 
}

export const getSumPopulation = (data: any[],): IPopulation => {
    let pop = { ...INIT_POPULATION_FORM }

    for (let index = 0; index < data.length; index++) {
        pop.population = pop.population + Number(data[index].population)
        pop.pop_deplace = pop.pop_deplace + Number(data[index].pop_deplace)
        pop.pop_site = pop.pop_site + Number(data[index].pop_site)
        pop.pop_retourne = pop.pop_retourne + Number(data[index].pop_retourne)
        pop.pop_eloigne = pop.pop_eloigne + Number(data[index]?.suite1?.pop_eloigne)
        pop.pop_vulnerable = pop.pop_vulnerable + Number(data[index].suite1?.pop_vulnerable)
        pop.pop_handicap = pop.pop_handicap + Number(data[index].suite1?.suite2?.pop_handicap)
        // pop.pop_retournes = pop.pop_retournes + Number(data[index].pop_retournes)
    }
    pop.pin = pop.pin + pop.pop_deplace + pop.pop_retourne + pop.pop_eloigne + pop.pop_handicap
    return { ...pop }
}
const getDataChart = (data: any[], tabsMonth: number[]): number[] => {
    // const tabsMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // const tabsMonth = handleDate.getMonths()
    let res: number[] = new Array(tabsMonth.length).fill(0)
    for (let index = 0; index < tabsMonth.length; index++) {
        for (let i = 0; i < data.length; i++) {
            const { month, success } = formatDataCreationGapAlert(data[i])

            // console.log('success', success)
            // console.log('month', month)
            if (success && month === tabsMonth[index]) {
                res[index] = res[index] + 1
            }
        }
    }
    return [...res]
}

// TODO FIX THIS lATER
const formatDataCreationGapAlert = (item: any): {
    year: number,
    month: number,
    day: number
    success: boolean
} => {
    let res = {
        year: 0,
        month: 0,
        day: 0,
        success: false
    }
    let date__ = item.dateadd || "2023-"
    const datetab = date__.split("-")
    if (datetab.length !== 3) return res
    return {
        year: Number(datetab[0]),
        month: Number(datetab[1]),
        day: Number(datetab[2]),
        success: true

    }
}


export interface IDataLenghtItemsByStatus {
    dataGaps: {
        refValidated: any[],
        refUnValidated: any[],
        refAnswered: any[],

    },
    dataAlerts: {
        refValidated: any[],
        refUnValidated: any[],
        refAnswered: any[],
    },
}
const getLenghtItemsByStatus = (data: IDataLenghtItemsByStatus): {
    lenghtGapsByStatus: IResumeItemsByStatus,
    lenghtAlertsByStatus: IResumeItemsByStatus
} => {

    const lenghtGapsByStatus: IResumeItemsByStatus = {
        noValidated: data.dataGaps.refUnValidated.length,
        validated: data.dataGaps.refValidated.length,
        answered: data.dataGaps.refAnswered.length,
    }
    const lenghtAlertsByStatus: IResumeItemsByStatus = {
        noValidated: data.dataAlerts.refUnValidated.length,
        validated: data.dataAlerts.refValidated.length,
        answered: data.dataAlerts.refAnswered.length,
    }
    return { lenghtAlertsByStatus, lenghtGapsByStatus }
}
