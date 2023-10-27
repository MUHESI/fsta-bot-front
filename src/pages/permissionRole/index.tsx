import React, { Suspense, useEffect } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import { columnsListRoles } from "./columns";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { useRecoilValue } from "recoil";
import SkeletonAnimation from "@/components/skeleton";
import { getRoles } from "@/globalState/atoms";
import { IRole } from "@/types/stateSchema/permissionRole";
import DialogCustom from "@/components/core/DialogCustom";
import CreateRole from "../createRole";
import { CustomButton } from "@/components/core/Button";

function Roles() {
  const allRoles = useRecoilValue(getRoles) as unknown as IRole[];

  return (
    <div>
      <div className="px-5">
        <DataTable
          searchField="name"
          columns={columnsListRoles}
          data={allRoles || []}
        >
          <CustomButton
            onClick={() => ""}
            label="Actualiser"
            className="rounded-md"
            // statusLoading={true}
          />
          <DialogCustom
            btnText="Nouveau role"
            mainTitle="Création d'un nouveau role"
            width="sm"
          >
            <CreateRole />
          </DialogCustom>
        </DataTable>

        <CustomPagination
          dataPagination={dataPagination.pagination}
          nextPage={() => console.log("next")}
          previousPage={async () => {}}
        />
      </div>
    </div>
  );
}

function ListRoles() {
  return (
    <div>
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Tous les roles"} />
      </div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <Roles />
      </Suspense>
    </div>
  );
}

export default ListRoles;

//  <Button
//    onClick={async () => {
//      try {
//        console.clear();
//        const token = "13|6j40bGlo9LYE3OJv42eWVJdFzLFfFrLEtaqt5cI4";
//        console.log("============LOG====================");
//        const res = await getAPI("role/list", token);
//        console.log("res", res);
//      } catch (error) {
//        console.clear();
//        console.log("error", error);
//      }
//    }}
//  >
//    click
//  </Button>;
