import { ICreateGap } from "@/types/stateSchema/gap"
import { z } from "zod"

export const fStep_GapSchema = z.object({
    //PYRAMID
    orgid: z.string().min(5),
    // provinceid: z.string().min(5),
    // zoneid: z.string().min(5),
    // territoirid: z.string().min(5),
    // airid: z.string().min(5),
    // structureid: z.string().min(5),

    //
    population: z.number(),
    pop_deplace: z.number(),
    pop_retourne: z.number(),
    pop_retournes: z.number(),
    semaine_epid: z.number(),
    annee_epid: z.number(),
    dateadd: z.string({ description: "please specify the date of creeation" }).min(3),
    barriere: z.number(),
    //
})

export const secondStep_GapSchema = z.object({
    //MEDOCS
    // datamedocid: z.array(z.Schema({})),
    cout_ambulatoire: z.number(),
    cout_hospitalisation: z.number(),
    cout_accouchement: z.number(),
    cout_cesarienne: z.number(),
    mortaliteLessfiveyear: z.number(),

    //PERSONNELS
    // datatypepersonnel: z.array(),

})

export const thrirdStep_GapSchema = z.object({
    //MEDOCS
    // datamaladie: z.array(),
    //COVID
    covid19_nbrcas: z.string(),
    covid19_nbrtest: z.string(),
    covid19_vacciDispo: z.string(),
    pourcentCleanWater: z.string(),
    malnutrition: z.string(),
    // PARTENAIRS
    // datapartenaireid: z.array()
})

interface ResZod {
    success: boolean, dataError: {
        issues: { path: string, message: string }[],
        arrayIssues: string[],
        arrayIssuesString: string


    } | null
}
export const validateSteps = {
    first: (form: ICreateGap,): ResZod => {
        try {
            fStep_GapSchema.parse(form)
            return {
                success: true, dataError: null
            }
        } catch (error: any) {
            const { issues, arrayIssues, arrayIssuesString } = formatErrors(error)
            return {
                success: false, dataError: {
                    issues,
                    arrayIssues,
                    arrayIssuesString
                }
            }
        }
    },
    second: (form: ICreateGap,): ResZod => {
        try {
            secondStep_GapSchema.parse(form)
            return {
                success: true, dataError: null
            }
        } catch (error: any) {
            const { issues, arrayIssues, arrayIssuesString } = formatErrors(error)
            return {
                success: false, dataError: {
                    issues,
                    arrayIssues,
                    arrayIssuesString
                }
            }
        }
    },
    third: (form: ICreateGap,): ResZod => {
        try {
            thrirdStep_GapSchema.parse(form)
            return {
                success: true, dataError: null
            }
        } catch (error: any) {
            const { issues, arrayIssues, arrayIssuesString } = formatErrors(error)
            return {
                success: false, dataError: {
                    issues,
                    arrayIssues,
                    arrayIssuesString
                }
            }
        }
    },
}

const formatErrors = (error: any): {
    issues: { path: string, message: string }[],
    arrayIssues: string[],
    arrayIssuesString: string

} => {
    const issues = error.issues.map((issue: any) => ({
        path: issue.path.join("."),
        message: issue.message,
    }));
    const arrayIssues = issues.map((issue: any) => `${issue.path}: ${issue.message}`)
    const arrayIssuesString = arrayIssues.join(" | ")
    return {
        issues,
        arrayIssues,
        arrayIssuesString

    }
}

