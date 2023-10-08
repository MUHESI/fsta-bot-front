import React, { useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Grid } from "@mui/material";
import { InputCommon } from "@/components/core/Inputs";
import {
  INIT_FORM_CREATE_HEALTH_AREA,
  INIT_FORM_CREATE_STRUCTURE,
} from "@/constants/initForm";
import { IProvince } from "@/types/stateSchema/province";
import { CustomButton } from "@/components/core/Button";
import { IStateLoading } from "@/types/stateSchema/loading";
import { AG_Toast, StatusToast, showToast } from "@/components/core/ToastAlert";
import { HandleFormObject } from "@/services/stateHandler/formDataHandler";
import { getAPI, postAPI } from "@/utils/fetchData";
import { SelectCommon } from "@/components/core/select";
import { ITerritory } from "@/types/stateSchema/territory";
import { IFetchData } from "@/types/commonTypes";
import { useRecoilValue } from "recoil";
import { getProvincesState, userAuthenticatedState } from "@/globalState/atoms";
import { IAutherUSer } from "@/types/stateSchema/auth";
import { getTerritoriesByProvinceState } from "../../globalState/atoms/territory";
import { ICreateStructureHealth } from "@/types/stateSchema/StructureHealth";

function CreateStructureHealt() {
  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    creeateStructure: {
      status: false,
      msg: "",
    },
    getTerritoriesByProv: {
      status: false,
      msg: "",
    },
  });

  const [formStructure, setFormStructure] = useState<ICreateStructureHealth>(
    INIT_FORM_CREATE_STRUCTURE
  );
  const [aireSanteId, setAireSanteId] = useState<string>(
    "99cd24f3-45eb-4890-8f41-62259929f5d2"
  );
  const [territories, setTerritories] = useState<ITerritory[]>([]);
  const { token } = useRecoilValue(
    userAuthenticatedState
  ) as unknown as IAutherUSer;

  const allProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IProvince[];

  const handleSubmitCreateStructure = async () => {
    if (
      formStructure.name.trim().length < 2 &&
      formStructure.contact.trim().length < 2 &&
      aireSanteId !== ""
    ) {
      return showToast({
        msg: `Remplissez tous les champs svp.`,
        type: StatusToast.DARK,
      });
    }
    // console.clear();
    // console.log(">>", formStructure);
    // console.log("token", token);
    // return;

    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeateStructure", lKey: "status" },
          true
        )
      );
      const { data } = await postAPI<
        IFetchData<{ data: any }>,
        ICreateStructureHealth
      >(
        "structure/addstructure",
        { ...formStructure, aireid: aireSanteId },
        token
      );

      if (data.code === 200 && data.data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "creeateStructure", lKey: "status" },
            false
          )
        );
        setFormStructure({ ...INIT_FORM_CREATE_STRUCTURE });
        return showToast({
          msg: `la structure ${formStructure.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeateStructure", lKey: "status" },
          false
        )
      );
      return showToast({
        msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG} | ${
          (error as any as unknown as Error).message
        }`,
        type: StatusToast.ERROR,
      });
    }
  };

  const setTerritoriesByProvince = async (idProvince: string) => {
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "getTerritoriesByProv", lKey: "status" },
          true
        )
      );
      const res = await getAPI<IFetchData<ITerritory[]> | undefined>(
        `structure/addstructure/${idProvince}`,
        token
      );

      if (res === undefined) {
        return { error: new Error("res is undefined") };
      } else if (res instanceof Error) {
        return { error: res };
      } else {
        setTerritories(res?.data?.data ?? []);
      }
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "getTerritoriesByProv", lKey: "status" },
          false
        )
      );
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "getTerritoriesByProv", lKey: "status" },
          false
        )
      );
      return showToast({
        msg: `${AG_Toast.textPatterns.SOMETHING_WENT_WRONG} | ${
          (error as any as unknown as Error).message
        }`,
        type: StatusToast.ERROR,
      });
    }
  };

  useEffect(() => {
    if (aireSanteId !== "") {
      setTerritoriesByProvince(aireSanteId);
    }
  }, [aireSanteId]);
  return (
    <div className="">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <section className="mx-3">
            <div className={commonClassSection}>
              <LastHeading title={"Informations basiques"} />
              <div className=" px-5">
                <SelectCommon
                  data={allProvinces}
                  onChange={setAireSanteId}
                  label="Selectionner l'aire de santé"
                  required={true}
                  keyObject="name"
                  value={"..."}
                  // type=""
                />
                <InputCommon
                  required={true}
                  label="Nom"
                  pl="Entrer le nom de la structure"
                  value={formStructure.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormStructure({
                      ...formStructure,
                      name: e.target.value,
                    })
                  }
                />
                <InputCommon
                  required={true}
                  label="Contact"
                  pl="Entrer le numero de telephone ici"
                  value={formStructure.contact}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormStructure({
                      ...formStructure,
                      contact: e.target.value,
                    })
                  }
                />
              </div>
              <div className="btn py-2 px-5 flex justify-end">
                <CustomButton
                  onClick={handleSubmitCreateStructure}
                  statusLoading={infoLoading.creeateStructure.status}
                  disabled={infoLoading.creeateStructure.status}
                  label="Enregistrer"
                  // style={{ border: "1px solid #2DAEC4" }}
                  className="ml-auto  rounded-md"
                />
              </div>
            </div>
          </section>
        </Grid>
      </Grid>
    </div>
  );
}
export default CreateStructureHealt;
