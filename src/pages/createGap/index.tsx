import React, { Suspense, useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { Grid } from "@mui/material";
import { CommonInputGap } from "@/components/core/Inputs";
import { CommonTextareaGap } from "@/components/core/TextareaCustom";
import { TOOLTIP_GAP_FORM } from "./tooltips";
import SkeletonAnimation from "@/components/skeleton";
import Pyramid from "@/components/pyramid";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  createGap,
  currentHalthAreaIDState,
  currentMaladieIDState,
  currentProvinceIDState,
  currentStructureIDState,
  currentTerritoryIDState,
  currentZoneSanteIDState,
  userAuthenticatedState,
} from "@/globalState/atoms";
import { ICrise } from "@/types/stateSchema/crise";
import { IStateLoading } from "@/types/stateSchema/loading";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { IFetchData } from "@/types/commonTypes";
import { getAPI, postAPI } from "@/utils/fetchData";
import { ITypePersonnel } from "@/types/stateSchema/typePersonnel";
import { IIndication } from "@/types/stateSchema/indication";
import MedicamenetEnRuptureStock from "./MedicamenetEnRuptureStock";
import { IMaladie } from "@/types/stateSchema/maladie";
import InfoTypeCrise from "./InfoTypeCrise";
import InfoPersonnel from "./InfoPersonnel";
import NombreCasMaladiesContextLocal from "./NombreCasMaladiesContextLocal";
import InfoVirusAutresMaldies from "./InfoVirusAutresMaldies";
import InfoPartenaires from "./InfoPartenaires";
import { IOrganization } from "@/types/stateSchema/organization";
import { IMedicament } from "@/types/stateSchema/medicament";
import { ICreateGap } from "@/types/stateSchema/gap";

function CreateGap() {
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    loadtypesCrise: {
      status: false,
      msg: "",
    },
    loadMaladies: {
      status: false,
      msg: "",
    },
    loadTypePersonnel: {
      status: false,
      msg: "",
    },
    loadOrganizations: {
      status: false,
      msg: "",
    },
    loadMedocs: {
      status: false,
      msg: "",
    },
    createGap: {
      status: false,
      msg: "",
    },
  });

  const user = useRecoilValue(userAuthenticatedState);
  const currentProvinceId = useRecoilValue(currentProvinceIDState);
  const currentStructureID = useRecoilValue(currentStructureIDState);
  const currentHalthAreaID = useRecoilValue(currentHalthAreaIDState);
  const currentTerritoryId = useRecoilValue(currentTerritoryIDState);
  const currentZoneSanteId = useRecoilValue(currentZoneSanteIDState);
  const [formGap, setFormGap] = useRecoilState(createGap);

  const getAllTypeCrises = async () => {
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadtypesCrise", lKey: "status" },
          true
        )
      );
      const res = await getAPI<IFetchData<ICrise[]> | undefined>(
        "crise/list",
        user.token
      );

      if (res?.data) {
        setCrises(res?.data?.data);
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "creataAlert", lKey: "status" },
            false
          )
        );
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creataAlert", lKey: "status" },
          false
        )
      );
    }
  };
  const getAllMaldies = async () => {
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadMaladies", lKey: "status" },
          true
        )
      );
      const res = await getAPI<IFetchData<ICrise[]> | undefined>(
        "maladie/list",
        user.token
      );

      if (res?.data) {
        setMaladies(res?.data?.data);
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "loadMaladies", lKey: "status" },
            false
          )
        );
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadMaladies", lKey: "status" },
          false
        )
      );
    }
  };
  const getTypesPersonnel = async () => {
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadTypePersonnel", lKey: "status" },
          true
        )
      );
      const res = await getAPI<IFetchData<ICrise[]> | undefined>(
        "personnel/list",
        user.token
      );

      if (res?.data) {
        setTypePersonels(res?.data?.data);
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "loadTypePersonnel", lKey: "status" },
            false
          )
        );
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadTypePersonnel", lKey: "status" },
          false
        )
      );
    }
  };
  const getPartenaires = async () => {
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadTypePersonnel", lKey: "status" },
          true
        )
      );
      const res = await getAPI<IFetchData<ICrise[]> | undefined>(
        "personnel/list",
        user.token
      );

      if (res?.data) {
        setTypePersonels(res?.data?.data);
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "loadTypePersonnel", lKey: "status" },
            false
          )
        );
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadTypePersonnel", lKey: "status" },
          false
        )
      );
    }
  };
  const getIndicateurs = async () => {
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadTypePersonnel", lKey: "status" },
          true
        )
      );
      const res = await getAPI<IFetchData<IIndication[]> | undefined>(
        "liste_indicateur",
        user.token
      );

      if (res?.data) {
        setIndicateurs(res?.data?.data);
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "loadTypePersonnel", lKey: "status" },
            false
          )
        );
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadTypePersonnel", lKey: "status" },
          false
        )
      );
    }
  };
  const getMedicaments = async () => {
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadMedocs", lKey: "status" },
          true
        )
      );
      const res = await getAPI<IFetchData<IOrganization[]> | undefined>(
        "medicament/list",
        user.token
      );

      if (res?.data) {
        setMedicaments(res?.data?.data);
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "loadMedocs", lKey: "status" },
            false
          )
        );
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadMedocs", lKey: "status" },
          false
        )
      );
    }
  };
  const getOrganizations = async () => {
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadOrganizations", lKey: "status" },
          true
        )
      );
      const res = await getAPI<IFetchData<IOrganization[]> | undefined>(
        "list_org",
        user.token
      );

      if (res?.data) {
        setOrganizations(res?.data?.data);
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "loadOrganizations", lKey: "status" },
            false
          )
        );
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadOrganizations", lKey: "status" },
          false
        )
      );
    }
  };

  const commonClass = "border border-main-color rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;

  // TODO Improve later
  // const [dataSelected, setDataSelected] = useState<any[]>([]);
  const [crises, setCrises] = useState<ICrise[]>([]);

  //========ABOUT MALDIES==========
  // TODO Improve later
  const [maladies, setMaladies] = useState<IMaladie[]>([]);
  const [typePersonels, setTypePersonels] = useState<ITypePersonnel[]>([]);
  const [indicateurs, setIndicateurs] = useState<IIndication[]>([]);
  const [organizations, setOrganizations] = useState<IOrganization[]>([]);
  const [medicaments, setMedicaments] = useState<IMedicament[]>([]);

  useEffect(() => {
    getAllTypeCrises();
    getAllMaldies();
    getTypesPersonnel();
    getIndicateurs();
    getPartenaires();
    getOrganizations();
    getMedicaments();
  }, []);

  const handleSubmit = async () => {
    const form = {
      ...formGap,
      airid: currentHalthAreaID || "",
      structureid: currentStructureID || "",
      provinceid: currentProvinceId || "",
      territoirid: currentTerritoryId || "",
      zoneid: currentZoneSanteId || "",
    };
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "createGap", lKey: "status" },
          true
        )
      );
      const { data } = await postAPI<IFetchData<ICreateGap>, ICreateGap>(
        "gap/sendGap",
        { ...form },
        user.token
      );
      console.clear();
      console.log("data", data);

      if (data) {
        // setTypePersonels(res?.data?.data);
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "createGap", lKey: "status" },
            false
          )
        );
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "createGap", lKey: "status" },
          false
        )
      );
    }
  };
  return (
    <div className="">
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Remonter le GAP"} />
        <p className="text-sm text-gray-400 ml-5">
          Entrer toutes les informations importantes ici
        </p>
      </div>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <section className="mx-3">
            <div className={commonClassSection}>
              <LastHeading title={"Informations basiques"} />

              <div className="px-5">
                <CommonTextareaGap
                  titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label="Titre de gap"
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <Suspense fallback={<SkeletonAnimation className="px-5" />}>
                <Pyramid />
              </Suspense>
            </div>
            {/* =========================== POPULATION =========================== */}
            <div className={commonClassSection}>
              <LastHeading title={"Informations sur la population"} />

              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Population de l'aire"
                  pl="eg:200"
                  onChange={(e) => {
                    setFormGap({
                      ...formGap,
                      population: Number(e.target.value),
                    });
                  }}
                  value={formGap.population}
                  // classNameHoverCard=" border-main-color"
                />

                <CommonInputGap
                  titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
                  required={true}
                  label="Population déplacée"
                  pl="eg: 2000"
                  onChange={(e) => {
                    setFormGap({
                      ...formGap,
                      pop_deplace: Number(e.target.value),
                    });
                  }}
                  value={formGap.pop_deplace}
                />
                <CommonInputGap
                  titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
                  required={true}
                  label="Population retournée"
                  pl="eg: 2000"
                  onChange={(e) => {
                    setFormGap({
                      ...formGap,
                      pop_retourne: Number(e.target.value),
                      pop_retournes: Number(e.target.value),
                    });
                  }}
                  value={formGap.pop_retourne}
                />
              </div>
            </div>
            {/* =========================== PERSONNEL =========================== */}
            <div className={commonClassSection}>
              <LastHeading title={"Autres informations"} />

              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Semaine épidemiologique"
                  pl="eg:1"
                  onChange={(e) => {
                    setFormGap({
                      ...formGap,
                      semaine_epid: Number(e.target.value),
                    });
                  }}
                  value={formGap.semaine_epid}
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Année épidemiologique"
                  pl="eg:2023"
                  onChange={(e) => {
                    setFormGap({
                      ...formGap,
                      annee_epid: Number(e.target.value),
                    });
                  }}
                  value={formGap.annee_epid}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  required={true}
                  label="Date du reportage"
                  type="date"
                  pl="eg:2023"
                  onChange={(e) => {
                    setFormGap({
                      ...formGap,
                      dateReportage: e.target.value,
                    });
                  }}
                  value={formGap.dateReportage}
                />
              </div>
            </div>
            <InfoTypeCrise dataCrises={crises} />
            {/* =========================== POP. ELOIGNEES DELA STRUCTURE DE SANTE =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={"Population éloignée de la Structure de santé "}
              />

              <div className="px-5">
                <CommonTextareaGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label="Barrières d'accès aux soins de santé"
                  pl="eg: ..."
                  onChange={(e) => {
                    setFormGap({
                      ...formGap,
                      barriere: Number(e.target.value),
                    });
                  }}
                  value={formGap.barriere}
                  classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== MEDICAMENTS EN RUPTURE =========================== */}
            <MedicamenetEnRuptureStock dataMedicaments={medicaments} />
            {/* =========================personnel==jkl======================== */}

            <InfoPersonnel dataTypePersonels={typePersonels} />

            <NombreCasMaladiesContextLocal dataMaladies={maladies} />
            {/* ================ INFOS SUR VIRUS ET AUTRES MALADIES  ================ */}
            <InfoVirusAutresMaldies />

            {/* ================ Informations sur les partenaires ================ */}
            <InfoPartenaires
              dataOrganizations={organizations}
              dataIndicateurs={indicateurs}
              dataPartenaires={typePersonels}
            />
            <div className="btn p-3 flex justify-end ">
              <Button
                onClick={() => {
                  handleSubmit();
                  console.clear();
                  console.log("formGap", formGap);
                }}
                variant="primary"
                style={{ border: "1px solid #2DAEC4" }}
                className="ml-auto  rounded-md"
              >
                Enregistrer
              </Button>
            </div>
          </section>
        </Grid>
      </Grid>
    </div>
  );
}
export default CreateGap;
