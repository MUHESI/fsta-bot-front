import React, { useState } from "react";
import { ColumnDef } from "@tanstack/table-core";
import { IAlert } from "@/types/stateSchema/alert";
import DetailAlert from "@/components/alert/moreDetail";
import SwipeableCustom, {
  allOptionsDrawer,
} from "@/components/core/SwipeableDrawerCustom";

export const columnsListAlerts: ColumnDef<IAlert>[] = [
  {
    accessorKey: "date_notification",
    header: "DATE DE NOTIF.",
  },
  {
    accessorKey: "datealert",
    header: "DATE D'ALERTE",
  },
  {
    accessorKey: "name_point_focal",
    header: "NOM POINT FOCAL ET CONTACT ",
    cell: ({ row }: any) => {
      const alert = row.original;
      return <div>{`${alert.name_point_focal} | ${alert.phone}`}</div>;
    },
  },
  {
    accessorKey: "healthArea",
    header: "LIEU",
    cell: ({ row }: any) => {
      const AireSante = row.original;
      return (
        <div className="font-semibold text-green-600">
          {AireSante.dataaire.name}
        </div>
      );
    },
  },
  {
    accessorKey: "nbr_touche",
    header: "PERS. AFFECT.",
  },
  {
    accessorKey: "nbr_dece",
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
