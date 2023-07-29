import React from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination, dataUsers } from "@/constants/constants";
import { columnsListUsers } from "./columns";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";

function ListUsers() {
  return (
    <div>
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Utilisateurs"} />
      </div>
      <div className="p-5">
        <DataTable
          searchField="full_name"
          columns={columnsListUsers}
          data={dataUsers}
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

export default ListUsers;
