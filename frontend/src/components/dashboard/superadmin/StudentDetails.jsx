import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import StudentDetailsBox from "./StudentDetailsBox";

const StudentDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card className="w-11/12">
        {/* Heading */}
        <div className="p-2 flex gap-3 items-center rounded-t-sm bg-muted text-lg  font-semibold px-3">
          <ArrowLeft
            className="w-6 h-6 object-cover bg-muted rounded-full cursor-pointer border-[1px] p-1 shadow-sm"
            onClick={() => navigate(-1)}
          />
          <h1>Student Details</h1>
        </div>
        <CardContent className="pt-5">
          <StudentDetailsBox />
        </CardContent>
      </Card>
    </>
  );
};

export default StudentDetails;
