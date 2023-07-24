import React from "react";
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
