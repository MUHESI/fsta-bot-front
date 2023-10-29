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
  getProvincesState,
  getTerritoriesByProvinceState,
} from "@/globalState/atoms";
import { IProvince } from "@/types/stateSchema/province";
import DialogCustom from "@/components/core/DialogCustom";
import CreateTerritory from "../createTerritory";
import { CustomButton } from "@/components/core/Button";
import { IResRecoil } from "@/types/commonTypes";

function Territories() {
  const setCurrentProvinceID = useSetRecoilState(currentProvinceIDState);
  const resProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IResRecoil<IProvince[]>;

  const allTerritoriesByProvince = useRecoilValue(
    getTerritoriesByProvinceState
  ) as unknown as IProvince[];

  return (
    <div>
      <div>
        <div className="px-5">
          <SelectCommon
            data={resProvinces.data}
            required={true}
            label="Selectionner la province"
            keyObject="name"
            onChange={setCurrentProvinceID}
            value={"..."}
            // type=""
          />
          <DataTable
            searchField="name"
            columns={columnsListTerritories}
            data={allTerritoriesByProvince}
          >
            <CustomButton
              onClick={() => ""}
              label="Actualiser"
              className="rounded-md"
              // statusLoading={true}
            />
            <DialogCustom
              btnText="Nouveau territoire"
              mainTitle="Création du nouveau territoire"
              width="sm"
            >
              <CreateTerritory />
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

function ListTerritories() {
  return (
    <div>
      <div className="p-1 text-main-color-dark">
        {/* <LastHeading title={"Territoires par province"} /> */}
      </div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <Territories />
      </Suspense>
    </div>
  );
}
export default ListTerritories;
