import { BsQuestionCircle } from "react-icons/bs";
import HoverCardCustom from "./HoverCardCustom";
import { transform } from "@babel/core";

export interface IPropsCustomSelectField<TData> {
  data: TData[];
  keyObject: keyof TData;
  disabled?: boolean;
  value: string | number;
  onChange: (e: any) => void;
  typeByDefault?: { label: string; value: number | string } | null;
  className?: string;
}

// IPropsCustomSelectField
function CustomSelectField<TData>({
  disabled,
  data,
  keyObject,
  onChange,
  typeByDefault,
  className,
}: IPropsCustomSelectField<TData>) {
  return (
    <select
      onChange={(e) => {
        onChange(e.target.value);
      }}
      disabled={disabled ? disabled : false}
      // style={{ transform: "translateY(-20px)", color: "red" }}
      className={` flex border w-full 
            ring-offset-background file:border-0     
  placeholder:text-muted-foreground
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        focus-visible:ring-offset-2 

        disabled:cursor-not-allowed disabled:opacity-50 px-3  text-[14px] text-gray-400 rounded h-[30px] ${className}`}
    >
      {typeByDefault ? (
        <option value={typeByDefault.value}>{typeByDefault.label} </option>
      ) : (
        <option value={""}> Choisir </option>
      )}
      {data?.map((item: any, key: number) => (
        <option
          key={key}
          value={item.id}
          className="m-0 p-0  "
        >{` ${item[keyObject]}`}</option>
      ))}
    </select>
  );
}

function SelectCommon<TData>({
  // pl,
  // type,
  onChange,
  // value,
  disabled,
  label,
  required,
  data,
  keyObject,
  className,
}: {
  className?: string;
  label: string;
  data: TData[];
  value: string | number;
  pl?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  keyObject: keyof TData;
  onChange: (e: any) => void;
}) {
  return (
    <div className="flex-auto 0 m-0">
      <label className="text-sm m-0">
        {label}
        <span className="text-red-500 m-0"> {`${required ? "*" : ""}`} </span>
      </label>
      <CustomSelectField
        // className={"border-main-color text-main-color"}
        className={className}
        disabled={disabled}
        keyObject={keyObject}
        value={"value"}
        data={data}
        onChange={onChange}
        // label={"type"}
        // typeByDefault={{ label: "oook" }}
      />
    </div>
  );
}

function CommonSelectGap<TData>({
  // pl,
  // type,
  onChange,
  // value,
  disabled,
  label,
  required,
  data,
  keyObject,
  classNameHoverCard,
  titleTooltip,
  typeByDefault,
}: {
  classNameHoverCard?: string;
  titleTooltip?: string;
  label: string;
  data: TData[];
  value: string | number;
  pl?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  keyObject: keyof TData;
  onChange: (e: any) => void;
  typeByDefault?: { label: string; value: number | string } | null;
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
      <CustomSelectField
        disabled={disabled}
        keyObject={keyObject}
        value={"value"}
        data={data}
        onChange={onChange}
        // label={"type"}
        typeByDefault={typeByDefault}
      />
    </div>
  );
}

export { CustomSelectField, SelectCommon, CommonSelectGap };
