import api from "./api";

const baseUrl = import.meta.env.VITE_AUTH_SERVER_URL + "/auth/";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    AdminLogin: build.mutation<TResAuthAdminLogin, TReqAuthAdminLogin>({
      query: (body) => ({
        url: baseUrl + "login-admin",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAdminLoginMutation } = authApi;
