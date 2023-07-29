import React from "react";
import { LastHeading } from "@/components/core/Heading";
import { AG_URL } from "@/constants/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { FaUserCircle } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import { CgOrganisation } from "react-icons/cg";
import { MdSettings } from "react-icons/md";
import { RiDeleteBin2Fill, RiLockPasswordFill } from "react-icons/ri";
import { CustomCombobox } from "@/components/core/select";

function CreateOrganization() {
  // TODO: Improve this later

  const commonClass = "border rounded-lg my-5 ";
  const commonClassSection = `${commonClass} pb-5`;
  const commonClassResume =
    "flex justify-start gap-5 px-5 py-2  cursor-pointer items-center text-base hover:bg-white-hover hover:text-accent-foreground";
  return (
    <div className="">
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Creation organisation"} />
      </div>

      <div className="flex flex-wrap p-5 gap-2">
        <section className="flex-2 flex-grow-0 flex-shrink-0 w-[30%] h-450 hover:text-scale-110">
          <h1> Uplaod LOGO</h1>
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
              {/* <InputCommon
                label="Type d'organisation"
                pl="eg: ..."
                disabled={true}
                required={true}
                onChange={() => console.log("first")}
                value={""}
              /> */}
              <CustomCombobox />
            </div>
          </div>
          <div className={commonClassSection}>
            <LastHeading title={"Adresse de l'organisation"} />
            <div className="flex justify-between py-2 px-5 gap-5">
              <InputCommon
                required={true}
                disabled={true}
                label="Province"
                pl="Selectionner votre province"
                onChange={() => console.log("first")}
                value={""}
              />
              <InputCommon
                required={true}
                label="Telephone"
                disabled={true}
                // pl="+243 998799306"
                onChange={() => console.log("first")}
                value={"+243 998799306"}
              />
            </div>
            <div className="flex justify-between px-5  gap-5">
              <InputCommon
                required={true}
                label="Addresse mail"
                disabled={true}
                // pl="Entrer votre adresse mail"
                onChange={() => console.log("first")}
                value={"cosamed@gmail.com"}
              />
              <InputCommon
                required={true}
                disabled={true}
                label="Role"
                pl="Entrer votre role"
                onChange={() => console.log("first")}
                value={"Niveau 1"}
              />
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
          </div>
          <div className={commonClassSection}>
            <LastHeading title={"Changer mot de passe"} />
            <div className="py-2 px-5 gap-5">
              <InputCommon
                required={true}
                label="Ancien mot de passe"
                type="password"
                pl="Entrer votre ancien mot de passe"
                onChange={() => console.log("first")}
                value={"root12345-ROOT"}
              />
            </div>
            <div className="flex justify-between px-5  gap-5">
              <InputCommon
                required={true}
                label="Nouveau mot de passe"
                type="password"
                // pl="Entrer votre adresse mail"
                onChange={() => console.log("first")}
                value={"cosamed@gmail.com"}
              />
              <InputCommon
                required={true}
                type="password"
                label=" Confirmer votrenouveau mot de passe"
                pl="Entrer votre role"
                onChange={() => console.log("first")}
                value={"Niveau 1"}
              />
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
          </div>
          <div className={commonClassSection}>
            <LastHeading title={"Parametres du compte"} />
            <div className="py-2 px-5 flex items-start space-x-2">
              <Switch id="airplane-mode" className="bg-gray-200" />
              <label htmlFor="airplane-mode" className="text-sm">
                Rendre le compte inactif
              </label>
            </div>

            <div className="py-2 px-5 flex items-start space-x-2">
              <Switch id="airplane-mode" className="bg-gray-200" />
              <label htmlFor="airplane-mode" className="text-sm">
                Rendre le compte actif
              </label>
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
        className="max-w-sm rounded-md"
      />
    </div>
  );
}
