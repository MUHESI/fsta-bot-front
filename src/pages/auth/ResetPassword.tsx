import { useEffect, useState } from "react";
import { MdLockOutline } from "react-icons/md";
import { AG_URL } from "../../constants/constants";
import { IStateLoading } from "../../types/stateSchema/loading";
import { ILogin, IResetPassword } from "../../types/stateSchema/auth";
import { INIT_FORM_RESET_PASSWORD } from "../../constants/initForm";
import LocalStorage, {
  keyStorage,
} from "../../services/storage/localSTorageHandler";
import { useNavigate } from "react-router";
import { StatusToast, showToast } from "@/components/core/ToastAlert";
import { HandleFormObject } from "../../services/stateHandler/formDataHandler";
import { postAPI } from "../../utils/fetchData";
import { handleBaseFormLocalStorage } from "../../services/storage/helpers";
import { AuthButton } from "@/components/core/Button";
import { InputAuth } from "@/components/core/Inputs";
import { BiShow, BiSolidShow } from "react-icons/bi";
import { useSetRecoilState } from "recoil";
import { userAuthenticatedState } from "@/globalState/atoms";

function ResetPassword() {
  const navigate = useNavigate();
  const [showPswd, setShowPswd] = useState(true);
  const [showConfirmPswd, setShowConfirmPswd] = useState(false);

  const setUser = useSetRecoilState(userAuthenticatedState);

  const [formResetPswd, setFormResetPswd] = useState<IResetPassword>(
    INIT_FORM_RESET_PASSWORD
  );

  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    resetPassword: {
      status: false,
      resetPassword: "",
    },
  });

  const handleSubmitResetPswd = async () => {
    if (
      formResetPswd.email.trim().length < 4 &&
      formResetPswd.pswd.trim().length < 4
    ) {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    if (formResetPswd.pswd !== formResetPswd.pswdconfirm) {
      return showToast({
        msg: `Oops ! les duex mots de passe ne correspondent pas`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "resetPassword", lKey: "status" },
          true
        )
      );
      const res = await postAPI<IResetPassword>("lost_pswd", formResetPswd);
      if (res.data.code === 200 && res.data) {
        const { data } = await postAPI<ILogin>("login", {
          email: formResetPswd.email,
          pswd: formResetPswd.pswd,
        });
        if (data.status === 1 && data.data) {
          setInfoLoading(
            HandleFormObject.handleSecondLevel(
              infoLoading,
              { fKey: "resetPassword", lKey: "status" },
              false
            )
          );
          // LOCAL_STORAGE
          const dataStorage = handleBaseFormLocalStorage({
            user: data?.data?.id,
            data: data.data,
            type: keyStorage.AFIAGAP_AUTH_USER,
          });
          LocalStorage.removeItem(keyStorage.AFIAGAP_FORGORT_PASSWORD);

          LocalStorage.setItem(keyStorage.AFIAGAP_AUTH_USER, dataStorage);
          setUser({
            email: data.data.email,
            full_name: data.data.full_name,
          });
          navigate("/");
        }
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "resetPassword", lKey: "status" },
          false
        )
      );
      return showToast({
        msg: `Oops ! Something went wrong | ${
          (error as any as unknown as Error).message
        }`,
        type: StatusToast.ERROR,
      });
    }
  };

  const checkEmailSaved = () => {
    const dataSaved = LocalStorage.getItem<any>(
      keyStorage.AFIAGAP_FORGORT_PASSWORD
    );
    if (dataSaved === null) {
      return navigate("/auth/forgot-password");
    } else {
      const { data } = dataSaved;
      setFormResetPswd({ ...formResetPswd, email: data.email });
    }
  };
  useEffect(() => {
    checkEmailSaved();
  }, []);

  return (
    <div className=" w-full flex flex-col justify-center min-h-screen py-2 bg-gray-100">
      <div className="border flex flex-col  items-center justify-center w-full flex-1 px-20  text-center ">
        <main
          className={`bg-white rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl rounded-br-2xl   rounder-2xl shadow-2xl flex  max-w-4xl md:w-full`}
        >
          <div className="rounded-tl-2xl rounded-bl-2xl mb-5 sm:w-3/5 md:w-full my-2 ">
            <div className="text-center flex justify-center">
              <img
                src={AG_URL.LOGO_AFIA_GAP}
                alt="logo-AFIA-GAP"
                className=" object-cover"
                style={{ height: "112px" }}
              />
            </div>
            <div className="p-0">
              <h2 className="text-2xl font-bold text-main-color-dark">
                Changer mot de passe
              </h2>
              <div className="border-2 w-10 inline-block mb-2 border-main-color-dark"></div>
            </div>
            <div className="text-center font-bold text-lg p-1"></div>
            <div className="flex flex-col items-center m-2">
              <p className="text-gray-400 text-sm w-64  mb-4 ">
                Veuillez changer votre mot de passe pour accéder a la plateforme
                AfiaGap
              </p>
              <div className="bg-gray-100 w-64 ms:w-full p-2 flex items-center mb-3 rounded-lg">
                <MdLockOutline className="text-gray-400 m-2 text-sm" />

                <InputAuth
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormResetPswd({ ...formResetPswd, pswd: e.target.value })
                  }
                  value={formResetPswd.pswd}
                  type={`${showPswd ? "text" : "password"}`}
                  pl="Nouveau mot de passe"
                />
                {showPswd ? (
                  <BiShow
                    className="text-gray-400 m-2 text-sm cursor-pointer"
                    onClick={() => setShowPswd(!showPswd)}
                  />
                ) : (
                  <BiSolidShow
                    className="text-gray-400 m-2 text-sm cursor-pointer"
                    onClick={() => setShowPswd(!showPswd)}
                  />
                )}
              </div>
              <div className="bg-gray-100 w-64 ms:w-full p-2 flex items-center mb-3 rounded-lg">
                <MdLockOutline className="text-gray-400 m-2 text-sm" />

                <InputAuth
                  value={formResetPswd.pswdconfirm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormResetPswd({
                      ...formResetPswd,
                      pswdconfirm: e.target.value,
                    })
                  }
                  pl="Confirmer votre mot de passe"
                  type={`${showConfirmPswd ? "text" : "password"}`}
                />
                {showPswd ? (
                  <BiShow
                    className="text-gray-400 m-2 text-sm cursor-pointer"
                    onClick={() => setShowConfirmPswd(!showConfirmPswd)}
                  />
                ) : (
                  <BiSolidShow
                    className="text-gray-400 m-2 text-sm cursor-pointer"
                    onClick={() => setShowConfirmPswd(!showConfirmPswd)}
                  />
                )}
              </div>

              <div className="">
                <AuthButton
                  disabled={formResetPswd.pswd !== formResetPswd.pswdconfirm}
                  onClick={handleSubmitResetPswd}
                  label="Envoyer"
                  statusLoading={infoLoading.resetPassword.status}
                />
              </div>
            </div>
          </div>
          <div className="w-2/5 md:block hidden bg-main-color-dark text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-body mb-2"> AFIAGAP </h2>
            <div className="border-2 w-10 inline-block mb-2 border-white"></div>
            <p className="text-xs mb-2">
              Bienvenue sur la plateforme <strong>AfiaGap</strong>. Un outil du
              monitoring de la préparation et la réponse aux urgences
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ResetPassword;
