import React from "react";
import Logo from "../assets/logo.svg";
import { superAdminMenus } from "@/db/superAdminMenus";
import { Link, useResolvedPath } from "react-router-dom";
const SideBar = () => {
  const path = useResolvedPath().pathname;
  return (
    <>
      <div className="flex flex-col shadow-md min-h-screen px-5 gap-3 border-2 w-[240px] rounded-r-md">
        {/* Logo */}
        <div className="h-14 border-b-[1px] border-muted flex items-center">
          <img src={Logo} className="h-8" />
        </div>
        {/* Menu */}
        <div className="flex flex-col gap-[10px]">
          {superAdminMenus.map((curr, index) => (
            <Link
              className={`flex gap-2 text-slate-500 text-[15px] cursor-pointer ${
                path === curr.path ? "hover:text-white" : "hover:text-slate-700"
              } ${
                path === curr.path && "bg-primary text-white"
              }  items-center p-2 rounded-md`}
              key={index}
              to={curr.path}
            >
              <curr.icon className="w-5 h-[18px]" />
              <p className="font-semibold text-base">{curr.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
