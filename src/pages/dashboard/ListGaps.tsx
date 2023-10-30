import React, { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataGaProvince, dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { useRecoilValue } from "recoil";
import SkeletonAnimation from "@/components/skeleton";
import { useNavigate } from "react-router-dom";
import { getIndicateurs } from "@/globalState/atoms/indication";
import { IIndicateur } from "@/types/stateSchema/indication";
import { columnsListGaps } from "./columns";
import AlertMessage, {
  INIT_ALERT_MODEL,
  severityAlert,
} from "@/components/core/Alert";
import { IResRecoil } from "@/types/commonTypes";
import { CustomButton } from "@/components/core/Button";

function GAPByDPS() {
  const navigate = useNavigate();
  const { data, metaData, message } = useRecoilValue(
    getIndicateurs
  ) as unknown as IResRecoil<IIndicateur[]>;

  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL, open: true });

  return (
    <div>
      <div className="px-5 py-2">
        {message && (
          <AlertMessage
            severity={severityAlert.INFO}
            message={{
              title: "Information",
              description: message,
            }}
            openAlert={alert.open}
            closeAlert={() => setAlert({ ...INIT_ALERT_MODEL })}
            width={98}
          />
        )}
        <DataTable
          searchField="province"
          columns={columnsListGaps}
          data={dataGaProvince}
        >
          <div className="flex flex-wrap justify-between gap-2">
            <CustomButton
              onClick={() => ""}
              label="Actualiser"
              className="rounded-md "
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
    </div>
  );
}
function ListGapsByDPS() {
  return (
    <div>
      <Suspense fallback={<SkeletonAnimation className="px-5" />}>
        <GAPByDPS />
      </Suspense>
    </div>
  );
}
export default ListGapsByDPS;
