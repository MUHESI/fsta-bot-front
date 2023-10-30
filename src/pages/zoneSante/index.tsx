import React, { Suspense } from "react";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { columnsListZoneSante } from "./columns";
import { SelectCommon } from "@/components/core/select";
import SkeletonAnimation from "@/components/skeleton";
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  currentProvinceIDState,
  currentTerritoryIDState,
  getProvincesState,
  getTerritoriesByProvinceState,
  getListZoneSanteByTerritory,
} from "@/globalState/atoms";
import { IProvince } from "@/types/stateSchema/province";
import DialogCustom from "@/components/core/DialogCustom";
import CreateHealthArea from "../createHealthArea";
import { CustomButton } from "@/components/core/Button";
import { IZoneSante } from "@/types/stateSchema/zoneSante";
import { IResRecoil } from "@/types/commonTypes";

function ZoneSantes() {
  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);
  const setCurrentTerritoryID = useSetRecoilState(currentTerritoryIDState);

  const resProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IResRecoil<IProvince[]>;

  const resTerritoriesByProvince = useRecoilValue(
    getTerritoriesByProvinceState
  ) as unknown as IResRecoil<IProvince[]>;

  const resZoneSante = useRecoilValue(
    getListZoneSanteByTerritory
  ) as unknown as IResRecoil<IZoneSante[]>;
  const refreshZoneSante = useRecoilRefresher_UNSTABLE(
    getListZoneSanteByTerritory
  );

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
              data={resTerritoriesByProvince.data}
              required={true}
              label="Selectionner le territoire"
              keyObject="name"
              onChange={setCurrentTerritoryID}
              value={"..."}
              // type=""
            />
          </div>

          <DataTable
            searchField="name"
            columns={columnsListZoneSante}
            data={resZoneSante.data}
          >
            <div className="flex flex-wrap justify-between gap-2">
              <CustomButton
                onClick={() => refreshZoneSante()}
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
            </div>
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

function ListZoneSantes() {
  return (
    <div>
      <div className="p-1 text-main-color-dark"></div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <ZoneSantes />
      </Suspense>
    </div>
  );
}
export default ListZoneSantes;
