import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnstypePersonnels } from "./columns";
import { useRecoilValue } from "recoil";
import { getTypePersonnels } from "@/globalState/atoms";
import { IMaladie } from "@/types/stateSchema/maladie";
import SkeletonAnimation from "@/components/skeleton";
import { useNavigate } from "react-router-dom";
import DialogCustom from "@/components/core/DialogCustom";
import CreateTypesPersonnel from "../createMaladie";
import { CustomButton } from "@/components/core/Button";

function TypePersonnel() {
  const navigate = useNavigate();
  const allTypePersonnels = useRecoilValue(
    getTypePersonnels
  ) as unknown as IMaladie[];

  return (
    <div className="p-5">
      <DataTable
        searchField="name"
        columns={columnstypePersonnels}
        data={allTypePersonnels || []}
      >
        <CustomButton
          onClick={() => ""}
          label="Actualiser"
          className="rounded-md"
          // statusLoading={true}
        />
        <DialogCustom
          btnText="Nouvelle type de pers."
          mainTitle="Création de type de personnel"
          width="sm"
        >
          <CreateTypesPersonnel />
        </DialogCustom>
      </DataTable>
      <CustomPagination
        dataPagination={dataPagination.pagination}
        nextPage={() => console.log("next")}
        previousPage={() => console.log("next")}
      />
    </div>
  );
}

function ListTypePersonnels() {
  return (
    <div>
      <div className="p-1 text-main-color-dark" data-testid="main-title">
        <LastHeading title={"liste des type personnels"} />
      </div>
      <div data-testid="list des type personnels">
        <Suspense fallback={<SkeletonAnimation className="px-5" />}>
          <TypePersonnel />
        </Suspense>
      </div>
    </div>
  );
}

export default ListTypePersonnels;
