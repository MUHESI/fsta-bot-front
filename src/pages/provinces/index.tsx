import React from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination, dataProvices } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnsListProvinces } from "./columns";

function ListProvinces() {
  return (
    <div>
      <div>
        <div className="p-1 text-main-color-dark">
          <LastHeading title={"Provinces"} />
        </div>
        <div className="p-5">
          <DataTable
            searchField="name"
            columns={columnsListProvinces}
            data={dataProvices}
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
    </div>
  );
}

export default ListProvinces;
