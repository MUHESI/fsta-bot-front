import React from "react";

interface Iprops<T extends { label: string }> {
  data: T[];
  saveData: (data: T) => void;
  // label: keyof T | string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

// TODO:: Improve later label
export function CustomChipBtn<T extends { label: string }>({
  data,
  saveData,
  label,
  required,
  disabled,
  children,
}: Iprops<T>) {
  const handlerItem = (item: T) => saveData(item);

  return (
    <div className="  my-4">
      <label className="text-sm">
        {label}
        <span className="text-red-500"> {`${required ? "*" : ""}`} </span>
      </label>
      <div className="border rounded-lg">
        {data.map((item: T, key: number) => (
          <span className="duration-300 inline-flex" key={key}>
            <button
              onClick={() => !disabled && handlerItem(item)}
              className=" text-white m-2 p-1 flex items-center gap-4  justify-between  border border-main-color bg-main-color rounded-full"
            >
              <span>{item.label}</span>
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
