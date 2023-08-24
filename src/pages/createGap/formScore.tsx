import React from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { Grid } from "@mui/material";
import { CommonInputGap } from "@/components/core/Inputs";
import { GAP_SCORE_CARD_LABELS, TOOLTIP_GAP_FORM } from "./tooltips";

function CreateScoreCard() {
  // TODO: Improve this later

  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;

  return (
    <div className="">
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Création de formulaire GAP partie score"} />
      </div>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <section className="mx-3">
            {/* =========================== POPULATION =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={
                  "Informations sur les contact des personnes qui rapportent"
                }
              />

              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  titleTooltip={
                    TOOLTIP_GAP_FORM.ESTABLISHMENT_HAS_PF_OR_PCI_WITH_RESPONSIBILITY
                  }
                  required={true}
                  label="    L’établissement a un PF  d’hygiène/PCI "
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                />

                <CommonInputGap
                  titleTooltip={
                    TOOLTIP_GAP_FORM.TDR_AVAILABLE_AND_THE_PF_KNOWS_IT
                  }
                  required={true}
                  label="TDR disponible"
                  pl="eg: 2000"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  titleTooltip={
                    TOOLTIP_GAP_FORM.TEMP_AND_SYMPTOMS_OF_MVE_ARE_VERIFIED
                  }
                  required={true}
                  label="TDR disponible"
                  pl="eg: 2000"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== TRIAGE EN PLACE =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={GAP_SCORE_CARD_LABELS.TWO_TRIAGE_EN_PLACE.mainTitle}
              />

              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  titleTooltip={GAP_SCORE_CARD_LABELS.TWO_TRIAGE_EN_PLACE.key_1}
                  required={true}
                  label="Température et symptômes de MVE vérifiés"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />

                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
                  required={true}
                  label="Fiche de triage et registre disponibles"
                  pl="eg: 2000"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  titleTooltip={GAP_SCORE_CARD_LABELS.TWO_TRIAGE_EN_PLACE.key_3}
                  required={true}
                  label="Util. correcte de la fiche et du registre de triage"
                  pl="eg: 2000"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== IDENTIFICATION DE LA ZONE D’ISOLEMENT. =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={GAP_SCORE_CARD_LABELS.THREE_IDENTIF_ZONE.mainTitle}
              />
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <CommonInputGap
                  titleTooltip={GAP_SCORE_CARD_LABELS.THREE_IDENTIF_ZONE.key_1}
                  required={true}
                  label="Zone bien identifiée et à l’écart des autres unités"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  titleTooltip={GAP_SCORE_CARD_LABELS.THREE_IDENTIF_ZONE.key_2}
                  required={true}
                  label="Toilettes dédiées dans la zone d'isolement"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
                <CommonInputGap
                  titleTooltip={GAP_SCORE_CARD_LABELS.THREE_IDENTIF_ZONE.key_3}
                  required={true}
                  label="L'espace d'isolement comprend: une station de lavage des mains, des fournitures , une zone pour mettre les EPI et une zone pour enlever les EPI"
                  pl="eg:200"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
            </div>

            {/* =========================== LAVAGE DES MAINS / STATIONS POUR L’HYGIENE DES MAINS =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={GAP_SCORE_CARD_LABELS.FOUR_LAVAGE_MAINS.mainTitle}
              />
              <div className="px-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.FOUR_LAVAGE_MAINS.key_1}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.FOUR_LAVAGE_MAINS.key_2}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.FOUR_LAVAGE_MAINS.key_3}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== DISPONIBILTE DE L'USAGE  DES EQUIPEMENTS DE PROTECTION INDIVIDUEL   =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={GAP_SCORE_CARD_LABELS.FIVE_DISP_ET_USAGE.mainTitle}
              />
              <div className="px-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.FIVE_DISP_ET_USAGE.key_1}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.FIVE_DISP_ET_USAGE.key_2}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.FIVE_DISP_ET_USAGE.key_3}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== TRIE DES DECHETS =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={GAP_SCORE_CARD_LABELS.SIX_TRIAGE_DECHETS.mainTitle}
              />
              <div className="px-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.SIX_TRIAGE_DECHETS.key_1}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.SIX_TRIAGE_DECHETS.key_2}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.SIX_TRIAGE_DECHETS.key_3}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== TRIE DES ELIMINATIONS DES DECHETS  =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={GAP_SCORE_CARD_LABELS.SEVEN_ELIM_DECHETS.mainTitle}
              />
              <div className="px-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.SEVEN_ELIM_DECHETS.key_1}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.SEVEN_ELIM_DECHETS.key_2}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.SEVEN_ELIM_DECHETS.key_3}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* =========================== FORMATION DU PERSONEL  =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={GAP_SCORE_CARD_LABELS.EIGHT_FORMATION_PERS.mainTitle}
              />
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.EIGHT_FORMATION_PERS.key_1}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.EIGHT_FORMATION_PERS.key_2}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.EIGHT_FORMATION_PERS.key_3}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* ===========================  ALERTE DES  CAS SUSPECT INTRA-HOSPITALIER (AU NIVEAU DES FOSA) =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={
                  GAP_SCORE_CARD_LABELS.NINE_ALERT_CAS_SUSPECTS_IN_HOSP
                    .mainTitle
                }
              />
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label={
                    GAP_SCORE_CARD_LABELS.NINE_ALERT_CAS_SUSPECTS_IN_HOSP.key_1
                  }
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label={
                    GAP_SCORE_CARD_LABELS.NINE_ALERT_CAS_SUSPECTS_IN_HOSP.key_2
                  }
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label={
                    GAP_SCORE_CARD_LABELS.NINE_ALERT_CAS_SUSPECTS_IN_HOSP.key_3
                  }
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* ===========================  STERILISATION =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={GAP_SCORE_CARD_LABELS.TEN_TRIAGE_EN_PLACE.mainTitle}
              />
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.TEN_TRIAGE_EN_PLACE.key_1}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.TEN_TRIAGE_EN_PLACE.key_2}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.TEN_TRIAGE_EN_PLACE.key_3}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* ===========================  BIO-NETTOYAGE DE L'ENVIROMENT DU PATIENT =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={GAP_SCORE_CARD_LABELS.ELEVEN_BIO_NETT.mainTitle}
              />
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.ELEVEN_BIO_NETT.key_1}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.ELEVEN_BIO_NETT.key_2}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.ELEVEN_BIO_NETT.key_3}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* ===========================  EXPORTATION D’UN AGENT DE SANTÉ À LA VIRUS EBOLA  =========================== */}
            <div className={commonClassSection}>
              <LastHeading
                title={GAP_SCORE_CARD_LABELS.TWELVE_EXPOS_AGENT.mainTitle}
              />
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.TWELVE_EXPOS_AGENT.key_1}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.TWELVE_EXPOS_AGENT.key_2}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label={GAP_SCORE_CARD_LABELS.TWELVE_EXPOS_AGENT.key_3}
                  pl="eg: ..."
                  onChange={() => console.log("first")}
                  value={""}
                  classNameHoverCard=" border-main-color"
                />
              </div>
            </div>
            {/* ===========================  SCORE GLOBAL ============================ */}
            <div className={commonClassSection}>
              <LastHeading title={"Information sur le score global"} />
              <div className="px-5">
                <CommonInputGap
                  required={true}
                  label="Score"
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
    </div>
  );
}

export default CreateScoreCard;
