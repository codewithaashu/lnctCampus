import DrivesBox from "@/components/dashboard/superadmin/DrivesBox";
import RegisteredStudents from "@/components/dashboard/superadmin/RegisteredStudents";
import React from "react";

const Drives = () => {
  return (
    <>
      <div className="w-full flex justify-center h-full">
        {/* <DrivesBox /> */}
        <RegisteredStudents />
      </div>
    </>
  );
};

export default Drives;
