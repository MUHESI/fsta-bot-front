const CustomSelectField = ({
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

function SelectCommon({
  // pl,
  // type,
  disabled,
  label,
  // onChange,
  // value,
  required,
  data,
}: {
  label: string;
  data: any[];
  value: string | number;
  // onChange: (e: any) => void;
  pl?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className="w-full p-0 m-0">
      <label className="text-sm m-0">
        {label}
        <span className="text-red-500 m-0"> {`${required ? "*" : ""}`} </span>
      </label>
      <CustomSelectField
        disabled={disabled}
        keyObject="label"
        typeByDefault={{ label: "oook" }}
        value={"value"}
        label={"type"}
        data={data}
      />
    </div>
  );
}

export { CustomSelectField, SelectCommon };
