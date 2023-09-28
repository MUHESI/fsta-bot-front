import React from "react";
import { Tooltip } from "@mui/material";

export function MainTitle({ title }: { title: string }) {
  return (
    <h6 className="text-sm text-gray-400 text-main-color font-bold">{title}</h6>
  );
}
export interface IPropsCustomSelectField<TData> {
  data: TData[];
  keyObject: keyof TData;
  disabled?: boolean;
  tooltipTitle?: string;
  label: string;
  value: string | number;
  onChange: (e: any) => void;
}

export function SelectField<TData>({
  disabled,
  data,
  keyObject,
  onChange,
  tooltipTitle,
  label,
}: IPropsCustomSelectField<TData>) {
  return (
    <Tooltip title={tooltipTitle}>
      <select
        onChange={(e) => {
          onChange(e.target.value);
        }}
        disabled={disabled ? disabled : false}
        className="flex border w-full  my-1
            ring-offset-background file:border-0     
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        focus-visible:ring-offset-2 
        disabled:cursor-not-allowed disabled:opacity-50 px-3 py-1  text-gray-400 rounded   text-[0.3em]"
      >
        <option value={""} className="">
          {label}
        </option>
        {data?.map((item: any, key: number) => (
          <option
            key={key}
            value={item.id}
            className="m-0 p-0 "
          >{` ${item[keyObject]}`}</option>
        ))}
      </select>
    </Tooltip>
  );
}
