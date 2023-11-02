import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { columnsListCrises } from "./columns";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { getCrises } from "@/globalState/atoms";
import SkeletonAnimation from "@/components/skeleton";
import DialogCustom from "@/components/core/DialogCustom";
import { ICrise } from "@/types/stateSchema/crise";
import CreateCrise from "../createCrise";
import { CustomButton } from "@/components/core/Button";
import { IResRecoil } from "@/types/commonTypes";

function Crises() {
  const resCrises = useRecoilValue(getCrises) as unknown as IResRecoil<
    ICrise[]
  >;
  const refreshCrises = useRecoilRefresher_UNSTABLE(getCrises);

  return (
    <div className="px-5">
      <DataTable
        searchField="name"
        columns={columnsListCrises}
        data={resCrises.data || []}
      >
        <div className="flex flex-wrap justify-between gap-2">
          <CustomButton
            onClick={() => refreshCrises()}
            label="Actualiser"
            className="rounded-md"
            // statusLoading={true}
          />
          <DialogCustom
            mainBtnOptions={{
              btnText: "Nouvelle crise",
              useBtn: true,
            }}
            mainTitle="Création de la nouvelle crise"
            width="sm"
          >
            <CreateCrise />
          </DialogCustom>
        </div>
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
