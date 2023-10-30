import React, { useEffect, PropsWithChildren } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Input } from "../ui/input";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  // children: React.ReactNode;
  searchField: keyof TData;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchField,
  children,
}: PropsWithChildren<DataTableProps<TData, TValue>>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [searchField_, SetSearchField_] = React.useState<string>("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    getFilteredRowModel: getFilteredRowModel(),
  });

  useEffect(() => {
    SetSearchField_(searchField as string);
  }, []);

  return (
    <div>
      <div className="flex flex-wrap  gap-2 justify-between my-3 flex-col md:flex-row">
        <Input
          placeholder={`Rechercher par ${searchField_} ...`}
          value={
            (table.getColumn(searchField_)?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn(searchField_)?.setFilterValue(event.target.value)
          }
          className="md:max-w-sm rounded-md text-sm shrink grow "
        />
        {/* <div className="flex flex-wrap justify-center items-center  gap-2"> */}
        {children}
        {/* </div> */}
      </div>
      <div className="rounded-md border ">
        <Table>
          <TableHeader className="bg-gray-200 font-bold">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-gray-100"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export const styleTheme = {
  colors: {
    blueDark: "#2DAEC4",
    blueLight: " #253f9a",
    redLight: " #cb0000",

    grayLight: "gray",
    grayDark: " rgba(0, 0, 0, 0.05)",
    white: "white",
    colorTabHover: "#e6e6e6",
    grayColor: "gray",
    successDark: "#3bb077",
    errorDark: "#d95087",
    grisHover: "#F4F2FA",
  },
  borderColors: {
    mainCOlor: "rgba(0, 0, 0, 0.05)",
  },
};

/** 
 * 
 * @param {}
 * .widgetLgButton.Approved {
  background-color: #e5faf2;
  color: #3bb077;
}
.widgetLgButton.Declined {
  background-color: #fff0f1;
  color: #d95087;
}
.widgetLgButton.Pending {
  background-color: #ebf1fe;
  color: #2a7ade;
}
 */
