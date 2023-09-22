import React, { Suspense, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnsListIndications } from "./columnsIndication";
import { useRecoilValue } from "recoil";
// import { IOrganization } from "@/types/stateSchema/organization";
import SkeletonAnimation from "@/components/skeleton";
// import { CustomButton } from "@/components/core/Button";
import { useNavigate } from "react-router-dom";
import { getIndications } from "@/globalState/atoms/indication";
import { IIndication } from "@/types/stateSchema/indication";
import DialogCustom from "@/components/core/DialogCustom";
import CreateIndication from "../createInidication";

function Indications() {
  const navigate = useNavigate();
  const listIndications = useRecoilValue(
    getIndications
  ) as unknown as IIndication[];
  return (
    <div>
      <div className="p-5">
        <DataTable
          searchField="name"
          columns={columnsListIndications}
          data={listIndications}
        >
          <Button variant="outline" className="ml-auto rounded-full">
            <FiRefreshCcw />
          </Button>
          <DialogCustom
            btnText="Création d'indication"
            mainTitle="Création d'une nouvelle indication"
            width="sm"
          >
            <CreateIndication />
          </DialogCustom>
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

function ListIndications() {
  return (
    <div>
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Indications"} />
      </div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <Indications />
      </Suspense>
    </div>
  );
}
export default ListIndications;
