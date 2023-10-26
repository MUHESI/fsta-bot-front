import React, { useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import DialogCustom from "@/components/core/DialogCustom";
import { HandleFormArrayOfObject } from "@/services/stateHandler/formDataArrayHandler";
import { CustomChipBtn } from "@/components/core/CustomChipBtn";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { CommonInputGap } from "@/components/core/Inputs";
import { ICrise } from "@/types/stateSchema/crise";
import { CommonSelectGap } from "@/components/core/select";
import { CommonTextareaGap } from "@/components/core/TextareaCustom";
import { useRecoilState, useRecoilValue } from "recoil";
import { createGap, currentItemValidateGap } from "@/globalState/atoms";
import { useParams } from "react-router";
import { GAP_ACTIONS_STATUS } from "@/types/stateSchema/gap";

function InfoTypeCrise({ dataCrises }: { dataCrises: ICrise[] }) {
  const { statusAction } = useParams();

  const commonClass = "border border-main-color rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;

  const [formGap, setFormGap] = useRecoilState(createGap);

  const [dataSelected, setDataSelected] = useState<any[]>([]);
  const [crises, setCrises] = useState<ICrise[]>([]);

  //
  const removeItemFromDataToSelect = (item: any) => {
    const newDataToSelect = HandleFormArrayOfObject.deleteItem(crises, item);
    setCrises(newDataToSelect);
    const newDataSelected = HandleFormArrayOfObject.AddItem(dataSelected, item);
    setDataSelected(newDataSelected);
    handleDataCrises(newDataSelected);
  };
  //
  const removeItemFromDataSelected = (item: any) => {
    const newDataSelected = HandleFormArrayOfObject.deleteItem(
      dataSelected,
      item
    );
    setDataSelected(newDataSelected);
    const newDataToSelect = HandleFormArrayOfObject.AddItem(crises, item);
    setCrises(newDataToSelect);
    handleDataCrises(newDataSelected);
  };

  useEffect(() => {
    setCrises(dataCrises);
  }, [dataCrises]);

  const handleDataCrises = (data: { id: string }[]) => {
    let dataCrises: string[] = [];
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        dataCrises.push(data[i].id);
      }
      return setFormGap({
        ...formGap,
        datacriseid: dataCrises,
      });
    }
  };

  // FOR VALIDATE_GAP
  const formValidateGap = useRecoilValue(currentItemValidateGap);
  useEffect(() => {
    if (
      statusAction === GAP_ACTIONS_STATUS.VALIDATE_GAP &&
      Object.keys(formValidateGap).length > 0 &&
      formValidateGap.allcrise.length > 0
    ) {
      let dataCrises_ = [];
      for (let index = 0; index < formValidateGap.allcrise.length; index++) {
        dataCrises_.push(formValidateGap.allcrise[index].crise);
      }
      setDataSelected(dataCrises_);
    }
  }, [formValidateGap]);

  return (
    <div>
      <div className={commonClassSection}>
        <LastHeading title={"Informations sur le type de crise"} />

        <div className="flex flex-wrap justify-between px-5 gap-5">
          <DialogCustom
            btnText="Type des crises"
            mainTitle="Selectionner les type de crises"
            width="sm"
          >
            <div
              data-testId="create-province"
              className="px-5 m-5 border rounded-md gap-5"
            >
              <CustomChipBtn
                label="Selectionner les types de crises"
                data={crises}
                saveData={removeItemFromDataToSelect}
                required={true}
                keyObject={"name"}
              >
                <AiFillPlusCircle />
              </CustomChipBtn>
            </div>
            <div
              data-testId="create-province"
              className="px-5 m-5 border rounded-md gap-5"
            >
              <CustomChipBtn
                data={dataSelected}
                keyObject={"name"}
                label="Les types de crise selectionnés"
                saveData={removeItemFromDataSelected}
                className="text-sm"
              >
                <AiFillCloseCircle />
              </CustomChipBtn>
            </div>
          </DialogCustom>
        </div>
        <div
          data-testId="create-province"
          className="px-5 m-5 border rounded-md gap-5"
        >
          <CustomChipBtn
            data={dataSelected}
            keyObject={"name"}
            label="Les types de crise selectionnés"
            saveData={removeItemFromDataSelected}
            className="text-sm"
          >
            <AiFillCloseCircle />
          </CustomChipBtn>
        </div>
        <div className="flex flex-wrap justify-between px-5 gap-5">
          <CommonSelectGap
            data={[
              { id: "NON DETRUITE", label: "NON DETRUITE" },
              { id: "DETRUITE", label: "DETRUITE" },
            ]}
            // titleTooltip={TOOLTIP_GAP_FORM.TYPE_HEALHP_STRUCTURE}
            required={true}
            keyObject="label"
            label="Etat de la structure"
            onChange={(value: string) => {
              setFormGap({
                ...formGap,
                etat_infra: value as "DETRUITE" | "NON DETRUITE",
              });
            }}
            value={formGap.etat_infra}
            typeByDefault={
              Object.keys(formValidateGap).length === 0
                ? null
                : {
                    label: formGap.etat_infra,
                    value: formGap.etat_infra,
                  }
            }

            // classNameHoverCard=" border-main-color"
          />
        </div>
        <div className="px-5">
          <CommonTextareaGap
            // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
            required={true}
            label="Equipements(Etat. disponibles, volés ou Gap.)"
            pl="eg: ..."
            onChange={(e) => {
              setFormGap({
                ...formGap,
                equipement: e.target.value,
              });
            }}
            value={formGap.equipement}
            classNameHoverCard=" border-main-color"
          />
        </div>
        <div className="flex flex-wrap justify-between px-5 gap-5">
          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
            required={true}
            label="Nombre des lits"
            pl="eg: 20"
            type="number"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                taux_occupation: e.target.value,
              });
            }}
            value={formGap.taux_occupation}
          />
          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
            required={true}
            label="Taux d'occupation"
            pl="eg: 50"
            type="number"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                nbr_lit: Number(e.target.value),
              });
            }}
            value={formGap.nbr_lit}
            // classNameHoverCard=" border-main-color"
          />
          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
            required={true}
            label="Nombre des RECO actifs"
            pl="eg: 50"
            type="number"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                nbr_reco: Number(e.target.value),
              });
            }}
            value={formGap.nbr_reco}
          />
        </div>
        <div className="flex flex-wrap justify-between px-5 gap-5">
          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
            required={true}
            label="Population handicapée"
            pl="eg: 20"
            type="number"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                pop_handicap: Number(e.target.value),
              });
            }}
            value={formGap.pop_handicap}
          />
          <CommonInputGap
            required={true}
            label="Population vulnerable"
            pl="eg: 50"
            type="number"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                pop_vulnerable: Number(e.target.value),
              });
            }}
            value={formGap.pop_vulnerable}
            // classNameHoverCard=" border-main-color"
          />
          <CommonInputGap
            required={true}
            label="Population éloignée "
            pl="eg: 50"
            type="number"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                pop_eloigne: Number(e.target.value),
              });
            }}
            value={formGap.pop_eloigne}
            // classNameHoverCard=" border-main-color"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoTypeCrise;
