import React, { Suspense, useEffect } from "react";
import { SelectCommon } from "@/components/core/select";
import SkeletonAnimation, { TexttLoading } from "@/components/skeleton";
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

function ShowPyramid() {
  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);
  const setCurrentTerritoryID = useSetRecoilState(currentTerritoryIDState);
  const setCurrentHalthAreaID = useSetRecoilState(currentHalthAreaIDState);
  const setCurrentZoneSanteID = useSetRecoilState(currentZoneSanteIDState);
  const setCurrentStructureID = useSetRecoilState(currentStructureIDState);

  const allProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IProvince[];
  const allTerritoriesByProvince = useRecoilValue(
    getTerritoriesByProvinceState
  ) as unknown as IProvince[];
  const allListZoneSantes = useRecoilValue(
    getListZoneSanteByTerritory
  ) as unknown as IZoneSante[];

  const allListHealthAreasByZone = useRecoilValue(
    getListHealthAreasByZone
  ) as unknown as IHealthArea[];

  const allListStructureHealth = useRecoilValue(
    getListStuctureHealthByAreas
  ) as unknown as IStructureHealth[];

  return (
    <div className="mb-2">
      <div className="flex flex-wrap justify-between px-5 gap-5">
        <SelectCommon
          data={allProvinces}
          label="Province(DPS)"
          keyObject="name"
          onChange={setCurrentProvinceID}
          value={"..."}
        />
        <SelectCommon
          data={allTerritoriesByProvince}
          label="Territoire"
          keyObject="name"
          onChange={setCurrentTerritoryID}
          value={"..."}
        />

        <SelectCommon
          data={allListZoneSantes}
          label="Zone de santé"
          keyObject="name"
          onChange={setCurrentZoneSanteID}
          value={"..."}
        />
        <SelectCommon
          data={allListHealthAreasByZone}
          label="Aire de santé"
          keyObject="name"
          onChange={setCurrentHalthAreaID}
          value={"..."}
        />
        <SelectCommon
          data={allListStructureHealth}
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
      <Suspense fallback={<TexttLoading />}>
        <ShowPyramid />
      </Suspense>
    </div>
  );
}

export default Pyramid;
