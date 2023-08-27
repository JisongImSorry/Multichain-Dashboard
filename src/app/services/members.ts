import api from "./api";

const prefix = "members/";

export const memberApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetMembers: build.query<TResGetMembers, TReqGetMembers>({
      query: () => prefix,
    }),
    GetAs1Members: build.query<TResGetAs1Members, TReqGetAs1Members>({
      query: () => prefix + "as1",
    }),
    GetAs2Members: build.query<TResGetAs2Members, TReqGetAs2Members>({
      query: () => prefix + "as2",
    }),
    FindMember: build.query<TResFindMember, TReqFindMember>({
      query: ({ name, phone, uniqueId, page }) =>
        prefix +
        `search?${uniqueId ? "id=" + uniqueId + "&" : ""}${
          name ? "name=" + name + "&" : ""
        }${phone ? "phone=" + phone : ""}${"&page=" + (page ? page : "0")}`,
    }),
  }),
});

export const {
  useGetMembersQuery,
  useGetAs1MembersQuery,
  useGetAs2MembersQuery,
  useLazyFindMemberQuery,
} = memberApi;
