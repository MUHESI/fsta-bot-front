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
import { IUser } from "@/types/stateSchema/user";
import { ColumnDef } from "@tanstack/table-core";

export const columnsListUsers: ColumnDef<IUser>[] = [
  {
    accessorKey: "full_name",
    header: "NOMS",
  },
  {
    accessorKey: "organization",
    header: "ORGANISATION",
    cell: ({ row }: { row: { [key: string]: any } }) => (
      <div>{row.getValue("organization")?.name} </div>
    ),
  },

  {
    accessorKey: "phone",
    header: "PHONE",
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }: { row: { [key: string]: any } }) => (
      <div className="font-semibold text-green-600">
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "ACTIONS",
    id: "actions",
    // cell: ({ row }) => {
    cell: () => {
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
                // console.clear();
                // console.log("payment", payment);
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
