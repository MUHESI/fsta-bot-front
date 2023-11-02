"use client";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/table-core";
import { ITypePersonnel } from "@/types/stateSchema/typePersonnel";
import DialogCustom from "@/components/core/DialogCustom";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { styles } from "../gaps/columns";
import CreateTypePersonnel from "../createTypePersonnel";

export const columnstypePersonnels: ColumnDef<ITypePersonnel>[] = [
  {
    accessorKey: "name",
    header: "NOMS",
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
      <div className="">
        {new Date(row.getValue("created_at")).toLocaleString()}
      </div>
    ),
  },

  {
    accessorKey: "ACTIONS",
    id: "actions",
    cell: ({ row }) => {
      const typePerso: ITypePersonnel = row.original;
      const [closeDiaolg, setCloseDialog] = useState(0);

      return (
        <div className="flex gap-1">
          <DialogCustom
            openDilog={closeDiaolg}
            mainTitle="Modification du type de personnel"
            width="sm"
            mainBtnOptions={{
              icon: <AiFillEdit />,
              useIcon: true,
            }}
          >
            <CreateTypePersonnel
              itemToUpdate={typePerso}
              setCloseDialog={setCloseDialog}
            />
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
