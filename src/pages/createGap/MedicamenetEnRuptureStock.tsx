import React, { useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import DialogCustom, {
  commonClassNameBtnLastBtnDialog,
} from "@/components/core/DialogCustom";
import { IMaladie } from "@/types/stateSchema/maladie";
import { HandleFormArrayOfObject } from "@/services/stateHandler/formDataArrayHandler";
import { CustomChipBtn } from "@/components/core/CustomChipBtn";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { CommonInputGap } from "@/components/core/Inputs";
import { createGap, currentItemValidateGap } from "@/globalState/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { IMedicament } from "@/types/stateSchema/medicament";
import { useParams } from "react-router";
import { GAP_ACTIONS_STATUS } from "@/types/stateSchema/gap";

function MedicamenetEnRuptureStock({
  dataMedicaments,
}: {
  dataMedicaments: IMedicament[];
}) {
  const { statusAction } = useParams();

  const commonClass = "border border-main-color rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const [formGap, setFormGap] = useRecoilState(createGap);

  const [medicaments, setMedicaments] = useState<IMedicament[]>([]);
  const [dataSelected_med, setDataSelected_med] = useState<any[]>([]);

  const removeItemFromDataToSelect_med = (item: any) => {
    const newDataToSelect = HandleFormArrayOfObject.deleteItem(
      medicaments,
      item
    );
    setMedicaments(newDataToSelect);
    const newDataSelected = HandleFormArrayOfObject.AddItem(
      dataSelected_med,
      item
    );
    setDataSelected_med(newDataSelected);
    handleDataMedocs(newDataSelected);
  };

  const removeItemFromDataSelected_med = (item: any) => {
    const newDataSelected = HandleFormArrayOfObject.deleteItem(
      dataSelected_med,
      item
    );
    setDataSelected_med(newDataSelected);
    const newDataToSelect = HandleFormArrayOfObject.AddItem(medicaments, item);
    setMedicaments(newDataToSelect);
    handleDataMedocs(newDataSelected);
  };

  useEffect(() => {
    setMedicaments(dataMedicaments);
  }, [dataMedicaments]);

  const handleDataMedocs = (data: { id: string }[]) => {
    let dataMedocs: string[] = [];
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        dataMedocs.push(data[i].id);
      }
      return setFormGap({
        ...formGap,
        datamedocid: dataMedocs,
      });
    }
  };

  // FOR VALIDATE_GAP
  const formValidateGap = useRecoilValue(currentItemValidateGap);
  useEffect(() => {
    if (
      statusAction === GAP_ACTIONS_STATUS.VALIDATE_GAP &&
      Object.keys(formValidateGap).length > 0 &&
      formValidateGap.datamedicament.length > 0
    ) {
      let dataMedicaments_ = [];
      for (
        let index = 0;
        index < formValidateGap.datamedicament.length;
        index++
      ) {
        dataMedicaments_.push(formValidateGap.datamedicament[index].medicament);
      }
      setDataSelected_med(dataMedicaments_);
    }
  }, [formValidateGap]);

  return (
    <div>
      <div className={commonClassSection}>
        <LastHeading
          className="border-l-4 border-main-color pl-1"
          title={"Médicaments en rupture de stock et cout des soins de sante"}
        />
        <div className="flex flex-wrap justify-between px-5 gap-5">
          <DialogCustom
            btnText="Medicaments en rupture"
            mainTitle="Selectionner les maladies"
            width="sm"
            lastBtnOptions={{
              btnText: "Valider",
              closeAfterAction: true,
              classNameBtn: commonClassNameBtnLastBtnDialog,
            }}
          >
            <div
              data-testId="create-province"
              className="px-5 m-5 border rounded-md gap-5"
            >
              <CustomChipBtn
                label="Selectionner les maladies"
                data={medicaments}
                saveData={removeItemFromDataToSelect_med}
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
                data={dataSelected_med}
                keyObject={"name"}
                label="Maldies selectionnées"
                saveData={removeItemFromDataSelected_med}
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
            data={dataSelected_med}
            keyObject={"name"}
            label="Maladies selectionnées"
            saveData={removeItemFromDataSelected_med}
            className="text-sm"
          >
            <AiFillCloseCircle />
          </CustomChipBtn>
        </div>

        <div className="flex flex-wrap justify-between px-5 gap-5">
          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
            required={true}
            label="Ambalatoire(Cout en $)"
            pl="eg:20"
            type="number"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                cout_ambulatoire: Number(e.target.value),
              });
            }}
            value={formGap.cout_ambulatoire}
          />

          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
            required={true}
            label="Hospitalisation(Cout en $)"
            pl="eg: 200"
            type="number"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                cout_hospitalisation: Number(e.target.value),
              });
            }}
            value={formGap.cout_hospitalisation}
            // classNameHoverCard=" border-main-color"
          />
        </div>
        <div className="flex flex-wrap justify-between px-5 gap-5">
          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_AREA}
            required={true}
            label="Accouchement(Cout en $)"
            pl="eg:20"
            type="number"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                cout_accouchement: Number(e.target.value),
              });
            }}
            value={formGap.cout_accouchement}
          />

          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM.NUMBER_OF_POPULATION_MOVED}
            required={true}
            label="Cesarienne(Cout en $)"
            pl="eg: 200"
            type="number"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                cout_cesarienne: Number(e.target.value),
              });
            }}
            value={formGap.cout_cesarienne}
            // classNameHoverCard=" border-main-color"
          />
        </div>
        <div className="flex flex-wrap justify-between px-5 gap-5">
          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
            required={true}
            label="Nombre de cCouverture en DTC (en %)"
            pl="eg: ..."
            type="number"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                couvertureDtc3: Number(e.target.value),
              });
            }}
            value={formGap.couvertureDtc3}
            classNameHoverCard=" border-main-color"
          />
          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM.CONTACT_MCZ}
            required={true}
            label="Nombre de mortalité de moins de 5ans %"
            pl="eg: ..."
            type="number"
            onChange={(e) => {
              setFormGap({
                ...formGap,
                mortaliteLessfiveyear: Number(e.target.value),
              });
            }}
            value={formGap.mortaliteLessfiveyear}
            classNameHoverCard=" border-main-color"
          />
        </div>
      </div>
    </div>
  );
}

export default MedicamenetEnRuptureStock;
