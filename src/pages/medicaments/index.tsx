import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnsListMedicaments } from "./columns";
import { useRecoilValue } from "recoil";
import SkeletonAnimation from "@/components/skeleton";
import { useNavigate } from "react-router-dom";
import DialogCustom from "@/components/core/DialogCustom";
import CreateMedicament from "../createMedicament";
import { getMedicaments } from "../../globalState/atoms";
import { IMedicament } from "../../types/stateSchema/medicament";

function Medicaments() {
  const navigate = useNavigate();
  const allMedicaments = useRecoilValue(
    getMedicaments
  ) as unknown as IMedicament[];

  return (
    <div className="px-5">
      <DataTable
        searchField="name"
        columns={columnsListMedicaments}
        data={allMedicaments || []}
      >
        <Button variant="outline" className="ml-auto rounded-md ">
          <FiRefreshCcw />
        </Button>
        <DialogCustom
          btnText="Nouveau medicament"
          mainTitle="Création d'unnouveau medicament"
          width="sm"
        >
          <CreateMedicament />
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

function ListMedicaments() {
  return (
    <div>
      <div className="p-1 text-main-color-dark" data-testid="main-title">
        <LastHeading title={"liste des medicaments"} />
      </div>
      <div data-testid="liste des medicaments">
        <Suspense fallback={<SkeletonAnimation className="px-5" />}>
          <Medicaments />
        </Suspense>
      </div>
    </div>
  );
}

export default ListMedicaments;
