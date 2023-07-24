import { useEffect } from "react";
import LocalStorage, {
  keyStorage,
} from "../../services/storage/localSTorageHandler";
import ForgotPassword from "./ForgotPassword";
import OptForgotPassword from "./OptForgotPassword";
import ResetPassword from "./ResetPassword";
import { useRecoilState } from "recoil";
import { forgotPswdScreenState } from "../../globalState/atoms";
import { INIT_FORM_FORGOT_PSWD_SCREEN } from "../../constants/initForm";

function ForgotPaswdProcess() {
  const [forgotPswdScreen, setForgotPswdScreen] = useRecoilState(
    forgotPswdScreenState
  );
  const checkEmailSaved = () => {
    const dataSaved = LocalStorage.getItem(keyStorage.AFIAGAP_FORGORT_PASSWORD);
    if (dataSaved === null) {
      return setForgotPswdScreen({
        ...INIT_FORM_FORGOT_PSWD_SCREEN,
        forgotPaswd: true,
      });
    } else {
      return setForgotPswdScreen({
        ...INIT_FORM_FORGOT_PSWD_SCREEN,
        testOpt: true,
      });
    }
  };
  useEffect(() => {
    checkEmailSaved();
  }, []);

  // SCREEN TO SHOW
  if (forgotPswdScreen.forgotPaswd) {
    return <ForgotPassword />;
  } else if (forgotPswdScreen.resetPswd) {
    return <ResetPassword />;
  } else if (forgotPswdScreen.testOpt) {
    return <OptForgotPassword />;
  }
}

export default ForgotPaswdProcess;
