import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { AG_URL } from "../../constants/constants";
import { useEffect, useState } from "react";
import { ICurrentUser, ILogin } from "../../types/stateSchema/auth";
import { INIT_FORM_LOGIN } from "../../constants/initForm";
import { StatusToast, showToast } from "@/components/core/ToastAlert";
import { postAPI } from "../../utils/fetchData";
import LocalStorage, {
  keyStorage,
} from "../../services/storage/localSTorageHandler";
import { NavLink, useNavigate } from "react-router-dom";
import { IStateLoading } from "../../types/stateSchema/loading";
import { HandleFormObject } from "../../services/stateHandler/formDataHandler";
import { handleBaseFormLocalStorage } from "../../services/storage/helpers";
import { CustomButton } from "@/components/core/Button";
import { BiShow, BiSolidShow } from "react-icons/bi";
import { InputAuth } from "@/components/core/Inputs";
import { useSetRecoilState } from "recoil";
import {
  ICurrentUserPermission,
  getPermissionsofCurrentUser,
  userAuthenticatedState,
} from "@/globalState/atoms";
import { IFetchData } from "@/types/commonTypes";
import { motion } from "framer-motion";

function Login() {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAuthenticatedState);

  useEffect(() => {
    // if (user.full_name !== null) return navigate("/");
  }, []);

  const [formLogin, setFormLogin] = useState<ILogin>(INIT_FORM_LOGIN);
  const [showPswd, setShowPswd] = useState(false);
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    loadingLogin: {
      status: false,
      login: "",
    },
  });
  const handleSubmitLogin = async () => {
    localStorage.removeItem(keyStorage.AFIAGAP_FORGORT_PASSWORD);
    if (formLogin.email.trim().length < 4 || formLogin.pswd.trim().length < 4) {
      return showToast({
        msg: `Remplissez tous les champs`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadingLogin", lKey: "status" },
          true
        )
      );
      const { data } = await postAPI<IFetchData<ICurrentUser>, ILogin>(
        "login",
        formLogin
      );
      if (data.status === 1 && data.data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "loadingLogin", lKey: "status" },
            false
          )
        );
        let data_ = {
          ...data.data,
          metaData: {
            permissions: getPermissionsofCurrentUser(
              data.data as any as unknown as ICurrentUserPermission
            ),
          },
        };

        keepUserAuthInLocalStorage({
          data: { ...data_ },
          token: data.token ? data.token : "AA",
        });
        console.clear();
        console.log("token", data.token);
        console.log("data", data);
        setUser({
          email: data.data.email,
          full_name: data.data.full_name,
          token: data.token ? data.token : "",
          id: data.data.id,
          metaData: { ...data_.metaData },
          profil: data?.data?.profil || null,
        });
        navigate("/");
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "loadingLogin", lKey: "status" },
          false
        )
      );
      return showToast({
        msg: `Mot de passe ou email invalide | ${
          (error as any as unknown as Error).message
        }`,
        type: StatusToast.ERROR,
      });
    }
  };

  return (
    <motion.div animate={{ height: "fit-content" }}>
      <div className="duration-300  w-full flex flex-col justify-center min-h-screen py-2 bg-gray-100">
        <div className="border flex flex-col  items-center justify-center w-full flex-1 px-20  text-center ">
          <main
            className={`bg-white rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl rounded-br-2xl   rounder-2xl shadow-2xl flex  max-w-4xl md:w-full`}
          >
            <div className="rounded-tl-2xl rounded-bl-2xl  md:w-full my-2 ">
              <div className="text-center flex justify-center">
                <img
                  src={AG_URL.LOGO_AFIA_GAP}
                  alt="logo-AFIA-GAP"
                  className=" object-cover"
                  style={{ height: "112px" }}
                />
              </div>
              <div className="p-0">
                <h2 className="text-xl sm:text-3xl font-bold text-main-color-dark ">
                  Connexion
                </h2>
                <div className="border-2 w-10 inline-block mb-2 border-main-color-dark"></div>
              </div>
              <div className="flex flex-col items-center m-2 h-[250px]">
                <div className="bg-gray-100 w-60 ms:w-full p-2 flex items-center mb-3 rounded-lg">
                  <FaRegEnvelope className="text-gray-400 m-2 text-sm" />
                  <InputAuth
                    data-testid="emailInput"
                    value={formLogin.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormLogin({ ...formLogin, email: e.target.value })
                    }
                    type="email"
                    pl="Ton addresse email"
                  />
                </div>
                <div className="bg-gray-100 w-50  ms:w-full p-2 flex items-center mb-3 rounded-lg">
                  <MdLockOutline className="text-gray-400 m-2 text-sm" />
                  <InputAuth
                    data-testid="passwordInput"
                    value={formLogin?.pswd}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormLogin({ ...formLogin, pswd: e.target.value })
                    }
                    type={`${showPswd ? "text" : "password"}`}
                    pl="Ton mot de passe"
                  />

                  <span
                    data-testid="eye-icon"
                    className="text-gray-400 m-2 text-sm cursor-pointer"
                    onClick={() => setShowPswd(!showPswd)}
                  >
                    {showPswd ? (
                      <BiShow
                      // className="text-gray-400 m-2 text-sm cursor-pointer"
                      />
                    ) : (
                      <BiSolidShow
                      // data-testid="eye-icon"
                      // className="text-gray-400 m-2 text-sm cursor-pointer"
                      // onClick={() => setShowPswd(!showPswd)}
                      />
                    )}
                  </span>
                </div>
                <div className="flex justify-between w-64 px-3 mb-5 ">
                  <label className="flex items-center text-xs focus:outline-none">
                    <input
                      data-testid="rememberMe"
                      className="mr-1"
                      type="checkbox"
                    />
                    Remember me
                  </label>
                  <NavLink
                    to="/auth/forgot-password"
                    className="text-xs"
                    data-testid="forgotPassword"
                  >
                    Forgot password?
                  </NavLink>
                </div>
                <div className="mt-4 md:mt-1">
                  <CustomButton
                    onClick={handleSubmitLogin}
                    label="Se connecter"
                    statusLoading={infoLoading.loadingLogin.status}
                    className="rounded-full"
                    disabled={!formLogin.email || !formLogin.pswd}
                  />
                </div>
              </div>
            </div>
            <div className="w-2/5 md:block hidden  bg-main-color-dark text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl font-body mb-2"> AFIAGAP </h2>
              <div className="border-2 w-10 inline-block mb-2 border-white"></div>
              <p className="text-xs mb-2">
                Bienvenue sur la plateforme <strong>AfiaGap</strong>. Un outil
                du monitoring de la préparation et la réponse aux urgences
              </p>
            </div>
          </main>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;

export interface IAuthInLocalStorage extends ICurrentUser {
  metaData?: null | any;
}

export const keepUserAuthInLocalStorage = (data: {
  data: IAuthInLocalStorage;
  token: string;
}) => {
  LocalStorage.setItem(
    keyStorage.AFIAGAP_AUTH_USER,
    handleBaseFormLocalStorage({
      user: data.data.id,
      data: data.data,
      type: keyStorage.AFIAGAP_AUTH_USER,
      metadata: {
        token: data.token,
      },
    })
  );
};
