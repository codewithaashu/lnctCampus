import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import StudentDetailsBox from "./StudentDetailsBox";
import { Separator } from "@/components/ui/separator";

const StudentDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card className="w-full">
        {/* Heading */}
        <div className="p-3 flex gap-3 items-center text-xl  font-semibold px-5">
          <ArrowLeft
            className="w-6 h-6 object-cover rounded-full cursor-pointer border-[1px] p-1 shadow-sm"
            onClick={() => navigate(-1)}
          />
          <h1>Student Details</h1>
        </div>
        <Separator />
        <CardContent className="pt-5">
          <StudentDetailsBox />
        </CardContent>
      </Card>
    </>
  );
};

export default StudentDetails;
