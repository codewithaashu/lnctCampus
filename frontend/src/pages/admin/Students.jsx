import StudentTable from "@/components/dashboard/Admin/StudentTable";
import StudentTableColumns from "@/components/dashboard/Admin/StudentTableColumns";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { students } from "@/db/students";
import React, { useState } from "react";

const Students = () => {
  const [columnVisibility, setColumnVisibility] = useState({
    alternateNo: false,
    resume: false,
    cgpa: false,
    gender: false,
  });
  return (
    <>
      <Card className="w-full">
        {/* Heading */}
        <div className="p-3 flex gap-3 items-center  text-xl  font-semibold px-5">
          <h1>Students</h1>
        </div>
        <Separator />
        <CardContent className="pt-5">
          <StudentTable
            data={students}
            columns={StudentTableColumns}
            columnVisibility={columnVisibility}
            setColumnVisibility={setColumnVisibility}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default Students;
