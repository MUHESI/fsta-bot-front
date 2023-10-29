import { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnsListIndications } from "./columnsIndication";
import { useRecoilValue } from "recoil";
import SkeletonAnimation from "@/components/skeleton";
import { useNavigate } from "react-router-dom";
import { getIndicateurs } from "@/globalState/atoms/indication";
import { IIndicateur } from "@/types/stateSchema/indication";
import DialogCustom from "@/components/core/DialogCustom";
import CreateIndication from "../createInidication";

function Indicators() {
  const navigate = useNavigate();
  const listIndicators = useRecoilValue(
    getIndicateurs
  ) as unknown as IIndicateur[];
  return (
    <div>
      <div className="px-5">
        <DataTable
          searchField="name"
          columns={columnsListIndications}
          data={listIndicators}
        >
          <Button variant="outline" className="ml-auto rounded-full">
            <FiRefreshCcw />
          </Button>
          <DialogCustom
            btnText="Création d'indicateur"
            mainTitle="Création d'un nouveau indicateur"
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

function ListIndicators() {
  return (
    <div>
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Indicateurs"} />
      </div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <Indicators />
      </Suspense>
    </div>
  );
}
export default ListIndicators;
