"use client";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/table-core";
import { IMaladie } from "../../types/stateSchema/maladie";
import DialogCustom from "@/components/core/DialogCustom";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { styles } from "../gaps/columns";
import CreateMaladie from "../createMaladie";

export const columnsListMaladies: ColumnDef<IMaladie>[] = [
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
      const maladie: IMaladie = row.original;
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
            <CreateMaladie
              itemToUpdate={maladie}
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
