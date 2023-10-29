import { FaRegEnvelope } from "react-icons/fa";
import { AG_URL } from "../../constants/constants";
import { useState } from "react";
import { postAPI } from "../../utils/fetchData";
import { NavLink } from "react-router-dom";
import { IStateLoading } from "../../types/stateSchema/loading";
import { HandleFormObject } from "../../services/stateHandler/formDataHandler";
import { handleBaseFormLocalStorage } from "../../services/storage/helpers";
import LocalStorage, {
  keyStorage,
} from "../../services/storage/localSTorageHandler";
import { useSetRecoilState } from "recoil";
import { forgotPswdScreenState } from "../../globalState/atoms";
import { INIT_FORM_FORGOT_PSWD_SCREEN } from "../../constants/initForm";
import { CustomButton } from "@/components/core/Button";
import { InputAuth } from "@/components/core/Inputs";
import { IFetchData } from "@/types/commonTypes";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const setForgotPswdScreen = useSetRecoilState(forgotPswdScreenState);
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    loadingForgotPwd: {
      status: false,
      login: "",
    },
  });

  const handleSubmitForgotPwd = async () => {
    if (email.length > 4) {
      try {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "loadingForgotPwd", lKey: "status" },
            true
          )
        );
        const { data } = await postAPI<
          IFetchData<{ data: any }>,
          { email: string }
        >("ask_otp", { email });
        if (data) {
          setInfoLoading(
            HandleFormObject.handleSecondLevel(
              infoLoading,
              { fKey: "loadingForgotPwd", lKey: "status" },
              false
            )
          );
          // console.clear();
          // LOCAL_STORAGE
          const dataStorage = handleBaseFormLocalStorage({
            data: { email },
            type: keyStorage.AFIAGAP_FORGORT_PASSWORD,
          });
          LocalStorage.setItem(
            keyStorage.AFIAGAP_FORGORT_PASSWORD,
            dataStorage
          );
          return setForgotPswdScreen({
            ...INIT_FORM_FORGOT_PSWD_SCREEN,
            testOpt: true,
          });
        }
      } catch (error) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "loadingForgotPwd", lKey: "status" },
            false
          )
        );
      }
    }
  };

  return (
    <div className=" w-full flex flex-col justify-center min-h-screen py-2 bg-gray-100">
      <div className="border flex flex-col  items-center justify-center w-full flex-1 px-20  text-center ">
        <main
          className={`bg-white rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl rounded-br-2xl   rounder-2xl shadow-2xl flex  max-w-4xl md:w-full`}
        >
          <div className="rounded-tl-2xl rounded-bl-2xl md:w-full mb-5  ">
            <div className="text-center flex justify-center">
              <img
                src={AG_URL.LOGO_AFIA_GAP}
                alt="logo-AFIA-GAP"
                className=" object-cover"
                style={{ height: "112px" }}
              />
            </div>
            <div className="p-0">
              <h2 className="text-xl sm:text-2xl font-bold text-main-color-dark">
                Mot de passe oublié ?
              </h2>
              <div className="border-2 w-10 inline-block mb-2 border-main-color-dark"></div>
            </div>
            <div className="flex flex-col items-center m-2">
              <div className="text-gray-400 text-sm w-64  mb-4 ">
                <p className="duration-300 text-gray-400 bg-gray-100 p-2 text-black rounded-lg">
                  Entrez l'email que vous utilisez pour AfiaGap, et nous vous
                  aiderons à créer un nouveau mot de passe.
                </p>
              </div>
              <div className="bg-gray-100 w-64 ms:w-full p-2 flex items-center mb-3 rounded-lg">
                <FaRegEnvelope className="text-gray-400 m-2 text-sm" />
                <InputAuth
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  type="email"
                  pl="eg: muhesi@gmail.com"
                />
              </div>

              <div className="">
                <CustomButton
                  onClick={handleSubmitForgotPwd}
                  label="Envoyer"
                  statusLoading={infoLoading.loadingForgotPwd.status}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="w-2/5 md:block hidden  bg-main-color-dark text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-body mb-2"> AFIAGAP </h2>
            <div className="border-2 w-10 inline-block mb-2 border-white"></div>
            <p className="text-xs mb-2">
              Bienvenue sur la plateforme <strong>AfiaGap</strong>. Un outil du
              monitoring de la préparation et la réponse aux urgences
            </p>
            <NavLink
              to="/login"
              className="border text-sm px-12 py-1 border-white rounded-full  inline-block font-semibold hover:bg-white hover:text-main-color md:px-5"
            >
              Se connecter
            </NavLink>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ForgotPassword;
