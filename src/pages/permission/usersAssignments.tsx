import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination, dataUsers } from "@/constants/constants";
import { columnsListUsers } from "./userColumns";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import SkeletonAnimation from "@/components/skeleton";
import { useRecoilValue } from "recoil";
import { getUsers } from "@/globalState/atoms/user";
import { IUser } from "@/types/stateSchema/user";

function UsersAssignments() {
  const listUsers = useRecoilValue(getUsers) as unknown as IUser[];
  return (
    <div>
      <div className="p-5">
        <DataTable
          searchField="full_name"
          columns={columnsListUsers}
          data={listUsers}
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

function ListUsersAssignments() {
  return (
    <div>
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Affectations"} />
      </div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <UsersAssignments />
      </Suspense>
    </div>
  );
}

export default ListUsersAssignments;
