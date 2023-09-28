"use client";
import React from "react";
import { ColumnDef } from "@tanstack/table-core";
import { IGapProvince } from "@/constants/constants";

export const columnsListGaps: ColumnDef<IGapProvince>[] = [
  {
    accessorKey: "province",
    header: "DPS",
  },
  {
    accessorKey: "pin",
    header: "PIN",
    cell: ({ row }: any) => {
      const gap: IGapProvince = row.original;
      return (
        <div>
          <p className="ml-2 font-bold">{gap.pin} </p>
          <div className="text-gray-400 duration-300 hover:duration-300 hover:text-black">
            <p>P. Deplacés : {gap.pDeplaces}</p>
            <p>P. Rétournés : {gap.pRetournees}</p>
            <p>P. Elognés : {gap.pRetournees}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "typeCrise",
    header: "Type de crise",
  },
  {
    accessorKey: "structureSante",
    header: "Nb. reco Actif",
    cell: ({ row }: any) => {
      const gap: IGapProvince = row.original;
      return <div>{gap.pDeplaces} </div>;
    },
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: any) => (
      <div className="font-semibold text-green-600">
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "barrieres",
    header: "Barieres",
    cell: ({ row }: any) => {
      const gap: IGapProvince = row.original;
      return (
        <div>
          {gap.barrieres.map((item) => (
            <p>{`- ${item}`}</p>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "acteur",
    header: "Acteurs",
  },
  {
    accessorKey: "created_at",
    header: "DATE CREATION",
  },
];
