import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination, dataProvices } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnsListProvinces } from "./columns";
import { useRecoilValue } from "recoil";
import { getProvincesState, userAuthenticatedState } from "@/globalState/atoms";
import { IProvince } from "@/types/stateSchema/province";

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
        <Button variant="outline" className="ml-auto rounded-full">
          <FiRefreshCcw />
        </Button>
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
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Provinces"} />
      </div>
      <Suspense fallback={<div>.....</div>}>
        <Provinces />
      </Suspense>
    </div>
  );
}

export default ListProvinces;
