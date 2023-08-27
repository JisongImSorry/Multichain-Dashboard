import React, { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@store";

interface IAuthedContext {
  logined: boolean;
}

export const AuthedContext = createContext<IAuthedContext>(
  {} as IAuthedContext
);

export function AuthedContextProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.sessionStorage.auth.token);

  useEffect(() => {
    if (token == null) {
      navigate("/auth/sign-in");
    }
  }, [token]);

  return (
    <AuthedContext.Provider value={{ logined: token != null }}>
      {children}
    </AuthedContext.Provider>
  );
}

export function UnauthorizedContextProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.sessionStorage.auth.token);

  useEffect(() => {
    if (token != null) {
      navigate("/dashboard/home");
    }
  }, [token]);

  return (
    <AuthedContext.Provider value={{ logined: token != null }}>
      {children}
    </AuthedContext.Provider>
  );
}
