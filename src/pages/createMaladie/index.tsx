import React, { useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Grid } from "@mui/material";
import { InputCommon } from "@/components/core/Inputs";
import { INIT_FORM_CREATE_MALADIE } from "@/constants/initForm";
import { ICreateMaladie } from "@/types/stateSchema/maladie";
import { CustomButton } from "@/components/core/Button";
import { IStateLoading } from "@/types/stateSchema/loading";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { postAPI } from "@/utils/fetchData";
import { IBaseData, IFetchData, IPropsSettings } from "@/types/commonTypes";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { getMaladies, userAuthenticatedState } from "@/globalState/atoms";
import { ICreateTypePersonnel } from "@/types/stateSchema/typePersonnel";
import { closeDialog } from "@/components/core/DialogCustom";

function CreateMaladie({ itemToUpdate, setCloseDialog }: IPropsSettings) {
  const refreshMaldie = useRecoilRefresher_UNSTABLE(getMaladies);
  const user = useRecoilValue(userAuthenticatedState);
  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    createMaladie: {
      status: false,
      msg: "",
    },
    updateMaladie: {
      status: false,
      msg: "",
    },
  });

  const [formMaladie, setFormMaladie] = useState<ICreateMaladie>(
    INIT_FORM_CREATE_MALADIE
  );
  useEffect(() => {
    if (itemToUpdate) {
      setFormMaladie({ ...itemToUpdate });
    }
  }, []);

  const handleSubmitCreateMaladie = async () => {
    if (formMaladie.name.trim().length < 2) {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "createMaladie", lKey: "status" },
          true
        )
      );
      const { data } = await postAPI<
        IFetchData<IBaseData>,
        ICreateTypePersonnel
      >("maladie/addmaladie", formMaladie, user.token);
      if (data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "createMaladie", lKey: "status" },
            false
          )
        );

        showToast({
          msg: `La maladie ${formMaladie.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
        setFormMaladie({ ...INIT_FORM_CREATE_MALADIE });
        refreshMaldie();
        if (setCloseDialog) setCloseDialog(closeDialog());
      }
    } catch (error: any) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "createMaladie", lKey: "status" },
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
    showToast({
      msg: `Oops, Endpoint !!`,
      type: StatusToast.DARK,
      autoClose: true,
    });
    if (itemToUpdate === undefined) return;
    if (formMaladie.name.trim().length < 2 && itemToUpdate.id !== "") {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "updateMaladie", lKey: "status" },
          true
        )
      );
      const { data } = await postAPI<
        IFetchData<IBaseData>,
        ICreateTypePersonnel
      >(`maladie/addmaladie/${itemToUpdate.id}`, formMaladie, user.token);
      if (data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "updateMaladie", lKey: "status" },
            false
          )
        );

        showToast({
          msg: `La modification de la maladie ${formMaladie.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
        setFormMaladie({ ...INIT_FORM_CREATE_MALADIE });
        refreshMaldie();
        if (setCloseDialog) setCloseDialog(closeDialog());
      }
    } catch (error: any) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "updateMaladie", lKey: "status" },
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
                data-testId="create-province"
                className="flex flex-wrap justify-between px-5 gap-5"
              >
                <InputCommon
                  required={true}
                  label="Nom"
                  // data-testId="create-province"
                  pl="eg: Entrer le nom de la maladie"
                  value={formMaladie.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormMaladie({ ...formMaladie, name: e.target.value })
                  }
                />
              </div>
              <div className="btn py-2 px-5 flex justify-end">
                {itemToUpdate ? (
                  <CustomButton
                    onClick={submitUpdateMaladie}
                    statusLoading={infoLoading.updateMaladie.status}
                    disabled={infoLoading.updateMaladie.status}
                    label="Enregistrer"
                    className="ml-auto  rounded-md"
                  />
                ) : (
                  <CustomButton
                    onClick={handleSubmitCreateMaladie}
                    statusLoading={infoLoading.createMaladie.status}
                    disabled={infoLoading.createMaladie.status}
                    label="Enregistrer"
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

export default CreateMaladie;
