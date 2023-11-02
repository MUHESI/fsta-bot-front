import React, { Suspense, useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { CustomButton } from "@/components/core/Button";
import { IStateLoading } from "@/types/stateSchema/loading";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { CustomChipBtn } from "@/components/core/CustomChipBtn";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { userAuthenticatedState } from "@/globalState/atoms";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { HandleFormArrayOfObject } from "@/services/stateHandler/formDataArrayHandler";
import { SelectCommon } from "@/components/core/select";
import { motion } from "framer-motion";
import { IOrganization } from "@/types/stateSchema/organization";
import SkeletonAnimation from "@/components/skeleton";
import { IPermission } from "@/types/stateSchema/permission";
import { postAPI } from "@/utils/fetchData";
import { IBaseData, IFetchData, IPropsSettings } from "@/types/commonTypes";
import { INIT_ALERT_MODEL } from "@/components/core/Alert";
import { getUsers } from "@/globalState/atoms/user";
import { closeDialog } from "@/components/core/DialogCustom";

interface IProps extends IPropsSettings {
  currentUser: any;
}
function DeletePermissions({ currentUser, setCloseDialog }: IProps) {
  const refreshUsers = useRecoilRefresher_UNSTABLE(getUsers);
  // const setOpenDilog = useSetRecoilState(tooggleDialogState);
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

      if (res.data.message) {
        showToast({
          msg: `Les ${tabAffectationsId.length} permissions ont été supprimé ave succès `,
          type: AG_Toast.statusToast.SUCCESS,
        });
        setDataSelected_del([]);
        refreshUsers();
        if (setCloseDialog) setCloseDialog(closeDialog());
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

  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(currentUser.id);
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

  // UTILIS FOR
  const [organizationsUser, setOrganizationsUser] = useState<IOrganization[]>(
    []
  );
  const [orgSelected, setOrgSelected] = useState<string>("");
  useEffect(() => {
    let orgArray: IOrganization[] = [];
    if (currentUser.metaData) {
      currentUser.metaData.permissions.map((item: any) =>
        orgArray.push(item.organisation)
      );
      setOrganizationsUser(orgArray);
    }
  }, [user]);

  useEffect(() => {
    if (orgSelected !== "") {
      let permissions: any[] = [];
      permissions = currentUser.metaData.permissions.filter(
        (item: any) => item.organisation.id === orgSelected
      );
      if (permissions.length > 0) {
        setPermissions_del(permissions[0].allpermission);
      } else {
        setPermissions_del([]);
      }
    }
  }, [orgSelected]);

  return (
    <div className="mx-2">
      <section>
        <div className={commonClassSection}>
          <LastHeading title={"informations sur  l'E/S"} />

          <div
            data-testId="create-menage"
            className="flex flex-wrap justify-between px-3 gap-5"
          >
            <SelectCommon
              data={organizationsUser}
              label="Selectionner l'organisation"
              keyObject="name"
              onChange={(value: string) => setOrgSelected(value)}
              value={"..."}
            />
          </div>
        </div>
      </section>
      <motion.div
        animate={orgSelected !== "" ? { height: "fit-content" } : { height: 0 }}
      >
        {orgSelected && (
          <Suspense fallback={<SkeletonAnimation className="px-5" />}>
            <section>
              <div className={commonClassSection}>
                <LastHeading title={"Suppressions des permissions"} />

                <div
                  data-testId="create-province"
                  className="mx-3 mb-2 border rounded-md gap-5"
                >
                  <CustomChipBtn
                    label="Selectionner les privileges à supprimer"
                    data={permissions_del}
                    saveData={removeItemFromDataToSelect_del}
                    required={true}
                    keyObject={"psedo"}
                  >
                    <AiFillPlusCircle />
                  </CustomChipBtn>
                </div>
                <div
                  data-testId="create-province"
                  className="mx-3 mt-2 border rounded-md gap-5"
                >
                  <CustomChipBtn
                    data={dataSelected_del}
                    keyObject={"psedo"}
                    label="Les privileges selectionnés à supprimer"
                    saveData={removeItemFromDataSelected_del}
                    className="text-sm"
                  >
                    <AiFillCloseCircle />
                  </CustomChipBtn>
                </div>
                <div className="btn  py-2 px-3 md:flex justify-end ">
                  <CustomButton
                    onClick={() => {
                      handleDeleteAffectations();
                    }}
                    statusLoading={infoLoading.delPermission.status}
                    disabled={infoLoading.delPermission.status}
                    label="Supprimer"
                    // className="ml-auto  rounded-md  w-full md:max-w-[200px]  grow"
                    className="ml-auto  rounded-md  w-full md:max-w-[200px]  grow rounded-md bg-red-400 text-white border border-red-400 hover:bg-red-400"
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

export default DeletePermissions;
