import React from "react";
import SideBar from "./shareable/SideBar";
import TopBar from "./shareable/TopBar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="flex flex-row">
        <SideBar />
        <div className="flex flex-col w-full">
          <TopBar />
          <div className="p-5 flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
