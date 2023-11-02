import React, { Suspense, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { columnsListMaladies } from "./columns";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { getMaladies } from "@/globalState/atoms";
import { IMaladie } from "@/types/stateSchema/maladie";
import SkeletonAnimation from "@/components/skeleton";
import { CustomButton } from "@/components/core/Button";
import { IResRecoil } from "@/types/commonTypes";
import DialogCustom from "@/components/core/DialogCustom";
import CreateMaladie from "../createMaladie";

function Maladies() {
  const resMaladies = useRecoilValue(getMaladies) as unknown as IResRecoil<
    IMaladie[]
  >;
  // CreateMaladie;
  const refreshMaldie = useRecoilRefresher_UNSTABLE(getMaladies);

  return (
    <div className="px-5">
      <DataTable
        searchField="name"
        columns={columnsListMaladies}
        data={resMaladies.data || []}
      >
        <div className="flex flex-wrap justify-between gap-2">
          <CustomButton
            onClick={() => refreshMaldie()}
            label="Actualiser"
            className="rounded-md "
          />
          <DialogCustom
            mainBtnOptions={{
              btnText: "Nouvelle maladie",
              useBtn: true,
            }}
            mainTitle="Création d'unnouveau medicament"
            width="sm"
            // openDilog={open}
          >
            <CreateMaladie />
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

function ListMaldies() {
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

export default ListMaldies;
