import React, { useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Grid } from "@mui/material";
import { InputCommon } from "@/components/core/Inputs";
import { INIT_FORM_CREATE_MENAGE } from "@/constants/initForm";
import { CustomButton } from "@/components/core/Button";
import { IStateLoading } from "@/types/stateSchema/loading";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { CustomChipBtn } from "@/components/core/CustomChipBtn";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { useRecoilValue } from "recoil";
import { userAuthenticatedState } from "@/globalState/atoms";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { HandleFormArrayOfObject } from "@/services/stateHandler/formDataArrayHandler";
import { ICreateMenage } from "@/types/stateSchema/menage";
import { SelectCommon } from "@/components/core/select";
import { dataProvices } from "@/constants/constants";
import UploadFilesForm from "@/components/uploadFiles/uploadFilesForm";
import ShowFilesCharged from "@/components/uploadFiles/ShowFilesCharged";

const dataCritereVulnerablity = [
  {
    id: 1,
    label: "Hote indigent1",
    value: "Hote indigent",
  },
  {
    id: 2,
    label: "Retourne2",
    value: "Retourne",
  },
  {
    id: 3,
    label: "test3",
    value: "Retourne",
  },
  {
    id: 2,
    label: "Retourne2",
    value: "Retourne",
  },
  {
    id: 4,
    label: "test4",
    value: "Retourne",
  },
  {
    id: 5,
    label: "test5",
    value: "Retourne",
  },
];

function CreateMenage() {
  const user = useRecoilValue(userAuthenticatedState);

  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    creeateMenage: {
      status: false,
      msg: "",
    },
  });

  const [formMenage, setMenage] = useState<ICreateMenage>(
    INIT_FORM_CREATE_MENAGE
  );
  const handleSubmitCreateMenage = async () => {
    if (formMenage.village.trim().length < 2) {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeateMenage", lKey: "status" },
          true
        )
      );

      // const { data } = await postAPI<IFetchData<IBaseData>, ICreateProvince>(
      //   "addprov",
      //   formMenage,
      //   user.token
      // );
      // if (data.code === 200 && data.data) {
      //   setInfoLoading(
      //     HandleFormObject.handleSecondLevel(
      //       infoLoading,
      //       { fKey: "creeateMenage", lKey: "status" },
      //       false
      //     )
      //   );

      //   showToast({
      //     msg: `la province ${formMenage.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
      //     type: AG_Toast.statusToast.SUCCESS,
      //   });
      //   setMenage({ ...INIT_FORM_CREATE_PROVINCE });
      // }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeateMenage", lKey: "status" },
          false
        )
      );
      return showToast({
        msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG} | ${
          (error as any as unknown as Error).message
        }`,
        type: StatusToast.ERROR,
      });
    }
  };

  const [dataToSelect, setDataToSelect] = useState<any[]>(
    dataCritereVulnerablity
  );
  const [dataSelected, setDataSelected] = useState<any[]>([]);

  const removeItemFromDataToSelect = (item: any) => {
    const newDataToSelect = HandleFormArrayOfObject.deleteItem(
      dataToSelect,
      item
    );
    setDataToSelect(newDataToSelect);
    const newDataSelected = HandleFormArrayOfObject.AddItem(dataSelected, item);
    setDataSelected(newDataSelected);
  };
  const removeItemFromDataSelected = (item: any) => {
    const newDataSelected = HandleFormArrayOfObject.deleteItem(
      dataSelected,
      item
    );
    setDataSelected(newDataSelected);
    const newDataToSelect = HandleFormArrayOfObject.AddItem(dataToSelect, item);
    setDataToSelect(newDataToSelect);
  };

  const keepCurrentItem = (value: any) => {
    console.log("value::>>", value);
    // setTerritory({ ...formTerritory, provinceid: value });
  };

  const [files, setFiles] = useState([]);
  const keepData_ = (files_: any) => setFiles(files_);

  return (
    <div className="">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <section className="mx-3">
            <div className={commonClassSection}>
              <LastHeading
                title={"Informations concernant le resp. du menage"}
              />

              <div data-testId="create-menage" className="px-5 gap-5">
                <UploadFilesForm
                  filesSaved={files}
                  keepData={keepData_}
                  label="Ajout des documents"
                />
                <ShowFilesCharged files={files} />
              </div>

              <div
                data-testId="create-menage"
                className="flex flex-wrap justify-between px-5 gap-5"
              >
                <InputCommon
                  required={true}
                  label="Nom du responsable"
                  type="string"
                  // data-testId="create-province"
                  pl="eg: ..."
                  value={formMenage.village}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMenage({ ...formMenage, village: e.target.value })
                  }
                />
                <SelectCommon
                  data={dataProvices}
                  onChange={keepCurrentItem}
                  label="Selectionner l'atttribution"
                  required={true}
                  keyObject="name"
                  value={"..."}
                  // type=""
                />
              </div>
            </div>
          </section>
          <section className="mx-3">
            <div className={commonClassSection}>
              <LastHeading title={"Informations basiques"} />

              <div
                data-testId="create-menage"
                className="flex flex-wrap justify-between px-5 gap-5"
              >
                <InputCommon
                  required={true}
                  label="Village/localité d'origine"
                  // data-testId="create-province"
                  pl="eg: ..."
                  value={formMenage.village}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMenage({ ...formMenage, village: e.target.value })
                  }
                />
                <InputCommon
                  required={true}
                  label="Addresse actuelle"
                  // data-testId="create-province"
                  // pl="eg: Entrer le nom de la province"
                  value={formMenage.village}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMenage({ ...formMenage, village: e.target.value })
                  }
                />
              </div>
              <div data-testId="create-province" className="px-5 gap-5">
                <SelectCommon
                  data={dataProvices}
                  onChange={keepCurrentItem}
                  label="Selectionner l'habitaion"
                  required={true}
                  keyObject="name"
                  value={"..."}
                  // type=""
                />
              </div>
              <div data-testId="create-province" className="px-5 gap-5">
                <InputCommon
                  required={true}
                  label="Taille du menage"
                  // data-testId="create-province"
                  type="number"
                  value={formMenage.village}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMenage({ ...formMenage, village: e.target.value })
                  }
                />
              </div>
              <div data-testId="create-province" className="px-5 gap-5">
                <CustomChipBtn
                  data={dataToSelect}
                  label="Selectionner les critères de vulnérabilité"
                  saveData={removeItemFromDataToSelect}
                  required={true}
                >
                  <AiFillPlusCircle />
                </CustomChipBtn>
              </div>
              <div data-testId="create-province" className="px-5 gap-5">
                <CustomChipBtn
                  data={dataSelected}
                  label="Les critères de vulnérabilité Selectionnés"
                  saveData={removeItemFromDataSelected}
                  // required={true}
                >
                  <AiFillCloseCircle />
                </CustomChipBtn>
              </div>
            </div>
          </section>
          <div className="btn block text-center py-2 px-5 md:flex justify-end ">
            <CustomButton
              onClick={handleSubmitCreateMenage}
              statusLoading={infoLoading.creeateMenage.status}
              disabled={infoLoading.creeateMenage.status}
              label="Enregistrer"
              // style={{ border: "1px solid #2DAEC4" }}
              className="ml-auto  rounded-md"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CreateMenage;
