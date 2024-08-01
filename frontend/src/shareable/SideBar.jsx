import React from "react";
import Logo from "../assets/logo.svg";
import { superAdminMenus } from "@/db/superAdminMenus";
import { Link, useHref } from "react-router-dom";
const SideBar = () => {
  const currentPath = useHref();
  const bgColor = (path) => {
    if (path === "/" && currentPath === "/") {
      return "bg-primary text-white";
    } else if (currentPath.includes(path) && path !== "/") {
      return "bg-primary text-white";
    }
    return "text-muted-foreground bg-background";
  };
  const hoverColor = (path) => {
    if (path === "/" && currentPath === "/") {
      return "hover:text-white";
    } else if (currentPath.includes(path) && path !== "/") {
      return "hover:text-white";
    }
    return "hover:text-card-foreground";
  };

  return (
    <>
      <div className="flex flex-col shadow-md h-screen bg-background px-5 gap-3  w-[210px] rounded-b-md fixed top-0 left-0 z-20">
        {/* Logo */}
        <div className="h-14 border-b-[1px] border-muted flex items-center">
          <img src={Logo} className="h-8" />
        </div>
        {/* Menu */}
        <div className="flex flex-col gap-[10px]">
          {superAdminMenus.map((curr, index) => (
            <Link
              className={`flex gap-2  text-[15px] cursor-pointer ${hoverColor(
                curr.path
              )} ${bgColor(curr.path)}  items-center p-2 rounded-md`}
              key={index}
              to={curr.path}
            >
              <curr.icon className="w-5 h-[18px]" />
              <p className="font-semibold text-base">{curr.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
