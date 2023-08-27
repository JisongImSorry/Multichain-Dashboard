import {
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/dist/query";
import { RootState } from "@store";
import { logout } from "@features/auth/authSlice";
// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_SERVER_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).sessionStorage.auth.token;
    if (token != null) {
      headers.set("onjeon-admin-token", token);
    }
    return headers;
  },
});

const customBaseQuery: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }
  return result;
};

export default customBaseQuery;
