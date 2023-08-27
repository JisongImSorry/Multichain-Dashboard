import { Routes, Route, Navigate } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@widgets/layout";
import routes from "@routes";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
} from "@context/uxctrl/MaterialTailwindContext";
import { AuthedContextProvider } from "@context/auth/AuthedContext";
import { Home, Profile, Tables, Notifications } from "@pages/dashboard";

export function Dashboard() {
  const { controller, dispatch } = useMaterialTailwindController();
  const { sidenavType } = controller;
  const [go, setGo] = useState(false);
  const [page, setPage] = useState("assets");

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        brandName="Multichain Dashboard"
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
        page={page}
        setPage={setPage}
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar go={go} setGo={setGo} />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        <Home go={go} page={page} />
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
