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
import { NavLink } from "react-router-dom";
import DialogCustom from "@/components/core/DialogCustom";
import ShowPermissions from "../showPermissions";

export const columnsListUsers: ColumnDef<IUser>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }: { row: { [key: string]: any } }) => (
      <NavLink
        to={`/users/profile/${row.getValue("id")}`}
        className={`cursor-pointer font-normal`}
      >
        {row.id}
      </NavLink>
    ),
  },
  {
    accessorKey: "full_name",
    header: "NOMS",
    cell: ({ row }: { row: { [key: string]: any } }) => (
      <NavLink
        to={`/users/profile/${row.getValue("id")}`}
        className={`cursor-pointer font-normal`}
      >
        {row.getValue("full_name")}
      </NavLink>
    ),
  },
  {
    accessorKey: "organization",
    header: "ORGANISATION",
    cell: ({ row }: { row: { [key: string]: any } }) => {
      const user: any = row.original;
      const {
        affectation_p: { organisation },
      } = user;

      return <div>{organisation?.name} </div>;
    },
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
    accessorKey: "permissions",
    header: "PERMISSIONS",
    cell: ({ row }: any) => {
      return (
        <div>
          <DialogCustom
            btnText="Voir"
            mainTitle="Affectations du l'utilisateur"
            width="sm"
          >
            <ShowPermissions currentUser={row.original} />
          </DialogCustom>
        </div>
      );
    },
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
