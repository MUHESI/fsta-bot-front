import { atom, selector, selectorFamily } from "recoil";
import { ICreateGap, IGap } from "../../types/stateSchema/gap";
import { GAPS_KEYS, SCORE_CARD_KEYS } from "../keys";
import { getAPI } from "../../utils/fetchData";
import { IFetchData } from "../../types/commonTypes";
import { userAuthenticatedState } from './auth';
import { currentProvinceIDState } from './province'
import { INIT_FORM_CREATE_GAP } from "@/constants/initForm";


export const getAllGaps = selector({
    key: GAPS_KEYS.GET_GAPS,
    get: async ({ get }) => {
        const { token } = get(userAuthenticatedState)
        const provinceId = get(currentProvinceIDState)
        // TODO: Type this correctly  later
        let res: any = {}
        if (provinceId === null) {
            res = await getAPI<IFetchData<IGap[]> | undefined>('gap/listgap', token);
        }
        else {
            res = await getAPI<IFetchData<IGap[]> | undefined>(`gap/listgap_province/${provinceId}`, token);
        }
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            return res?.data?.data ?? []
        }
    },
});

export const currentGapIDState = atom<string | null>({
    key: GAPS_KEYS.CURRENT_GAP_ID_STATE,
    default: null,
});

export const getInfoGap = selectorFamily({
    key: GAPS_KEYS.GET_INFO_GAP,
    get: params => async () => {
        let { idGap, token } = params as { idGap: string, token: string }
        const res = await getAPI<any>(`gap/detailgap/${idGap}`, token);
        if (res === undefined) {
            return { error: new Error('res is undefined') }
        } else if (res instanceof Error) {
            return { error: res }
        } else {
            return res?.data?.data
        }
    },
});

export const createGap = atom<ICreateGap>({
    key: GAPS_KEYS.CREATE_GAP,
    default: {
        ...INIT_FORM_CREATE_GAP
    }
})

export const currentItemValidateGap = atom<any | {}>({
    key: GAPS_KEYS.CURRENT_ITEM_VALIDATE_GAP,
    // default: {
    //     ...INIT_FORM_CREATE_GAP
    // }
    default: {}
})



//SCORE GARD
export const createScoreCard = atom<ICreateGap>({
    key: SCORE_CARD_KEYS.CREATE_SCORE_CARD,
    default: {
        ...INIT_FORM_CREATE_GAP
    }
})

const getIdIndicateurs = (indicateurs: any[]): string[] => {
    let idInicateurId: string[] = []
    if (indicateurs.length === 0) return []
    for (let index = 0; index < indicateurs.length; index++) {
        idInicateurId.push(indicateurs[index].id)
    }
    return idInicateurId
}

// TODO: Type this correctly, move this later
export const preProcessGap = (ItemGap: any) => {

    //
    let gap = { ...ItemGap }
    let datapopulationeloigne = gap.datapopulation_eloigne
    //
    // console.log('datapopulationeloigne', datapopulationeloigne)

    let datamedocid = []
    for (let index = 0; index < gap.datamedicament.length; index++) {
        datamedocid.push(gap.datamedicament[index].medocid)
    }
    // console.log('datamedocid', datamedocid)
    let datapartenaireid = []
    for (let index = 0; index < gap.datapartenaire.length; index++) {
        const allindicateur = gap.datapartenaire[index]?.partenaire?.allindicateur || []
        console.log('allindicateur', allindicateur)
        datapartenaireid.push({
            ...gap.datapartenaire[index],
            email: gap.datapartenaire[index].contact_point_facal,
            datatindicateur: getIdIndicateurs(allindicateur),
        })
        // datapartenaireid.push([])
    }
    // console.log('datapartenaireid', datapartenaireid)
    // SUITE1
    gap.equipement = gap.suite1.equipement
    gap.etat_infra = gap.suite1.etat_infra
    gap.nbr_lit = gap.suite1.nbr_lit
    gap.pop_eloigne = gap.suite1.pop_eloigne
    gap.pop_vulnerable = gap.suite1.pop_vulnerable
    // let { id, bloc1id, created_at, deleted,
    //     status, etat_top, suite2, updated_at,
    //     ...resSuite1 } = gap.suite1
    // SUITE2
    let { id, bloc2id, created_at, deleted,
        status, etat_top, suite2, updated_at,
        ...resSuite2 } = gap.suite1.suite2
    gap = { ...gap, ...resSuite2 }
    // console.log('resSuite2', resSuite2)
    //
    let datatypepersonnel = []
    for (let index = 0; index < gap.datatypepersonnel.length; index++) {
        datatypepersonnel.push({
            ...gap.datatypepersonnel[index],
            typepersonnelid: gap.datatypepersonnel[index].personnelid,
        })
    }
    //TODO: MISSING
    // gap.dateReportage = gap.date_reportage
    // gap.pop_retournes = gap.pop_retournes
    gap = {
        ...gap,
        datapopulationeloigne,
        datamedocid,
        datapartenaireid,
        datatypepersonnel,
    }
    return { ...gap }

    // TODO TO DELTE
    // gap.barriere = gap.suite1.suite2.barriere
    // gap.cout_accouchemen = gap.suite1.suite2.cout_accouchemen
    // gap.cout_ambulatoire = gap.suite1.suite2.cout_ambulatoire
    // gap.cout_cesarienne = gap.suite1.suite2.cout_cesarienne
    // gap.cout_hospitalisation = gap.suite1.suite2.cout_hospitalisation
    // gap.couvertureDtc3 = gap.suite1.suite2.couvertureDtc3
    // gap.pourcentCleanWater = gap.suite1.suite2.pourcentCleanWater
    // gap.pop_handicap = gap.suite1.suite2.pop_handicap
    // gap.mortaliteLessfiveyear = gap.suite1.suite2.mortaliteLessfiveyear
    // gap.malnutrition = gap.suite1.suite2.malnutrition
    // gap.covid19_vacciDispo = gap.suite1.suite2.covid19_vacciDispo
    // gap.covid19_nbrtest = gap.suite1.suite2.covid19_nbrtest
    // gap.covid19_nbrdeces = gap.suite1.suite2.covid19_nbrdeces
    // gap.covid19_nbrcas = gap.suite1.suite2.malnutrition
    // gap.taux_occupation = gap.suite1.suite2.taux_occupation
}