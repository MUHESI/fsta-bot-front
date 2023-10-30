"use client";
import React, { Suspense, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { columnsListTypeOrganizations } from "./columnsTypeOrganisation";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { getTypeOrganizations } from "@/globalState/atoms";
import { ITypeOrganization } from "@/types/stateSchema/organization";
import SkeletonAnimation from "@/components/skeleton";
import { CustomButton } from "@/components/core/Button";
import DialogCustom from "@/components/core/DialogCustom";
import CreateTypeOrganazition from "../createTypeOrganazition";
import { IResRecoil } from "@/types/commonTypes";
import AlertMessage, {
  INIT_ALERT_MODEL,
  severityAlert,
} from "@/components/core/Alert";

function TypeOrganizations() {
  const resTypeOrganizations = useRecoilValue(
    getTypeOrganizations
  ) as unknown as IResRecoil<ITypeOrganization[]>;
  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL, open: true });
  const refreshTypeOrgs = useRecoilRefresher_UNSTABLE(getTypeOrganizations);

  return (
    <div>
      <div className="px-5">
        {resTypeOrganizations.message && (
          <AlertMessage
            severity={severityAlert.INFO}
            message={{
              title: "Information",
              description: resTypeOrganizations.message,
            }}
            openAlert={alert.open}
            closeAlert={() => setAlert({ ...INIT_ALERT_MODEL })}
            width={98}
          />
        )}
        <DataTable
          searchField="name"
          columns={columnsListTypeOrganizations}
          data={resTypeOrganizations.data}
        >
          <div className="flex flex-wrap justify-between gap-2">
            <CustomButton
              onClick={() => refreshTypeOrgs()}
              label="Actualiser"
              className="rounded-md "
              // statusLoading={true}
            />
            <DialogCustom
              btnText="Création d'un type org."
              mainTitle="Création d'un type orgonisation"
              width="sm"
            >
              <CreateTypeOrganazition />
            </DialogCustom>
          </div>
        </DataTable>
        <div className="">
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

function ListTypeOrganizations() {
  const [tabId, setTabId] = useState<number>(0);
  return (
    <div>
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Types  d'organisations"} />
      </div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <TypeOrganizations />
      </Suspense>
    </div>
  );
}
export default ListTypeOrganizations;
