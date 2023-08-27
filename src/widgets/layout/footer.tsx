import React from "react";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

interface IProps {
  brandName?: string;
  brandLink?: string;
  routes?: { name: string; path: string }[];
}

export function Footer({
  brandName = "Creative Tim",
  brandLink = "https://www.creative-tim.com",
  routes = [
    { name: "Creative Tim", path: "https://www.creative-tim.com" },
    { name: "About Us", path: "https://www.creative-tim.com/presentation" },
    { name: "Blog", path: "https://www.creative-tim.com/blog" },
    { name: "License", path: "https://www.creative-tim.com/license" },
  ],
}: IProps) {
  const year = new Date().getFullYear();

  return <footer className="py-2"></footer>;
}

export default Footer;
