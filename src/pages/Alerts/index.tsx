import React from "react";
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

function ListAlerts() {
  const navigate = useNavigate();
  // const allAlert = useRecoilValue(getAllAlerts) as unknown as IAlert[];
  return (
    <div>
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Alerts"} />
      </div>
      <div className="p-5">
        <DataTable
          searchField="description"
          columns={columnsListAlerts}
          data={dataAlerts}
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

export default ListAlerts;
