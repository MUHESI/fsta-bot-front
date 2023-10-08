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
import { IUser } from "@/types/stateSchema/user";
import SkeletonAnimation from "@/components/skeleton";
import { IPermission } from "@/types/stateSchema/permission";

const dataCritereVulnerablity = [
  {
    id: 1,
    label: "Hote indigent1",
    value: "Hote indigent",
  },
  {
    id: 2,
    label: "Retourne2",
    value: "Retourne",
  },
  {
    id: 3,
    label: "test3",
    value: "Retourne",
  },
  {
    id: 2,
    label: "Retourne2",
    value: "Retourne",
  },
  {
    id: 4,
    label: "test4",
    value: "Retourne",
  },
  {
    id: 5,
    label: "test5",
    value: "Retourne",
  },
];

interface IProps {
  currentUser: IUser;
}

function ShowPermissions({ currentUser }: IProps) {
  const user = useRecoilValue(userAuthenticatedState);

  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    creeateMenage: {
      status: false,
      msg: "",
    },
  });

  const [formAffectation, setFormAffectation] = useState(
    INIT_FORM_CREATE_AFFECTATION
  );
  const [statusAddPermission, setStatusAddPermission] =
    useState<boolean>(false);
  const handleSubmitAffectation = async () => {
    // if (formAffectation.village.trim().length < 2) {
    //   return showToast({
    //     msg: `Remplissez tous les champs`,
    //     type: StatusToast.DARK,
    //   });
    // }

    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeateMenage", lKey: "status" },
          true
        )
      );

      // const { data } = await postAPI<IFetchData<IBaseData>, ICreateProvince>(
      //   "addprov",
      //   formMenage,
      //   user.token
      // );
      // if (data.code === 200 && data.data) {
      //   setInfoLoading(
      //     HandleFormObject.handleSecondLevel(
      //       infoLoading,
      //       { fKey: "creeateMenage", lKey: "status" },
      //       false
      //     )
      //   );

      //   showToast({
      //     msg: `la province ${formMenage.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
      //     type: AG_Toast.statusToast.SUCCESS,
      //   });
      //   setMenage({ ...INIT_FORM_CREATE_PROVINCE });
      // }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeateMenage", lKey: "status" },
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
  const [files, setFiles] = useState([]);
  const [orgId, setOrgId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [userId, setUserId] = useState("");
  const keepData_ = (files_: any) => setFiles(files_);

  useEffect(() => {
    setUserId(currentUser.id);
    setPermissions(listPermissions || []);
  }, []);

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
              label="Nom de l'organisisation"
              type="string"
              pl="COSAMED"
              value={""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                console.log(e)
              }
            />
          </div>
        </div>
      </section>
      <section className="mx-3">
        <div className={commonClassSection}>
          <LastHeading title={"Les permissions"} />

          <div data-testId="create-province" className="px-5 gap-5">
            <CustomChipBtn
              data={dataCritereVulnerablity}
              label="les privileges  de cet utilisateur"
              saveData={removeItemFromDataToSelect}
              keyObject={"label"}
              disabled={true}
            >
              <AiFillPlusCircle />
            </CustomChipBtn>
          </div>
        </div>
      </section>
      <div className=" text-center py-2 px-5 flex justify-center ">
        <CustomButton
          onClick={() => setStatusAddPermission(!statusAddPermission)}
          statusLoading={infoLoading.creeateMenage.status}
          disabled={infoLoading.creeateMenage.status}
          label="Ajout des permissions"
          // style={{ border: "1px solid #2DAEC4" }}
          className="  rounded-md"
        />
      </div>
      <motion.div
        animate={
          statusAddPermission ? { height: "fit-content" } : { height: 0 }
        }
      >
        {statusAddPermission && (
          <Suspense fallback={<SkeletonAnimation className="px-5" />}>
            <section className="mx-3">
              <div className={commonClassSection}>
                <LastHeading title={"Ajout des permissions"} />
                <div className=" px-5">
                  <SelectCommon
                    data={listOrganizations}
                    onChange={setOrgId}
                    label="Selectionner l'organisation"
                    required={true}
                    keyObject="name"
                    value={"..."}
                    // type=""
                  />
                  <SelectCommon
                    data={allRoles}
                    onChange={setRoleId}
                    label="Selectionner le role"
                    required={true}
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

                <div data-testId="create-province" className="px-5 gap-5">
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
                <div data-testId="create-province" className="px-5 gap-5">
                  <CustomChipBtn
                    data={dataSelected}
                    keyObject={"name"}
                    label="Les privileges selectionnés"
                    saveData={removeItemFromDataSelected}
                    // required={true}
                  >
                    <AiFillCloseCircle />
                  </CustomChipBtn>
                </div>
                <div className="btn block text-center py-2 px-5 md:flex justify-end ">
                  <CustomButton
                    onClick={handleSubmitAffectation}
                    statusLoading={infoLoading.creeateMenage.status}
                    disabled={infoLoading.creeateMenage.status}
                    label="Enregistrer"
                    // style={{ border: "1px solid #2DAEC4" }}
                    className="ml-auto  rounded-md"
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

export default ShowPermissions;
