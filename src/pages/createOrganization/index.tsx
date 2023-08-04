import React from "react";
import { LastHeading } from "@/components/core/Heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CustomSelectField } from "../../components/core/SelectTwo";

const provinces = [
  {
    id: 1,
    label: "Province",
    category: "ProvinceValue",
  },
  {
    id: 2,
    label: "Province2",
    category: "ProvinceValue2",
  },
  {
    id: 3,
    label: "Province3",
    category: "ProvinceValue3",
  },
  {
    id: 4,
    label: "Province4",
    category: "ProvinceValue4",
  },
];
function CreateOrganization() {
  // TODO: Improve this later

  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const commonClassResume =
    "flex justify-start gap-1 px-5 py-2 cursor-pointer items-center text-base hover:bg-white-hover hover:text-accent-foreground";

  const handleDesignationChirurgicale = (option: any) => {
    console.clear();
    console.log("option", option);
  };

  return (
    <div className="">
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Creation organisation"} />
      </div>

      <div className="flex flex-wrap p-5 gap-2">
        <section className="flex-2 flex-grow-0 flex-shrink-0 w-[30%] h-450 hover:text-scale-110">
          <h1 className="text-sm text-center text-gray-400"> Uplaod LOGO</h1>
        </section>
        <section className="flex-1 flex-grow-3 flex-shrink-0 w-[60%] ">
          <div className={commonClassSection}>
            <LastHeading title={"Informations basiques"} />
            <div className="flex justify-between px-5 gap-5">
              <InputCommon
                required={true}
                label="Nom"
                pl="eg: Entrer le nom de l'organisation"
                onChange={() => console.log("first")}
                value={""}
              />
              <InputCommon
                required={true}
                label="Telephone"
                pl="eg:+243 998799306"
                onChange={() => console.log("first")}
                value={""}
              />
            </div>
            <div className="flex justify-between px-5  gap-5">
              <InputCommon
                // required={true}
                label="Addresse mail"
                pl="eg: cosamed@gmail.com"
                onChange={() => console.log("first")}
                value={""}
              />
              <SelectCommon
                data={provinces}
                label="Selectionner le type d'org."
                // onChange={(e) => console.log("e", e)}
                value={"..."}
                // type=""
              />
            </div>
          </div>
          <div className={commonClassSection}>
            <LastHeading title={"Adresse de l'organisation"} />
            <div className="py-2 px-5 gap-5">
              <SelectCommon
                data={provinces}
                label="Choisir la procince"
                // onChange={(e) => console.log("e", e)}
                value={"..."}
                // type=""
              />
              <SelectCommon
                data={provinces}
                label="Selectionner la ville"
                // onChange={(e) => console.log("e", e)}
                value={"..."}
                // type=""
              />
              <SelectCommon
                data={provinces}
                label="Selectionner le quartier/territoire"
                // onChange={(e) => console.log("e", e)}
                value={"..."}
                // type=""
              />
            </div>
          </div>
          <div className={commonClassSection}>
            <LastHeading
              title={"Information specifique au type d'organisation"}
            />
            <p className=" mx-5 text-[0.6em] font-bold border-l-4 border-main-color px-2">
              Zone de sante
            </p>
            <div className="flex justify-between px-5  gap-5">
              <InputCommon
                required={true}
                label="Nb de personnels"
                type="number"
                pl="eg: 30"
                onChange={() => console.log("first")}
                value={""}
              />
              <InputCommon
                required={true}
                label="Nb de infirmiers"
                type="number"
                pl="eg: 30"
                onChange={() => console.log("first")}
                value={""}
              />
            </div>
            <div className="flex justify-between px-5  gap-5">
              <InputCommon
                required={true}
                label="Nb de sage femmes"
                type="number"
                pl="eg: 30"
                onChange={() => console.log("first")}
                value={""}
              />
              <InputCommon
                required={true}
                label="Nb de lits"
                type="number"
                pl="eg: 30"
                onChange={() => console.log("first")}
                value={""}
              />
            </div>
          </div>
          <div className="btn p-3 flex justify-end ">
            <Button
              variant="primary"
              style={{ border: "1px solid #2DAEC4" }}
              className="ml-auto  rounded-md"
            >
              Enregistrer
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CreateOrganization;

function InputCommon({
  pl,
  label,
  onChange,
  value,
  type,
  required,
  disabled,
}: {
  label: string;
  pl?: string;
  type?: string;
  onChange: () => void;
  value: string | number;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className=" w-full p-0 m-0">
      <label className="text-sm">
        {label}
        <span className="text-red-500"> {`${required ? "*" : ""}`} </span>
      </label>
      <Input
        disabled={disabled ? disabled : false}
        onChange={onChange}
        placeholder={pl}
        value={value}
        type={type || "text"}
        className=" rounded-md "
      />
    </div>
  );
}

function SelectCommon({
  // pl,
  // type,
  disabled,
  label,
  // onChange,
  value,
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