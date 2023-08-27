import api from "./api";

const prefix = "notices/";

export const noticeApi = api.injectEndpoints({
  endpoints: (build) => ({
    ListNotices: build.query<TResListNotices, TReqListNotices>({
      query: () => prefix,
    }),
    GetNotice: build.query<TResGetNotice, TReqGetNotice>({
      query: ({ id }) => prefix + id,
    }),
  }),
});

export const { useListNoticesQuery, useGetNoticeQuery } = noticeApi;
