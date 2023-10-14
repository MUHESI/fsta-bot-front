import React, { Suspense, useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { AG_URL } from "@/constants/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { FaUserCircle } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import { CgOrganisation } from "react-icons/cg";
import { MdSettings } from "react-icons/md";
import { RiDeleteBin2Fill, RiLockPasswordFill } from "react-icons/ri";
import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { userAuthenticatedState } from "@/globalState/atoms";
import LocalStorage, {
  keyStorage,
} from "@/services/storage/localSTorageHandler";
import { IAutherUSer } from "@/types/stateSchema/auth";
import { IMetadataAuthUser } from "@/types/storageTypes";
import { IUser } from "@/types/stateSchema/user";
import ShowPermissionUser from "../showPermissionUser";
import SkeletonAnimation from "@/components/skeleton";
import { getInfoUser } from "@/globalState/atoms/user";
import { CommonSelectGap, SelectCommon } from "@/components/core/select";
import { IStateLoading } from "@/types/stateSchema/loading";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { HandleFormArrayOfObject } from "@/services/stateHandler/formDataArrayHandler";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { postAPI, putAPI, updateAPI } from "@/utils/fetchData";
import { IBaseData, IFetchData } from "@/types/commonTypes";
import { CustomButton } from "@/components/core/Button";
import { useParams } from "react-router";

function ShowProfileUser() {
  const { idUser } = useParams();
  // TODO: Improve this later
  const commonClass = "border rounded-lg my-5 ";
  const commonClassSection = `${commonClass} pb-5`;
  // DATA
  const user = useRecoilValue(userAuthenticatedState);
  const currentUser_ = useRecoilValue(
    getInfoUser({ idUser: user.id, token: user.token })
  ) as unknown as any;

  const [currentUser, setCurrentUser] = useState<IUser | any>({});

  const checkAuthUser = () => {
    const dataSaved = LocalStorage.getItem<{
      data: IAutherUSer;
      metadata: IMetadataAuthUser | null;
    }>(keyStorage.AFIAGAP_AUTH_USER);
    if (dataSaved === null) {
      return;
    } else {
      const { data } = dataSaved;
      console.clear();
      console.log("data, ", data);
      // setcurrentUser(data);
    }
  };

  useEffect(() => {
    if (Object.keys(currentUser_).length > 0) {
      setCurrentUser(currentUser_);
    }
    checkAuthUser();
  }, [currentUser_]);

  const commonClassResume =
    "flex justify-start w-full gap-5 px-5 py-2  cursor-pointer items-center text-base hover:bg-white-hover hover:text-accent-foreground";

  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    updateProfile: {
      status: false,
      msg: "",
    },
  });

  const handleSubmitUpdateProfile = async () => {
    if (currentUser.full_name.trim().length < 3) {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "updateProfile", lKey: "status" },
          true
        )
      );
      const { data } = await putAPI<IFetchData<IBaseData>, any>(
        "users/editprofile",
        currentUser,
        user.token
      );
      //
      console.clear();
      console.log("data", data);
      //
      if (data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "updateProfile", lKey: "status" },
            false
          )
        );
        showToast({
          msg: `les informations de ${currentUser.full_name} ont été enregistré avec succès`,
          type: AG_Toast.statusToast.SUCCESS,
        });
      }
    } catch (error) {
      console.clear();
      console.log("error", error);
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "updateProfile", lKey: "status" },
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
    <div className="">
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Profile User"} />
      </div>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <section
            className={`${commonClass}  min-h-max hover:text-scale-110 mx-3 flex flex-col justify-start items-start `}
          >
            <div className={commonClassResume}>
              <FaUserCircle /> <span> Apercu utilisateur </span>
            </div>
            <div className={commonClassResume}>
              <RiFolderInfoFill /> <span> Informations basiques </span>
            </div>
            <div className={commonClassResume}>
              <CgOrganisation /> <span> Organisations </span>
            </div>
            <div className={commonClassResume}>
              <RiLockPasswordFill /> <span> Changer mot de passe </span>
            </div>
            <div className={commonClassResume}>
              <MdSettings /> <span> Parametres </span>
            </div>
            <div className={commonClassResume}>
              <RiDeleteBin2Fill /> <span> Desactiver le compte </span>
            </div>
            {/* </div> */}
          </section>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <section className=" mx-3">
            <div className={commonClass}>
              {/* <div className="flex flex-wrap justify-between px-5 py-2 items-center text-base"> */}
              <div className="flex flex-wrap justify-center sm:justify-between px-5 py-2 items-center text-base">
                <div className="flex flex-col sm:flex-row  justify-center  gap-5 items-center ">
                  <img
                    alt="..."
                    src={`${AG_URL.USER_IMG_PROFILE}`}
                    className="w-20 h-20 object-cover"
                  />
                  <div className=" flex flex-col  text-center sm:text-left">
                    <strong> {currentUser?.full_name || ""} </strong>
                    <span>{currentUser?.affectation_p?.role?.name || ""} </span>
                  </div>
                </div>
                <div className="p-5"> Rendre off </div>
              </div>
            </div>
            <div className={commonClassSection}>
              <LastHeading title={"Informations basiques"} />
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <InputCommon
                  required={true}
                  label="Nom"
                  pl="eg: Entrer votre nom"
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      full_name: e.target.value,
                    })
                  }
                  value={currentUser.full_name}
                />
                <InputCommon
                  required={true}
                  label="Prenon"
                  pl="eg: Entrer votre nom"
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      full_name: e.target.value,
                    })
                  }
                  value={currentUser.full_name}
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <InputCommon
                  required={true}
                  label="Addresse mail"
                  pl="Entrer votre adresse mail"
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      email: e.target.value,
                    })
                  }
                  value={currentUser.email}
                />
                <InputCommon
                  required={true}
                  disabled={true}
                  label="Role"
                  pl="Entrer votre role"
                  onChange={() => console.log("first")}
                  value={currentUser?.affectation_p?.role?.name || ""}
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <InputCommon
                  label="Addresse physique"
                  pl="..."
                  onChange={() => console.log("first")}
                  value={""}
                  disabled={true}
                />
                <InputCommon
                  label="Telephone"
                  pl="Entrer votre numero de telephone"
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      phone: e.target.value,
                    })
                  }
                  value={currentUser?.phone || ""}
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <InputCommon
                  label="Addresse physique"
                  pl="..."
                  type="date"
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      dateBorn: e.target.value,
                    })
                  }
                  value={currentUser.dateBorn || ""}
                />
                <SelectCommon
                  data={[
                    { id: "Masculin", label: "Masculin", value: "Masculin" },
                    { id: "Féminin", label: "Féminin", value: "Féminin" },
                    { id: "AUTRE", label: "AUTRE", value: "AUTRE" },
                  ]}
                  required={true}
                  keyObject="value"
                  label="Selectionner le genre"
                  onChange={(value) =>
                    setCurrentUser({
                      ...currentUser,
                      gender: value,
                    })
                  }
                  value={currentUser?.gender}
                  // classNameHoverCard=" border-main-color"
                />
              </div>
              <div className="btn p-3 flex justify-end ">
                <CustomButton
                  onClick={handleSubmitUpdateProfile}
                  statusLoading={infoLoading.updateProfile.status}
                  disabled={infoLoading.updateProfile.status}
                  label="Mettre en jour"
                  className="ml-auto  rounded-md"
                />
              </div>
            </div>
            <div className={commonClassSection}>
              <LastHeading title={"Organisations"} />
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <InputCommon
                  required={true}
                  disabled={true}
                  label="Nom"
                  onChange={() => console.log("first")}
                  value={currentUser?.affectation_p?.organisation?.name || ""}
                />
                <InputCommon
                  required={true}
                  label="Telephone"
                  disabled={true}
                  onChange={() => console.log("first")}
                  value={currentUser?.affectation_p?.organisation?.phone || ""}
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <InputCommon
                  required={true}
                  disabled={true}
                  label="Addresse mail"
                  onChange={() => console.log("first")}
                  value={currentUser?.affectation_p?.organisation?.email || ""}
                />
              </div>
              {/* <div className="btn p-3 flex justify-end ">
                <Button
                  variant="primary"
                  style={{ border: "1px solid #2DAEC4" }}
                  className="ml-auto  rounded-md"
                >
                  Enregistrer
                </Button>
              </div> */}
            </div>
            <div className={commonClassSection}>
              <LastHeading title={"Changer mot de passe"} />
              <div className="py-2 px-5 gap-5">
                <InputCommon
                  required={true}
                  disabled={true}
                  label="Ancien mot de passe"
                  type="password"
                  pl="Entrer votre ancien mot de passe"
                  onChange={() => console.log("first")}
                  value={"root12345-ROOT"}
                />
              </div>
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <InputCommon
                  required={true}
                  disabled={true}
                  label="Nouveau mot de passe"
                  type="password"
                  // pl="Entrer votre adresse mail"
                  onChange={() => console.log("first")}
                  value={"cosamed@gmail.com"}
                />
                <InputCommon
                  required={true}
                  disabled={true}
                  type="password"
                  label=" Confirmer votrenouveau mot de passe"
                  pl="Entrer votre role"
                  onChange={() => console.log("first")}
                  value={"Niveau 1"}
                />
              </div>
              {/* <div className="btn p-3 flex justify-end ">
                <Button
                  variant="primary"
                  style={{ border: "1px solid #2DAEC4" }}
                  className="ml-auto  rounded-md"
                >
                  Enregistrer
                </Button>
              </div> */}
            </div>
            {/* =====PERMISSIONS==== */}
            <div
              className={commonClassSection}
              onClick={() => console.log("currentUser_", currentUser_)}
            >
              <LastHeading title={"Permissions de l'utilisateur"} />
              <ShowPermissionUser
                dataPermissions={currentUser_?.metaData?.permissions}
              />
            </div>
            <div className={commonClassSection}>
              <LastHeading title={"Parametres du compte"} />
              <div className="py-2 px-5 flex items-start space-x-2">
                <Switch id="airplane-mode" className="bg-gray-200" />
                <label htmlFor="airplane-mode" className="text-sm">
                  Rendre le compte inactif
                </label>
              </div>

              <div className="py-2 px-5 flex items-start space-x-2">
                <Switch id="airplane-mode" className="bg-gray-200" />
                <label htmlFor="airplane-mode" className="text-sm">
                  Rendre le compte actif
                </label>
              </div>
              {/* <div className="btn p-3 flex justify-end ">
                <Button
                  variant="primary"
                  style={{ border: "1px solid #2DAEC4" }}
                  className="ml-auto  rounded-md"
                >
                  Enregistrer
                </Button>
              </div> */}
            </div>
          </section>
        </Grid>
      </Grid>
    </div>
  );
}

function ProfileUser() {
  // HANDLE TABS
  const [tabId, setTabId] = useState<number>(0);
  return (
    <div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <ShowProfileUser />
      </Suspense>
    </div>
  );
}
export default ProfileUser;

function InputCommon({
  pl,
  label,
  onChange,
  value,
  type,
  required,
  disabled,
}: {
  label: string;
  pl?: string;
  type?: string;
  onChange: (e: any) => void;
  value: string | number;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className=" flex-auto p-0 m-0">
      <label className="text-sm">
        {label}
        <span className="text-red-500"> {`${required ? "*" : ""}`} </span>
      </label>
      <Input
        disabled={disabled ? disabled : false}
        onChange={onChange}
        placeholder={pl}
        value={value}
        type={type || "text"}
        className="max-w-sm rounded-md"
      />
    </div>
  );
}
