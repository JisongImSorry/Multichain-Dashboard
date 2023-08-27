import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGetNoticeQuery } from "@services/notice";

export function NoticeDetail() {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const { data } = useGetNoticeQuery(
    {
      id: id || "null",
    },
    { skip: id == null }
  );

  const { title, written_by, description, createdAt } = data || {};

  return (
    <div className="mt-12 mb-8">
      <div className="text-2xl font-bold">{title}</div>
      <div className="flex">
        <div className="text-sm font-bold pr-2">작성자</div>
        {written_by}
      </div>
      <div className="flex">
        <div className="text-sm font-bold pr-2">작성일</div>
        {createdAt}
      </div>
      <div dangerouslySetInnerHTML={{ __html: description || "" }}></div>
    </div>
  );
}
