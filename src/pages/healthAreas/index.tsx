import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnsListHealthAreas } from "./columns";
import { SelectCommon } from "@/components/core/select";
import SkeletonAnimation from "@/components/skeleton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentProvinceIDState,
  currentTerritoryIDState,
  currentZoneSanteIDState,
  getListHealthAreasByZone,
  getListZoneSanteByTerritory,
  getProvincesState,
  getTerritoriesByProvinceState,
} from "@/globalState/atoms";
import { IProvince } from "@/types/stateSchema/province";
import { IZoneSante } from "@/types/stateSchema/zoneSante";

import DialogCustom from "@/components/core/DialogCustom";
import { IHealthArea } from "@/types/stateSchema/healthArea";
import CreateHealthArea from "../createHealthArea";
import { CustomButton } from "@/components/core/Button";
import { IResRecoil } from "@/types/commonTypes";

function HealthAreas() {
  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);
  const setCurrentTerritoryID = useSetRecoilState(currentTerritoryIDState);
  const setCurrentZoneSanteID = useSetRecoilState(currentZoneSanteIDState);
  const resProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IResRecoil<IProvince[]>;
  const allTerritoriesByProvince = useRecoilValue(
    getTerritoriesByProvinceState
  ) as unknown as IProvince[];
  const resZoneSante = useRecoilValue(
    getListZoneSanteByTerritory
  ) as unknown as IResRecoil<IZoneSante[]>;

  const resListHealthAreasByTerritory = useRecoilValue(
    getListHealthAreasByZone
  ) as unknown as IResRecoil<IHealthArea[]>;

  return (
    <div>
      <div>
        <div className="px-5">
          <div className="flex justify-between gap-6">
            <SelectCommon
              data={resProvinces.data}
              required={true}
              label="Selectionner la province"
              keyObject="name"
              onChange={setCurrentProvinceID}
              value={"..."}
              // type=""
            />
            <SelectCommon
              data={allTerritoriesByProvince}
              required={true}
              label="Selectionner le territoire"
              keyObject="name"
              onChange={setCurrentTerritoryID}
              value={"..."}
              // type=""
            />
            <SelectCommon
              data={resZoneSante.data}
              required={true}
              label="Selectionner la zone de snaté"
              keyObject="name"
              onChange={setCurrentZoneSanteID}
              value={"..."}
            />
          </div>

          <DataTable
            searchField="name"
            columns={columnsListHealthAreas}
            data={resListHealthAreasByTerritory.data}
          >
            <CustomButton
              onClick={() => ""}
              label="Actualiser"
              className="rounded-md"
              // statusLoading={true}
            />
            <DialogCustom
              btnText="Nouvelle zone de santé"
              mainTitle="Création d'une nouvelle zone de santé"
              width="sm"
            >
              <CreateHealthArea />
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

function ListHealthAreas() {
  return (
    <div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <HealthAreas />
      </Suspense>
    </div>
  );
}
export default ListHealthAreas;
