import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisteredStudentsTableColumns from "@/utils/RegisteredStudentsTableColumns";
import { Separator } from "@/components/ui/separator";
import { registeredStudents } from "@/db/registeredStudents";
import RegisterStudentTable from "../superadmin/RegisterStudentTable";

const EventResponsess = () => {
  const navigate = useNavigate();

  const [columnVisibility, setColumnVisibility] = useState({
    email: false,
    contactNo: false,
    resume: false,
    cgpa: false,
  });

  const handleBackBtn = () => {
    navigate(-1);
  };

  return (
    <>
      <Card className="w-full">
        {/* Heading */}
        <div className="p-3 flex gap-3 items-center  text-xl  font-semibold px-5">
          <ArrowLeft
            className="w-6 h-6 object-cover  rounded-full cursor-pointer border-[1px] p-1 shadow-sm"
            onClick={handleBackBtn}
          />
          <h1>Responses</h1>
        </div>
        <Separator />
        <CardContent className="pt-5">
          <RegisterStudentTable
            data={registeredStudents}
            columns={RegisteredStudentsTableColumns}
            columnVisibility={columnVisibility}
            setColumnVisibility={setColumnVisibility}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default EventResponsess;
