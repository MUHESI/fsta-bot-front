import React from "react";
import { LastHeading } from "@/components/core/Heading";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/core/tableTemplate";
import { dataUsers } from "@/constants/constants";
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
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { TooltiCustom } from "@/components/ui/tooltip";

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "full_name",
    header: "NOMS",
  },
  {
    accessorKey: "organization",
    header: "ORGANISATION",
    cell: ({ row }: any) => <div>{row.getValue("organization")?.name} </div>,
  },
  // cell: ({ row }) =>  {
  //   const data = row.getValue("organization");
  //   return (
  //     <>
  //       {data.map((item: any) => (
  //         <span>
  //           {item.name} {item.id}
  //         </span>
  //       ))}
  //     </>
  //   );
  // },
  {
    accessorKey: "phone",
    header: "PHONE",
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }: any) => (
      <div className="font-semibold text-green-600">
        {row.getValue("status")}{" "}
      </div>
    ),
  },
  {
    accessorKey: "ACTIONS",
    id: "actions",
    cell: ({ row }) => {
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
export const classPag = `cursor-pointer rounded-full border bg-light-gray-100 hover:text-gray-600`;
function ListUsers() {
  return (
    <div>
      <div className="p-1 text-main-color-dark">
        <LastHeading title={"Users"} />
      </div>
      <div className="p-5">
        <DataTable columns={columns} data={dataUsers} />
        <div className="flex justify-end text-text-xl text-gray-400 gap-3">
          <TooltiCustom
            title="Previous"
            child={<MdNavigateBefore className={`${classPag}`} />}
          />
          <MdNavigateNext className={`${classPag}`} />
        </div>
      </div>
    </div>
  );
}

export default ListUsers;
