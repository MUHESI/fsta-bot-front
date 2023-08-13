interface IPropsCustomSelectField<TData> {
  data: TData[];
  keyObject: keyof TData;
  disabled?: boolean;
  value: string | number;
  onChange: (e: any) => void;
}

// IPropsCustomSelectField
function CustomSelectField<TData>({
  disabled,
  data,
  keyObject,
  onChange,
}: IPropsCustomSelectField<TData>) {
  return (
    <select
      onChange={(e) => {
        console.clear();
        console.log("first>>>", e.target.value);
        onChange(e.target.value);
      }}
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
          value={item.id}
          className="m-0 p-0 "
        >{` ${item[keyObject]}`}</option>
      ))}
    </select>
  );
}

function SelectCommon<TData>({
  // pl,
  // type,
  onChange,
  // value,
  disabled,
  label,
  required,
  data,
  keyObject,
}: {
  label: string;
  data: TData[];
  value: string | number;
  pl?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  keyObject: keyof TData;
  onChange: (e: any) => void;
}) {
  return (
    <div className="w-full p-0 m-0">
      <label className="text-sm m-0">
        {label}
        <span className="text-red-500 m-0"> {`${required ? "*" : ""}`} </span>
      </label>
      <CustomSelectField
        disabled={disabled}
        keyObject={keyObject}
        value={"value"}
        data={data}
        onChange={onChange}
        // label={"type"}
        // typeByDefault={{ label: "oook" }}
      />
    </div>
  );
}

export { CustomSelectField, SelectCommon };
