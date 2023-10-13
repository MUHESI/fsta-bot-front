import React, { Suspense, useEffect } from "react";
import { SelectCommon } from "@/components/core/select";
import SkeletonAnimation from "@/components/skeleton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentHalthAreaIDState,
  currentProvinceIDState,
  currentTerritoryIDState,
  getListHealthAreasByZone,
  getProvincesState,
  getTerritoriesByProvinceState,
  getListStuctureHealthByAreas,
  currentStructureIDState,
} from "@/globalState/atoms";
import { IProvince } from "@/types/stateSchema/province";
import { IHealthArea } from "@/types/stateSchema/healthArea";
import { IStructureHealth } from "@/types/stateSchema/StructureHealth";

function ShowPyramid() {
  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);
  const setCurrentTerritoryID = useSetRecoilState(currentTerritoryIDState);
  const setCurrentHalthAreaID = useSetRecoilState(currentHalthAreaIDState);
  const setCurrentStructureID = useSetRecoilState(currentStructureIDState);

  const allProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IProvince[];
  const allTerritoriesByProvince = useRecoilValue(
    getTerritoriesByProvinceState
  ) as unknown as IProvince[];
  const allListHealthAreasByTerritory = useRecoilValue(
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
          label="Selectionner le DPS"
          keyObject="name"
          onChange={setCurrentProvinceID}
          value={"..."}
        />
        <SelectCommon
          data={allTerritoriesByProvince}
          label="Selectionner le territoire"
          keyObject="name"
          onChange={setCurrentTerritoryID}
          value={"..."}
        />
        <SelectCommon
          data={allListHealthAreasByTerritory}
          label="Selectionner Aires de santé "
          keyObject="name"
          onChange={setCurrentHalthAreaID}
          value={"..."}
        />
        {/* <SelectCommon
          data={allListStructureHealth}
          label="Selectionner Aires de santé "
          keyObject="name"
          onChange={setCurrentStructureID}
          value={"..."}
        /> */}
        {JSON.stringify(allListStructureHealth)}
      </div>
    </div>
  );
}

function Pyramid() {
  return (
    <div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <ShowPyramid />
      </Suspense>
    </div>
  );
}

export default Pyramid;
