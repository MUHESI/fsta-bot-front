import React, { useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Grid } from "@mui/material";
import { InputCommon } from "@/components/core/Inputs";
import { CustomButton } from "@/components/core/Button";
import { IStateLoading } from "@/types/stateSchema/loading";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { postAPI } from "@/utils/fetchData";
import { IBaseData, IFetchData } from "@/types/commonTypes";
import { useRecoilValue } from "recoil";
import { userAuthenticatedState } from "@/globalState/atoms";
import { INIT_FORM_CREATE_INDICATION } from "../../constants/initForm";
import { ICreateIndication } from "@/types/stateSchema/indication";

function CreateIndication() {
  const user = useRecoilValue(userAuthenticatedState);

  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    createIndication: {
      status: false,
      msg: "",
    },
  });
  const [formInidaction, setIndication] = useState<ICreateIndication>(
    INIT_FORM_CREATE_INDICATION
  );
  const handleSubmitIndication = async () => {
    if (formInidaction.name.trim().length < 2) {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "createIndication", lKey: "status" },
          true
        )
      );
      console.clear();
      console.log("formInidaction", formInidaction);
      const { data } = await postAPI<IFetchData<IBaseData>, ICreateIndication>(
        "addindic",
        formInidaction,
        user.token
      );
      if (data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "createIndication", lKey: "status" },
            false
          )
        );
        showToast({
          msg: `L'indicateur ${formInidaction.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
        setIndication({ ...INIT_FORM_CREATE_INDICATION });
      }
    } catch (error: any) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "createIndication", lKey: "status" },
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
                  label="Abreviation"
                  pl="eg: Entrer l'abrev de l'indication"
                  value={formInidaction.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setIndication({
                      ...formInidaction,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div
                // data-testId="create-province"
                className="flex flex-wrap justify-between px-5 gap-5"
              >
                <InputCommon
                  required={true}
                  label="Tout le nom"
                  pl="eg: Entrer tout le nom"
                  value={formInidaction.value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setIndication({
                      ...formInidaction,
                      value: e.target.value,
                    })
                  }
                />
              </div>
              <div className="btn py-2 px-5 flex justify-end">
                <CustomButton
                  onClick={handleSubmitIndication}
                  statusLoading={infoLoading.createIndication.status}
                  disabled={infoLoading.createIndication.status}
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

export default CreateIndication;
