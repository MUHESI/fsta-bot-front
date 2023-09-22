"use client";
import React, { Suspense, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnsListTypeOrganizations } from "./columnsTypeOrganisation";
import { useRecoilValue } from "recoil";
import { getTypeOrganizations } from "@/globalState/atoms";
import { ITypeOrganization } from "@/types/stateSchema/organization";
import SkeletonAnimation from "@/components/skeleton";
import { CustomButton } from "@/components/core/Button";
import { useNavigate } from "react-router-dom";
import DialogCustom from "@/components/core/DialogCustom";
import CreateTypeOrganazition from "../createTypeOrganazition";

function TypeOrganizations() {
  const navigate = useNavigate();
  const listTypeOrganizations = useRecoilValue(
    getTypeOrganizations
  ) as unknown as ITypeOrganization[];

  return (
    <div>
      <div className="p-5">
        <DataTable
          searchField="name"
          columns={columnsListTypeOrganizations}
          data={listTypeOrganizations}
        >
          <Button variant="outline" className="ml-auto rounded-full">
            <FiRefreshCcw />
          </Button>
          <DialogCustom
            btnText="Création d'un type org."
            mainTitle="Création d'un type orgonisation"
            width="sm"
          >
            <CreateTypeOrganazition />
          </DialogCustom>
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
