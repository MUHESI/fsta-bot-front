import React, { useState } from "react";
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
import { IBaseData, IFetchData } from "@/types/commonTypes";
import { useRecoilValue } from "recoil";
import { userAuthenticatedState } from "@/globalState/atoms";
import { ICreateTypePersonnel } from "@/types/stateSchema/typePersonnel";

function CreateMaladie() {
  const user = useRecoilValue(userAuthenticatedState);
  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    createMaladie: {
      status: false,
      msg: "",
    },
  });

  const [formMaladie, setMaladie] = useState<ICreateMaladie>(
    INIT_FORM_CREATE_MALADIE
  );

  const handleSubmitCreatMaladie = async () => {
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
        setMaladie({ ...INIT_FORM_CREATE_MALADIE });
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
                    setMaladie({ ...formMaladie, name: e.target.value })
                  }
                />
              </div>
              <div className="btn py-2 px-5 flex justify-end">
                <CustomButton
                  onClick={handleSubmitCreatMaladie}
                  statusLoading={infoLoading.createMaladie.status}
                  disabled={infoLoading.createMaladie.status}
                  label="Enregistrer"
                  // style={{ border: "1px solid #2DAEC4" }}
                  className="ml-auto  rounded-md"
                />
              </div>
            </div>
          </section>
        </Grid>
      </Grid>
    </div>
  );
}

export default CreateMaladie;
