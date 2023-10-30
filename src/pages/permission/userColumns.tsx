"use client";
import React from "react";
import { IUser } from "@/types/stateSchema/user";
import { ColumnDef } from "@tanstack/table-core";
import { NavLink } from "react-router-dom";
import { HandlePermission } from "./usersAssignments";

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
  // {
  //   accessorKey: "organization",
  //   header: "ORGANISATION",
  //   cell: ({ row }: { row: { [key: string]: any } }) => {
  //     const user: any = row.original;
  //     const {
  //       affectation_p: { organisation },
  //     } = user;

  //     return <div>{organisation?.name} </div>;
  //   },
  // },

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
      const user: any = row.original;
      return (
        <div>
          {/* <span
            onClick={() => {
              console.clear();
              console.log("user", user.id);
            }}
          >
            logmuhesi
          </span> */}
          <HandlePermission item={user} />
        </div>
      );
    },
  },
];
