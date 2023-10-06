import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { columnsListProvinces } from "./columns";
import { useRecoilValue } from "recoil";
import { getProvincesState } from "@/globalState/atoms";
import { IProvince } from "@/types/stateSchema/province";
import SkeletonAnimation from "@/components/skeleton";
import DialogCustom from "@/components/core/DialogCustom";
import CreateProvince from "../createProvince";
import { CustomButton } from "@/components/core/Button";

function Provinces() {
  const allProvinces = useRecoilValue(
    getProvincesState
  ) as unknown as IProvince[];

  return (
    <div className="p-5">
      <DataTable
        searchField="name"
        columns={columnsListProvinces}
        data={allProvinces || []}
      >
        <CustomButton
          onClick={() => ""}
          label="Actualiser"
          className="rounded-md"
          // statusLoading={true}
        />
        <DialogCustom
          btnText="Nouvelle province"
          mainTitle="Création de la nouvelle province"
          width="sm"
        >
          <CreateProvince />
        </DialogCustom>
      </DataTable>
      <CustomPagination
        dataPagination={dataPagination.pagination}
        nextPage={() => console.log("next")}
        previousPage={() => console.log("next")}
      />
    </div>
  );
}

function ListProvinces() {
  return (
    <div>
      <div className="p-1 text-main-color-dark" data-testid="main-title">
        <LastHeading title={"Provinces"} />
      </div>
      <div data-testid="list-provinces">
        <Suspense fallback={<SkeletonAnimation className="px-5" />}>
          <Provinces />
        </Suspense>
      </div>
    </div>
  );
}

export default ListProvinces;
