import React, { useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Grid } from "@mui/material";
import { InputCommon } from "@/components/core/Inputs";
import { INIT_FORM_CREATE_PERMSSION } from "@/constants/initForm";
import { CustomButton } from "@/components/core/Button";
import { IStateLoading } from "@/types/stateSchema/loading";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { postAPI } from "@/utils/fetchData";
import { IBaseData, IFetchData } from "@/types/commonTypes";
import { useRecoilValue } from "recoil";
import { userAuthenticatedState } from "@/globalState/atoms";
import { ICreatePermission } from "@/types/stateSchema/permission";
import { SelectCommon } from "@/components/core/select";
import { GLOBAL_PERMISSIONS } from "@/types/permissions";
import { convertEnumToArray } from "@/services/storage/helpers";

function CreatePermission() {
  const user = useRecoilValue(userAuthenticatedState);

  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    createPermission: {
      status: false,
      msg: "",
    },
  });

  const [formPermission, setPermission] = useState<ICreatePermission>(
    INIT_FORM_CREATE_PERMSSION
  );

  const handleSubmitCreatePermission = async () => {
    if (formPermission.name.trim().length < 2) {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "createPermission", lKey: "status" },
          true
        )
      );

      const { data } = await postAPI<IFetchData<IBaseData>, ICreatePermission>(
        "permission/addpermission",
        formPermission,
        user.token
      );
      if (data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "createPermission", lKey: "status" },
            false
          )
        );

        showToast({
          msg: `la permission ${formPermission.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
        // setPermission({ ...INIT_FORM_CREATE_PERMISSION });
      }
    } catch (error: any) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "createRole", lKey: "status" },
          false
        )
      );
      return showToast({
        msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG} | ${error.response.data.message}`,
        type: StatusToast.ERROR,
      });
    }
  };
  const keepCurrentPermission = (option: number) => {
    console.clear();
    console.log("formPermission", formPermission);

    // const tab = convertEnumToArray(GLOBAL_PERMISSIONS);
    setPermission({
      ...formPermission,
      name: convertEnumToArray(GLOBAL_PERMISSIONS)[option].value,
    });
  };

  return (
    <div className="">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <section className="mx-3">
            <div className={commonClassSection}>
              <LastHeading title={"Informations basiques"} />
              <div className=" px-5" data-testId="select-province">
                <SelectCommon
                  data={convertEnumToArray(GLOBAL_PERMISSIONS)}
                  onChange={keepCurrentPermission}
                  label="Selectionner la permission"
                  required={true}
                  keyObject="value"
                  value={"..."}
                  // type=""
                />
                <InputCommon
                  required={true}
                  label="Nom"
                  pl="eg: Entrer le pseudo"
                  value={formPermission.psedo || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPermission({ ...formPermission, psedo: e.target.value })
                  }
                />
              </div>

              <div className="btn py-2 px-5 flex justify-end">
                <CustomButton
                  onClick={handleSubmitCreatePermission}
                  statusLoading={infoLoading.createPermission.status}
                  disabled={infoLoading.createPermission.status}
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

export default CreatePermission;
