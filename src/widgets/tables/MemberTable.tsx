import React, { useMemo } from "react";
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import TablePagination from "@components/table/TablePagination";
import DataTable from "@components/table/DataTable";

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type TResGetMember = ArrayElement<TResGetMembers>;
type TResGetAs1Member = ArrayElement<TResGetAs1Members>;
type TResGetAs2Member = ArrayElement<TResGetAs2Members>;

type TMemberRowData = TResGetMember | TResGetAs1Member | TResGetAs2Member;

type TMemberRow = TMemberRowData & {
  onClick: (row: TMemberRowData) => void;
};

interface IMemberTable {
  dataSetType: "all" | "as1" | "as2";
  members: TMemberRowData[];
}

export function MemberTable({ dataSetType, members }: IMemberTable) {
  const booleanToMarker = (value: boolean | null) => {
    switch (value) {
      case true:
        return "o";
      case false:
        return "x";
      default:
        return "-";
    }
  };

  const allMembersSpecCols = useMemo<ColumnDef<TMemberRow>[]>(
    () => [
      {
        id: "materialDeliveryRequested",
        accessorFn: (row: TResGetMember) => {
          const { material } = row.management;
          const payment = row.payment;
          if (material == null) return null;
          if (!payment) return null;
          if (material.requested === false) return false;
          else {
            return true;
          }
        },
        cell: (info) => booleanToMarker(info.getValue<boolean | null>()),
        header: () => <span>실물전달신청여부</span>,
      },
      {
        id: "materialDeliveryCompletion",
        accessorFn: (row: TResGetMember) => {
          const { material } = row.management;
          if (material == null) return null;
          if (material.requested === false) return null;
          else {
            if (material.delivery == null) return false;
            else return true;
          }
        },
        cell: (info) => booleanToMarker(info.getValue<boolean | null>()),
        header: () => <span>실물전달발송처리여부</span>,
      },
      {
        id: "exportingDate",
        accessorFn: (row: TResGetMember) => {
          const { exporting } = row.management;
          if (exporting == null) return null;
          if (exporting.requested === false) return null;
          else {
            return exporting.date || null;
          }
        },
        cell: (info) => {
          const value = info.getValue();
          if (value == null) return "-";
          else return value;
        },
        header: () => <span>고객지정내뜻전달서발송일자</span>,
      },
      {
        id: "exportingDeliveryCompletion",
        accessorFn: (row: TResGetMember) => {
          const { exporting } = row.management;
          if (exporting == null) return null;
          if (exporting.requested === false) return null;
          else {
            if (exporting.delivery == null) return false;
            else return true;
          }
        },
        cell: (info) => booleanToMarker(info.getValue<boolean | null>()),
        header: () => <span>내뜻전달서발송처리여부</span>,
      },
      {
        id: "as1Requested",
        accessorFn: (row: TResGetMember) => {
          const { subscribing } = row.management;
          return subscribing.dementia;
        },
        cell: (info) => booleanToMarker(info.getValue<boolean | null>()),
        header: () => <span>부가서비스1신청여부</span>,
      },
      {
        id: "as2Requested",
        accessorFn: (row: TResGetMember) => {
          const { subscribing } = row.management;
          return subscribing.legal;
        },
        cell: (info) => booleanToMarker(info.getValue<boolean | null>()),
        header: () => <span>부가서비스2신청여부</span>,
      },
      {
        id: "as2Contacted",
        accessorFn: (row) => {
          // const { as2 } = row.management;
          // return as2.contacted
          return null;
        },
        cell: (info) => {
          return "구현 중";
        },
        header: () => <span>법적효력유선안내진행여부</span>,
      },
    ],
    []
  );

  const as1MembersSpecCols = useMemo<ColumnDef<TMemberRow>[]>(
    () => [
      {
        id: "ageCurrent",
        accessorFn: (row: TResGetAs1Member) => {
          const { age } = row.management;
          return age.current;
        },
        cell: (info) => info.getValue(),
        header: () => <span>현재나이(만)</span>,
      },
      {
        id: "ageFulfilled",
        accessorFn: (row: TResGetAs1Member) => {
          const { age } = row.management;
          return age.fulfilled;
        },
        cell: (info) => booleanToMarker(info.getValue<boolean | null>()),
        header: () => <span>만65세도달여부</span>,
      },
      {
        id: "notified",
        accessorFn: (row: TResGetAs1Member) => {
          const { notified } = row.management;
          return notified;
        },
        cell: (info) => booleanToMarker(info.getValue<boolean | null>()),
        header: () => <span>보호자통지여부</span>,
      },
      {
        id: "dementiaDiagnosed",
        accessorFn: (row: TResGetAs1Member) => {
          const { dementia } = row.management;
          return dementia.proved;
        },
        cell: (info) => booleanToMarker(info.getValue<boolean | null>()),
        header: () => <span>치매진단확인여부</span>,
      },
      {
        id: "exportingDeliveryCompletion",
        accessorFn: (row: TResGetAs1Member) => {
          const { exporting } = row.management;
          if (exporting == null) return null;
          if (exporting.requested === false) return null;
          else {
            if (exporting.delivery == null) return false;
            else return true;
          }
        },
        cell: (info) => booleanToMarker(info.getValue<boolean | null>()),
        header: () => <span>내뜻전달서발송처리여부</span>,
      },
      {
        id: "exportingDeliveryCompletionDate",
        accessorFn: (row: TResGetAs1Member) => {
          const { exporting } = row.management;
          if (exporting == null) return null;
          if (exporting.requested === false) return null;
          else {
            if (exporting.delivery == null) return null;
            else return exporting.delivery.sendAt;
          }
        },
        cell: (info) => {
          const value = info.getValue();
          if (value == null) return "-";
          else return value;
        },
        header: () => <span>내뜻전달서발송처리일</span>,
      },
    ],
    []
  );

  const as2MembersSpecCols = useMemo<ColumnDef<TMemberRow>[]>(
    () => [
      {
        id: "contacted",
        accessorFn: (row: TResGetAs2Member) => {
          const { contacted } = row.management;
          return contacted;
        },
        cell: (info) => booleanToMarker(info.getValue<boolean | null>()),
        header: () => <span>법적효력유선안내진행여부</span>,
      },
      {
        id: "visited",
        accessorFn: (row: TResGetAs2Member) => {
          const { visited } = row.management;
          return visited;
        },
        cell: (info) => booleanToMarker(info.getValue<boolean | null>()),
        header: () => <span>법적효력내방진행여부</span>,
      },
      {
        id: "legalService",
        accessorFn: (row: TResGetAs2Member) => {
          const { notarizing } = row.management;
          return notarizing?.service.category || null;
        },
        cell: (info) => info.getValue() || "-",
        header: () => <span>세부서비스</span>,
      },
      {
        id: "notaryOffice",
        accessorFn: (row: TResGetAs2Member) => {
          const { notarizing } = row.management;
          return notarizing?.office || null;
        },
        cell: (info) => info.getValue() || "-",
        header: () => <span>공증사무소</span>,
      },
      {
        id: "notary",
        accessorFn: (row: TResGetAs2Member) => {
          const { notarizing } = row.management;
          return notarizing?.notary || null;
        },
        cell: (info) => info.getValue() || "-",
        header: () => <span>공증인</span>,
      },
      {
        id: "notarizingDate",
        accessorFn: (row: TResGetAs2Member) => {
          const { notarizing } = row.management;
          return notarizing?.date || null;
        },
        cell: (info) => info.getValue() || "-",
        header: () => <span>공증일시</span>,
      },
    ],
    []
  );

  const columns = useMemo<ColumnDef<TMemberRow>[]>(
    () => [
      {
        id: "index",
        cell: (info) => info.row.index + 1,
        header: () => <span>순서</span>,
      },
      {
        accessorKey: "id",
        cell: (info) => info.getValue(),
        header: () => <span>고유번호</span>,
      },
      {
        accessorKey: "name",
        cell: (info) => info.getValue(),
        header: () => <span>성명</span>,
      },
      {
        accessorKey: "createdAt",
        cell: (info) => info.getValue(),
        header: () => <span>가입시기</span>,
      },
      {
        accessorKey: "phone",
        cell: (info) => info.getValue(),
        header: () => <span>휴대폰번호</span>,
      },
      {
        accessorKey: "birthday",
        cell: (info) => info.getValue(),
        header: () => <span>생년월일</span>,
      },
      {
        accessorKey: "address",
        cell: (info) => info.getValue(),
        header: () => <span>주소</span>,
      },
      {
        id: "coupon",
        accessorFn: (row) => {
          if (row.usedCoupon == null) return "-";
          return `${row.usedCoupon.code}}(${row.usedCoupon.name})`;
        },
        cell: (info) => info.getValue(),
        header: () => <span>할인쿠폰사용</span>,
      },
      {
        id: "paymentAmount",
        accessorFn: (row) => {
          if (row.payment == null) return "-";
          return row.payment.amount;
        },
        cell: (info) => info.getValue(),
        header: () => <span>총결제금액</span>,
      },
      {
        id: "paymentDate",
        accessorFn: (row) => {
          if (row.payment == null) return "-";
          return row.payment.createdAt;
        },
        cell: (info) => info.getValue(),
        header: () => <span>결제일자</span>,
      },
      ...(dataSetType === "all" ? allMembersSpecCols : []),
      ...(dataSetType === "as1" ? as1MembersSpecCols : []),
      ...(dataSetType === "as2" ? as2MembersSpecCols : []),
      {
        id: "memo",
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
        header: () => <span>메모</span>,
      },
    ],
    [dataSetType]
  );

  const handleClickDetail = (row: TMemberRowData) => {
    // navigate(`detail?id=${row.id}`);
  };

  const data = useMemo<TMemberRow[]>(() => {
    return members.map((member) => ({
      ...member,
      onClick: handleClickDetail,
    }));
  }, [members]);

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <TablePagination table={table}>
      <DataTable table={table} />
    </TablePagination>
  );
}
