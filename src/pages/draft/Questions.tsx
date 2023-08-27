import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { useListQuestionsQuery } from "@services/question";

import IndeterminateCheckbox from "@components/table/IndeterminateCheckbox";
import DataTable from "@components/table/DataTable";
import TablePagination from "@components/table/TablePagination";

type TQuestionColumnData = {
  id: number;
  group: string;
  subGroup: string;
  step: number;
};

type TQuestionColumn = TQuestionColumnData & {
  onClick: (row: TQuestionColumnData) => void;
};

export function Questions() {
  const navigate = useNavigate();
  const { data: questions } = useListQuestionsQuery();

  const columns = useMemo<ColumnDef<TQuestionColumn>[]>(
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
        accessorKey: "group",
        cell: (info) => info.getValue(),
        header: () => <span>대분류</span>,
      },
      {
        accessorKey: "subGroup",
        cell: (info) => info.getValue(),
        header: () => <span>소분류</span>,
      },
      {
        accessorKey: "step",
        cell: (info) => "Q" + (info.getValue<number>() + 1),
        header: () => <span>번호</span>,
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

  const handleClickDetail = (row: TQuestionColumnData) => {
    navigate(`detail?id=${row.id}`);
  };

  const data = useMemo<TQuestionColumn[]>(() => {
    if (questions == null) return [];
    else {
      return questions
        .map((q) => ({
          id: q.id,
          group_id: q.SurveyGroupClass.id,
          group: q.SurveyGroupClass.display,
          subGroup: q.SurveySubGroupClass.display,
          step: q.step,
          onClick: handleClickDetail,
        }))
        .sort((a, b) => {
          if (a.group_id > b.group_id) return 1;
          if (a.group_id < b.group_id) return -1;
          if (a.step > b.step) return 1;
          if (a.step < b.step) return -1;
          return 0;
        });
    }
  }, [questions]);

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
