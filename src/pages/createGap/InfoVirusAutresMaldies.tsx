import React, { useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { HandleFormArrayOfObject } from "@/services/stateHandler/formDataArrayHandler";
import { CommonInputGap } from "@/components/core/Inputs";
import { ICrise } from "@/types/stateSchema/crise";
import { CommonSelectGap } from "@/components/core/select";
import { ITypePersonnel } from "@/types/stateSchema/typePersonnel";
import { CustomButton } from "@/components/core/Button";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useRecoilState } from "recoil";
import { createGap } from "@/globalState/atoms";

function InfoVirusAutresMaldies() {
  const commonClass = "border border-main-color rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const [formGap, setFormGap] = useRecoilState(createGap);

  // const [typePersonels, setTypePersonels] = useState<ITypePersonnel[]>([]);

  // useEffect(() => {
  //   setTypePersonels(dataTypePersonels);
  // }, []);

  return (
    <div>
      <div className={commonClassSection}>
        <LastHeading
          className="border-l-4 border-main-color pl-1"
          title={"Informations sur les virus et autres maladies"}
        />
        <div className="flex flex-wrap justify-between px-5 gap-5">
          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM}
            required={true}
            label="COVID-19"
            pl="eg:200"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                covid19_nbrcas: Number(e.target.value),
              });
            }}
            value={formGap.covid19_nbrcas}
          />
          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM.MORTALITY_UNDER_5_YEARS}
            required={true}
            label="Nombre Test Covid-19"
            pl="eg:200"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                covid19_nbrtest: Number(e.target.value),
              });
            }}
            value={formGap.covid19_nbrtest}
          />
          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM}
            required={true}
            label="Vaccin Covid-19 disponible"
            pl="eg:200"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                covid19_vacciDispo: Number(e.target.value),
              });
            }}
            value={formGap.covid19_vacciDispo}
          />
        </div>
        <div className="flex flex-wrap justify-between px-5 gap-5">
          <CommonInputGap
            // titleTooltip={
            //   TOOLTIP_GAP_FORM.POURCENTAGE_OF_PEOPLE_WHICH_HAVE_ACCESS_WATER_PROTECTED
            // }
            required={true}
            label="% des menages accès à une source d'eau protegée"
            pl="eg:200"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                pourcentCleanWater: Number(e.target.value),
              });
            }}
            value={formGap.pourcentCleanWater}
          />
          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM.MORTALITY_UNDER_5_YEARS}
            required={true}
            label="Malnutrition Aigue sevère"
            pl="eg:200"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                malnutrition: Number(e.target.value),
              });
            }}
            value={formGap.malnutrition}
          />
        </div>
      </div>
    </div>
  );
}

export default InfoVirusAutresMaldies;
