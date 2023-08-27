import React from "react";
import { useGetAs2MembersQuery } from "@services/members";
import { MemberTable } from "@widgets/tables";

export function As2Members() {
  const { data: members } = useGetAs2MembersQuery();
  return <MemberTable dataSetType="as2" members={members || []} />;
}
