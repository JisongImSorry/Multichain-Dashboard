import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "@services/auth";

interface IAuthState {
  token: string | null;
}

const initialState: IAuthState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.AdminLogin.matchFulfilled,
      (state, action) => {
        state.token = action.payload.token;
      }
    );
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
