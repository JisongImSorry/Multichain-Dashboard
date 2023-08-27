import React from "react";
import { useGetMembersQuery } from "@services/members";
import { MemberTable } from "@widgets/tables";

export function Members() {
  const { data: members } = useGetMembersQuery();

  return <MemberTable dataSetType="all" members={members || []} />;
}
