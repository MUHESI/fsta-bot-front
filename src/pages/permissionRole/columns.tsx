"use client";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/table-core";
import { NavLink } from "react-router-dom";
import { IRole } from "@/types/stateSchema/permissionRole";
import DialogCustom from "@/components/core/DialogCustom";
import CreateRole from "../createRole";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { styles } from "../gaps/columns";

export const columnsListRoles: ColumnDef<IRole>[] = [
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
    accessorKey: "name",
    header: "NOMS",
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
    cell: ({ row }) => {
      const role: IRole = row.original;
      const [closeDiaolg, setCloseDialog] = useState(0);

      return (
        <div className="flex gap-1">
          <DialogCustom
            openDilog={closeDiaolg}
            mainTitle="Modification d'un role"
            width="sm"
            mainBtnOptions={{
              icon: <AiFillEdit />,
              useIcon: true,
            }}
          >
            <CreateRole itemToUpdate={role} setCloseDialog={setCloseDialog} />
          </DialogCustom>
          <span className={`${styles.DropdownMenuItemClass} text-red-400`}>
            <span>
              <AiTwotoneDelete />
            </span>
          </span>
        </div>
      );
    },
  },
];
