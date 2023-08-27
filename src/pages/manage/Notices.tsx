import React, { useMemo, useState } from "react";
import {
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useListNoticesQuery } from "@services/notice";
import { useNavigate } from "react-router-dom";
import IndeterminateCheckbox from "@components/table/IndeterminateCheckbox";
import DataTable from "@components/table/DataTable";
import TablePagination from "@components/table/TablePagination";

// ref: https://tanstack.com/table/v8/docs/examples/react/basic
// ref: https://tanstack.com/table/v8/docs/examples/react/row-selection

type TNoticeColumnData = {
  id: number;
  title: string;
  priority: number;
  written_by: string;
};

type TNoticeColumn = TNoticeColumnData & {
  onClick: (row: TNoticeColumnData) => void;
};

export function Notices() {
  const navigate = useNavigate();
  const { data: notices } = useListNoticesQuery();

  const columns = useMemo<ColumnDef<TNoticeColumn>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="flex justify-center px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        accessorKey: "title",
        cell: (info) => info.getValue(),
        header: () => <span>제목</span>,
      },
      {
        accessorKey: "priority",
        cell: (info) => info.getValue(),
        header: () => <span>우선순위</span>,
      },
      {
        accessorKey: "written_by",
        cell: (info) => info.getValue(),
        header: () => <span>작성자</span>,
      },
      {
        accessorKey: "onClick",
        cell: (info) => (
          <button
            className="flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
            onClick={() => {
              const { onClick, ...rest } = info.row.original;
              onClick(rest);
            }}
          >
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
        ),
        header: () => <></>,
      },
    ],
    []
  );

  const handleClickDetail = (row: TNoticeColumnData) => {
    navigate(`detail?id=${row.id}`);
  };

  const data = useMemo<TNoticeColumn[]>(() => {
    if (!notices) return [];
    else
      return notices.map((notice) => ({
        id: notice.id,
        title: notice.title,
        priority: notice.priority,
        written_by: notice.written_by,
        onClick: handleClickDetail,
      }));
  }, [notices]);

  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="mt-12 mb-8">
      <DataTable table={table} />
      <TablePagination table={table} />
    </div>
  );
}
