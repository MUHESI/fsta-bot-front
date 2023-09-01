import React, { useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { CommonSelectGap } from "@/components/core/select";
import { Grid } from "@mui/material";
import { CommonInputGap } from "@/components/core/Inputs";
import { CommonTextareaGap } from "@/components/core/TextareaCustom";
import { provinces } from "@/constants/constants";
import { TOOLTIP_GAP_FORM } from "./tooltips";
import AlertMessage, {
  INIT_ALERT_MODEL,
  setAlertAsEmptyData,
  severityAlert,
} from "@/components/core/Alert";
import RowRadioButtonsGroup from "@/components/core/RadioGroup";

function CreateAlert() {
  const commonClass = "border border-main-color rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const message =
    "Formulaire de notification d’alerte communautaire [Envoyez ce formulaire immédiatement à votre superviseur ou à l’établissement de santé le plus proche]";

  // MANAGER ALERT
  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL });

  useEffect(() => {
    setAlert({ ...setAlertAsEmptyData(alert) });
  }, []);

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
              <LastHeading title={"Informations basiques"} />
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  titleTooltip={
                    "Nom du point focal de la SBC faisant la notification"
                  }
                  required={true}
                  label="Nom du point focal de la SBC"
                  pl="eg: Entrer le nom de l'organisation"
                  onChange={() => console.log("first")}
                  value={"NORD-KIVU"}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  required={true}
                  label="Numéro de téléphone"
                  pl="eg:+243 998799306"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonSelectGap
                  data={provinces}
                  // titleTooltip={TOOLTIP_GAP_FORM.TYPE_HEALHP_STRUCTURE}
                  required={true}
                  keyObject="label"
                  label="Selectionner la communauté"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label="Zone de santé"
                  pl="eg: Entrer le nom de l'organisation"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== POPULATION =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={"Type de maladie / d’affection / d’événement"}
              />
              <div className="px-5">
                <CommonTextareaGap
                  titleTooltip={
                    "Type de maladie / d’affection / d’événement/de signal (veuillez décrire) "
                  }
                  required={true}
                  label="Type de maladie"
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Date de la notification"
                  // pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
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
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  type="date"
                  // classNameHoverCard=" border-main-color"
                />

                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Quand cela s’est-il produit: Heure"
                  pl="eg:14H00"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Date de la détection (jour/mois/année)"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  type="date"
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Heure de la détection"
                  pl="eg:14H00"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonSelectGap
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
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Combien de personnes ont-elles été touchées"
                  pl="eg:1500"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
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
                  dataItems={[
                    { label: "OUI", value: true },
                    { label: "NON", value: false },
                  ]}
                />

                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
                  required={true}
                  label="Si oui , combien ?"
                  pl="eg: 20"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <RowRadioButtonsGroup
                  label="Y a-t-il eu des animaux malades"
                  required={true}
                  dataItems={[
                    { label: "OUI", value: true },
                    { label: "NON", value: false },
                  ]}
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
                  required={true}
                  label="Si oui,Combien"
                  pl="eg: 20"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <RowRadioButtonsGroup
                  label="Y a-t-il eu des animaux morts"
                  required={true}
                  dataItems={[
                    { label: "OUI", value: true },
                    { label: "NON", value: false },
                  ]}
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
                  required={true}
                  label="Si oui,Combien"
                  pl="eg: 20"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>

            {/* -------------------------------MEUREE------------------------------------- */}

            <div className={commonClassSection}>
              <LastHeading title={"Informations concernant les mesures"} />
              <div className="px-5">
                <CommonTextareaGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label=" L’événement est-il en cours au moment de la présente notification"
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonTextareaGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label="Quelle mesure a-t-elle été prise "
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            <div className="btn p-3 flex justify-end ">
              <Button
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
      {/* <div className="flex flex-wrap p-5 gap-2">
        <section className="flex-2 flex-grow-0 flex-shrink-0 w-[30%] h-450 hover:text-scale-110">
          <h1 className="text-sm text-center text-gray-400"> Uplaod LOGO</h1>
        </section>
       
      </div> */}
    </div>
  );
}

export default CreateAlert;
