// import { IFile, IResUploadFiles } from './types';
import { IResUploadFiles } from './types';
import { IFetchData } from "../../types/commonTypes";
import { postAPI } from "../../utils/fetchData";

import { StatusToast, showToast } from "../core/ToastAlert";


export const handleUploadFiles = {
  uploadFile: async (image: any) => {
    // KEYS
    const URLUploadImg =
      "https://api.Cloudinary.com/v1_1/:pacyl20/image/upload";
    const uploadPreset = "lyu4vqcl";
    const apiKey = "485816724636379";
    const apiSecret = "485816724636379";

    const formData = new FormData();
    formData.append("file", image.file);
    formData.append("upload_preset", uploadPreset);
    formData.append("api_key", apiKey);
    formData.append("api_secret", apiSecret);
    //
    const options = {
      method: "POST",
      body: formData
    };
    try {
      const res = await fetch(URLUploadImg, options);
      return await res.json();
    } catch (err) {
      return err;
    }
  },

  chargeFile: async (file: any, initialTabFiles: any) => {
    const resUpload = {
      success: false,
      tabFiles: null
    };
    const tabFiles = initialTabFiles;

    try {
      if (!file.file) {
        showToast({
          msg: "Veillez Ajouter le fichier ",
          type: StatusToast.DARK
        });
        return resUpload;
      }
      let fileUploaded: { error: any } | any;

      if (file.file) fileUploaded = await handleUploadFiles.uploadFile(file);
      if (fileUploaded.error) {
        showToast({
          msg: "Extension File no supported",
          type: StatusToast.ERROR
        });
        return {
          ...resUpload,
          success: false,
          tabFiles: [],
          message: "extension File no supported"
        };
      }
      tabFiles.push(fileUploaded.url);
      return {
        ...resUpload,
        success: true,
        tabFiles: tabFiles,
        message: "success"
      };
    } catch (error) {
      showToast({
        msg: "Erreuer , veillez  recharger la page>>>",
        type: StatusToast.ERROR
      });
      return {
        ...resUpload,
        success: false,
        tabFiles: null,
        message: "Something went wrong"
      };
    }
  },
  loadFile: (e: any) => {
    try {
      const URI = URL?.createObjectURL(e?.target?.files[0]);
      return {
        uri: URI,
        file: e?.target?.files[0],
        success: true,
        message: "success",
        error: null
      };
    } catch (error) {
      return { success: false, error: error, message: "success" };
    }
  },
};

export class UploadFile {
  // READ ONLY
  static typeFileToUpload = {
    FILES: "files",
    iMAGES: "images"
  }
  static uploadFiles = async ({ files, typeFile = this.typeFileToUpload.FILES, }: any) => {
    const formData = new FormData();
    try {
      if (files.length > 0) {
        files.map((item: any) => formData.append(typeFile, item)) // images | files 
      }
      // const { data } = await postAPI(`shared/${typeFile === this.typeFileToUpload.FILES ? 'uploadDuments' : 'uploadImages'}/${idFile}/${entity} `,
      //   formData
      // );
      const { data } = await postAPI<IFetchData<any>, any>(
        "login",
        formData
      );

      if (data.data.success) {
        showToast({
          msg: "Fichiers chargés et telechargés avec succes.",
          type: StatusToast.SUCCESS
        });
        return { documents: data.data.results.documents, success: true }
      }
      if (!data.data.success) {
        showToast({
          msg: "Oops , un problème est survenu. Veillez recharger la page et réessayer.",
          type: StatusToast.ERROR
        });
        return { documents: [], success: false }
      }

    } catch (error) {
      showToast({
        msg: "Oops , un problème est survenu. Veillez recharger la page et réessayer.",
        type: StatusToast.ERROR
      });
      return { documents: [], success: false }
    }
  }
}


export const findTypeFilesCharded = (files: any[]): string[] => {
  if (files.length == 0) return []
  const tabTypesFiles: string[] = []
  files.forEach(item => {
    let type = item.file.type.split("/")[item.file.type.split("/").length - 1]
    tabTypesFiles.push(type)
  });
  return tabTypesFiles
}
