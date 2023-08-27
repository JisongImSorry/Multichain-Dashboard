import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  useMaterialTailwindController,
  setOpenSidenav,
} from "@context/uxctrl/MaterialTailwindContext";
import { colors } from "@material-tailwind/react/types/generic";
import { TableCellsIcon } from "@heroicons/react/24/solid";

interface IRouteItemProps {
  name: string;
  icon: React.ReactNode;
  path: string;
}

function RouteItem({ name, icon, path }: IRouteItemProps) {
  const { controller } = useMaterialTailwindController();

  return (
    <li key={name}>
      <NavLink to={path}>
        {({ isActive }) => (
          <Button
            variant={isActive ? "gradient" : "text"}
            color={
              isActive
                ? (controller.sidenavColor as colors)
                : controller.sidenavType === "dark"
                ? "white"
                : "blue-gray"
            }
            className="flex items-center gap-4 px-4 capitalize"
            fullWidth
          >
            <>
              {icon}
              <Typography color="inherit" className="font-medium capitalize">
                {name}
              </Typography>
            </>
          </Button>
        )}
      </NavLink>
    </li>
  );
}

interface IProps {
  brandImg?: string;
  brandName?: string;
  page?: string;
  setPage?: any;
}

export function Sidenav({
  brandImg = "/img/logo-ct.png",
  brandName = "Material Tailwind React",
  page,
  setPage,
}: IProps) {
  const { controller, dispatch } = useMaterialTailwindController();
  const { sidenavType, openSidenav } = controller;
  const _sidenavTypes: { [key in typeof sidenavType]: string } = {
    dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",
  };

  return (
    <aside
      className={`${_sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
    >
      <div
        className={`relative border-b ${
          sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"
        }`}
      >
        <Link to="/" className="flex items-center gap-4 py-6 px-8">
          <Typography
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
          >
            {brandName}
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
      </div>
      <div className="m-4">
        <ul className="mb-4 flex flex-col gap-1">
          <li className="mx-3.5 mt-4 mb-2">
            <Typography
              variant="small"
              color={sidenavType === "dark" ? "white" : "blue-gray"}
              className="font-black uppercase opacity-75"
            >
              NFT
            </Typography>
          </li>
          <Button
            onClick={() => {
              setPage("assets");
            }}
            variant={"gradient"}
            color={
              true
                ? (controller.sidenavColor as colors)
                : controller.sidenavType === "dark"
                ? "white"
                : "blue-gray"
            }
            className="flex items-center gap-4 px-4 capitalize"
            fullWidth
          >
            <>
              <TableCellsIcon className="w-5 h-5 text-inherit" />
              <Typography color="inherit" className="font-medium capitalize">
                {"Assets"}
              </Typography>
            </>
          </Button>
          <Button
            onClick={() => {
              setPage("tracker");
            }}
            variant={"gradient"}
            color={
              true
                ? (controller.sidenavColor as colors)
                : controller.sidenavType === "dark"
                ? "white"
                : "blue-gray"
            }
            className="flex items-center gap-4 px-4 capitalize"
            fullWidth
          >
            <>
              <TableCellsIcon className="w-5 h-5 text-inherit" />
              <Typography color="inherit" className="font-medium capitalize">
                {"Tracker"}
              </Typography>
            </>
          </Button>
          <Button
            onClick={() => {
              setPage("bridge");
            }}
            variant={"gradient"}
            color={
              true
                ? (controller.sidenavColor as colors)
                : controller.sidenavType === "dark"
                ? "white"
                : "blue-gray"
            }
            className="flex items-center gap-4 px-4 capitalize"
            fullWidth
          >
            <>
              <TableCellsIcon className="w-5 h-5 text-inherit" />
              <Typography color="inherit" className="font-medium capitalize">
                {"Statistics"}
              </Typography>
            </>
          </Button>
        </ul>
      </div>
    </aside>
  );
}

export default Sidenav;
