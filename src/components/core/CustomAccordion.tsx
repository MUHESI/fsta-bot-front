import React, { PropsWithChildren } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { MdOutlineExpandMore } from "react-icons/md";

interface IDataPropos {
  mainTitle: string;
  subTitle?: string;
  classNameChidren?: string;
  classNameMainTitle?: string;
  classNameSubTitle?: string;
}

export default function CustomAccordion({
  children,
  mainTitle,
  subTitle,
  classNameChidren,
  classNameMainTitle,
  classNameSubTitle,
}: PropsWithChildren<IDataPropos>) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log("event", event);
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<MdOutlineExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <h4 className={`${classNameMainTitle || ""} text-gray-400 font-bold`}>
            {mainTitle}{" "}
          </h4>
          {/* <Typography sx={{ width: "33%", flexShrink: 0 }}>
            General settings
          </Typography> */}
          {/* <Typography sx={{ color: "text.secondary" }}>
            I am an accordion
          </Typography> */}
          <h5 className={`${classNameSubTitle || ""} text-gray-500`}>
            {subTitle || ""}
          </h5>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classNameChidren}>{children}</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
