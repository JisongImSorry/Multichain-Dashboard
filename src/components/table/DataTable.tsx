import React from "react";
import { Table, flexRender } from "@tanstack/react-table";

export default function DataTable<T>({ table }: { table: Table<T> }) {
  return (
    <table className="grow border-black border-separate border rounded-lg w-full">
      <thead className="">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              // header size 150 is the default size
              return (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="border-black border-l first:border-l-0 px-4 py-1"
                  style={{
                    width:
                      header.getSize() !== 150 ? header.getSize() : undefined,
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="border-black border-l border-t first:border-l-0 px-2 py-1 text-sm"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
