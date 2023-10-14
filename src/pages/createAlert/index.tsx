import React, { Suspense, useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { SelectCommon } from "@/components/core/select";
import { Grid } from "@mui/material";
import { CommonInputGap } from "@/components/core/Inputs";
import { CommonTextareaGap } from "@/components/core/TextareaCustom";
import AlertMessage, {
  INIT_ALERT_MODEL,
  setAlertAsEmptyData,
  severityAlert,
} from "@/components/core/Alert";
import RowRadioButtonsGroup from "@/components/core/RadioGroup";
import { IStateLoading } from "@/types/stateSchema/loading";
import { ICreateAlert } from "@/types/stateSchema/alert";
import { INIT_FORM_CREATE_ALERT } from "@/constants/initForm";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { postAPI } from "@/utils/fetchData";
import { IBaseData, IFetchData } from "@/types/commonTypes";
import {
  currentHalthAreaIDState,
  currentMaladieIDState,
  currentStructureIDState,
  getMaladies,
  userAuthenticatedState,
} from "@/globalState/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CustomButton } from "@/components/core/Button";
import Pyramid from "@/components/pyramid";
import { IMaladie } from "@/types/stateSchema/maladie";
import { TexttLoading } from "@/components/skeleton";

function CreateAlert() {
  const user = useRecoilValue(userAuthenticatedState);
  const currentMaladieId = useRecoilValue(currentMaladieIDState);
  const currentStructureID = useRecoilValue(currentStructureIDState);
  const currentHalthAreaID = useRecoilValue(currentHalthAreaIDState);

  const commonClass = "border border-main-color rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const message =
    "Formulaire de notification d’alerte communautaire [Envoyez ce formulaire immédiatement à votre superviseur ou à l’établissement de santé le plus proche]";

  // MANAGER ALERT
  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL });
  const [dataAboutdead] = useState([
    { label: "OUI", value: "oui" },
    { label: "NON", value: "non" },
  ]);

  useEffect(() => {
    setAlert({ ...setAlertAsEmptyData(alert) });
  }, []);

  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    creataAlert: {
      status: false,
      msg: "",
    },
  });

  const [formCreateAlert, setFormCreateAlert] = useState<ICreateAlert>(
    INIT_FORM_CREATE_ALERT
  );
  const handleSubmitCreateAlert = async () => {
    if (currentMaladieId === null || currentHalthAreaID === null) {
      return showToast({
        msg: `Veillez selectionner la maladie ou l'aire de santé`,
        type: StatusToast.DARK,
      });
    }

    console.clear();
    console.log("formCreateAlert", formCreateAlert);

    const form_ = {
      ...formCreateAlert,
      maladieid: currentMaladieId,
      airid: currentHalthAreaID,
    };
    // VALIDATION
    // TODO: Improve later
    if (
      form_.airid.trim().length < 2 ||
      form_.name_point_focal.trim().length < 3 ||
      form_.phone.trim().length < 8 ||
      form_.date_notification.trim().length < 4 ||
      form_.datealert.trim().length < 2 ||
      form_.date_detection.trim().length < 2 ||
      form_.time_detection.trim().length < 2 ||
      form_.nbr_touche.trim().length < 2 ||
      form_.animal_malade.trim().length < 2 ||
      form_.animal_mort.trim().length < 2 ||
      form_.evenement.trim().length < 2 ||
      form_.mesure.trim().length < 5 ||
      form_.description.trim().length < 5
    ) {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creataAlert", lKey: "status" },
          true
        )
      );
      const { data } = await postAPI<IFetchData<IBaseData>, ICreateAlert>(
        "alert/sendAlert",
        form_,
        user.token
      );

      if (data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "creataAlert", lKey: "status" },
            false
          )
        );

        showToast({
          msg: `l'alert ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
        // setFormCreateAlert({ ...INIT_FORM_CREATE_ALERT });
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creataAlert", lKey: "status" },
          false
        )
      );
      return showToast({
        msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG} | ${
          (error as any as unknown as Error).message
        }`,
        type: StatusToast.ERROR,
      });
    }
  };

  return (
    <div className="">
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Création d'une alerte"} />
      </div>
      <AlertMessage
        severity={severityAlert.INFO}
        message={{
          title: "Information",
          description: message,
        }}
        openAlert={true}
        closeAlert={() => setAlert({ ...INIT_ALERT_MODEL })}
        width={98}
      />

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <section className="mx-3">
            <div className={commonClassSection}>
              <LastHeading title={"Info. sur la localisation"} />
              <Pyramid />
              <div className="flex flex-wrap justify-between px-5  gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Point focal"
                  pl="..."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      name_point_focal: e.target.value,
                    })
                  }
                  value={formCreateAlert.name_point_focal}
                  // type="s"
                  // classNameHoverCard=" border-main-color"
                />

                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Telephone du point focal"
                  pl="..."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      phone: e.target.value,
                    })
                  }
                  value={formCreateAlert.phone}
                />
              </div>
            </div>
            {/* =========================== POPULATION =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={"Type de maladie / d’affection / d’événement"}
              />
              <div className="px-5">
                <Suspense fallback={<TexttLoading />}>
                  <SelectMaladie />
                </Suspense>

                <CommonTextareaGap
                  titleTooltip={
                    "Type de maladie / d’affection / d’événement/de signal (veuillez décrire) "
                  }
                  required={true}
                  label="Description"
                  pl="eg: ..."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      description: e.target.value,
                    })
                  }
                  value={formCreateAlert.description}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Date de la notification"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      date_notification: e.target.value,
                    })
                  }
                  value={formCreateAlert.date_notification}
                  type="date"
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== PERSONNEL =========================== */}
            <div className={commonClassSection}>
              <LastHeading title={"Informations"} />

              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Quand cela s’est-il produit(date : jour/mois/année)"
                  pl="..."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      datealert: e.target.value,
                    })
                  }
                  value={formCreateAlert.datealert}
                  type="date"
                  // classNameHoverCard=" border-main-color"
                />

                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  type="number"
                  label="Quand cela s’est-il produit: Heure"
                  pl="ex:10"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      timealert: e.target.value,
                    })
                  }
                  value={formCreateAlert.timealert}
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  required={true}
                  label="Date de la détection (jour/mois/année)"
                  type="date"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      date_detection: e.target.value,
                    })
                  }
                  value={formCreateAlert.date_detection}
                />
                <CommonInputGap
                  required={true}
                  label="Heure de la détection"
                  pl="ex: 14"
                  type="number"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      time_detection: e.target.value,
                    })
                  }
                  value={formCreateAlert.time_detection}
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                {/* <CommonSelectGap
                  // data={provinces}
                  titleTooltip={
                    "Où cela s’est-il produit ? (lieu : communauté, / sous-Zone de santé, Zone de santé) "
                  }
                  data={provinces}
                  required={true}
                  keyObject="label"
                  label="Où cela s’est-il produit ?"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                /> */}
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Combien de personnes ont-elles été touchées"
                  pl="..."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      nbr_touche: e.target.value,
                    })
                  }
                  value={formCreateAlert.nbr_touche}
                />
              </div>
            </div>
            {/* ---------------------------------------- */}

            <div className={commonClassSection}>
              <LastHeading title={"Informations concernant les décès"} />

              <div className="flex flex-wrap justify-between px-5 gap-5">
                <RowRadioButtonsGroup
                  label="Y a-t-il eu des pers. décedées ?"
                  required={true}
                  dataItems={dataAboutdead}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      dece_disponible: e.target.value as "OUI" | "NON",
                    })
                  }
                />

                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
                  required={true}
                  label="Si oui , combien ?"
                  pl="..."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      nbr_dece: e.target.value,
                    })
                  }
                  value={formCreateAlert.nbr_dece}
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <RowRadioButtonsGroup
                  label="Y a-t-il eu des animaux malades"
                  required={true}
                  dataItems={dataAboutdead}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      animal_malade: e.target.value as "OUI" | "NON",
                    })
                  }
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
                  required={true}
                  label="Si oui,Combien"
                  pl="..."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      nb_animal_malade: e.target.value,
                    })
                  }
                  value={formCreateAlert.nb_animal_malade}
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <RowRadioButtonsGroup
                  label="Y a-t-il eu des animaux morts"
                  required={true}
                  dataItems={dataAboutdead}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      animal_mort: e.target.value as "OUI" | "NON",
                    })
                  }
                  // value={formCreateAlert.nb_animal_mort}
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
                  required={true}
                  label="Si oui,Combien"
                  pl="..."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      nb_animal_mort: e.target.value,
                    })
                  }
                  value={formCreateAlert.nb_animal_mort}
                />
              </div>
            </div>

            {/* -------------------------------MEUREE------------------------------------- */}

            <div className={commonClassSection}>
              <LastHeading title={"Informations concernant les mesures"} />
              <div className="px-5">
                <RowRadioButtonsGroup
                  label="L’événement est-il en cours au moment de la présente notification"
                  required={true}
                  dataItems={dataAboutdead}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      evenement: e.target.value as "OUI" | "NON",
                    })
                  }
                />
              </div>
              <div className="px-5">
                <CommonTextareaGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label="Quelle mesure a-t-elle été prise "
                  pl="..."
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormCreateAlert({
                      ...formCreateAlert,
                      mesure: e.target.value,
                    })
                  }
                  value={formCreateAlert.mesure}
                  classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            <div className="btn p-3 flex justify-end ">
              <CustomButton
                onClick={handleSubmitCreateAlert}
                statusLoading={infoLoading.creataAlert.status}
                disabled={infoLoading.creataAlert.status}
                label="Enregistrer"
                className="ml-auto  rounded-md"
              />
            </div>
          </section>
        </Grid>
      </Grid>
    </div>
  );
}

export default CreateAlert;

function SelectMaladie() {
  const allMaladies = useRecoilValue(getMaladies) as unknown as IMaladie[];
  const setCurrentMaladieIDState = useSetRecoilState(currentMaladieIDState);

  return (
    <div>
      <SelectCommon
        data={allMaladies}
        label="Selectionner le type de maladie"
        keyObject="name"
        onChange={setCurrentMaladieIDState}
        value={"..."}
        required={true}
      />
    </div>
  );
}
