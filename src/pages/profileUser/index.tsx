import React, { Suspense, useEffect, useState, useRef } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Grid } from "@mui/material";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { userAuthenticatedState } from "@/globalState/atoms";
import { IUser } from "@/types/stateSchema/user";
import ShowPermissionUser from "../showPermissionUser";
import SkeletonAnimation from "@/components/skeleton";
import { getInfoUser } from "@/globalState/atoms/user";
import { SelectCommon } from "@/components/core/select";
import { IStateLoading } from "@/types/stateSchema/loading";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { BASE_URL_API, getAPI, putAPI } from "@/utils/fetchData";
import { IBaseData, IFetchData } from "@/types/commonTypes";
import { CustomButton } from "@/components/core/Button";
import { useParams } from "react-router";
import { UploadFile } from "@/components/uploadFiles/controllerUpload";
import { BiSolidEditAlt } from "react-icons/bi";
import { LinearDeterminate } from "../loading";
import { IResRecoil } from "@/types/commonTypes";
import AlertMessage, {
  INIT_ALERT_MODEL,
  severityAlert,
} from "@/components/core/Alert";
import LocalStorage, {
  keyStorage,
} from "@/services/storage/localSTorageHandler";
import { IAuthInLocalStorage, keepUserAuthInLocalStorage } from "../auth/Login";
import { IAutherUSer } from "@/types/stateSchema/auth";
import { IMetadataAuthUser } from "@/types/storageTypes";

function ShowProfileUser() {
  const { idUser } = useParams();
  // TODO: Improve this later
  const commonClass = "border rounded-lg my-5 ";
  const commonClassSection = `${commonClass} pb-5`;
  // DATA
  // const [user, setUser] = useRecoilState(userAuthenticatedState);
  const user = useRecoilValue(userAuthenticatedState);

  const resCurrentUser = useRecoilValue(
    getInfoUser({ idUser: idUser, token: user.token })
  ) as unknown as IResRecoil<IUser>;
  const refreshCurrentUser = useRecoilRefresher_UNSTABLE(
    getInfoUser({ idUser: idUser, token: user.token })
  );
  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL, open: true });
  const [hovering, setHovering] = useState(false);
  const [currentUser, setCurrentUser] = useState<IUser | any>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<{ uri: string | null; file: any }>({
    uri: null,
    file: null,
  });
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    updatePhotoProfile: {
      status: false,
      msg: "",
    },
    updateProfile: {
      status: false,
      msg: "",
    },
    getCurrentUser: {
      status: false,
      msg: "",
    },
  });

  const loadImage = (e: any) => {
    if (user.id !== currentUser.id) {
      return showToast({
        msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG} | No Access !`,
        type: StatusToast.ERROR,
      });
    }
    const URI = URL.createObjectURL(e.target.files[0]);
    setImage({ uri: URI, file: e.target.files[0] });
    submitupdatePictureUser(e.target.files[0]);
  };
  const submitupdatePictureUser = async (file: any) => {
    if (!file) return;
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "updatePhotoProfile", lKey: "status" },
          true
        )
      );
      const res = await UploadFile.uploadFiles({
        URL: `${BASE_URL_API}/api/users/editimage`,
        files: [file],
        typeFile: "image",
        token: user.token,
      });

      if (res?.success) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "updatePhotoProfile", lKey: "status" },
            false
          )
        );
        updateDataLocaStorage();
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "updatePhotoProfile", lKey: "status" },
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

  const updateDataLocaStorage = async () => {
    const res = await getAPI<any>(`users/getuserid/${idUser}`, user.token);
    if (res?.data) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "getCurrentUser", lKey: "status" },
          false
        )
      );
      const data_ = res.data.data as any as unknown as IAutherUSer;
      const dataLocal_ = data_ as any as unknown as IAuthInLocalStorage;

      const dataSaved = LocalStorage.getItem<{
        data: IAutherUSer;
        metadata: IMetadataAuthUser | null;
      }>(keyStorage.AFIAGAP_AUTH_USER);
      if (dataSaved === null) {
        return;
      }
      LocalStorage.removeItem(keyStorage.AFIAGAP_AUTH_USER);
      keepUserAuthInLocalStorage({
        data: {
          ...dataLocal_,
          metaData: dataSaved?.data?.metaData || null,
        },
        token: dataSaved.metadata?.token || "",
      });
      window.location.href = window.location.href.toString() || "/";

      // window.location.href = "/";
    }
  };

  useEffect(() => {
    if (Object.keys(resCurrentUser.data).length > 0) {
      setCurrentUser(resCurrentUser.data);
    }
  }, [resCurrentUser]);
  const commonClassResume =
    "flex justify-start w-full gap-5 px-5 py-2  cursor-pointer items-center text-base hover:bg-white-hover hover:text-accent-foreground";

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
        refreshCurrentUser();
      }
    } catch (error) {
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
    <div className="w-full md:w-[75%] m-auto">
      {resCurrentUser.message && (
        <AlertMessage
          severity={severityAlert.INFO}
          message={{
            title: "Information",
            description: resCurrentUser.message,
          }}
          openAlert={alert.open}
          closeAlert={() => setAlert({ ...INIT_ALERT_MODEL })}
          width={98}
        />
      )}
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Profile User"} />
      </div>

      <Grid container spacing={1}>
        {/* <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
          </section>
        </Grid> */}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <section className=" mx-3">
            <div className={`${commonClass}`}>
              <div className="flex flex-wrap justify-center sm:justify-between px-5 py-2 items-center text-base">
                <div className="flex flex-col sm:flex-row  justify-center  gap-5 items-center ">
                  <input
                    onChange={loadImage}
                    multiple={false}
                    ref={fileInputRef}
                    type="file"
                    hidden
                  />
                  <div
                    className="border rounded-full "
                    onClick={() => fileInputRef?.current?.click()}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    style={{
                      backgroundImage: image?.uri
                        ? `url(${image?.uri})`
                        : currentUser
                        ? `url(${currentUser?.profil})`
                        : "",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      // ADDED STYLE
                      width: "70px",
                      height: "70px",
                      display: "flex",
                      justifyContent: "right",
                      alignItems: "end",
                      cursor: "pointer",
                    }}
                  >
                    {image.uri === null && hovering && (
                      <>
                        <div
                          style={{
                            transform: "translate(-10px)",
                          }}
                        >
                          <BiSolidEditAlt className="duration-300 text-md text-main-color font-bold" />
                        </div>
                      </>
                    )}
                  </div>
                  <div className=" flex flex-col  text-center sm:text-left">
                    <strong> {currentUser?.full_name || ""} </strong>
                    <span>{currentUser?.affectation_p?.role?.name || ""} </span>
                  </div>
                </div>
                <div className="p-5"> Rendre off </div>
              </div>
              <div className="h-1 m-auto">
                {infoLoading.updatePhotoProfile.status && <LinearDeterminate />}
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

              {user.id === currentUser.id && (
                <div className="btn p-3 flex justify-end ">
                  <CustomButton
                    onClick={handleSubmitUpdateProfile}
                    statusLoading={infoLoading.updateProfile.status}
                    disabled={infoLoading.updateProfile.status}
                    label="Mettre en jour"
                    className="ml-auto  rounded-md"
                  />
                </div>
              )}
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
            <div className={commonClassSection}>
              <LastHeading title={"Permissions de l'utilisateur"} />
              <div className="px-5">
                {currentUser?.metaData?.permissions?.map(
                  (item_: any, key: number) => (
                    <div key={key}>
                      <h4 className="bordeer border-b pb-1">
                        <span
                          className="text-main-color text-sm"
                          onClick={() => {
                            // console.log("item", item);
                          }}
                        >
                          {item_?.organisation?.name}
                        </span>
                      </h4>
                      <ShowPermissionUser
                        dataPermissions={item_.allpermission}
                      />
                    </div>
                  )
                )}
              </div>
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
