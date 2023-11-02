import React, { useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Grid } from "@mui/material";
import { InputCommon } from "@/components/core/Inputs";
import { INIT_FORM_CREATE_ROLE } from "@/constants/initForm";
import { CustomButton } from "@/components/core/Button";
import { IStateLoading } from "@/types/stateSchema/loading";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { postAPI } from "@/utils/fetchData";
import { IBaseData, IFetchData, IPropsSettings } from "@/types/commonTypes";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { getRoles, userAuthenticatedState } from "@/globalState/atoms";
import { ICreateRole } from "@/types/stateSchema/permissionRole";
import { closeDialog } from "@/components/core/DialogCustom";

function CreateRole({ itemToUpdate, setCloseDialog }: IPropsSettings) {
  const user = useRecoilValue(userAuthenticatedState);
  const refreshRoles = useRecoilRefresher_UNSTABLE(getRoles);

  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    createRole: {
      status: false,
      msg: "",
    },
    updateRole: {
      status: false,
      msg: "",
    },
  });

  const [formRole, setRole] = useState<ICreateRole>(INIT_FORM_CREATE_ROLE);

  useEffect(() => {
    if (itemToUpdate) {
      setRole({ ...itemToUpdate });
    }
  }, []);

  const handleSubmitCreateRole = async () => {
    if (formRole.name.trim().length < 2) {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "createRole", lKey: "status" },
          true
        )
      );

      const { data } = await postAPI<IFetchData<IBaseData>, ICreateRole>(
        "role/addrole",
        formRole,
        user.token
      );
      if (data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "createRole", lKey: "status" },
            false
          )
        );
        showToast({
          msg: `le role ${formRole.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
        setRole({ ...INIT_FORM_CREATE_ROLE });
        refreshRoles();
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
  const submitUpdateRole = async () => {
    if (itemToUpdate === undefined) return;
    if (formRole.name.trim().length < 2 && itemToUpdate.id !== "") {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "updateRole", lKey: "status" },
          true
        )
      );
      const { data } = await postAPI<IFetchData<IBaseData>, ICreateRole>(
        `role/updaterole/${itemToUpdate.id}`,
        formRole,
        user.token
      );

      if (data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "updateRole", lKey: "status" },
            false
          )
        );

        showToast({
          msg: `La modification du role ${formRole.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
        setRole({ ...INIT_FORM_CREATE_ROLE });
        refreshRoles();
        if (setCloseDialog) setCloseDialog(closeDialog());
      }
    } catch (error: any) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "updateRole", lKey: "status" },
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
                  pl="eg: Entrer le nom du role"
                  value={formRole.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRole({ ...formRole, name: e.target.value })
                  }
                />
              </div>
              <div className="btn py-2 px-5 flex justify-end">
                {itemToUpdate ? (
                  <CustomButton
                    onClick={submitUpdateRole}
                    statusLoading={infoLoading.updateRole.status}
                    disabled={infoLoading.updateRole.status}
                    label="Mettre en jour"
                    // style={{ border: "1px solid #2DAEC4" }}
                    className="ml-auto  rounded-md"
                  />
                ) : (
                  <CustomButton
                    onClick={handleSubmitCreateRole}
                    statusLoading={infoLoading.createRole.status}
                    disabled={infoLoading.createRole.status}
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

export default CreateRole;
