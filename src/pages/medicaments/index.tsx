import React, { Suspense, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { FiRefreshCcw } from "react-icons/fi";
import { columnsListMedicaments } from "./columns";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import SkeletonAnimation from "@/components/skeleton";
import DialogCustom from "@/components/core/DialogCustom";
import CreateMedicament from "../createMedicament";
import { getMedicaments } from "../../globalState/atoms";
import { IMedicament } from "../../types/stateSchema/medicament";
import { IResRecoil } from "@/types/commonTypes";
import AlertMessage, {
  INIT_ALERT_MODEL,
  severityAlert,
} from "@/components/core/Alert";
import { CustomButton } from "@/components/core/Button";

function Medicaments() {
  const { data, message } = useRecoilValue(
    getMedicaments
  ) as unknown as IResRecoil<IMedicament[]>;
  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL, open: true });
  const refreshMedicaments = useRecoilRefresher_UNSTABLE(getMedicaments);

  return (
    <div className="px-5">
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
        searchField="name"
        columns={columnsListMedicaments}
        data={data || []}
      >
        <div className="flex flex-wrap justify-between gap-2">
          <CustomButton
            onClick={() => refreshMedicaments()}
            label="Actualiser"
            className="rounded-md "
            // statusLoading={true}
          />
          <DialogCustom
            btnText="Nouveau medic"
            mainTitle="Création d'un nouveau medicament"
            width="sm"
          >
            <CreateMedicament />
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
