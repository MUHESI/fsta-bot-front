import React from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import {
  dataPagination,
  dataTerritories,
  provinces,
} from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnsListTerritories } from "./columns";
import { SelectCommon } from "@/components/core/select";

function ListTerritories() {
  return (
    <div>
      <div>
        <div className="p-1 text-main-color-dark">
          <LastHeading title={"Territoires"} />
        </div>
        <div className="p-5">
          <SelectCommon
            data={provinces}
            required={true}
            label="Selectionner la province"
            // onChange={(e) => console.log("e", e)}
            value={"..."}
            // type=""
          />
          <DataTable
            searchField="name"
            columns={columnsListTerritories}
            data={dataTerritories}
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

export default ListTerritories;
