import React from "react";
import HoverCardCustom from "./HoverCardCustom";
import { BsQuestionCircle } from "react-icons/bs";
import { Textarea } from "../ui/textarea";

function CommonTextareaGap({
  pl,
  label,
  titleTooltip,
  // onChange,
  value,
  // type,
  required,
  disabled,
  classNameHoverCard,
}: {
  classNameHoverCard?: string;
  label: string;
  titleTooltip?: string;
  pl?: string;
  type?: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className="flex-auto p-0 m-0  mb-2">
      <label className=" flex items-center gap-3 text-sm">
        <span>
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
      <Textarea
        disabled={disabled ? disabled : false}
        // onChange={onChange}
        placeholder={pl}
        value={value}
        // type={type || "text"}
        className="border rounded-md"
      />
    </div>
  );
}

export { CommonTextareaGap };
