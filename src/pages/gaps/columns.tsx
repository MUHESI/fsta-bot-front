"use client";
import React from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/table-core";
import { GAP_ACTIONS_STATUS, IGap } from "@/types/stateSchema/gap";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ActionsGap from "./Actions";

// TODO:: Improve later
// STYLE
export const styles = {
  DropdownMenuItemClass:
    "duration-600 text-gray-400 hover:text-gray-500 hover:duration-500 cursor-pointer flex gap-1",
};

export const columnsListGaps: ColumnDef<IGap>[] = [
  {
    accessorKey: "title",
    header: "Titre",
    cell: ({ row }: any) => (
      <NavLink to={`/gaps/detail/${row.original.id}`} className="">
        {row.getValue("title")}
      </NavLink>
    ),
  },
  {
    accessorKey: "dataprovince",
    header: "LOCALISATION",
    cell: ({ row }: any) => (
      <Tooltip
        title={`Province: ${row.original.dataprovince.name} | Aire de santé : ${row.original.dataaire.name}`}
      >
        <div className="">{`${row.original.dataprovince.name} | ${row.original.dataaire.name}`}</div>
      </Tooltip>
    ),
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
    accessorKey: "created_at",
    header: "DATE CREATION",
    cell: ({ row }: any) => (
      <div>{new Date(row.getValue("created_at")).toLocaleString()}</div>
    ),
  },

  {
    accessorKey: "ACTIONS",
    id: "actions",
    cell: ({ row }) => {
      const gap: any = row.original;
      return <ActionsGap gap={gap} />;
    },
  },
];
