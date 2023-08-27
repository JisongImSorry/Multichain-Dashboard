import React from "react";
import { useGetAs1MembersQuery } from "@services/members";
import { MemberTable } from "@widgets/tables";

export function As1Members() {
  const { data: members } = useGetAs1MembersQuery();
  return <MemberTable dataSetType="as1" members={members || []} />;
}
