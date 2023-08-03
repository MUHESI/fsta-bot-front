import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = () => {
  const [countries, setCountries] = useState([{ name: "RDC" }]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // fetch("https://restcountries.com/v2/all?fields=name")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCountries(data);
    //   });
  }, []);
  return (
    <div className="w-72 font-medium h-80 border">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Country"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {countries?.map((country) => (
          <li
            key={country?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;

export const CustomSelectField = ({
  value,
  disabled,
  typeByDefault,
  data,
  label,
  keyObject,
}: any) => {
  return (
    <select
      disabled={disabled ? disabled : false}
      className=" flex border w-full 
            ring-offset-background file:border-0     
  placeholder:text-muted-foreground
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        focus-visible:ring-offset-2 

        disabled:cursor-not-allowed disabled:opacity-50 px-3 py-2 text-sm text-gray-400 rounded h-10 p-2"
    >
      {/* {typeByDefault && <option value={""}> {typeByDefault.label} </option>} */}
      {data?.map((item: any, key: number) => (
        <option
          key={key}
          value=".."
          className="m-0 p-0 "
        >{` ${item.label}`}</option>
      ))}
    </select>
  );
};
