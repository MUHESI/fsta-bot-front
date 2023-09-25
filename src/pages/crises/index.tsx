import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnsListCrises } from "./columns";
import { useRecoilValue } from "recoil";
import { getCrises } from "@/globalState/atoms";
import SkeletonAnimation from "@/components/skeleton";
import { useNavigate } from "react-router-dom";
import DialogCustom from "@/components/core/DialogCustom";
import { ICrise } from "@/types/stateSchema/crise";
import CreateCrise from "../createCrise";

function Crises() {
  const navigate = useNavigate();
  const allCrises = useRecoilValue(getCrises) as unknown as ICrise[];

  return (
    <div className="p-5">
      <DataTable
        searchField="name"
        columns={columnsListCrises}
        data={allCrises || []}
      >
        <Button variant="outline" className="ml-auto rounded-md ">
          <FiRefreshCcw />
        </Button>
        <DialogCustom
          btnText="Nouvelle crise"
          mainTitle="Création de la nouvelle crise"
          width="sm"
        >
          <CreateCrise />
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

function ListCrises() {
  return (
    <div>
      <div className="p-1 text-main-color-dark" data-testid="main-title">
        <LastHeading title={"liste des crises"} />
      </div>
      <div data-testid="liste des crises">
        <Suspense fallback={<SkeletonAnimation className="px-5" />}>
          <Crises />
        </Suspense>
      </div>
    </div>
  );
}

export default ListCrises;
