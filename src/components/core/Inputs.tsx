import React from "react";
import { Input } from "../ui/input";
// AUTH

interface IpropsInputAuth {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  pl: string;
}
export function InputAuth({ value, onChange, type, pl }: IpropsInputAuth) {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={pl}
      className="bg-gray-100 outline-none text-sm flex-1 focus:outline-none bg-gray-100"
    />
  );
}

interface DataCustomSelectFieldProps_<TData, TkeyObject extends keyof TData> {
  value: string | number;
  // onChange: () => void;
  typeByDefault: TData;
  DataCustomSelectFieldProps: string;
  data: TData[];
  keyObject: TkeyObject;
}
interface DataCustomSelectFieldProps {
  value: string | number;
  // onChange: () => any;
  typeByDefault: { label: string };
  // data: {_id: string  }extends TData[];
  label: string;
  data: any[];
  keyObject: string;
}
function InputCommon({
  pl,
  label,
  onChange,
  value,
  type,
  required,
  disabled,
}: {
  label: string;
  pl?: string;
  type?: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className="flex-auto p-0 m-0">
      <label className="text-sm">
        {label}
        <span className="text-red-500"> {`${required ? "*" : ""}`} </span>
      </label>
      <Input
        disabled={disabled ? disabled : false}
        onChange={onChange}
        placeholder={pl}
        value={value}
        type={type || "text"}
        className=" rounded-md "
      />
    </div>
  );
}

export { InputCommon };
