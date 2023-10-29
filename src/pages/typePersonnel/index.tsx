import React, { Suspense, useState } from "react";
import { LastHeading } from "@/components/core/Heading";
import { DataTable } from "@/components/core/tableTemplate";
import { dataPagination } from "@/constants/constants";
import CustomPagination from "@/components/core/Pagination";
import { columnstypePersonnels } from "./columns";
import { useRecoilValue } from "recoil";
import { getTypePersonnels } from "@/globalState/atoms";
import SkeletonAnimation from "@/components/skeleton";
import DialogCustom from "@/components/core/DialogCustom";
import CreateMaladie from "../createMaladie";
import { CustomButton } from "@/components/core/Button";
import { ITypePersonnel } from "@/types/stateSchema/typePersonnel";
import { IResRecoil } from "@/types/commonTypes";
import AlertMessage, {
  INIT_ALERT_MODEL,
  severityAlert,
} from "@/components/core/Alert";

function TypePersonnel() {
  const resTypePersonnels = useRecoilValue(
    getTypePersonnels
  ) as unknown as IResRecoil<ITypePersonnel[]>;
  const [alert, setAlert] = useState({ ...INIT_ALERT_MODEL, open: true });

  return (
    <div className="px-5">
      {resTypePersonnels.message && (
        <AlertMessage
          severity={severityAlert.INFO}
          message={{
            title: "Information",
            description: resTypePersonnels.message,
          }}
          openAlert={alert.open}
          closeAlert={() => setAlert({ ...INIT_ALERT_MODEL })}
          width={98}
        />
      )}
      <DataTable
        searchField="name"
        columns={columnstypePersonnels}
        data={resTypePersonnels.data || []}
      >
        <CustomButton
          onClick={() => ""}
          label="Actualiser"
          className="rounded-md"
          // statusLoading={true}
        />
        <DialogCustom
          btnText="Nouvelle type de pers."
          mainTitle="Création de type de personnel"
          width="sm"
        >
          <CreateMaladie />
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

function ListTypePersonnels() {
  return (
    <div>
      <div className="p-1 text-main-color-dark" data-testid="main-title">
        <LastHeading title={"liste des type personnels"} />
      </div>
      <div data-testid="list des type personnels">
        <Suspense fallback={<SkeletonAnimation className="px-5" />}>
          <TypePersonnel />
        </Suspense>
      </div>
    </div>
  );
}

export default ListTypePersonnels;
