import React, { useState } from "react";
import { modelLoadingUpload, MODEL_FILE_INIT } from "./types";
// import { StatusToast, showToast } from "@/components/core/ToastAlert";
import { StatusToast, showToast } from "../core/ToastAlert";
import { handleUploadFiles } from "./controllerUpload";
import { IoMdDoneAll } from "react-icons/io";
import { CustomButton } from "../core/Button";

function uploadFilesForm({
  label,
  // value,
  // type,
  // required,
  // disabled,
  //   classNameHoverCard,
  keepData,
  filesSaved,
}: {
  //   classNameHoverCard?: string;
  //   titleTooltip?: string;
  label: string;
  //   pl?: string;
  type?: string;
  //   onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  // required?: boolean;
  // disabled?: boolean;
  //
  keepData: (arg: any) => void;
  filesSaved: any;
}) {
  const [loadingUploadFile, setLoadingUploadFile] = useState({
    ...modelLoadingUpload,
  });

  // STATE
  const [file, setFile] = useState({ ...MODEL_FILE_INIT });
  const [files, setFiles] = useState<any>([]);
  const chargeFile_ = async () => {
    try {
      if (!file.uri)
        return showToast({
          msg: `Charger un fichier SVP `,
          type: StatusToast.DARK,
        });

      setFiles([...files, { file: file.file, uri: file.uri }]);
      setFile({ ...MODEL_FILE_INIT });
      // return featureNotImplementedYet();
      // const filesRes = await handleUploadFiles.uploadFile(file);
      // if (filesRes) {

      // }
      // return keepData([...files, file.file]);
      return keepData([...files, file]);
    } catch (error) {
      return showToast({
        msg: `oops, something went wrong ${error}`,
        type: StatusToast.ERROR,
      });
    }
  };
  return (
    <div className="">
      <label>{label || " Upload Files"}</label>
      <div className="content-input">
        <div className="flex">
          <input
            type="file"
            className=""
            onChange={(e) => {
              const res = handleUploadFiles.loadFile(e);
              if (res.success) {
                return setFile({ uri: res.uri, file: res.file });
              } else
                return showToast({
                  msg: `${res.message} ${res.error}`,
                  type: StatusToast.ERROR,
                });
            }}
          ></input>

          {filesSaved.length && !file.file ? (
            <IoMdDoneAll style={{ color: "green" }} />
          ) : (
            <div className="btn py-2 px-5 flex  justify-end">
              <CustomButton
                onClick={() => chargeFile_()}
                statusLoading={false}
                disabled={false}
                label="charger"
                // style={{ border: "1px solid #2DAEC4" }}
                className="ml-auto  rounded-md"
              />
            </div>
          )}
        </div>

        <p className="content-loading">
          {loadingUploadFile.file ? (
            <> chargement .... chargement ...</>
          ) : (
            <p className="content-text">
              {filesSaved?.length || "0"} files saved
            </p>
          )}
        </p>
      </div>
    </div>
  );
}

export default uploadFilesForm;
