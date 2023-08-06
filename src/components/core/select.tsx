/* eslint-disable no-use-before-define */
import React from "react";
import Select, { components } from "react-select";

const SelectComponent = ({
  dataOptions,
  labels,
  // stylesOptions,
  propsOfSelect,
  keepOptionsSelected,
}: any) => {
  const Option = (props: any) => {
    const mainLabel = props.data[labels.main];
    const secondLabel = props.data[labels.second];

    return (
      <components.Option {...props}>
        <span className="text-sm">{mainLabel}</span>
        <span
          className="text-sm"
          style={{ color: "darkgray", fontWeight: "bold" }}
        >
          - {secondLabel || ""}
        </span>
      </components.Option>
    );
  };
  const handleChange = (selectedOptions: any) => {
    keepOptionsSelected(selectedOptions);
  };

  return (
    <Select
      // style={{
      //   height: "80px",
      //   padding: 0,
      //   margin: 0,
      // }}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          // borderColor: state.isFocused ? "grey" : "red",
          // height: "25px",
          fontSize: "0.4em",
          // display: "flex",
          // alignItems: "center",
          // paddingBottom: "1px",
          // color: "red",
          // fontSize: "1em",
        }),
      }}
      options={dataOptions}
      isMulti={propsOfSelect.isMulti}
      onChange={handleChange}
      getOptionLabel={(options) =>
        `${options[labels.main]} ${options[labels.second] || ""}`
      }
      // getOptionLabel={(options) => {
      //   return (
      //     <span className="text-sm">{`${options[labels.main]} ${
      //       options[labels.second] || ""
      //     }`}</span>
      //   );
      // }}
      getOptionValue={(options) => `${options._id}`}
      components={{ Option }}
    />
  );
};

export default SelectComponent;

export const CustomSelectField = ({
  // value,
  disabled,
  // typeByDefault,
  data,
}: // label,
// keyObject,
any) => {
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
