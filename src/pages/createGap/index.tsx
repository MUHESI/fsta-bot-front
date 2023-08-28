import React from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { CommonSelectGap } from "@/components/core/select";
import { Grid } from "@mui/material";
import { InputCommon, CommonInputGap } from "@/components/core/Inputs";
import { CommonTextareaGap } from "@/components/core/TextareaCustom";
import { provinces } from "@/constants/constants";
import { TOOLTIP_GAP_FORM } from "./tooltips";

function CreateGap() {
  // TODO: Improve this later

  const commonClass = "border border-main-color rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;

  return (
    <div className="">
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Création de GAP"} />
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
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonSelectGap
                  data={provinces}
                  titleTooltip={TOOLTIP_GAP_FORM.TYPE_HEALHP_STRUCTURE}
                  required={true}
                  keyObject="label"
                  label="Selectionner le type"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label="Nb. pop. déplacés"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label="Nom de la structure de santé"
                  pl="eg: Entrer le nom de l'organisation"
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
                  label="Selectionner le DPS"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label="Province(DPS)"
                  pl="eg: Entrer le nom de l'organisation"
                  onChange={() => console.log("first")}
                  value={"NORD-KIVU"}
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
              <LastHeading title={"Informations sur la population"} />

              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Nb. pop. aire"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />

                <CommonInputGap
                  titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
                  required={true}
                  label="Nb. pop déplacés"
                  pl="eg: 2000"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== PERSONNEL =========================== */}
            <div className={commonClassSection}>
              <LastHeading title={"Informations sur le Nombre du personnel"} />

              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
                  required={true}
                  label="Médecin"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />

                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
                  required={true}
                  label="Infirmiers A1"
                  pl="eg: 2000"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>

              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
                  required={true}
                  label="Infirmiers A2"
                  pl="eg: 2000"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
                  required={true}
                  label="Sage femme"
                  pl="eg: 2000"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== POP. ELOIGNEES DELA STRUCTURE DE SANTE =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={
                  "Informations sur la Pop. éloignée de la Structure de santé "
                }
              />
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  titleTooltip={TOOLTIP_GAP_FORM.LOCATION_MORE_THAN_AN_HOUR}
                  required={true}
                  label="Pop. eloignée plus de 1h"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  titleTooltip={TOOLTIP_GAP_FORM.REMOTE_POPULATION}
                  required={true}
                  label="Pop. eloignée"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  titleTooltip={
                    TOOLTIP_GAP_FORM.VULNERABLE_POPULATION_UNABLE_TO_ACCESS_HEALTH_SERVICES
                  }
                  required={true}
                  label="Pop. vulnerables"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>

            {/* =========================== POP.OTHERS DEATILS =========================== */}
            <div className={commonClassSection}>
              <LastHeading title={"Autres informations"} />
              <div className="px-5">
                <CommonTextareaGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label="Equipements"
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
                  label="Etat de l'infrastructure"
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label="Taux d'occupation"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />

                <CommonInputGap
                  titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label="Barriere acces aux soins de santé"
                  pl="eg: "
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== POP. COUTS DE SOINS DE SANTE =========================== */}
            <div className={commonClassSection}>
              <LastHeading title={"Informations sur coût de soins de santé"} />
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.LOCATION_MORE_THAN_AN_HOUR}
                  required={true}
                  label="Ambulatoire"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.REMOTE_POPULATION}
                  required={true}
                  label="Hospitalisation"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.LOCATION_MORE_THAN_AN_HOUR}
                  required={true}
                  label="Accouchement"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.REMOTE_POPULATION}
                  required={true}
                  label="Cesarienne"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== COUVERTURE EN DTC =========================== */}
            <div className={commonClassSection}>
              <LastHeading title={"Informations sur couverture en DTC3"} />
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.LOCATION_MORE_THAN_AN_HOUR}
                  required={true}
                  label="Barriere acces aux soins de santé"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.LOCATION_MORE_THAN_AN_HOUR}
                  required={true}
                  label="Nb. pop. Handicap"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  titleTooltip={
                    TOOLTIP_GAP_FORM.DTP3_COVERAGE_IN_CHILDREN_UNDER_1_YEAR
                  }
                  required={true}
                  label="Couverture DTC3"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  titleTooltip={TOOLTIP_GAP_FORM.MORTALITY_UNDER_5_YEARS}
                  required={true}
                  label="Mortalité de moins de 5ans"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== Nb DS CAS MALADS =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={
                  "Informations nb. des cas maladies liée au contexte local"
                }
              />
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  titleTooltip={
                    TOOLTIP_GAP_FORM.DTP3_COVERAGE_IN_CHILDREN_UNDER_1_YEAR
                  }
                  required={true}
                  label="Choléra"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  titleTooltip={TOOLTIP_GAP_FORM.MORTALITY_UNDER_5_YEARS}
                  required={true}
                  label="Rougeole"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM}
                  required={true}
                  label="Paludisme"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.MORTALITY_UNDER_5_YEARS}
                  required={true}
                  label="Autres"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>

            {/* =========================== INFOS SUR VIRUS ET AUTRES MALADIES  =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={"Informations sur les virus et autres maladies"}
              />
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM}
                  required={true}
                  label="COVID-19"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  titleTooltip={TOOLTIP_GAP_FORM.MORTALITY_UNDER_5_YEARS}
                  required={true}
                  label="Nombre Test Covid-19"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM}
                  required={true}
                  label="Vaccin Covid-19 disponible"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  titleTooltip={
                    TOOLTIP_GAP_FORM.POURCENTAGE_OF_PEOPLE_WHICH_HAVE_ACCESS_WATER_PROTECTED
                  }
                  required={true}
                  label="% des menages accès à une source d'eau protegée"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.MORTALITY_UNDER_5_YEARS}
                  required={true}
                  label="Malnutrition Aigue sevère"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== INFOS SUR LES PARTENAIRES =========================== */}
            <div className={commonClassSection}>
              <LastHeading title={"Informations sur les partenaires"} />
              <div className="px-5">
                <CommonTextareaGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label="Partenaire présent"
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
                  label="Paquet d'appui"
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>

              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM}
                  required={true}
                  type="date"
                  label="Date de début d'intervention"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  titleTooltip={
                    TOOLTIP_GAP_FORM.POINT_FOCAL_CONTACT_IN_HEALTH_ARE
                  }
                  required={true}
                  label="Contact du point focal dans l'aire de santé"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM}
                  required={true}
                  label="Vaccin Covid-19 disponible"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  titleTooltip={
                    TOOLTIP_GAP_FORM.POURCENTAGE_OF_PEOPLE_WHICH_HAVE_ACCESS_WATER_PROTECTED
                  }
                  required={true}
                  label="% des menages accès à une source d'eau protegée"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.MORTALITY_UNDER_5_YEARS}
                  required={true}
                  label="Malnutrition Aigue sevère"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>

            <div className={commonClassSection}>
              <LastHeading title={"Information l'adresse du point focal"} />
              <p className=" mx-5 text-[0.6em] font-bold border-l-4 border-main-color px-2">
                Zone de sante
              </p>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonSelectGap
                  data={provinces}
                  titleTooltip={TOOLTIP_GAP_FORM.TYPE_HEALHP_STRUCTURE}
                  required={true}
                  keyObject="label"
                  label="Selectionner la province(DPS)"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <InputCommon
                  required={true}
                  label="Province(DPS)"
                  type="string"
                  // pl="eg: 30"
                  onChange={() => console.log("first")}
                  value={"NORD-KIVU"}
                  disabled={true}
                />
                <InputCommon
                  required={true}
                  label="Zone de santé"
                  type="string"
                  // pl="eg: 30"
                  onChange={() => console.log("first")}
                  value={"NORD-KIVU"}
                  disabled={true}
                />
              </div>
              <div className="flex flex-wrap justify-between px-5  gap-5">
                <InputCommon
                  required={true}
                  label="Nb de sage femmes"
                  type="number"
                  pl="eg: 30"
                  onChange={() => console.log("first")}
                  value={""}
                />
                <InputCommon
                  required={true}
                  label="Nb de lits"
                  type="number"
                  pl="eg: 30"
                  onChange={() => console.log("first")}
                  value={""}
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

export default CreateGap;
