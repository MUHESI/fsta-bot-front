import React from "react";
import { Input } from "@/components/ui/input";

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
