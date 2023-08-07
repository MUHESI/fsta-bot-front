import React from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { Grid } from "@mui/material";
import { InputCommon } from "@/components/core/Inputs";

function CreateProvince() {
  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;

  return (
    <div className="min-h-screen">
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Creation de la province"} />
      </div>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <section className="mx-3">
            <div className={commonClassSection}>
              <LastHeading title={"Informations basiques"} />
              <div className="flex flex-wrap justify-between px-5 gap-5">
                <InputCommon
                  required={true}
                  label="Nom"
                  pl="eg: Entrer le nom de la province"
                  onChange={() => console.log("first")}
                  value={""}
                />
              </div>
              <div className="btn py-2 px-5 flex justify-end">
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
        </Grid>
      </Grid>
    </div>
  );
}

export default CreateProvince;
