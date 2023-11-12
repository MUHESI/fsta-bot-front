import React, { Suspense, useEffect, useState } from "react";
import { SelectCommon } from "@/components/core/select";
import { TexttLoading } from "@/components/skeleton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentHalthAreaIDState,
  currentProvinceIDState,
  currentTerritoryIDState,
  getListHealthAreasByZone,
  getProvincesState,
  getTerritoriesByProvinceState,
  getListZoneSanteByTerritory,
  currentZoneSanteIDState,
  getListStuctureHealthByAreas,
  currentStructureIDState,
} from "@/globalState/atoms";
import { IProvince } from "@/types/stateSchema/province";
import { IHealthArea } from "@/types/stateSchema/healthArea";
import { IZoneSante } from "@/types/stateSchema/zoneSante";
import { IStructureHealth } from "@/types/stateSchema/StructureHealth";
import { IResRecoil } from "@/types/commonTypes";
import AlertMessage, { INIT_ALERT_MODEL, severityAlert } from "../core/Alert";

function ShowPyramid() {
  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);
  const setCurrentTerritoryID = useSetRecoilState(currentTerritoryIDState);
  const setCurrentHalthAreaID = useSetRecoilState(currentHalthAreaIDState);
  const setCurrentZoneSanteID = useSetRecoilState(currentZoneSanteIDState);
  const setCurrentStructureID = useSetRecoilState(currentStructureIDState);
  const currentTerritoryId = useRecoilValue(currentTerritoryIDState);

  const resProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IResRecoil<IProvince[]>;
  const resTerritoriesByProvince = useRecoilValue(
    getTerritoriesByProvinceState
  ) as unknown as IResRecoil<IProvince[]>;
  const resZoneSante = useRecoilValue(
    getListZoneSanteByTerritory
  ) as unknown as IResRecoil<IZoneSante[]>;

  const resListHealthAreasByZone = useRecoilValue(
    getListHealthAreasByZone
  ) as unknown as IResRecoil<IHealthArea[]>;

  const resListStructureHealth = useRecoilValue(
    getListStuctureHealthByAreas
  ) as unknown as IResRecoil<IStructureHealth[]>;
  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL, open: true });

  useEffect(() => {
    console.clear();
    console.log("resProvinces", resProvinces.data);
    console.log("resTerritoriesByProvince", resTerritoriesByProvince.data);
    console.log("resZoneSante", resZoneSante.data);
    console.log("resListHealthAreasByZone", resListHealthAreasByZone.data);
    console.log("resListStructureHealth", resListStructureHealth.data);
  }, [resProvinces, currentTerritoryId]);

  return (
    <div className="mb-2">
      {/* {(resZoneSante.message ||
        resTerritoriesByProvince.message ||
        resProvinces.message ||
        resListStructureHealth.message) && (
        <AlertMessage
          severity={severityAlert.INFO}
          message={{
            title: "Information",
            description: `${resZoneSante.keyResource}@@${resZoneSante.message} 
              ${resTerritoriesByProvince.keyResource}@@${resTerritoriesByProvince.message}
               ${resListStructureHealth.keyResource}@@${resListStructureHealth.message}
               ${resProvinces.keyResource}@@${resProvinces.message}
               
               `,
          }}
          openAlert={alert.open}
          closeAlert={() => setAlert({ ...INIT_ALERT_MODEL })}
          width={98}
        />
      )} */}
      <div className="flex flex-wrap justify-between px-5 gap-5">
        <SelectCommon
          data={resProvinces.data}
          label="Province(DPS)"
          keyObject="name"
          onChange={setCurrentProvinceID}
          value={"..."}
        />
        <SelectCommon
          data={resTerritoriesByProvince.data}
          label="Territoire"
          keyObject="name"
          onChange={setCurrentTerritoryID}
          value={"..."}
        />

        <SelectCommon
          data={resZoneSante.data}
          label="Zone de santé"
          keyObject="name"
          onChange={setCurrentZoneSanteID}
          value={"..."}
        />
        <SelectCommon
          data={resListHealthAreasByZone.data}
          label="Aire de santé"
          keyObject="name"
          onChange={setCurrentHalthAreaID}
          value={"..."}
        />
        <SelectCommon
          data={resListStructureHealth.data}
          label="Structure de santé"
          keyObject="name"
          onChange={setCurrentStructureID}
          value={"..."}
        />
      </div>
    </div>
  );
}

function Pyramid() {
  return (
    <div>
      <Suspense fallback={<TexttLoading className="p-5 min-h-[63px]" />}>
        <ShowPyramid />
      </Suspense>
    </div>
  );
}

export default Pyramid;
