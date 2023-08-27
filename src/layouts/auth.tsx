import { Routes, Route, Navigate } from "react-router-dom";
import {
  // ChartPieIcon,
  // UserIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Navbar, Footer } from "@widgets/layout";
import routes from "@routes";
import { UnauthorizedContextProvider } from "@context/auth/AuthedContext";

export function Auth() {
  const navbarRoutes = [
    // {
    //   name: "dashboard",
    //   path: "/dashboard/home",
    //   icon: ChartPieIcon,
    // },
    // {
    //   name: "profile",
    //   path: "/dashboard/home",
    //   icon: UserIcon,
    // },
    {
      name: "sign up",
      path: "/auth/sign-up",
      icon: UserPlusIcon,
    },
    {
      name: "sign in",
      path: "/auth/sign-in",
      icon: ArrowRightOnRectangleIcon,
    },
  ];

  return (
    <UnauthorizedContextProvider>
      <div className="relative min-h-screen w-full">
        <div className="container relative z-40 mx-auto p-4">
          <Navbar routes={navbarRoutes} />
        </div>
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "auth" &&
              pages.map(({ path, element }) => (
                <Route path={path} element={element} />
              ))
          )}
          <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
        </Routes>
        <div className="container absolute bottom-8 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
          <Footer />
        </div>
      </div>
    </UnauthorizedContextProvider>
  );
}

Auth.displayName = "/src/layout/Auth.jsx";

export default Auth;
