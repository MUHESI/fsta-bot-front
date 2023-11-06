import React, { Suspense } from "react";
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
  getListHealthAreasByZone,
  getProvincesState,
  getTerritoriesByProvinceState,
  getListStuctureHealthByAreas,
  getListZoneSanteByTerritory,
  currentZoneSanteIDState,
} from "@/globalState/atoms";
import { IProvince } from "@/types/stateSchema/province";
import DialogCustom from "@/components/core/DialogCustom";
import { IHealthArea } from "@/types/stateSchema/healthArea";
import CreateStructureHealt from "../createStructureHealth";
import { IStructureHealth } from "@/types/stateSchema/StructureHealth";
import { IZoneSante } from "@/types/stateSchema/zoneSante";
import { IResRecoil } from "@/types/commonTypes";

function Structure() {
  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);
  const setCurrentTerritoryID = useSetRecoilState(currentTerritoryIDState);
  const setCurrentZoneSanteID = useSetRecoilState(currentZoneSanteIDState);
  const setCurrentHalthAreaID = useSetRecoilState(currentHalthAreaIDState);

  const resProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IResRecoil<IProvince[]>;

  const resTerritoriesByProvince = useRecoilValue(
    getTerritoriesByProvinceState
  ) as unknown as IResRecoil<any[]>;

  const resListHealthAreasByZone = useRecoilValue(
    getListHealthAreasByZone
  ) as unknown as IResRecoil<IHealthArea[]>;

  const resListStructureHealth = useRecoilValue(
    getListStuctureHealthByAreas
  ) as unknown as IResRecoil<IStructureHealth[]>;

  const resZoneSante = useRecoilValue(
    getListZoneSanteByTerritory
  ) as unknown as IResRecoil<IZoneSante[]>;

  return (
    <div>
      <div>
        <div className="px-5">
          <div className="flex justify-between gap-6">
            <SelectCommon
              data={resProvinces.data}
              label="Province"
              keyObject="name"
              onChange={setCurrentProvinceID}
              value={"..."}
              // type=""
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
              // type=""
            />
            <SelectCommon
              data={resListHealthAreasByZone.data}
              label="Aire de santé"
              keyObject="name"
              onChange={setCurrentHalthAreaID}
              value={"..."}
              // type=""
            />
          </div>

          <DataTable
            searchField="name"
            columns={columnsListHealthAreas}
            data={resListStructureHealth.data}
          >
            <DialogCustom
              mainBtnOptions={{
                btnText: "Nouvelle  structure",
                useBtn: true,
              }}
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
      <div className=" text-main-color-dark"></div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <Structure />
      </Suspense>
    </div>
  );
}
export default ListStructure;
