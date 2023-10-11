import React from "react";

interface Iprops<TData> {
  data: TData[];
  saveData: (data: TData) => void;
  // label: keyof T | string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  keyObject: keyof TData;
  className?: string;
}

// TODO:: Improve later label
export function CustomChipBtn<TData>({
  data,
  saveData,
  label,
  required,
  disabled,
  children,
  keyObject,
  className,
}: Iprops<TData>) {
  const handlerItem = (item: TData) => saveData(item);

  return (
    <div className=" my-4">
      <label className="text-sm">
        {label}
        <span className="text-red-500"> {`${required ? "*" : ""}`}</span>
      </label>
      <div className={`text-sm ${className} rounded-lg`}>
        {data.map((item: any, key: number) => (
          <span className="duration-300 inline-flex" key={key}>
            <button
              onClick={() => !disabled && handlerItem(item)}
              className=" text-white m-2 p-1 flex items-center gap-4  justify-between  border border-main-color bg-main-color rounded-full"
            >
              <span>{` ${item[keyObject]}`}</span>
              <span className="text-2xl cursor-pointer duration-300 hover:text-main-color-dark">
                {children}
              </span>
            </button>
          </span>
        ))}
        <p className="animate-bounce text-slate-500 text-center m-2 duration-300 ">
          {data.length == 0 && "No data"}
        </p>
      </div>
    </div>
  );
}
