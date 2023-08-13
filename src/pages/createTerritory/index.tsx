import React, { useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Grid } from "@mui/material";
import { InputCommon } from "@/components/core/Inputs";
import { INIT_FORM_CREATE_TERRITORY } from "@/constants/initForm";
import { ICreateProvince } from "@/types/stateSchema/province";
import { CustomButton } from "@/components/core/Button";
import { IStateLoading } from "@/types/stateSchema/loading";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { postAPI } from "@/utils/fetchData";
import { SelectCommon } from "@/components/core/select";
import { provinces } from "@/constants/constants";
import { ICreateTerritory } from "@/types/stateSchema/territory";
import { IFetchData } from "@/types/commonTypes";

function CreateTerritory() {
  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    creeateTerritory: {
      status: false,
      msg: "",
    },
  });
  const [formTerritory, setTerritory] = useState<ICreateTerritory>(
    INIT_FORM_CREATE_TERRITORY
  );

  const handleSubmitCreateTerritory = async () => {
    if (formTerritory.name.trim().length < 2) {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeateTerritory", lKey: "status" },
          true
        )
      );
      return showToast({
        msg: `le territoire ${formTerritory.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
        type: AG_Toast.statusToast.DARK,
      });
      const { data } = await postAPI<
        IFetchData<{ data: any }>,
        ICreateTerritory
      >("", formTerritory);
      if (data.status === 1 && data.data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "creeateTerritory", lKey: "status" },
            false
          )
        );
        return showToast({
          msg: `le territoire ${formTerritory.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeateTerritory", lKey: "status" },
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

  return (
    <div className="min-h-screen">
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Création du territoire"} />
      </div>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <section className="mx-3">
            <div className={commonClassSection}>
              <LastHeading title={"Informations basiques"} />
              <div className=" px-5">
                {/* <SelectCommon
                  data={provinces}
                  label="Choisir la province"
                  required={true}
                  value={"..."}
                  // type=""
                /> */}
                <InputCommon
                  required={true}
                  label="Nom"
                  pl="eg: Entrer le nom du territoire"
                  value={formTerritory.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setTerritory({ ...formTerritory, name: e.target.value })
                  }
                />
              </div>
              <div className="btn py-2 px-5 flex justify-end">
                <CustomButton
                  onClick={handleSubmitCreateTerritory}
                  statusLoading={infoLoading.creeateTerritory.status}
                  disabled={infoLoading.creeateTerritory.status}
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
export default CreateTerritory;
