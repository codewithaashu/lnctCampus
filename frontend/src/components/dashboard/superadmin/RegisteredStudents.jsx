import { Card, CardContent } from "@/components/ui/card";
import RegisteredStudentsTableColumns from "@/shareable/RegisteredStudentsTableColumns";
import TableComponent from "@/shareable/TableComponent";
import React, { useState } from "react";

const RegisteredStudents = () => {
  const [value, setValue] = useState("");
  const colDefs = [
    { headerName: "Enroll No.", field: "enrollNo" },
    { headerName: "Name", field: "name" },
    { headerName: "Email", field: "email" },
    { headerName: "Contact No.", field: "contactNo" },
    { headerName: "Program", field: "program" },
    { headerName: "Department", field: "department" },
    { headerName: "Status", field: "status" },
  ];
  const rowData = [
    {
      enrollNo: "LNCBTAI11037",
      name: "Divya Kumari",
      email: "divyakr67@gmail.com",
      contactNo: "8779856321",
      program: "B.Tech",
      department: "LNCT CSE",
      status: "Shortlisted",
    },
    {
      enrollNo: "LNCDMCA11035",
      name: "Ashish Ranjan",
      email: "ashya2616@gmail.com",
      contactNo: "7371986179",
      program: "MCA",
      department: "LNCT MCA",
      status: "Shortlisted",
    },
    {
      enrollNo: "LNCDBCA21052",
      name: "Bhumi Singh",
      email: "bhumi896@gmail.com",
      contactNo: "8271595016",
      program: "BCA",
      department: "BCA AIML",
      status: "Shortlisted",
    },
    {
      enrollNo: "012RCSE11038",
      name: "Rohan Kumar",
      email: "rohankt67@gmail.com",
      contactNo: "6261220344",
      program: "B.Tech",
      department: "LNCTE CSE",
      status: "Shortlisted",
    },
  ];
  return (
    <>
      <Card className="w-11/12">
        {/* Heading */}
        <div>
          <h1 className="p-2 rounded-t-sm bg-muted text-lg  font-semibold px-5">
            Registered Students
          </h1>
        </div>
        <CardContent className="pt-6">
          <TableComponent
            data={rowData}
            columns={RegisteredStudentsTableColumns}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default RegisteredStudents;
