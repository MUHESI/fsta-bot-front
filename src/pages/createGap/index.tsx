import React from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { CommonSelectGap, SelectCommon } from "@/components/core/select";
import { Grid } from "@mui/material";
import { InputCommon, CommonInputGap } from "@/components/core/Inputs";
import { CommonTextareaGap } from "@/components/core/TextareaCustom";
import { provinces } from "@/constants/constants";
import { TOOLTIP_GAP_FORM } from "./tooltips";

function CreateGap() {
  // TODO: Improve this later

  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;

  return (
    <div className="">
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Créeation de GAP"} />
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
                  label="Nom"
                  pl="eg: Entrer le nom de l'organisation"
                  onChange={() => console.log("first")}
                  value={""}
                  // classNameHoverCard=" border-main-color"
                />
              </div>

              <div className="flex flex-wrap justify-between px-5  gap-5">
                <InputCommon
                  // required={true}
                  label="Addresse mail"
                  pl="eg: cosamed@gmail.com"
                  onChange={() => console.log("first")}
                  value={""}
                />
                {/* <SelectCommon
                  data={provinces}
                  label="Selectionner le type d'org."
                  // onChange={(e) => console.log("e", e)}
                  value={"..."}
                  // type=""
                /> */}
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
            <div className={commonClassSection}>
              <LastHeading title={"Adresse de l'organisation"} />
              <div className="py-2 px-5 gap-5">
                {/* <SelectCommon
                  data={provinces}
                  label="Choisir la procince"
                  // onChange={(e) => console.log("e", e)}
                  value={"..."}
                  // type=""
                /> */}
                {/* <SelectCommon
                  data={provinces}
                  label="Selectionner la ville"
                  // onChange={(e) => console.log("e", e)}
                  value={"..."}
                  // type=""
                /> */}
                {/* <SelectCommon
                  data={provinces}
                  label="Selectionner le quartier/territoire"
                  // onChange={(e) => console.log("e", e)}
                  value={"..."}
                  // type=""
                /> */}
              </div>
            </div>
            <div className={commonClassSection}>
              <LastHeading
                title={"Information specifique au type d'organisation"}
              />
              <p className=" mx-5 text-[0.6em] font-bold border-l-4 border-main-color px-2">
                Zone de sante
              </p>
              <div className="flex flex-wrap justify-between px-5  gap-5">
                <InputCommon
                  required={true}
                  label="Nb de personnels"
                  type="number"
                  pl="eg: 30"
                  onChange={() => console.log("first")}
                  value={""}
                />
                <InputCommon
                  required={true}
                  label="Nb de infirmiers"
                  type="number"
                  pl="eg: 30"
                  onChange={() => console.log("first")}
                  value={""}
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
