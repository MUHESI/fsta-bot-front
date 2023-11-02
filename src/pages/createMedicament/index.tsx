import React, { useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Grid } from "@mui/material";
import { InputCommon } from "@/components/core/Inputs";
import { INIT_FORM_CREATE_MEDICAMENT } from "@/constants/initForm";
import { ICreateMaladie } from "@/types/stateSchema/maladie";
import { CustomButton } from "@/components/core/Button";
import { IStateLoading } from "@/types/stateSchema/loading";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { postAPI } from "@/utils/fetchData";
import { IBaseData, IFetchData, IPropsSettings } from "@/types/commonTypes";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { getMedicaments, userAuthenticatedState } from "@/globalState/atoms";
import { ICreateMedicament } from "@/types/stateSchema/medicament";
import { closeDialog } from "@/components/core/DialogCustom";

function CreateMedicament({ itemToUpdate, setCloseDialog }: IPropsSettings) {
  const user = useRecoilValue(userAuthenticatedState);
  const refreshMedicaments = useRecoilRefresher_UNSTABLE(getMedicaments);
  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    createMedicament: {
      status: false,
      msg: "",
    },
    updateMedicament: {
      status: false,
      msg: "",
    },
  });

  const [formMedoc, setMedoc] = useState<ICreateMedicament>(
    INIT_FORM_CREATE_MEDICAMENT
  );
  useEffect(() => {
    if (itemToUpdate) {
      setMedoc({ ...itemToUpdate });
    }
  }, []);

  const handleSubmitCreatMaladie = async () => {
    if (formMedoc.name.trim().length < 2) {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "createMedicament", lKey: "status" },
          true
        )
      );

      const { data } = await postAPI<IFetchData<IBaseData>, ICreateMaladie>(
        "medicament/addmedicament",
        formMedoc,
        user.token
      );
      if (data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "createMedicament", lKey: "status" },
            false
          )
        );

        showToast({
          msg: `le medicament ${formMedoc.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
        setMedoc({ ...INIT_FORM_CREATE_MEDICAMENT });
        refreshMedicaments();
        if (setCloseDialog) setCloseDialog(closeDialog());
      }
    } catch (error: any) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "createMedicament", lKey: "status" },
          false
        )
      );
      return showToast({
        msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG} | ${error.response.data.message}`,
        type: StatusToast.ERROR,
      });
    }
  };
  const submitUpdateMaladie = async () => {
    if (itemToUpdate === undefined) return;
    if (formMedoc.name.trim().length < 2 && itemToUpdate.id !== "") {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    if (formMedoc.name.trim().length < 2) {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "updateMedicament", lKey: "status" },
          true
        )
      );

      const { data } = await postAPI<IFetchData<IBaseData>, ICreateMaladie>(
        `medicament/UpdateMedicament/${itemToUpdate.id}`,
        formMedoc,
        user.token
      );
      if (data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "updateMedicament", lKey: "status" },
            false
          )
        );

        showToast({
          msg: `La modification du medicament ${formMedoc.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
        setMedoc({ ...INIT_FORM_CREATE_MEDICAMENT });
        refreshMedicaments();
        if (setCloseDialog) setCloseDialog(closeDialog());
      }
    } catch (error: any) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "updateMedicament", lKey: "status" },
          false
        )
      );
      return showToast({
        msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG} | ${error.response.data.message}`,
        type: StatusToast.ERROR,
      });
    }
  };

  return (
    <div className="">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <section className="mx-3">
            <div className={commonClassSection}>
              <LastHeading title={"Informations basiques"} />
              <div
                data-testId="create-medicament"
                className="flex flex-wrap justify-between px-5 gap-5"
              >
                <InputCommon
                  required={true}
                  label="Nom"
                  // data-testId="create-province"
                  pl="eg: Entrer le nom d medicament"
                  value={formMedoc.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setMedoc({ ...formMedoc, name: e.target.value })
                  }
                />
              </div>
              <div className="btn py-2 px-5 flex justify-end">
                {itemToUpdate ? (
                  <CustomButton
                    onClick={submitUpdateMaladie}
                    statusLoading={infoLoading.updateMedicament.status}
                    disabled={infoLoading.updateMedicament.status}
                    label="Mettre en jour"
                    // style={{ border: "1px solid #2DAEC4" }}
                    className="ml-auto  rounded-md"
                  />
                ) : (
                  <CustomButton
                    onClick={handleSubmitCreatMaladie}
                    statusLoading={infoLoading.createMedicament.status}
                    disabled={infoLoading.createMedicament.status}
                    label="Enregistrer"
                    // style={{ border: "1px solid #2DAEC4" }}
                    className="ml-auto  rounded-md"
                  />
                )}
              </div>
            </div>
          </section>
        </Grid>
      </Grid>
    </div>
  );
}

export default CreateMedicament;
