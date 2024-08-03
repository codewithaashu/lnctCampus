import React from "react";
import SideBar from "./shareable/SideBar";
import TopBar from "./shareable/TopBar";
import { Outlet } from "react-router-dom";

const App = ({ menus }) => {
  return (
    <>
      <div className="flex flex-row w-full min-h-screen relative">
        <SideBar menus={menus} />
        <div className="flex flex-col w-full">
          <TopBar />
          <div className="p-5 flex-1 bg-accent ml-[210px] mt-14 flex justify-center">
            <div className="w-11/12 py-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
