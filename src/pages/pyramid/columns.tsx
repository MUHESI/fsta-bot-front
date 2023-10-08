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
import { IStructureHealth } from "@/types/stateSchema/StructureHealth";

export const columnsListHealthAreas: ColumnDef<IStructureHealth>[] = [
  {
    accessorKey: "name",
    header: "NOMS",
  },
  {
    accessorKey: "contact",
    header: "TELEPHONE",
  },
  {
    accessorKey: "created_at",
    header: "DATE CREATION",
    cell: ({ row }: any) => (
      <div className="">
        {new Date(row.getValue("created_at")).toLocaleString()}
      </div>
    ),
  },

  {
    accessorKey: "ACTIONS",
    id: "actions",
    cell: ({ row }) => {
      const payment: any = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                // navigator.clipboard.writeText(payment.id);
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
