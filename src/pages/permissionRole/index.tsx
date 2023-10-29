import React, { Suspense, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import { columnsListRoles } from "./columns";
import CustomPagination from "@/components/core/Pagination";
import { useRecoilValue } from "recoil";
import SkeletonAnimation from "@/components/skeleton";
import { getRoles } from "@/globalState/atoms";
import { IRole } from "@/types/stateSchema/permissionRole";
import DialogCustom from "@/components/core/DialogCustom";
import CreateRole from "../createRole";
import { CustomButton } from "@/components/core/Button";
import { IResRecoil } from "@/types/commonTypes";
import AlertMessage, {
  INIT_ALERT_MODEL,
  severityAlert,
} from "@/components/core/Alert";

function Roles() {
  const resRoles = useRecoilValue(getRoles) as unknown as IResRecoil<IRole[]>;

  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL, open: true });

  return (
    <div>
      <div className="px-5">
        {resRoles.message && (
          <AlertMessage
            severity={severityAlert.INFO}
            message={{
              title: "Information",
              description: resRoles.message,
            }}
            openAlert={alert.open}
            closeAlert={() => setAlert({ ...INIT_ALERT_MODEL })}
            width={98}
          />
        )}
        <DataTable
          searchField="name"
          columns={columnsListRoles}
          data={resRoles.data || []}
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
