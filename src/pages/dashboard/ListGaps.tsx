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

function GAPByDPS() {
  const navigate = useNavigate();
  const { data, metaData, message } = useRecoilValue(
    getIndicateurs
  ) as unknown as IResRecoil<IIndicateur[]>;

  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL, open: true });

  return (
    <div>
      <div className="px-5">
        <span
          onClick={() => {
            console.clear();
            console.log("data", data);
          }}
        >
          Test{" "}
        </span>
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
          <Button variant="outline" className="ml-auto rounded-full">
            <FiRefreshCcw />
          </Button>
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
