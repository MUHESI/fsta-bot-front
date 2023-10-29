import React, { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { columnsListMaladies } from "./columns";
import { useRecoilValue } from "recoil";
import { getMaladies } from "@/globalState/atoms";
import { IMaladie } from "@/types/stateSchema/maladie";
import SkeletonAnimation from "@/components/skeleton";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "@/components/core/Button";
import { IResRecoil } from "@/types/commonTypes";

function Maladies() {
  const navigate = useNavigate();
  const resMaladies = useRecoilValue(getMaladies) as unknown as IResRecoil<
    IMaladie[]
  >;

  return (
    <div className="px-5">
      <DataTable
        searchField="name"
        columns={columnsListMaladies}
        data={resMaladies.data || []}
      >
        <CustomButton
          onClick={() => ""}
          label="Actualiser"
          className="rounded-md "
          // statusLoading={true}
        />
        <div className="">
          <CustomButton
            onClick={() => navigate("/gaps/create")}
            label="Créer un nouveau"
            className="rounded-md"
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
