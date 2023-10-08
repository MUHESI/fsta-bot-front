import React, { Suspense, useEffect } from "react";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { columnsListHealthAreas } from "./columns";
import { SelectCommon } from "@/components/core/select";
import SkeletonAnimation from "@/components/skeleton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentHalthAreaIDState,
  currentProvinceIDState,
  currentTerritoryIDState,
  getListHealthAreasByTerritory,
  getProvincesState,
  getTerritoriesByProvinceState,
  getListStuctureHealthByAreas,
} from "@/globalState/atoms";
import { IProvince } from "@/types/stateSchema/province";
import DialogCustom from "@/components/core/DialogCustom";
import { IHealthArea } from "@/types/stateSchema/healthArea";
import CreateHealthArea from "../createHealthArea";
import CreateStructureHealt from "../createStructureHealth";
import { IStructureHealth } from "@/types/stateSchema/StructureHealth";

function Structure() {
  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);
  const setCurrentTerritoryID = useSetRecoilState(currentTerritoryIDState);
  const setCurrentHalthAreaID = useSetRecoilState(currentHalthAreaIDState);

  const allProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IProvince[];
  const allTerritoriesByProvince = useRecoilValue(
    getTerritoriesByProvinceState
  ) as unknown as IProvince[];
  const allListHealthAreasByTerritory = useRecoilValue(
    getListHealthAreasByTerritory
  ) as unknown as IHealthArea[];

  const allListStructureHealth = useRecoilValue(
    getListStuctureHealthByAreas
  ) as unknown as IStructureHealth[];

  return (
    <div>
      <div>
        <div className="px-5">
          <div className="flex justify-between gap-6">
            <SelectCommon
              data={allProvinces}
              label="Selectionner le DPS"
              keyObject="name"
              onChange={setCurrentProvinceID}
              value={"..."}
              // type=""
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
              // type=""
            />
          </div>

          <DataTable
            searchField="name"
            columns={columnsListHealthAreas}
            data={allListStructureHealth}
            // data={[]}
          >
            <DialogCustom
              btnText="Nouvelle  structure"
              mainTitle="Création d'une nouvelle structure"
              width="sm"
            >
              <CreateStructureHealt />
            </DialogCustom>
          </DataTable>
          <CustomPagination
            dataPagination={dataPagination.pagination}
            nextPage={() => console.log("next")}
            previousPage={() => console.log("next")}
          />
        </div>
      </div>
    </div>
  );
}

function ListStructure() {
  return (
    <div>
      <div className=" text-main-color-dark">
        {/* <LastHeading title={" Structures de santé"} /> */}
      </div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <Structure />
      </Suspense>
    </div>
  );
}
export default ListStructure;
