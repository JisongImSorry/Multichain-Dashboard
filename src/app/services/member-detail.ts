import api from "./api";

const prefix = "/detail/";

export const memberDetailApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetUserInfo: build.query<TResGetUserInfo, TReqGetUserInfo>({
      query: ({ id }) => prefix + id + "/user-basic-info",
    }),
    GetUserInstruction: build.query<
      TResGetUserInstruction,
      TReqGetUserInstruction
    >({
      query: ({ id }) => prefix + id + "/instruction",
    }),
    GetUserExporting: build.query<TResGetUserExporting, TReqGetUserExporting>({
      query: ({ id }) => prefix + id + "/exporting",
    }),
    GetServiceManagement: build.query<
      TResGetServiceManagement,
      TReqGetServiceManagement
    >({
      query: ({ id }) => prefix + id + "/service-management",
    }),
    SetMaterial: build.mutation<TResSetMaterial, TReqSetMaterial>({
      query: ({ id, ...body }) => ({
        url: prefix + id + "/service-management/material-delivery",
        method: "POST",
        body,
      }),
    }),
    SetExporting: build.mutation<TResSetExporting, TReqSetExporting>({
      query: ({ id, ...body }) => ({
        url: prefix + id + "/service-management/exporting-delivery",
        method: "POST",
        body,
      }),
    }),
    SetAs1Notifying: build.mutation<TResSetAs1Notifying, TReqSetAs1Notifying>({
      query: ({ id, ...body }) => ({
        url: prefix + id + "/service-management/as1/notifying",
        method: "POST",
        body,
      }),
    }),
    SetAs1Dementia: build.mutation<TResSetAs1Dementia, TReqSetAs1Dementia>({
      query: ({ id, ...body }) => ({
        url: prefix + id + "/service-management/as1/dementia",
        method: "POST",
        body,
      }),
    }),
    UploadAs1DementiaPaper: build.mutation<
      TResUploadAs1DementiaPaper,
      TReqUploadAs1DementiaPaper
    >({
      query: ({ id, ...body }) => {
        const formData = new FormData();
        formData.append("paper", body.paper);
        return {
          url: prefix + id + "/service-management/as1/dementia/paper",
          method: "POST",
          body: formData,
        };
      },
    }),
    SetAs1Exporting: build.mutation<TResSetAs1Exporting, TReqSetAs1Exporting>({
      query: ({ id, ...body }) => ({
        url: prefix + id + "/service-management/as1/dementia-delivery",
        method: "POST",
        body,
      }),
    }),
    SetAs2: build.mutation<TResSetAs2, TReqSetAs2>({
      query: ({ id, ...body }) => ({
        url: prefix + id + "/service-management/as2",
        method: "POST",
        body,
      }),
    }),
    SetNotarizing: build.mutation<TResSetNotarizing, TReqSetNotarizing>({
      query: ({ id, ...body }) => ({
        url: prefix + id + "/service-management/as2/notarizing",
        method: "POST",
        body,
      }),
    }),
    ListMemo: build.query<TResListMemo, TReqListMemo>({
      query: ({ id, type }) => ({
        url: prefix + id + "/memo",
        params: { type },
      }),
    }),
    CreateMemo: build.mutation<TResCreateMemo, TReqCreateMemo>({
      query: ({ id, ...body }) => ({
        url: prefix + id + "/memo",
        method: "POST",
        body,
      }),
    }),
    UpdateMemo: build.mutation<TResUpdateMemo, TReqUpdateMemo>({
      query: ({ id, memoId, ...body }) => ({
        url: prefix + id + "/memo/" + memoId,
        method: "PUT",
        body,
      }),
    }),
    DeleteMemo: build.mutation<TResDeleteMemo, TReqDeleteMemo>({
      query: ({ id, memoId }) => ({
        url: prefix + id + "/memo/" + memoId,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useLazyGetUserInfoQuery,
  useGetUserInstructionQuery,
  useLazyGetUserInstructionQuery,
  useGetUserExportingQuery,
  useLazyGetUserExportingQuery,
  useGetServiceManagementQuery,
  useLazyGetServiceManagementQuery,
  useSetMaterialMutation,
  useSetExportingMutation,
  useSetAs1NotifyingMutation,
  useSetAs1DementiaMutation,
  useSetAs1ExportingMutation,
  useUploadAs1DementiaPaperMutation,
  useSetAs2Mutation,
  useSetNotarizingMutation,
  useListMemoQuery,
  useLazyListMemoQuery,
  useCreateMemoMutation,
  useUpdateMemoMutation,
  useDeleteMemoMutation,
} = memberDetailApi;
