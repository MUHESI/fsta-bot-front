import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnsListTerritories } from "./columns";
import { SelectCommon } from "@/components/core/select";
import SkeletonAnimation from "@/components/skeleton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentProvinceIDState,
  currentTerritoryIDState,
  getListHealthAreasByTerritory,
  getProvincesState,
  getTerritoriesByProvinceState,
} from "@/globalState/atoms";
import { IProvince } from "@/types/stateSchema/province";
import DialogCustom from "@/components/core/DialogCustom";
import { IHealthArea } from "@/types/stateSchema/healthArea";

function HealthAreas() {
  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);
  const setCurrentTerritoryID = useSetRecoilState(currentTerritoryIDState);

  const allProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IProvince[];
  const allTerritoriesByProvince = useRecoilValue(
    getTerritoriesByProvinceState
  ) as unknown as IProvince[];
  const allListHealthAreasByTerritory = useRecoilValue(
    getListHealthAreasByTerritory
  ) as unknown as IHealthArea[];

  return (
    <div>
      <div>
        <div className="p-5">
          <div className="flex justify-between gap-6">
            <SelectCommon
              data={allProvinces}
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
          </div>

          <DataTable
            searchField="name"
            columns={columnsListTerritories}
            data={allListHealthAreasByTerritory}
          >
            <Button variant="outline" className="ml-auto rounded-md">
              <FiRefreshCcw />
            </Button>
            <DialogCustom
              btnText="Nouveau territoire"
              mainTitle="Création du nouveau territoire"
              width="sm"
            >
              {/* <CreateTerritory /> */}
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
      <div className="p-1 text-main-color-dark">
        <LastHeading title={" Aires de santé par territoire"} />
      </div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <HealthAreas />
      </Suspense>
    </div>
  );
}
export default ListHealthAreas;
