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

function ProfileUser() {
  const commonClass = "border rounded-lg my-5 ";
  const commonClassSection = `${commonClass} pb-5`;

  const commonClassResume =
    "flex justify-start gap-5 px-5 py-2  cursor-pointer items-center text-base hover:bg-white-hover hover:text-accent-foreground";
  return (
    <div className="">
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Profile User"} />
      </div>

      <div className="flex flex-wrap p-5 gap-2">
        <section className="flex-2 flex-grow-0 flex-shrink-0 w-[30%] h-450 hover:text-scale-110">
          <div className={commonClass}>
            <div className={commonClassResume}>
              <FaUserCircle /> <span> Apercu utilisateur </span>
            </div>
            <div className={commonClassResume}>
              <RiFolderInfoFill /> <span> Informations basiques </span>
            </div>
            <div className={commonClassResume}>
              <CgOrganisation /> <span> Organisations </span>
            </div>
            <div className={commonClassResume}>
              <RiLockPasswordFill /> <span> Changer mot de passe </span>
            </div>
            <div className={commonClassResume}>
              <MdSettings /> <span> Parametres </span>
            </div>
            <div className={commonClassResume}>
              <RiDeleteBin2Fill /> <span> Desactiver le compte </span>
            </div>
          </div>
        </section>
        <section className="flex-1 flex-grow-3 flex-shrink-0 w-[60%] ">
          <div className={commonClass}>
            <div className="flex justify-between px-5 py-2 items-center text-base">
              <div className="flex gap-5 items-center ">
                <img
                  alt="..."
                  src={`${AG_URL.USER_IMG_PROFILE2}`}
                  className="w-20 h-20 object-cover"
                />
                <div className=" flex flex-col ">
                  <strong> MUHESI Moise </strong>
                  <span>Admin </span>
                </div>
              </div>
              <div className="p-5"> Rendre off </div>
            </div>
          </div>
          <div className={commonClassSection}>
            <LastHeading title={"Informations basiques"} />
            <div className="flex justify-between px-5 gap-5">
              <InputCommon
                required={true}
                label="Nom"
                pl="eg: Entrer votre nom"
                onChange={() => console.log("first")}
                value={"MUHESI"}
              />
              <InputCommon
                required={true}
                label="Prenon"
                pl="eg: Entrer votre nom"
                onChange={() => console.log("first")}
                value={"MOSES"}
              />
            </div>
            <div className="flex justify-between px-5  gap-5">
              <InputCommon
                required={true}
                label="Addresse mail"
                pl="Entrer votre adresse mail"
                onChange={() => console.log("first")}
                value={"mvmmuhesi@gmail.com"}
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
            <div className="flex justify-between px-5  gap-5">
              <InputCommon
                label="Addresse physique"
                pl="eg: Q. Himbi ||"
                onChange={() => console.log("first")}
                value={"Q. Himbi"}
              />
              <InputCommon
                label="Telephone"
                pl="Entrer votre numero de telephone"
                onChange={() => console.log("first")}
                value={"+243 998799306"}
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
            <LastHeading title={"Organisations"} />
            <div className="flex justify-between py-2 px-5 gap-5">
              <InputCommon
                required={true}
                disabled={true}
                label="Nom"
                onChange={() => console.log("first")}
                value={"COSAMED"}
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

export default ProfileUser;

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
