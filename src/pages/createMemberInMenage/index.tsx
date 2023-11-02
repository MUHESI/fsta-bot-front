import React, { useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { CommonSelectGap } from "@/components/core/select";
import { Grid } from "@mui/material";
import { CommonInputGap } from "@/components/core/Inputs";
import { provinces } from "@/constants/constants";
import AlertMessage, {
  INIT_ALERT_MODEL,
  setAlertAsEmptyData,
  severityAlert,
} from "@/components/core/Alert";
import CreateMenage from "../createMenage";
import DialogCustom from "@/components/core/DialogCustom";

function AddMemberInMenage() {
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
      <div className="p-1 flex justify-between text-main-color-dark">
        <LastHeading title={"Ajout d'un memebre dans un ménage"} />
        <DialogCustom
          mainBtnOptions={{
            btnText: "Nouveau menage",
            useBtn: true,
          }}
          mainTitle="Création d'un menage"
          width="sm"
        >
          <CreateMenage />
        </DialogCustom>
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
              <LastHeading title={"Telechargement de la photo"} />
              <div className="flex flex-wrap justify-between items-center  px-5 gap-5">
                <div className="flex flex-wrap  items-center  px-5 gap-5">
                  <section className="flex-2  flex-grow-0 flex-shrink-0 w-[200px] h-450 hover:text-scale-110">
                    <h1 className="text-sm flex items-center justify-center text-center text-gray-400 h-[100px] border">
                      Uplaod LOGO
                    </h1>
                  </section>
                  <div className="btn p-3 flex justify-end">
                    <Button
                      variant="primary"
                      style={{ border: "1px solid #2DAEC4" }}
                      className="ml-auto  rounded-md"
                    >
                      Enregistrer
                    </Button>
                  </div>
                </div>
                <div className="h-[100px] border w-[200px]"> </div>
              </div>
            </div>
            <div className={commonClassSection}>
              <LastHeading title={"Informations basiques"} />
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonSelectGap
                  data={provinces}
                  required={true}
                  keyObject="label"
                  label="Selectionner le menage"
                  onChange={() => console.log("first")}
                  value={""}
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  required={true}
                  label="Nom"
                  pl="..."
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  required={true}
                  label="Post-nom"
                  pl="..."
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  required={true}
                  label="Prénom"
                  pl="..."
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  required={true}
                  label="Sexe"
                  pl="..."
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
                  label="Femme enceinte ?"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonSelectGap
                  data={provinces}
                  // titleTooltip={TOOLTIP_GAP_FORM.TYPE_HEALHP_STRUCTURE}
                  required={true}
                  keyObject="label"
                  label="Femme allaitante ?"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== POPULATION =========================== */}
            <div className={commonClassSection}>
              <LastHeading title={"Informations concernant les parents"} />
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Nom du père"
                  // pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  type="date"
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Nom de la mère"
                  // pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  type="date"
                  // classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  required={true}
                  label="Addresse"
                  // pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  type="string"
                />
                <CommonInputGap
                  required={true}
                  label="Origine"
                  // pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  type="string"
                />
              </div>
            </div>
            {/* =========================== PERSONNEL =========================== */}
            <div className={commonClassSection}>
              <LastHeading title={"Autres informations"} />
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  required={true}
                  label="Lieu de naissance"
                  // pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  type="string"
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  required={true}
                  label="Date de naissance"
                  // pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  type="date"
                  // classNameHoverCard=" border-main-color"
                />
              </div>

              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  required={true}
                  label="Calendrier vaccinal"
                  // pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  type="string"
                  // classNameHoverCard=" border-main-color"
                />

                <CommonSelectGap
                  data={provinces}
                  // titleTooltip={TOOLTIP_GAP_FORM.TYPE_HEALHP_STRUCTURE}
                  required={true}
                  keyObject="label"
                  label="critère de vulnerabilité"
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
                  label="Habilitation"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonSelectGap
                  data={provinces}
                  // titleTooltip={TOOLTIP_GAP_FORM.TYPE_HEALHP_STRUCTURE}
                  required={true}
                  keyObject="label"
                  label="Probleme de santé spécifique"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5 gap-5">
                <CommonSelectGap
                  data={provinces}
                  // titleTooltip={TOOLTIP_GAP_FORM.TYPE_HEALHP_STRUCTURE}
                  required={true}
                  keyObject="label"
                  label="Dors sous moustiquaire"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
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
    </div>
  );
}

export default AddMemberInMenage;
