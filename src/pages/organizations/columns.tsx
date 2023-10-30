"use client";
import React from "react";
import { ColumnDef } from "@tanstack/table-core";
import { IOrganization } from "@/types/stateSchema/organization";

export const columnsListOrganizations: ColumnDef<IOrganization>[] = [
  {
    accessorKey: "name",
    header: "NOMS",
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }: any) => {
      const org: any = row.original;
      return <div className="">{`${org.phone}`}</div>;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }: any) => {
      const org: any = row.original;
      return <div className="">{`${org.email}`}</div>;
    },
  },
  // {
  //   accessorKey: "ACTIONS",
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const payment: any = row.original;
  //     return <div onClick={() => console.log(payment)}></div>;
  //   },
  // },
];
