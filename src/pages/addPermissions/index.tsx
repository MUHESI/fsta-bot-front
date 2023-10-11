import React, { Suspense, useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { InputCommon } from "@/components/core/Inputs";
import { INIT_FORM_CREATE_AFFECTATION } from "@/constants/initForm";
import { CustomButton } from "@/components/core/Button";
import { IStateLoading } from "@/types/stateSchema/loading";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { CustomChipBtn } from "@/components/core/CustomChipBtn";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { useRecoilValue } from "recoil";
import {
  IAffectation,
  getOrganizations,
  getPermissions,
  getPermissionsofCurrentUser,
  getRoles,
  userAuthenticatedState,
} from "@/globalState/atoms";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { HandleFormArrayOfObject } from "@/services/stateHandler/formDataArrayHandler";
import { SelectCommon } from "@/components/core/select";
import { motion } from "framer-motion";
import { IOrganization } from "@/types/stateSchema/organization";
import { IRole } from "@/types/stateSchema/permissionRole";
import { IUser } from "@/types/stateSchema/user";
import SkeletonAnimation from "@/components/skeleton";
import { IPermission } from "@/types/stateSchema/permission";
import { postAPI } from "@/utils/fetchData";
import { IBaseData, IFetchData } from "@/types/commonTypes";
import ShowPermissionUser from "../showPermissionUser";
import AlertMessage, {
  INIT_ALERT_MODEL,
  MESSAGES_ALERT,
  setAlertAsEmptyData,
  severityAlert,
} from "@/components/core/Alert";

// TODO:: FIXE ME LATER
interface IProps {
  // currentUser: IUser | any;
  currentUser: any;
}

function AddPermissions({ currentUser }: IProps) {
  const user = useRecoilValue(userAuthenticatedState);

  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    creeatePermission: {
      status: false,
      msg: "",
    },
    delPermission: {
      status: false,
      msg: "",
    },
  });

  const [formAffectation, setFormAffectation] = useState(
    INIT_FORM_CREATE_AFFECTATION
  );
  const [statusPermission, setStatusPermission] = useState({
    add: false,
    del: false,
  });
  const [statusDelPermission, setStatusDelPermission] =
    useState<boolean>(false);
  // TODO: improve later!
  const handleSubmitAffectation_ = async () => {
    if (
      dataSelected.length === 0 ||
      userId.trim() === "" ||
      roleId.trim() === "" ||
      orgId.trim() === ""
    ) {
      return showToast({
        msg: `Oops, something went wrong | Remplissez tous les champs requis.`,
        type: StatusToast.DARK,
      });
    }

    try {
      let tabAffectationsId: string[] = [];
      dataSelected.forEach((element) => {
        tabAffectationsId.push(element.id);
      });
      console.clear();
      console.log("tabAffectationsId", tabAffectationsId);

      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeatePermission", lKey: "status" },
          true
        )
      );
      const affectationForm = {
        orgid: orgId,
        roleid: roleId,
        userid: userId,
      };

      const { data } = await postAPI<
        IFetchData<{ id: string }>,
        {
          orgid: string;
          roleid: string;
          userid: string;
        }
      >("affectation/addaffectation", affectationForm, user.token);
      if (data.message) {
        // console.clear();
        // console.log("data", data);

        const res = await postAPI<
          IFetchData<IBaseData>,
          {
            affectationid: string;
            permissionid: string[];
          }
        >(
          "permission/donnerPermission",
          {
            affectationid: currentUser.affectation_p.id,
            permissionid: tabAffectationsId,
          },
          user.token
        );

        if (res.data.message) {
          showToast({
            msg: `les permissions  ${AG_Toast.textPatterns.SUCCESS_MSG}`,
            type: AG_Toast.statusToast.SUCCESS,
          });
          setFormAffectation({ ...INIT_FORM_CREATE_AFFECTATION });
        } else {
          showToast({
            msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG}| Try again`,
            type: AG_Toast.statusToast.ERROR,
          });
        }
      } else {
        showToast({
          msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG}| Try again`,
          type: AG_Toast.statusToast.ERROR,
        });
      }
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeatePermission", lKey: "status" },
          false
        )
      );
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeatePermission", lKey: "status" },
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
  const handleSubmitAffectation = async () => {
    if (dataSelected.length === 0 || userId.trim() === "") {
      return showToast({
        msg: `Oops, something went wrong | Remplissez tous les champs requis.`,
        type: StatusToast.DARK,
      });
    }

    try {
      let tabAffectationsId: string[] = [];
      dataSelected.forEach((element) => {
        tabAffectationsId.push(element.id);
      });
      console.clear();
      console.log("tabAffectationsId", tabAffectationsId);

      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeatePermission", lKey: "status" },
          true
        )
      );
      const affectationForm = {
        orgid: orgId,
        roleid: roleId,
        userid: userId,
      };

      const res = await postAPI<
        IFetchData<IBaseData>,
        {
          affectationid: string;
          permissionid: string[];
        }
      >(
        "permission/donnerPermission",
        {
          affectationid: currentUser.affectation_p.id,
          permissionid: tabAffectationsId,
        },
        user.token
      );

      if (res.data.message) {
        showToast({
          msg: `les permissions  ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
        setFormAffectation({ ...INIT_FORM_CREATE_AFFECTATION });
      } else {
        showToast({
          msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG}| Try again`,
          type: AG_Toast.statusToast.ERROR,
        });
      }

      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeatePermission", lKey: "status" },
          false
        )
      );
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeatePermission", lKey: "status" },
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
  const handleDeleteAffectations = async () => {
    if (dataSelected_del.length === 0 || userId.trim() === "") {
      return showToast({
        msg: `Oops, something went wrong | Remplissez tous les champs requis.`,
        type: StatusToast.DARK,
      });
    }

    let tabAffectationsId: string[] = [];
    dataSelected_del.forEach((element) => {
      tabAffectationsId.push(element.id);
    });
    console.clear();
    console.log("tabAffectationsId", tabAffectationsId);
    console.log("dataSelected_del", dataSelected_del);

    console.log("cUser", currentUser);

    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "delPermission", lKey: "status" },
          true
        )
      );
      const res = await postAPI<IFetchData<IBaseData>, any>(
        "permission/retireracces",
        {
          idaffect_perm: tabAffectationsId,
        },
        user.token
      );
      console.log("res", res);

      if (res.data.message) {
        showToast({
          msg: `Les ${tabAffectationsId.length} permissions ont été supprimé ave succès `,
          type: AG_Toast.statusToast.SUCCESS,
        });
        setFormAffectation({ ...INIT_FORM_CREATE_AFFECTATION });
      } else {
        showToast({
          msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG}| Try again`,
          type: AG_Toast.statusToast.ERROR,
        });
      }

      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "delPermission", lKey: "status" },
          false
        )
      );
    } catch (error) {
      // console.clear();
      console.log("error", error);
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "delPermission", lKey: "status" },
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

  // TODO Improve later
  const [dataSelected, setDataSelected] = useState<any[]>([]);
  const removeItemFromDataToSelect = (item: any) => {
    const newDataToSelect = HandleFormArrayOfObject.deleteItem(
      permissions,
      item
    );
    setPermissions(newDataToSelect);
    const newDataSelected = HandleFormArrayOfObject.AddItem(dataSelected, item);
    setDataSelected(newDataSelected);
  };
  const removeItemFromDataSelected = (item: any) => {
    const newDataSelected = HandleFormArrayOfObject.deleteItem(
      dataSelected,
      item
    );
    setDataSelected(newDataSelected);
    const newDataToSelect = HandleFormArrayOfObject.AddItem(permissions, item);
    setPermissions(newDataToSelect);
  };
  // GET DATA
  const listOrganizations = useRecoilValue(
    getOrganizations
  ) as unknown as IOrganization[];
  const allRoles = useRecoilValue(getRoles) as unknown as IRole[];
  const listPermissions = useRecoilValue(
    getPermissions
  ) as unknown as IPermission[];

  const [permissions, setPermissions] = useState<IPermission[]>([]);
  const [orgId, setOrgId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(currentUser.id);
    setPermissions(listPermissions || []);
    setPermissions_del(currentUser.metaData.permissions || []);
  }, []);

  // MANAGER ALERT
  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL });

  //TODO DELETE PERMISSIONS
  const [dataSelected_del, setDataSelected_del] = useState<any[]>([]);
  const [permissions_del, setPermissions_del] = useState<IPermission[]>([]);

  const removeItemFromDataToSelect_del = (item: any) => {
    const newDataToSelect = HandleFormArrayOfObject.deleteItem(
      permissions_del,
      item
    );
    setPermissions_del(newDataToSelect);
    const newDataSelected = HandleFormArrayOfObject.AddItem(
      dataSelected_del,
      item
    );
    setDataSelected_del(newDataSelected);
  };
  const removeItemFromDataSelected_del = (item: any) => {
    const newDataSelected = HandleFormArrayOfObject.deleteItem(
      dataSelected_del,
      item
    );
    setDataSelected_del(newDataSelected);
    const newDataToSelect = HandleFormArrayOfObject.AddItem(
      permissions_del,
      item
    );
    setPermissions_del(newDataToSelect);
  };

  return (
    <div className="">
      <section className="mx-3">
        <div className={commonClassSection}>
          <LastHeading title={"informations sur  l'E/S"} />

          <div
            data-testId="create-menage"
            className="flex flex-wrap justify-between px-5 gap-5"
          >
            <InputCommon
              required={true}
              label="Organisisation actuelle"
              type="string"
              pl="..."
              value={currentUser.affectation_p?.organisation?.name || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e);
              }}
            />
          </div>
          <div
            data-testId="create-province"
            className="px-5 m-5 border rounded-md gap-5"
          >
            <label className="text-sm">Permissions actuelles</label>
            <ShowPermissionUser
              dataPermissions={currentUser.metaData.permissions}
            />
          </div>
        </div>
      </section>

      <div className=" py-2 px-5 flex justify-around gap-4 ">
        <CustomButton
          onClick={() =>
            setStatusPermission({
              ...statusPermission,
              add: !statusPermission.del,
              del: false,
            })
          }
          statusLoading={infoLoading.creeatePermission.status}
          disabled={infoLoading.creeatePermission.status}
          label="Ajout des permissions"
          className="  rounded-md"
        />
        <CustomButton
          onClick={() =>
            setStatusPermission({
              ...statusPermission,
              del: !statusPermission.del,
              add: false,
            })
          }
          statusLoading={infoLoading.creeatePermission.status}
          disabled={infoLoading.creeatePermission.status}
          label="Supprimer des perm."
          className="  rounded-md bg-red-400 text-white border border-red-400 hover:bg-red-400"
        />
      </div>
      <motion.div
        animate={
          statusPermission.add || statusPermission.del
            ? { height: "fit-content" }
            : { height: 0 }
        }
      >
        {statusPermission.add && (
          <Suspense fallback={<SkeletonAnimation className="px-5" />}>
            <section className="mx-3">
              <div className={commonClassSection}>
                <LastHeading title={"Ajout des permissions"} />

                <div className="px-4">
                  <AlertMessage
                    severity={severityAlert.INFO}
                    message={{
                      title: "Information",
                      description:
                        `${MESSAGES_ALERT.FEAT_IN_HALF_FINISHED}, neamoins vous pouvez ajouter les permissions. ` ||
                        alert,
                    }}
                    openAlert={true}
                    closeAlert={() => setAlert({ ...INIT_ALERT_MODEL })}
                    width={98}
                  />
                </div>
                <div className=" px-5">
                  <SelectCommon
                    data={listOrganizations}
                    onChange={setOrgId}
                    label="Selectionner l'organisation"
                    // required={true}
                    keyObject="name"
                    disabled={true}
                    value={"..."}
                    // type=""
                  />
                  <SelectCommon
                    data={allRoles}
                    onChange={setRoleId}
                    label="Selectionner le role"
                    // required={true}
                    disabled={true}
                    keyObject="name"
                    value={"..."}
                    // type=""
                  />
                  <InputCommon
                    // required={true}
                    disabled={true}
                    label="Noms de l'utilisateur"
                    pl="..."
                    value={currentUser.full_name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      // TODO: Fixeme later
                      console.log(e);
                      setUserId(currentUser.id);
                    }}
                  />
                </div>

                <div
                  data-testId="create-province"
                  className="px-5 m-5 border rounded-md gap-5"
                >
                  <CustomChipBtn
                    label="Selectionner les privileges"
                    data={permissions}
                    saveData={removeItemFromDataToSelect}
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
                    data={dataSelected}
                    keyObject={"name"}
                    label="Les privileges selectionnés"
                    saveData={removeItemFromDataSelected}
                    className="text-sm"
                  >
                    <AiFillCloseCircle />
                  </CustomChipBtn>
                </div>
                <div className="btn block text-center py-2 px-5 md:flex justify-end ">
                  <CustomButton
                    onClick={() => {
                      console.clear();
                      console.log(currentUser);
                      // return;
                      handleSubmitAffectation();
                    }}
                    statusLoading={infoLoading.creeatePermission.status}
                    disabled={infoLoading.creeatePermission.status}
                    label="Enregistrer"
                    // style={{ border: "1px solid #2DAEC4" }}
                    className="ml-auto  rounded-md"
                  />
                </div>
              </div>
            </section>
          </Suspense>
        )}
        {statusPermission.del && (
          <Suspense fallback={<SkeletonAnimation className="px-5" />}>
            <section className="mx-3">
              <div className={commonClassSection}>
                <LastHeading title={"Suppressions des permissions"} />

                <div
                  data-testId="create-province"
                  className="px-5 m-5 border rounded-md gap-5"
                >
                  <CustomChipBtn
                    label="Selectionner les privileges à supprimer"
                    data={permissions_del}
                    saveData={removeItemFromDataToSelect_del}
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
                    data={dataSelected_del}
                    keyObject={"name"}
                    label="Les privileges selectionnés à supprimer"
                    saveData={removeItemFromDataSelected_del}
                    className="text-sm"
                  >
                    <AiFillCloseCircle />
                  </CustomChipBtn>
                </div>
                <div className="btn block text-center py-2 px-5 md:flex justify-end ">
                  <CustomButton
                    onClick={() => {
                      console.clear();
                      console.log(currentUser);
                      // return;
                      handleDeleteAffectations();
                    }}
                    statusLoading={infoLoading.creeatePermission.status}
                    disabled={infoLoading.creeatePermission.status}
                    label="Supprimer"
                    className="rounded-md bg-red-400 text-white border border-red-400 hover:bg-red-400"
                  />
                </div>
              </div>
            </section>
          </Suspense>
        )}
      </motion.div>
    </div>
  );
}

export default AddPermissions;
