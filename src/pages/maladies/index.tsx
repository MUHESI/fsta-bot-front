import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnsListMaladies } from "./columns";
import { useRecoilValue } from "recoil";
import { getMaladies } from "@/globalState/atoms";
import { IMaladie } from "@/types/stateSchema/maladie";
import SkeletonAnimation from "@/components/skeleton";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "@/components/core/Button";
import DialogCustom from "@/components/core/DialogCustom";
import CreateMaladie from "../createMaladie";

function Maladies() {
  const navigate = useNavigate();
  const allGaps = useRecoilValue(getMaladies) as unknown as IMaladie[];

  return (
    <div className="p-5">
      <DataTable
        searchField="name"
        columns={columnsListMaladies}
        data={allGaps || []}
      >
        <Button variant="outline" className="ml-auto rounded-md ">
          <FiRefreshCcw />
        </Button>
        <DialogCustom
          btnText="Nouvelle maladie"
          mainTitle="Création de la nouvelle maladie"
          width="sm"
        >
          <CreateMaladie />
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

function ListMaladies() {
  return (
    <div>
      <div className="p-1 text-main-color-dark" data-testid="main-title">
        <LastHeading title={"liste des maladies"} />
      </div>
      <div data-testid="list des maladies">
        <Suspense fallback={<SkeletonAnimation className="px-5" />}>
          <Maladies />
        </Suspense>
      </div>
    </div>
  );
}

export default ListMaladies;
