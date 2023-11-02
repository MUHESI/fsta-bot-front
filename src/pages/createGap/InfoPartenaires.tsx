import React, { useEffect, useState } from "react";
import { IMaladie } from "@/types/stateSchema/maladie";
import { HandleFormArrayOfObject } from "@/services/stateHandler/formDataArrayHandler";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { CommonInputGap } from "@/components/core/Inputs";
import { ITypePersonnel } from "@/types/stateSchema/typePersonnel";
import { IIndicateur } from "@/types/stateSchema/indication";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CustomButton } from "@/components/core/Button";
import { CommonSelectGap } from "@/components/core/select";
import { IOrganization } from "@/types/stateSchema/organization";
import { useRecoilState, useRecoilValue } from "recoil";
import { createGap, currentItemValidateGap } from "@/globalState/atoms";
import { LastHeading } from "@/components/core/Heading";
import DialogCustom, {
  commonClassNameBtnLastBtnDialog,
} from "@/components/core/DialogCustom";
import { CustomChipBtn } from "@/components/core/CustomChipBtn";
import { GAP_ACTIONS_STATUS } from "@/types/stateSchema/gap";
import { useParams } from "react-router";
import { StatusToast, showToast } from "@/components/core/ToastAlert";

const INITAL_FORM_PARTAINAIRE = {
  orgid: "",
  date_debut: "",
  date_fin: "",
  email: "",
  datatindicateur: [],
  local_data: [],
};

function InfoPartenaires({
  dataPartenaires,
  dataIndicateurs,
  dataOrganizations,
}: {
  dataPartenaires: ITypePersonnel[];
  dataIndicateurs: IIndicateur[];
  dataOrganizations: IOrganization[];
}) {
  const { statusAction } = useParams();

  const commonClass = "border border-main-color rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;

  const [maladies, setMaladies] = useState<IMaladie[]>([]);
  const [organizations, setOrganizations] = useState<IOrganization[]>([]);
  const [typePersonels, setTypePersonels] = useState<ITypePersonnel[]>([]);
  const [indicateurs, setIndicateurs] = useState<any[]>([]);
  const [formGap, setFormGap] = useRecoilState(createGap);

  //IDataPartenaire
  const [formPartenaire, setFormPartenaire] = useState<{
    orgid: string;
    date_debut: string;
    date_fin: string;
    email: string;
    datatindicateur: any[];
    //KEYS FIELDS
    local_data: {
      local_org: any;
      local_ind: any[];
      date_debut: string;
      date_fin: string;
      email: string;
    }[];
  }>(INITAL_FORM_PARTAINAIRE);

  const [dataSelected_pa, setDataSelected_pa] = useState<any[]>([]);

  const removeItemFromDataToSelect_pa = (item: any) => {
    const newDataToSelect = HandleFormArrayOfObject.deleteItem(
      indicateurs,
      item
    );
    setIndicateurs(newDataToSelect);
    const newDataSelected = HandleFormArrayOfObject.AddItem(
      dataSelected_pa,
      item
    );
    setDataSelected_pa(newDataSelected);
  };
  const removeItemFromDataSelected_pa = (item: any) => {
    const newDataSelected = HandleFormArrayOfObject.deleteItem(
      dataSelected_pa,
      item
    );
    setDataSelected_pa(newDataSelected);
    const newDataToSelect = HandleFormArrayOfObject.AddItem(indicateurs, item);
    setIndicateurs(newDataToSelect);
  };

  useEffect(() => {
    setTypePersonels(dataPartenaires);
    setIndicateurs(dataIndicateurs);
    setOrganizations(dataOrganizations);
  }, [dataIndicateurs, dataPartenaires]);

  const removePartenaire = (key: number) => {
    let dataPart_ = [...formGap.datapartenaireid];
    dataPart_.splice(key, 1);
    setFormGap({
      ...formGap,
      datapartenaireid: [...dataPart_],
    });
    let lacalDataPart = [...formPartenaire.local_data];
    lacalDataPart.splice(key, 1);
    setFormPartenaire({
      ...formPartenaire,
      local_data: [...lacalDataPart],
    });
  };
  const addPartenaire = () => {
    if (
      formPartenaire.orgid === "" ||
      formPartenaire.date_debut === "" ||
      formPartenaire.date_fin === "" ||
      formPartenaire.email === ""
    ) {
      return showToast({
        msg: `Remplissez tous les champs récquis: Organisation, Date debut, Date fin, Contact`,
        type: StatusToast.ERROR,
      });
    }
    let dataSelected_paId = [];
    for (let index = 0; index < dataSelected_pa.length; index++) {
      dataSelected_paId.push(dataSelected_pa[index].id);
    }

    setFormGap({
      ...formGap,
      datapartenaireid: [
        ...formGap.datapartenaireid,
        {
          email: formPartenaire.email,
          orgid: formPartenaire.orgid,
          date_debut: formPartenaire.date_debut,
          date_fin: formPartenaire.date_fin,
          datatindicateur: dataSelected_paId,
        },
      ],
    });

    const orgItem = organizations.filter(
      (item: any) => item.id === formPartenaire.orgid
    )[0];
    const local_data_item = {
      local_org: orgItem,
      local_ind: dataSelected_pa,
      date_debut: formPartenaire.date_debut,
      date_fin: formPartenaire.date_fin,
      email: formPartenaire.email,
    };

    setFormPartenaire({
      ...INITAL_FORM_PARTAINAIRE,
      local_data: [...formPartenaire.local_data, ...[local_data_item]],
    });
    setDataSelected_pa([]);
    setIndicateurs(dataIndicateurs);
  };

  const getIncateursFromValidateGap = (ind: any[]) => {
    let data = [];
    for (let index = 0; index < ind.length; index++) {
      data.push({ id: ind[index].id, name: ind[index].paquetappui.name });
    }
    return data;
  };

  // FOR VALIDATE_GAP
  const formValidateGap = useRecoilValue(currentItemValidateGap);
  useEffect(() => {
    let local_data_item__: any[] = [];
    if (
      statusAction === GAP_ACTIONS_STATUS.VALIDATE_GAP &&
      Object.keys(formValidateGap).length > 0
    ) {
      if (formValidateGap.datapartenaire.length > 0) {
        for (
          let index = 0;
          index < formValidateGap.datapartenaire.length;
          index++
        ) {
          const dataPartenaire = formValidateGap.datapartenaire[index];

          if (dataPartenaire.partenaire !== null) {
            local_data_item__.push({
              local_org: {
                id: dataPartenaire?.partenaire?.id,
                name: dataPartenaire?.partenaire?.name,
                email: dataPartenaire?.partenaire?.email,
              },
              local_ind: getIncateursFromValidateGap(
                dataPartenaire?.partenaire?.allindicateur
              ),
              date_debut: dataPartenaire?.date_debut,
              date_fin: dataPartenaire?.date_fin,
              email: dataPartenaire?.contact_point_facal,
            });
          }
        }
      }
      setFormPartenaire({
        ...INITAL_FORM_PARTAINAIRE,
        local_data: local_data_item__,
      });
    }
  }, [formValidateGap]);

  return (
    <div>
      <div className={commonClassSection}>
        <LastHeading
          className="border-l-4 border-main-color pl-1"
          title={"Informations sur les partenaires"}
        />
        <div className="flex flex-wrap justify-between px-5 gap-5">
          <CommonSelectGap
            data={organizations}
            required={true}
            keyObject="name"
            label="Organisation"
            onChange={(value: string) => {
              setFormPartenaire({
                ...formPartenaire,
                orgid: value,
              });
            }}
            value={""}
          />
          <CommonInputGap
            required={true}
            type="date"
            label="Date du début"
            pl="eg:200"
            onChange={(e: any) => {
              setFormPartenaire({
                ...formPartenaire,
                date_debut: e.target.value,
              });
            }}
            value={formPartenaire.date_debut}
          />
          <CommonInputGap
            required={true}
            type="date"
            label="Date du fin"
            pl="eg:200"
            onChange={(e: any) => {
              setFormPartenaire({
                ...formPartenaire,
                date_fin: e.target.value,
              });
            }}
            value={formPartenaire.date_fin}
          />
          <CommonInputGap
            required={true}
            label="Contact du point focal/email ou tel "
            pl="eg: 0998799305"
            onChange={(e: any) => {
              setFormPartenaire({
                ...formPartenaire,
                email: e.target.value,
              });
            }}
            value={formPartenaire.email}
          />
        </div>
        <div className="flex flex-wrap justify-between px-5 gap-5">
          <DialogCustom
            mainTitle="Selectionner les paquets d'appui"
            width="sm"
            mainBtnOptions={{
              btnText: "Paquet d'appui",
              useBtn: true,
            }}
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
                label="Selectionner les paquets d'appui"
                data={indicateurs}
                saveData={removeItemFromDataToSelect_pa}
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
                data={dataSelected_pa}
                keyObject={"name"}
                label="Paquets d'appui selectionnées"
                saveData={removeItemFromDataSelected_pa}
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
            data={dataSelected_pa}
            keyObject={"name"}
            label="Les paquets d'appui selectionnés"
            saveData={removeItemFromDataSelected_pa}
            className="text-sm"
          >
            <AiFillCloseCircle />
          </CustomChipBtn>
        </div>

        <div className="flex  justify-end items-center m-2 pb-2 gap-5 mx-5 border-b">
          <CustomButton
            onClick={() => addPartenaire()}
            label="Ajouter"
            className="ml-auto  rounded-md"
          />
        </div>
        <div className=" border mx-5 pb-4 ">
          <span className=" text-sm mx-4 font-bold pl-1 border-l-4 border-main-color ">
            les partenaires sélectionnés{" "}
          </span>
          {formPartenaire.local_data.map((item, key) => (
            <div
              className="flex bg-[#96d4df] justify-between items-center m-1 mx-5 p-2 rounded-md gap-5"
              key={key}
            >
              <div className="text-sm text-white">
                <label className="font-bold text-xl">
                  {item.local_org.name}
                </label>
                <p className="my-2">
                  Paquet:
                  <span className="flex flex-wrap ml-10">
                    {item.local_ind.map((item_, key_) => (
                      <span
                        key={key_}
                        className="border border-main-color bg-main-color rounded-md px-1 m-1"
                      >
                        {item_.name}
                      </span>
                    ))}
                  </span>
                </p>
                <p className="flex gap-4 justify-between">
                  <span>
                    debut: <strong> {item.date_debut} </strong>
                  </span>
                  <span>
                    Fin: <strong> {item.date_fin}</strong>
                  </span>
                </p>
                <p className="flex gap-4 justify-between">
                  <span>
                    Contact: <strong> {item.email} </strong>
                  </span>
                </p>
              </div>
              <MdOutlineDeleteOutline
                onClick={() => removePartenaire(key)}
                className=" cursor-pointer text-red-400 text-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoPartenaires;
