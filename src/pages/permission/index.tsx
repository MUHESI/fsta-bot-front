import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import { columnsListPermissions } from "./columns";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { useRecoilValue } from "recoil";
import SkeletonAnimation from "@/components/skeleton";
import { getPermissions } from "@/globalState/atoms";
import { IPermission } from "@/types/stateSchema/permission";
import CreatePermission from "../createPermission";
import DialogCustom from "@/components/core/DialogCustom";
import { CustomButton } from "@/components/core/Button";

function Permissions() {
  const listPermissions = useRecoilValue(
    getPermissions
  ) as unknown as IPermission[];

  return (
    <div>
      <div className="p-5">
        <DataTable
          searchField="psedo"
          columns={columnsListPermissions}
          data={listPermissions || []}
        >
          <CustomButton
            onClick={() => ""}
            label="Actualiser"
            className="rounded-md"
            // statusLoading={true}
          />

          <DialogCustom
            btnText="Nouvelle permission"
            mainTitle="Création d'une nouvelle permission"
            width="sm"
          >
            <CreatePermission />
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

function ListPermissions() {
  return (
    <div>
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Toutes les permissions"} />
      </div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <Permissions />
      </Suspense>
    </div>
  );
}

export default ListPermissions;
