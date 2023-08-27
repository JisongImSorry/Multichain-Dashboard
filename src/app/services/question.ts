import api from "./api";

const prefix = "questions/";

export const questionApi = api.injectEndpoints({
  endpoints: (build) => ({
    ListQuestions: build.query<TResListQuestions, TReqListQuestions>({
      query: () => prefix,
    }),
    GetQuestion: build.query<TResGetQuestion, TReqGetQuestion>({
      query: ({ id }) => prefix + id,
    }),
  }),
});

export const { useListQuestionsQuery, useGetQuestionQuery } = questionApi;
