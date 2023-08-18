import { useEffect, useState } from "react";
import { AG_URL } from "../../constants/constants";
import { postAPI } from "../../utils/fetchData";
import { IStateLoading } from "../../types/stateSchema/loading";
import { HandleFormObject } from "../../services/stateHandler/formDataHandler";
import LocalStorage, {
  keyStorage,
} from "../../services/storage/localSTorageHandler";
import { AiFillSecurityScan } from "react-icons/ai";
import { forgotPswdScreenState } from "../../globalState/atoms";
import { useSetRecoilState } from "recoil";
import { ForgotPswdScreen, IFetchData } from "../../types/commonTypes";
import { INIT_FORM_FORGOT_PSWD_SCREEN } from "../../constants/initForm";
import { CustomButton } from "@/components/core/Button";
import { InputAuth } from "@/components/core/Inputs";
import { StatusToast, showToast } from "@/components/core/ToastAlert";

function OptForgotPassword() {
  const setForgotPswdScreen = useSetRecoilState(forgotPswdScreenState);

  const [email, setEmail] = useState("");
  const [codeOpt, setCodeOpt] = useState("");
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    codeOptForgotPwd: {
      status: false,
      login: "",
    },
  });
  const checkEmailSaved = () => {
    const dataSaved = LocalStorage.getItem<{ data: { email: string } }>(
      keyStorage.AFIAGAP_FORGORT_PASSWORD
    );

    if (dataSaved === null) {
      return setForgotPswdScreen({
        ...INIT_FORM_FORGOT_PSWD_SCREEN,
        forgotPaswd: true,
      });
    } else {
      const { data } = dataSaved;
      setEmail(data.email);
    }
  };
  useEffect(() => {
    checkEmailSaved();
  }, []);

  const handleSubmit = async () => {
    if (codeOpt.length > 2) {
      try {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "codeOptForgotPwd", lKey: "status" },
            true
          )
        );
        const { data } = await postAPI<
          IFetchData<{ data: any }>,
          { code: string }
        >("test_otp", { code: codeOpt });

        if (data) {
          setInfoLoading(
            HandleFormObject.handleSecondLevel(
              infoLoading,
              { fKey: "codeOptForgotPwd", lKey: "status" },
              false
            )
          );
          setForgotPswdScreen((previewData: ForgotPswdScreen) => {
            return { ...previewData, resetPswd: true };
          });
        }
      } catch (error) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "codeOptForgotPwd", lKey: "status" },
            false
          )
        );
        return showToast({
          msg: `Il semble que votre code est incorrect | ${
            (error as any as unknown as Error).message
          }`,
          type: StatusToast.ERROR,
        });
      }
    }
  };

  return (
    <div className=" w-full flex flex-col justify-center min-h-screen py-2 bg-gray-100">
      <div className="border flex flex-col  items-center justify-center w-full flex-1 px-20  text-center ">
        <main
          className={`bg-white rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl rounded-br-2xl   rounder-2xl shadow-2xl flex  max-w-4xl md:w-full`}
        >
          <div className="rounded-tl-2xl rounded-bl-2xl  md:w-full mb-5  ">
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
                Entrer le code
              </h2>
              <div className="border-2 w-10 inline-block mb-2 border-main-color-dark"></div>
            </div>
            <div className="text-center font-bold text-lg p-1"></div>
            <div className="flex flex-col items-center m-2">
              <div className="text-[0.7em] sm:text-sm text-gray-400 text-sm w-64  mb-4 ">
                <p className="duration-300 bg-gray-100 p-2 text-black rounded-lg">
                  Entrer le code qui a été envoyé sur <strong>{email}</strong>
                </p>
              </div>
              <div className="bg-gray-100 w-64 ms:w-full p-2 flex items-center mb-3 rounded-lg">
                <AiFillSecurityScan className="text-gray-400 m-2 text-sm" />
                <InputAuth
                  value={codeOpt}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCodeOpt(e.target.value)
                  }
                  type="text"
                  pl="eg: 4570"
                />
              </div>
              <div className="">
                <CustomButton
                  statusLoading={infoLoading.codeOptForgotPwd.status}
                  onClick={handleSubmit}
                  label="Vérifier"
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
          </div>
        </main>
      </div>
    </div>
  );
}

export default OptForgotPassword;
