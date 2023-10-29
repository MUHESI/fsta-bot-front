import React, { useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { HandleFormArrayOfObject } from "@/services/stateHandler/formDataArrayHandler";
import { CommonInputGap } from "@/components/core/Inputs";
import { ICrise } from "@/types/stateSchema/crise";
import { CommonSelectGap } from "@/components/core/select";
import { ITypePersonnel } from "@/types/stateSchema/typePersonnel";
import { CustomButton } from "@/components/core/Button";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useRecoilState, useRecoilValue } from "recoil";
import { createGap, currentItemValidateGap } from "@/globalState/atoms";
import { useParams } from "react-router";
import { GAP_ACTIONS_STATUS } from "@/types/stateSchema/gap";
import { StatusToast, showToast } from "@/components/core/ToastAlert";

function InfoPersonnel({
  dataTypePersonels,
}: {
  dataTypePersonels: ITypePersonnel[];
}) {
  const { statusAction } = useParams();

  const commonClass = "border border-main-color rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;

  const [formGap, setFormGap] = useRecoilState(createGap);
  const [formPersonel, setFormPersonel] = useState<{
    typepersonnelid: "";
    name: string;
    nbr: number;
    dataPersonels: any[];
  }>({
    typepersonnelid: "",
    name: "",
    nbr: 0,
    dataPersonels: [],
  });
  const [typePersonels, setTypePersonels] = useState<ITypePersonnel[]>([]);

  useEffect(() => {
    setTypePersonels(dataTypePersonels);
  }, [dataTypePersonels]);

  const addPersonel = (data: { id: string }[]) => {
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
  // const handlePersonnel = (key:string, value:number|string)=>{
  const handlePersonnel = (key: string, value: number | string) => {
    return setFormPersonel({ ...formPersonel, [key]: value });
  };

  const addPersonnel = () => {
    if (formPersonel.typepersonnelid === "" || formPersonel.nbr === 0) {
      return showToast({
        msg: `Remplissez tous les champs récquis: Type de personnel et le nombre`,
        type: StatusToast.ERROR,
      });
    }
    let personnelItem: ITypePersonnel = typePersonels.filter(
      (item: ITypePersonnel) => item.id === formPersonel.typepersonnelid
    )[0];

    setFormGap({
      ...formGap,
      datatypepersonnel: [
        ...formGap.datatypepersonnel,
        {
          nbr: formPersonel.nbr,
          typepersonnelid: formPersonel.typepersonnelid,
        },
      ],
    });
    setFormPersonel({
      ...formPersonel,
      dataPersonels: [
        ...formPersonel.dataPersonels,
        ...[{ ...personnelItem, nbr: formPersonel.nbr }],
      ],
      nbr: 0,
      typepersonnelid: "",
    });
  };

  const removePersonnel = (key: number) => {
    let personnelItem: ITypePersonnel = typePersonels.filter(
      (item: ITypePersonnel) => item.id === formPersonel.typepersonnelid
    )[0];
    let dataPersonnels_ = formPersonel.dataPersonels;
    dataPersonnels_.splice(key, 1);
    setFormGap({
      ...formGap,
      datatypepersonnel: [...dataPersonnels_],
    });
    let dataPersonnel__ = [...formPersonel.dataPersonels];
    dataPersonnel__.splice(key, 1);
    setFormPersonel({
      ...formPersonel,
      dataPersonels: dataPersonnel__,
    });
  };

  // FOR VALIDATE_GAP
  const formValidateGap = useRecoilValue(currentItemValidateGap);
  useEffect(() => {
    // TODO VERIFY
    if (
      statusAction === GAP_ACTIONS_STATUS.VALIDATE_GAP &&
      Object.keys(formValidateGap).length > 0 &&
      formValidateGap.datatypepersonnel.length > 0
    ) {
      let dataPersonels_ = [];
      for (
        let index = 0;
        index < formValidateGap.datatypepersonnel.length;
        index++
      ) {
        dataPersonels_.push({
          ...formValidateGap.datatypepersonnel[index].typepersonnel,
          nbr: formValidateGap.datatypepersonnel[index].nbr,
        });
      }
      setFormPersonel({
        ...formPersonel,
        dataPersonels: dataPersonels_,
      });
    }
  }, [formValidateGap]);

  return (
    <div>
      <div className={commonClassSection}>
        <LastHeading
          className="border-l-4 border-main-color pl-1"
          title={"Informations sur le personnel"}
        />
        <div className="flex flex-wrap justify-between items-center gap-5 m-1 px-5">
          <CommonSelectGap
            data={typePersonels}
            // titleTooltip={TOOLTIP_GAP_FORM.TYPE_HEALHP_STRUCTURE}
            required={true}
            keyObject="name"
            label="Type de personnel"
            onChange={(value: string) =>
              handlePersonnel("typepersonnelid", value)
            }
            value={""}
          />
          <CommonInputGap
            // titleTooltip={TOOLTIP_GAP_FORM.REMOTE_POPULATION}
            required={true}
            label="Nombre"
            pl="eg:200"
            onChange={(value: any) =>
              handlePersonnel("nbr", value.target.value)
            }
            value={formPersonel.nbr}
          />
        </div>
        <div className="flex  justify-end items-center m-2 pb-2 gap-5 mx-5 border-b">
          <CustomButton
            onClick={() => addPersonnel()}
            label="Ajouter"
            className="ml-auto  rounded-md"
          />
        </div>
        {formPersonel.dataPersonels.map(
          (item: { name: string; nbr: number }, key: number) => (
            <div
              key={key}
              className="flex bg-main-color justify-between items-center m-1 mx-5 p-2 rounded-md gap-5 "
            >
              <div className="text-sm">
                <label>{item.name}</label>
                <p>{item.nbr}</p>
              </div>
              <MdOutlineDeleteOutline
                onClick={() => removePersonnel(key)}
                className=" cursor-pointer text-red-400 text-xl"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default InfoPersonnel;
