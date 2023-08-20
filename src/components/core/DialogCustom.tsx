import React, { PropsWithChildren } from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { SelectChangeEvent } from "@mui/material/Select";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LastHeading } from "./Heading";
import { CustomButton } from "./Button";

interface IDataPropos {
  width: DialogProps["maxWidth"];
  mainTitle: string;
  btnText: string;
}

export default function DialogCustom({
  width,
  children,
  mainTitle,
  btnText,
}: PropsWithChildren<IDataPropos>) {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] =
    React.useState<DialogProps["maxWidth"]>(width);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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

  return (
    <React.Fragment>
      <CustomButton
        label={btnText}
        onClick={handleClickOpen}
        className="rounded-md"
      />
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <div className="flex border-b m-2 justify-between items-center">
          <LastHeading title={mainTitle} />
          <AiOutlineCloseCircle
            className="cursor-pointer text-2xl"
            onClick={handleClose}
          />
        </div>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
