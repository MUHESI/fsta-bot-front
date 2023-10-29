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
  getOrganizations,
  getPermissions,
  getRoles,
  userAuthenticatedState,
} from "@/globalState/atoms";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import { HandleFormArrayOfObject } from "@/services/stateHandler/formDataArrayHandler";
import { SelectCommon } from "@/components/core/select";
import { motion } from "framer-motion";
import { IOrganization } from "@/types/stateSchema/organization";
import { IRole } from "@/types/stateSchema/permissionRole";
import SkeletonAnimation from "@/components/skeleton";
import { IPermission } from "@/types/stateSchema/permission";
import { postAPI } from "@/utils/fetchData";
import { IBaseData, IFetchData, IResRecoil } from "@/types/commonTypes";

// TODO:: FIXE ME LATER
interface IProps {
  // currentUser: IUser | any;
  currentUser: any;
}
const messageOrgSelected =
  "Vous avez sélectionné une organisation dont cet utilisateur fait partie, par conséquent ces nouvelles permissions vont s’ajouter dans cette organisation.";

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

  const handleSubmitAffectation = async () => {
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

      // CHECK IF THE USER IS IN AN ORGANIZATION
      let org = currentUser.metaData.permissions.filter(
        (item: any) => item.organisation.id === orgId
      );
      if (org.length > 0) {
        showToast({
          msg: `${messageOrgSelected}`,
          type: AG_Toast.statusToast.DARK,
          autoClose: false,
        });
      }
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
      let newAffectationId = null;
      if (org.length === 0) {
        const { data } = await postAPI<
          IFetchData<{ id: string }>,
          {
            orgid: string;
            roleid: string;
            userid: string;
          }
        >("affectation/addaffectation", affectationForm, user.token);

        if (data.message) {
          newAffectationId = data.data.id;
        } else {
          showToast({
            msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG}| Try again`,
            type: AG_Toast.statusToast.ERROR,
          });
        }
      }
      const res = await postAPI<
        IFetchData<IBaseData>,
        {
          affectationid: string;
          permissionid: string[];
        }
      >(
        "permission/donnerPermission",
        {
          affectationid: org.length === 0 ? newAffectationId : org[0].id,
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
  const resOrganizations = useRecoilValue(
    getOrganizations
  ) as unknown as IResRecoil<IOrganization[]>;
  const resRoles = useRecoilValue(getRoles) as unknown as IResRecoil<IRole[]>;

  const resPermissions = useRecoilValue(
    getPermissions
  ) as unknown as IResRecoil<IPermission[]>;

  const [permissions, setPermissions] = useState<IPermission[]>([]);
  const [orgId, setOrgId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(currentUser.id);
    setPermissions(resPermissions.data || []);
  }, []);

  return (
    <div className="mx-2">
      <section>
        <div className={commonClassSection}>
          <motion.div animate={{ height: "fit-content" }}>
            <Suspense fallback={<SkeletonAnimation className="px-5" />}>
              <section className="mx-3">
                <LastHeading title={"Ajout des permissions"} />
                <div className=" px-1 md:px-1">
                  <SelectCommon
                    data={resOrganizations.data}
                    onChange={setOrgId}
                    label="Selectionner l'organisation"
                    // required={true}
                    keyObject="name"
                    // disabled={true}
                    value={"..."}
                    // type=""
                  />
                  <SelectCommon
                    data={resRoles.data}
                    onChange={setRoleId}
                    label="Selectionner le role"
                    // required={true}
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
                      console.log("e", e);
                      setUserId(currentUser.id);
                    }}
                  />
                </div>
                <div
                  data-testId="create-province"
                  className="px-1 m-1 my-4 border rounded-md gap-5"
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
                  className="px-1 m-1 my-4 border rounded-md gap-5"
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
                      handleSubmitAffectation();
                    }}
                    statusLoading={infoLoading.creeatePermission.status}
                    disabled={infoLoading.creeatePermission.status}
                    label="Enregistrer"
                    // style={{ border: "1px solid #2DAEC4" }}
                    className="ml-auto  rounded-md"
                  />
                </div>
              </section>
            </Suspense>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AddPermissions;
