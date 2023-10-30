import React, { PropsWithChildren, useEffect } from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { SelectChangeEvent } from "@mui/material/Select";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LastHeading } from "./Heading";
import { CustomButton } from "./Button";
import { tooggleDialogState } from "@/globalState/atoms";
import { useRecoilState } from "recoil";

export const commonClassNameBtnLastBtnDialog =
  "border-green-400 bg-green-400 hover:bg-white hover:text-green-400 text-white";

interface ILastBtnOptions {
  btnText: string;
  onClick?: () => void;
  closeAfterAction?: boolean;
  classNameBtn?: string;
}
interface IDataPropos {
  width: DialogProps["maxWidth"];
  mainTitle: string;
  btnText: string;
  classNameBtn?: string;
  lastBtnOptions?: ILastBtnOptions;
}

export default function DialogCustom({
  width,
  children,
  mainTitle,
  btnText,
  classNameBtn,
  lastBtnOptions,
}: PropsWithChildren<IDataPropos>) {
  const [openDilog, setOpenDilog] = useRecoilState(tooggleDialogState);
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] =
    React.useState<DialogProps["maxWidth"]>(width);

  // useEffect(() => {
  //   if (openDilog) {
  //     setOpen(true);
  //   } else {
  //     setOpen(false);
  //   }
  // }, []);

  useEffect(() => {
    console.log("openDilog", openDilog);
  }, []);

  const handleClickOpen = () => {
    // setOpenDilog(true);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    // setOpenDilog(false);
  };
  const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };
  const handleFullWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFullWidth(event.target.checked);
  };

  const handleLastBtn = () => {
    if (lastBtnOptions?.onClick) {
      lastBtnOptions?.onClick();
    }
    if (lastBtnOptions?.closeAfterAction) {
      return handleClose();
    }
  };
  return (
    <React.Fragment>
      <CustomButton
        label={btnText}
        onClick={handleClickOpen}
        className={`rounded-md ${classNameBtn}`}
      />
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <div className="flex border-b mx-2 py-2 justify-between items-center">
          <LastHeading title={mainTitle} />
          <AiOutlineCloseCircle
            className="cursor-pointer text-2xl"
            onClick={handleClose}
          />
        </div>
        <DialogContent>
          {children}
          {lastBtnOptions && (
            <div className="flex justify-end px-5">
              <CustomButton
                label={lastBtnOptions.btnText}
                onClick={handleLastBtn}
                className={`rounded-md ${lastBtnOptions.classNameBtn}`}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
