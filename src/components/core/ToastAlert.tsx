import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 ** it shows the toast notification
 * ? if you don't specify  {autoClose : false} in the object , >> autoClose will be automatic after 5sec*
 * todo : Task done and finished
 * @param args  this method take a object { message:"Muhesi merci", typeToast: "dark", autoClose: false}
 * @throws Exception
 */

export const AG_Toast = {
  statusToast: {
    SUCCESS: "success",
    ERROR: "error",
    WARN: "warn",
    DARK: "dark",
    INFO: "info",
  },
  textPatterns: {
    SUCCESS_MSG: "a été enregistré avec succès",
    SOMETHING_WENT_WRONG: "Oops something went wrong",
  },
};

export enum StatusToast {
  SUCCESS = "success",
  ERROR = "error",
  WARN = "warn",
  DARK = "dark",
  INFO = "info",
}

export const patterns = {
  SUCCESS_MSG: "été enregistrée avec succès",
};

interface Imessage {
  msg: string;
  type: string;
  // type:
  //   | StatusToast.DARK
  //   | StatusToast.INFO
  //   | StatusToast.SUCCESS
  //   | StatusToast.ERROR;
  autoClose?: boolean | number;
}
interface IOptionsAlert {
  position?: any;
  autoClose?: any;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  Transition?: string;
  progress?: number;
  typeToast?: string;
  message?: string;
}
// toast.configure();
export const showToast = (message: Imessage) => {
  let options: IOptionsAlert = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    Transition: "slide",
    // message: ""
  };
  if (message.autoClose === false) options = { ...options, progress: 1 };
  // info  success  warning error default dark

  switch (message.type) {
    case StatusToast.WARN:
      return toast.warn(message.msg, options);
    case StatusToast.INFO:
      return toast.info(message.msg, options);
    case StatusToast.SUCCESS:
      return toast.success(message.msg, options);
    case StatusToast.ERROR:
      return toast.error(message.msg, options);
    case StatusToast.DARK:
      return toast.dark(message.msg, options);
    default:
      return toast.info(message.msg, options);
  }
};

// Todo Delete above const  use statusToast object anywhere
export const SUCCESS = "success";
export const ERROR = "error";
export const WARN = "warn";
export const DARK = "dark";
export const INFO = "info";
