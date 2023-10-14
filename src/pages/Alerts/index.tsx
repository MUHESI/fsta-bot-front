import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataAlerts, dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnsListAlerts } from "./columns";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { IAlert } from "@/types/stateSchema/alert";
import { getAllAlerts } from "@/globalState/atoms";
import SkeletonAnimation from "@/components/skeleton";

function Alerts() {
  const navigate = useNavigate();
  const allAlert = useRecoilValue(getAllAlerts) as unknown as IAlert[];
  return (
    <div>
      <div className="p-5">
        <DataTable
          searchField="description"
          columns={columnsListAlerts}
          data={allAlert}
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

function ListAlerts() {
  return (
    <div>
      <div className="p-1 text-main-color-dark" data-testid="main-title">
        <LastHeading title={"liste des alerts"} />
      </div>
      <div data-testid="list des alerts">
        <Suspense fallback={<SkeletonAnimation className="px-5" />}>
          <Alerts />
        </Suspense>
      </div>
    </div>
  );
}

export default ListAlerts;
