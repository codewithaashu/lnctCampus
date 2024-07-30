import { Outlet } from "react-router-dom";

const Drives = () => {
  return (
    <>
      <div className="w-full flex justify-center h-full">
        <Outlet />
      </div>
    </>
  );
};

export default Drives;
