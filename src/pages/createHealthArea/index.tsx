import React, { useEffect, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Grid } from "@mui/material";
import { InputCommon } from "@/components/core/Inputs";
import { INIT_FORM_CREATE_HEALTH_AREA } from "@/constants/initForm";
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
import { ICreateHealthArea } from "@/types/stateSchema/healthArea";

function CreateHealthArea() {
  const commonClass = "border rounded-lg my-5";
  const commonClassSection = `${commonClass} pb-5`;
  const [infoLoading, setInfoLoading] = useState<IStateLoading>({
    creeateTerritory: {
      status: false,
      msg: "",
    },
    getTerritoriesByProv: {
      status: false,
      msg: "",
    },
  });
  const [formHealthArea, setFormHealthArea] = useState<ICreateHealthArea>(
    INIT_FORM_CREATE_HEALTH_AREA
  );
  const [provinceId, setprovinceId] = useState<string>("");
  const [territories, setTerritories] = useState<ITerritory[]>([]);
  const { token } = useRecoilValue(
    userAuthenticatedState
  ) as unknown as IAutherUSer;

  const allProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IProvince[];

  const allTerritoriesByProvince = useRecoilValue(
    getTerritoriesByProvinceState
  ) as unknown as IProvince[];

  const handleSubmitCreateTerritory = async () => {
    if (
      formHealthArea.name.trim().length < 2 &&
      formHealthArea.territoirid.trim().length < 2
    ) {
      return showToast({
        msg: `Remplissez tous les champs svp.`,
        type: StatusToast.DARK,
      });
    }
    try {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeateTerritory", lKey: "status" },
          true
        )
      );
      const { data } = await postAPI<
        IFetchData<{ data: any }>,
        ICreateHealthArea
      >("addzon", formHealthArea, token);

      if (data.code === 200 && data.data) {
        setInfoLoading(
          HandleFormObject.handleSecondLevel(
            infoLoading,
            { fKey: "creeateTerritory", lKey: "status" },
            false
          )
        );
        setFormHealthArea({ ...INIT_FORM_CREATE_HEALTH_AREA });
        return showToast({
          msg: `le territoire ${formHealthArea.name} ${AG_Toast.textPatterns.SUCCESS_MSG}`,
          type: AG_Toast.statusToast.SUCCESS,
        });
      }
    } catch (error) {
      setInfoLoading(
        HandleFormObject.handleSecondLevel(
          infoLoading,
          { fKey: "creeateTerritory", lKey: "status" },
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

  const keepCurrentProvince = (value: any) => {
    setFormHealthArea({ ...formHealthArea, territoirid: value });
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
        `listterritoir/${idProvince}`,
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
    if (provinceId !== "") {
      setTerritoriesByProvince(provinceId);
    }
  }, [provinceId]);
  return (
    <div className="">
      {/* <div className="p-1 text-main-color-dark">
        <LastHeading title={"Création du territoire"} />
      </div> */}

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <section className="mx-3">
            <div className={commonClassSection}>
              <LastHeading title={"Informations basiques"} />
              <div className=" px-5">
                <SelectCommon
                  data={allProvinces}
                  onChange={setprovinceId}
                  label="Selectionner la province"
                  required={true}
                  keyObject="name"
                  value={"..."}
                  // type=""
                />
                <SelectCommon
                  data={territories}
                  onChange={keepCurrentProvince}
                  label={`${
                    infoLoading.getTerritoriesByProv.status
                      ? "chargement des territoires..."
                      : "Selectionner le territoire"
                  } `}
                  required={true}
                  keyObject="name"
                  value={"..."}
                  // type=""
                />
                <InputCommon
                  required={true}
                  label="Nom"
                  pl="eg: Entrer le nom de l'aire de santé"
                  value={formHealthArea.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormHealthArea({
                      ...formHealthArea,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="btn py-2 px-5 flex justify-end">
                <CustomButton
                  onClick={handleSubmitCreateTerritory}
                  statusLoading={infoLoading.creeateTerritory.status}
                  disabled={infoLoading.creeateTerritory.status}
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
export default CreateHealthArea;
