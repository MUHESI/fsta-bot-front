import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataOrganizations, dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnsListOrganizations } from "./columns";
import { useRecoilValue } from "recoil";
import { getOrganizations } from "@/globalState/atoms";
import { IOrganization } from "@/types/stateSchema/organization";
import SkeletonAnimation from "@/components/skeleton";

function Organizations() {
  const listOrganizations = useRecoilValue(
    getOrganizations
  ) as unknown as IOrganization[];
  return (
    <div>
      <div className="p-5">
        <DataTable
          searchField="name"
          columns={columnsListOrganizations}
          data={listOrganizations}
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
    </div>
  );
}

function ListOrganizations() {
  return (
    <div>
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Organisations"} />
      </div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <Organizations />
      </Suspense>
    </div>
  );
}
export default ListOrganizations;
