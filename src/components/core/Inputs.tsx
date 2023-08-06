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
// DataCustomSelectFieldProps<TData, TkeyObject extends keyof TData>
//<TData, TkeyObject>

// import React from 'react'

// function inputs() {
//   return (
//     <div>inputs</div>
//   )
// }
// <option key={key}>{` ${item[keyObject]}`}</option>;

// export default inputs
