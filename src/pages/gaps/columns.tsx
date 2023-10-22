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

// TODO:: Improve later
// STYLE
export const styles = {
  DropdownMenuItemClass:
    "duration-600 text-gray-400 hover:text-gray-500 hover:duration-500 cursor-pointer",
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
      const navigate = useNavigate();
      //
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className={`${styles.DropdownMenuItemClass}`}
              onClick={() => {
                navigate(
                  `/gaps/actions/${GAP_ACTIONS_STATUS.VALIDATE_GAP}/${gap.id}`
                );
              }}
              // gaps/score-card/create
            >
              Investiguer
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                navigate(`/gaps/score-card/create/${gap.id}`);
              }}
            >
              Lier scoreCard
            </DropdownMenuItem>
            <DropdownMenuItem>Repondre</DropdownMenuItem>
            <DropdownMenuItem>Modifier</DropdownMenuItem>
            <DropdownMenuItem>Supprimer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
