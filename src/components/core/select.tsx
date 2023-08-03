/* eslint-disable no-use-before-define */
import { fontSize } from "@mui/system";
import React from "react";
import Select, { components } from "react-select";

const SelectComponent = ({
  dataOptions,
  labels,
  stylesOptions,
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
