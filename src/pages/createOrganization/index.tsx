import React from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { SelectCommon } from "@/components/core/select";
import { Grid } from "@mui/material";
import { InputCommon } from "@/components/core/Inputs";
import { provinces } from "@/constants/constants";

function CreateOrganization() {
  // TODO: Improve this later

  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;

  return (
    <div className="">
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Créeation de l'organisation"} />
      </div>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <section
            className={`${commonClass} mx-3 min-h-60 flex justify-center items-center `}
          >
            <h1 className="text-sm text-center text-gray-400"> Uplaod LOGO</h1>
          </section>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <section className="mx-3">
            <div className={commonClassSection}>
              <LastHeading title={"Informations basiques"} />
              <div className="flex flex-wrap justify-between px-5 gap-5">
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
              <div className="flex flex-wrap justify-between px-5  gap-5">
                <InputCommon
                  // required={true}
                  label="Addresse mail"
                  pl="eg: cosamed@gmail.com"
                  onChange={() => console.log("first")}
                  value={""}
                />
                {/* <SelectCommon
                  data={provinces}
                  label="Selectionner le type d'org."
                  // onChange={(e) => console.log("e", e)}
                  value={"..."}
                  // type=""
                /> */}
              </div>
            </div>
            <div className={commonClassSection}>
              <LastHeading title={"Adresse de l'organisation"} />
              <div className="py-2 px-5 gap-5">
                {/* <SelectCommon
                  data={provinces}
                  label="Choisir la procince"
                  // onChange={(e) => console.log("e", e)}
                  value={"..."}
                  // type=""
                /> */}
                {/* <SelectCommon
                  data={provinces}
                  label="Selectionner la ville"
                  // onChange={(e) => console.log("e", e)}
                  value={"..."}
                  // type=""
                /> */}
                {/* <SelectCommon
                  data={provinces}
                  label="Selectionner le quartier/territoire"
                  // onChange={(e) => console.log("e", e)}
                  value={"..."}
                  // type=""
                /> */}
              </div>
            </div>
            <div className={commonClassSection}>
              <LastHeading
                title={"Information specifique au type d'organisation"}
              />
              <p className=" mx-5 text-[0.6em] font-bold border-l-4 border-main-color px-2">
                Zone de sante
              </p>
              <div className="flex flex-wrap justify-between px-5  gap-5">
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
              <div className="flex flex-wrap justify-between px-5  gap-5">
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
        </Grid>
      </Grid>
      {/* <div className="flex flex-wrap p-5 gap-2">
        <section className="flex-2 flex-grow-0 flex-shrink-0 w-[30%] h-450 hover:text-scale-110">
          <h1 className="text-sm text-center text-gray-400"> Uplaod LOGO</h1>
        </section>
       
      </div> */}
    </div>
  );
}

export default CreateOrganization;
