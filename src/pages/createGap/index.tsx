import React, { Suspense, useEffect, useState } from "react";
import { LastHeading, SecondHeading } from "@/components/core/Heading";
import { CommonInputGap } from "@/components/core/Inputs";
import { CommonTextareaGap } from "@/components/core/TextareaCustom";
import { TOOLTIP_GAP_FORM } from "./tooltips";
import SkeletonAnimation from "@/components/skeleton";
import Pyramid from "@/components/pyramid";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  createGap,
  currentHalthAreaIDState,
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
import { GAP_ACTIONS_STATUS, ICreateGap } from "@/types/stateSchema/gap";
import CustomStepper from "@/components/core/CustomStepper";
import { CustomButton } from "@/components/core/Button";
import { useNavigate, useParams } from "react-router";
import AlertMessage, {
  INIT_ALERT_MODEL,
  severityAlert,
} from "@/components/core/Alert";
import { motion } from "framer-motion";
import { StatusToast, showToast } from "@/components/core/ToastAlert";
import { INIT_FORM_CREATE_GAP } from "@/constants/initForm";

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
  const navigate = useNavigate();

  // RECOIL
  const user = useRecoilValue(userAuthenticatedState);
  const currentProvinceId = useRecoilValue(currentProvinceIDState);
  const currentStructureID = useRecoilValue(currentStructureIDState);
  const currentHalthAreaID = useRecoilValue(currentHalthAreaIDState);
  const currentTerritoryId = useRecoilValue(currentTerritoryIDState);
  const currentZoneSanteId = useRecoilValue(currentZoneSanteIDState);
  const [formGap, setFormGap] = useRecoilState(createGap);

  //
  const { statusAction, idGap } = useParams();

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
    // TODO:: VALIDATION
    if (
      currentHalthAreaID === "" ||
      currentStructureID === "" ||
      currentProvinceId === "" ||
      currentTerritoryId === ""
    ) {
      return showToast({
        msg: `Remplissez tous les champs récquis`,
        type: StatusToast.DARK,
      });
    }
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

      if (data) {
        setGapCreatedStatus(true);
        setIdGagCreated(data?.data?.id || "");
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "createGap", lKey: "status" },
            false
          )
        );
        setFormGap(INIT_FORM_CREATE_GAP);
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
  const [activeStep, setActiveStep] = React.useState(0);
  const [gapCreatedStatus, setGapCreatedStatus] = React.useState(false);
  const [idGagCreated, setIdGagCreated] = React.useState<null | string>(null);

  return (
    <div className="">
      {statusAction ? (
        <ShowMainTilleGapAction
          statusAction={statusAction as GAP_ACTIONS_STATUS}
        />
      ) : (
        "Fix this issue : title missed"
      )}
      <div className="flex flex-wrap justify-center px-5 gap-5">
        <CustomStepper
          handleNextStep={() =>
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
          }
          handlePreviousStep={() =>
            setActiveStep((prevActiveStep) => prevActiveStep - 1)
          }
          currentStep={activeStep}
          stepsLabel={[
            "Addresse, pop., crises",
            "Médic. en rupture, personnels",
            "Maladies, Virus, partenaires",
          ]}
        >
          <div className=" ">
            {activeStep === 0 && (
              <section>
                <div className={commonClassSection}>
                  <LastHeading
                    className="border-l-4 border-main-color pl-1"
                    title={"Informations basiques col"}
                  />
                  <Suspense fallback={<SkeletonAnimation className="px-5" />}>
                    <Pyramid />
                  </Suspense>
                </div>
                {/* =========================== POPULATION =========================== */}
                <div className={commonClassSection}>
                  <LastHeading
                    className="border-l-4 border-main-color pl-1"
                    title={"Informations sur la population"}
                  />

                  <div className="flex flex-wrap justify-between px-5 gap-5">
                    <CommonInputGap
                      // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
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
                <div className={commonClassSection}>
                  <LastHeading
                    className="border-l-4 border-main-color pl-1"
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
              </section>
            )}
            {activeStep === 1 && (
              <section>
                <MedicamenetEnRuptureStock dataMedicaments={medicaments} />
                <InfoPersonnel dataTypePersonels={typePersonels} />
              </section>
            )}
            {activeStep === 2 && (
              <section>
                <NombreCasMaladiesContextLocal dataMaladies={maladies} />
                <InfoVirusAutresMaldies />
                <InfoPartenaires
                  dataOrganizations={organizations}
                  dataIndicateurs={indicateurs}
                  dataPartenaires={typePersonels}
                />
                <motion.div
                  animate={
                    gapCreatedStatus ? { height: "fit-content" } : { height: 0 }
                  }
                >
                  {gapCreatedStatus && <ShowAletForGapCreated />}
                </motion.div>

                <div className="btn p-3 flex justify-end ">
                  {!gapCreatedStatus ? (
                    <CustomButton
                      onClick={() => handleSubmit()}
                      statusLoading={infoLoading.createGap.status}
                      disabled={infoLoading.createGap.status}
                      label="Enregistrer"
                      className="ml-auto  rounded-md"
                    />
                  ) : (
                    <CustomButton
                      onClick={() =>
                        navigate(`/gaps/score-card/create/${idGagCreated}`)
                      }
                      label="Créer le score card"
                      className="ml-auto  rounded-md"
                    />
                  )}
                </div>
              </section>
            )}
          </div>
        </CustomStepper>
      </div>

      {/* <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <section className="mx-3"></section>
        </Grid>
      </Grid> */}
    </div>
  );
}
export default CreateGap;

function ShowMainTilleGapAction({
  statusAction,
}: {
  statusAction: GAP_ACTIONS_STATUS;
}) {
  return (
    <div className="p-1 text-center text-main-color-dark mb-2">
      {statusAction === GAP_ACTIONS_STATUS.CREATE_GAP && (
        <>
          <SecondHeading title={"Remonter le GAP"} />
          <p className="text-sm text-gray-400 ml-5">
            Entrer toutes les informations importantes ici
          </p>
        </>
      )}
      {statusAction === GAP_ACTIONS_STATUS.VALIDATE_GAP && (
        <>
          <SecondHeading title={"Valider le GAP"} />
          <p className="text-sm text-gray-400 ml-5">
            Entrer toutes les informations importantes ici
          </p>
        </>
      )}
    </div>
  );
}

function ShowAletForGapCreated() {
  const message =
    "La création de ce gap a été créé avec succès. Vous pouvez cliquer sur le bouton ci-dessous pour créer le scorecard qui y est associé.";

  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL });

  return (
    <div>
      <AlertMessage
        severity={severityAlert.SUCCESS}
        message={{
          title: alert.message.title,
          description: message,
        }}
        openAlert={true}
        closeAlert={() => setAlert({ ...INIT_ALERT_MODEL })}
        width={98}
        //
      />
    </div>
  );
}
