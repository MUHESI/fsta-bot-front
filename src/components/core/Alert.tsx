import React from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { AiOutlineClose } from "react-icons/ai";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export const MESSAGES_ALERT = {
  FEAT_IN_PROGRESS:
    "Oops , cette fonctionnalité est en cours d'implementation.",
  FEAT_IN_HALF_FINISHED:
    "Oops , cette fonctionnalité n’est pas finie complément ,",
};
export const setAlertAsEmptyData = (alert: any) => {
  return {
    ...alert,
    open: true,
    message: {
      title: "Information",
      description:
        "Oops , désolé aucune donnée n'a été rétrouvé dans la base des données.",
    },
    severity: severityAlert.INFO,
  };
};

export const INIT_ALERT_MODEL = {
  open: false,
  message: { title: "", description: "" },
  severity: "",
};

// WHEN THIS COMP APPAIR ON SEVEROL PLACES
// TODO TO IMPROVE
export const MODE_ALERT = {
  enable: "enable",
  disabled: "disabled",
};

export const severityAlert = {
  WARNING: "warning",
  ERROR: "error",
  SUCCESS: "success",
  INFO: "info",
};

export default function AlertMessage({
  severity,
  message,
  openAlert,
  closeAlert,
  width,
}: any) {
  const [open, setOpen] = React.useState(openAlert);
  React.useEffect(() => {
    setOpen(openAlert);
  }, [openAlert]);

  return (
    <Stack
      spacing={2}
      style={{
        margin: "0 auto",
        width: `${width || 100}%`,
      }}
    >
      <Collapse in={open}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                closeAlert();
                setOpen(false);
              }}
            >
              <AiOutlineClose fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>{message.title || severity}</AlertTitle>
          <div>{message.description || "please add un message to show "}</div>
        </Alert>
      </Collapse>
    </Stack>
  );
}
