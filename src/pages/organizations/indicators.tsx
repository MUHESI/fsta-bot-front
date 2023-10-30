import { Suspense } from "react";
import { LastHeading } from "@/components/core/Heading";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { columnsListIndications } from "./columnsIndication";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import SkeletonAnimation from "@/components/skeleton";
import { useNavigate } from "react-router-dom";
import { getIndicateurs } from "@/globalState/atoms/indication";
import { IIndicateur } from "@/types/stateSchema/indication";
import DialogCustom from "@/components/core/DialogCustom";
import CreateIndication from "../createInidication";
import { CustomButton } from "@/components/core/Button";
import { IResRecoil } from "@/types/commonTypes";

function Indicators() {
  const resIndicators = useRecoilValue(getIndicateurs) as unknown as IResRecoil<
    IIndicateur[]
  >;
  const refreshIndicators = useRecoilRefresher_UNSTABLE(getIndicateurs);

  return (
    <div>
      <div className="px-5">
        <DataTable
          searchField="name"
          columns={columnsListIndications}
          data={resIndicators.data}
        >
          <div className="flex flex-wrap justify-between gap-2">
            <CustomButton
              onClick={() => refreshIndicators()}
              label="Actualiser"
              className="rounded-md "
              // statusLoading={true}
            />

            <DialogCustom
              btnText="Création d'indicateur"
              mainTitle="Création d'un nouveau indicateur"
              width="sm"
            >
              <CreateIndication />
            </DialogCustom>
          </div>
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
