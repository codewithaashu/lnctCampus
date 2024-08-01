import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterStudentTable from "./RegisterStudentTable";
import RegisteredStudentsTableColumns from "@/utils/RegisteredStudentsTableColumns";
import { Separator } from "@/components/ui/separator";

const RegisteredStudents = () => {
  const rowData = [
    {
      enrollNo: "LNCBTAI11037",
      name: "Divya Kumari",
      email: "divyakr67@gmail.com",
      contactNo: "8779856321",
      program: "B.Tech",
      department: "LNCT CSE",
      cgpa: 9.5,
      resume:
        "https://drive.google.com/file/d/1qjLlzgIiZM-p4HQFxh-2lVmUH5nfbdXb/view?usp=sharing",
      status: "Shortlisted",
    },
    {
      enrollNo: "LNCDMCA11035",
      name: "Ashish Ranjan",
      email: "ashya2616@gmail.com",
      contactNo: "7371986179",
      program: "MCA",
      department: "LNCT MCA",
      cgpa: 9.8,
      resume:
        "https://drive.google.com/file/d/1qjLlzgIiZM-p4HQFxh-2lVmUH5nfbdXb/view?usp=sharing",
      status: "Hired",
    },
    {
      enrollNo: "LNCDBCA21052",
      name: "Bhumi Singh",
      email: "bhumi896@gmail.com",
      contactNo: "8271595016",
      program: "BCA",
      department: "BCA AIML",
      cgpa: 8.3,
      resume:
        "https://drive.google.com/file/d/1qjLlzgIiZM-p4HQFxh-2lVmUH5nfbdXb/view?usp=sharing",
      status: "Rejected",
    },
    {
      enrollNo: "012RCSE11038",
      name: "Rohan Kumar",
      email: "rohankt67@gmail.com",
      contactNo: "6261220344",
      program: "B.Tech",
      department: "LNCTE CSE",
      cgpa: 8.8,
      resume:
        "https://drive.google.com/file/d/1qjLlzgIiZM-p4HQFxh-2lVmUH5nfbdXb/view?usp=sharing",
      status: "Pending",
    },
    {
      enrollNo: "LNCBTAI21037",
      name: "Shreya Singh",
      email: "neeva02singh@gmail.com",
      contactNo: "9978856542",
      program: "B.Tech",
      department: "LNCTU CSE",
      cgpa: 9.2,
      resume:
        "https://drive.google.com/file/d/1qjLlzgIiZM-p4HQFxh-2lVmUH5nfbdXb/view?usp=sharing",
      status: "Next Round",
    },
  ];

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
          <h1>Registered Students</h1>
        </div>
        <Separator />
        <CardContent className="pt-5">
          <RegisterStudentTable
            data={rowData}
            columns={RegisteredStudentsTableColumns}
            columnVisibility={columnVisibility}
            setColumnVisibility={setColumnVisibility}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default RegisteredStudents;
