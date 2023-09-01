import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import HoverCardCustom from "./HoverCardCustom";
import { BsQuestionCircle } from "react-icons/bs";

export interface IDataPropos {
  label: string;
  value: string | boolean;
  id?: number | string;
}

interface Iprops {
  dataItems: IDataPropos[];
  titleTooltip?: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  classNameHoverCard?: string;
}

export default function RowRadioButtonsGroup({
  label,
  required,
  dataItems,
  titleTooltip,
  classNameHoverCard,
}: Iprops) {
  return (
    <FormControl className="m-0 p-0">
      <label className=" flex items-center gap-3 text-sm">
        <span className="text-main-color">
          {label}
          <span className="text-red-500"> {`${required ? "*" : ""}`} </span>
        </span>
        {titleTooltip && (
          <HoverCardCustom
            description={titleTooltip}
            className={classNameHoverCard}
          >
            <BsQuestionCircle />
          </HoverCardCustom>
        )}
      </label>
      <RadioGroup
        className="ml-1"
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {dataItems.map((item: IDataPropos, key: number) => (
          <FormControlLabel
            value={item.value}
            key={key}
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#2DAEC4",
                  },
                }}
              />
            }
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
