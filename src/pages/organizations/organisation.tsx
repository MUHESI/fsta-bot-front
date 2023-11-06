import React, { Suspense, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { columnsListOrganizations } from "./columns";
import { useRecoilValue } from "recoil";
import { getOrganizations } from "@/globalState/atoms";
import { IOrganization } from "@/types/stateSchema/organization";
import SkeletonAnimation from "@/components/skeleton";
import { CustomButton } from "@/components/core/Button";
import { useNavigate } from "react-router-dom";
import { IResRecoil } from "@/types/commonTypes";

function Organizations() {
  const navigate = useNavigate();
  const resOrganizations = useRecoilValue(
    getOrganizations
  ) as unknown as IResRecoil<IOrganization[]>;

  return (
    <div>
      <div className="px-5">
        <DataTable
          searchField="name"
          columns={columnsListOrganizations}
          data={resOrganizations.data}
        >
          <div className="flex flex-wrap justify-between gap-2">
            <CustomButton
              onClick={() => {
                console.clear();
                console.log("resOrganizations", resOrganizations);
              }}
              label="Actualiser"
              className="rounded-md "
              // statusLoading={true}
            />

            <CustomButton
              onClick={() => navigate("/organizations/create")}
              label="Nouvelle org."
              className="rounded-md "
              // statusLoading={true}
            />
          </div>
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

function ListOrganizations() {
  // HANDLE TABS
  const [tabId, setTabId] = useState<number>(0);
  return (
    <div>
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Organisations"} />
      </div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <Organizations />
      </Suspense>
    </div>
  );
}
export default ListOrganizations;
