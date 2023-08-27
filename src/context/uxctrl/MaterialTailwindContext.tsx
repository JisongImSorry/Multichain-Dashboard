import React from "react";

interface IMaterialTailwindState {
  openSidenav: boolean;
  sidenavColor: string;
  sidenavType: string;
  transparentNavbar: boolean;
  fixedNavbar: boolean;
  openConfigurator: boolean;
}

type TMaterialTailwindAction =
  | { type: "OPEN_SIDENAV"; value: boolean }
  | { type: "SIDENAV_TYPE"; value: string }
  | { type: "SIDENAV_COLOR"; value: string }
  | { type: "TRANSPARENT_NAVBAR"; value: boolean }
  | { type: "FIXED_NAVBAR"; value: boolean }
  | { type: "OPEN_CONFIGURATOR"; value: boolean };

interface IMaterialTailwindContext {
  controller: IMaterialTailwindState;
  dispatch: React.Dispatch<TMaterialTailwindAction>;
}

export const MaterialTailwind = React.createContext<IMaterialTailwindContext>(
  {} as IMaterialTailwindContext
);
MaterialTailwind.displayName = "MaterialTailwindContext";

export function reducer(
  state: IMaterialTailwindState,
  action: TMaterialTailwindAction
) {
  switch (action.type) {
    case "OPEN_SIDENAV": {
      return { ...state, openSidenav: action.value };
    }
    case "SIDENAV_TYPE": {
      return { ...state, sidenavType: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    default: {
      return state;
    }
  }
}

export function MaterialTailwindControllerProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const initialState: IMaterialTailwindState = {
    openSidenav: false,
    sidenavColor: "blue",
    sidenavType: "dark",
    transparentNavbar: true,
    fixedNavbar: false,
    openConfigurator: false,
  };

  const [controller, dispatch] = React.useReducer(reducer, initialState);
  const value = React.useMemo(
    () => ({ controller, dispatch }),
    [controller, dispatch]
  );

  return (
    <MaterialTailwind.Provider value={value}>
      {children}
    </MaterialTailwind.Provider>
  );
}

export function useMaterialTailwindController() {
  const context = React.useContext(MaterialTailwind);

  if (!context) {
    throw new Error(
      "useMaterialTailwindController should be used inside the MaterialTailwindControllerProvider."
    );
  }

  return context;
}

export const setOpenSidenav = (
  dispatch: React.Dispatch<TMaterialTailwindAction>,
  value: boolean
) => dispatch({ type: "OPEN_SIDENAV", value });
export const setSidenavType = (
  dispatch: React.Dispatch<TMaterialTailwindAction>,
  value: string
) => dispatch({ type: "SIDENAV_TYPE", value });
export const setSidenavColor = (
  dispatch: React.Dispatch<TMaterialTailwindAction>,
  value: string
) => dispatch({ type: "SIDENAV_COLOR", value });
export const setTransparentNavbar = (
  dispatch: React.Dispatch<TMaterialTailwindAction>,
  value: boolean
) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
export const setFixedNavbar = (
  dispatch: React.Dispatch<TMaterialTailwindAction>,
  value: boolean
) => dispatch({ type: "FIXED_NAVBAR", value });
export const setOpenConfigurator = (
  dispatch: React.Dispatch<TMaterialTailwindAction>,
  value: boolean
) => dispatch({ type: "OPEN_CONFIGURATOR", value });
