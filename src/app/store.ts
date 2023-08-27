// src/store.ts
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authReducer from "@features/auth/authSlice";

import sessionStorage from "redux-persist/lib/storage/session";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import api from "@services/api";

const sessionStorageReducers = persistReducer(
  {
    key: "root",
    storage: sessionStorage,
  },
  combineReducers({
    auth: authReducer,
  })
);

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [api.reducerPath]: api.reducer,
    sessionStorage: sessionStorageReducers,
  },
  // Add the generated middleware to the store's middleware list
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});
export const persist = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
