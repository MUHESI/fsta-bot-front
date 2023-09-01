import React, { useState } from "react";
import { ColumnDef } from "@tanstack/table-core";
import { IAlert } from "@/types/stateSchema/alert";
import DetailAlert from "@/components/alert/moreDetail";
import SwipeableCustom, {
  allOptionsDrawer,
} from "@/components/core/SwipeableDrawerCustom";

export const columnsListAlerts: ColumnDef<IAlert>[] = [
  {
    accessorKey: "code",
    header: "CODE",
  },
  {
    accessorKey: "nameResp",
    header: "NOM POINT FOCAL",
  },

  {
    accessorKey: "typeAlert",
    header: "TYPE",
  },
  {
    accessorKey: "healthArea",
    header: "LIEU",
  },
  {
    accessorKey: "nbPeopleAffected",
    header: "PERS. AFFECT.",
  },
  {
    accessorKey: "nbPeopleDead",
    header: "DECES",
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }: any) => (
      <div className="font-semibold text-green-600">
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "ACTIONS",
    id: "actions",
    cell: ({ row: { original } }) => {
      const [closeDrawer, setCloseDrawer] = useState(0);
      const haundleCloseDrawer = () => setCloseDrawer(Math.random());

      return (
        <div className="">
          <SwipeableCustom
            textBtn={"Voir plus"}
            mainTitle={" Detail de l'alert courant"}
            randomCloseDrawer={0}
            options={allOptionsDrawer}
            closeDrawer={haundleCloseDrawer}
          >
            <DetailAlert alert={original} />
          </SwipeableCustom>
        </div>
      );
    },
  },
];
