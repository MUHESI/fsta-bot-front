import React, { useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Grid } from "@mui/material";
import { InputCommon } from "@/components/core/Inputs";
import { INIT_FORM_CREATE_PERMSSION } from "@/constants/initForm";
import { CustomButton } from "@/components/core/Button";
import { IStateLoading } from "@/types/stateSchema/loading";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { postAPI } from "@/utils/fetchData";
import { IBaseData, IFetchData, IPropsSettings } from "@/types/commonTypes";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { getPermissions, userAuthenticatedState } from "@/globalState/atoms";
import { ICreatePermission } from "@/types/stateSchema/permission";
import { SelectCommon } from "@/components/core/select";
import { GLOBAL_PERMISSIONS } from "@/types/permissions";
import { convertEnumToArray } from "@/services/storage/helpers";
import { closeDialog } from "@/components/core/DialogCustom";

function CreatePermission({ itemToUpdate, setCloseDialog }: IPropsSettings) {
  const user = useRecoilValue(userAuthenticatedState);
  const refreshPermissions = useRecoilRefresher_UNSTABLE(getPermissions);

  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5 pt-2`;
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    createPermission: {
      status: false,
      msg: "",
    },
    updatePermission: {
      status: false,
      msg: "",
    },
  });

  const [formPermission, setPermission] = useState<ICreatePermission>(
    INIT_FORM_CREATE_PERMSSION
  );

  useEffect(() => {
    if (itemToUpdate) {
      const permi = { ...itemToUpdate } as ICreatePermission;
      setPermission({ ...permi });
    }
  }, []);

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
        refreshPermissions();
        if (setCloseDialog) setCloseDialog(closeDialog());
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
  const updatePermission = async () => {
    if (itemToUpdate === undefined) return;
    if (formPermission.name.trim().length < 2 && itemToUpdate.id !== "") {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "updatePermission", lKey: "status" },
          true
        )
      );
      const { data } = await postAPI<IFetchData<IBaseData>, ICreatePermission>(
        `permission/updatepermission/${itemToUpdate.id}`,
        formPermission,
        user.token
      );
      if (data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "updatePermission", lKey: "status" },
            false
          )
        );

        showToast({
          msg: `La modification de la permission ${formPermission.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
        // setPermission({ ...INIT_FORM_CREATE_PERMISSION });
        refreshPermissions();
        if (setCloseDialog) setCloseDialog(closeDialog());
      }
    } catch (error: any) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "updatePermission", lKey: "status" },
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
              <div className=" px-5" data-testId="select-permission">
                {itemToUpdate ? (
                  <InputCommon
                    required={true}
                    disabled={true}
                    label="Nom"
                    pl="eg: Entrer le nom"
                    value={formPermission.name || ""}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPermission({
                        ...formPermission,
                        psedo: e.target.value,
                      })
                    }
                  />
                ) : (
                  <SelectCommon
                    data={convertEnumToArray(GLOBAL_PERMISSIONS)}
                    onChange={keepCurrentPermission}
                    label="Selectionner la permission"
                    required={true}
                    keyObject="value"
                    value={"..."}
                  />
                )}
                <InputCommon
                  required={true}
                  label="Pseudo"
                  pl="eg: Entrer le pseudo"
                  value={formPermission.psedo || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPermission({ ...formPermission, psedo: e.target.value })
                  }
                />
              </div>

              <div className="btn py-2 px-5 flex justify-end">
                {itemToUpdate ? (
                  <CustomButton
                    onClick={updatePermission}
                    statusLoading={infoLoading.updatePermission.status}
                    disabled={infoLoading.updatePermission.status}
                    label="Mettre en jour"
                    // style={{ border: "1px solid #2DAEC4" }}
                    className="ml-auto  rounded-md"
                  />
                ) : (
                  <CustomButton
                    onClick={handleSubmitCreatePermission}
                    statusLoading={infoLoading.createPermission.status}
                    disabled={infoLoading.createPermission.status}
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

export default CreatePermission;
