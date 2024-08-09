import React from "react";
import { Outlet } from "react-router-dom";

const EventPage = () => {
  return (
    <div className="w-full flex justify-center h-full">
      <Outlet />
    </div>
  );
};

export default EventPage;
