import React from "react";
import { Table } from "@tanstack/react-table";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

interface ITablePaginationProps<T> {
  table: Table<T>;
  children?: React.ReactNode | React.ReactNode[];
}

export default function TablePagination<T>({
  table,
  children,
}: ITablePaginationProps<T>) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <label>펼쳐보기</label>
        <select
          className="border p-1 rounded text-dark"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}개
            </option>
          ))}
        </select>
      </div>
      {children}
      <div className="flex items-center justify-center gap-2">
        <button
          className="border border-light rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronDoubleLeftIcon className="w-6 h-6" />
        </button>
        <button
          className="border border-light rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        <button className="border rounded p-1">
          <p className="w-6 h-6">1</p>
        </button>
        <button className="border rounded p-1">
          <p className="w-6 h-6">2</p>
        </button>

        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <ChevronDoubleRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
