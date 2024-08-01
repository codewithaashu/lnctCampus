import React from "react";
import StudentDetailsBoxHeader from "./StudentDetailsBoxHeader";
import { studentDetails } from "@/db/studentDetails";

const StudentDetailsBox = () => {
  return (
    <>
      <div className="flex flex-col gap-8 px-5">
        <StudentDetailsBoxHeader />
        <div className="grid grid-cols-2 gap-4">
          {/* 1st Column */}
          <div className="col-span-1 flex flex-col gap-5">
            {/* Peronal Details */}
            <div className="flex flex-col gap-2">
              <h1 className="text-base font-semibold text-sky-700">
                Personal Details
              </h1>
              <div className="px-1">
                {studentDetails?.personalDetails?.map((curr, index) => {
                  return (
                    <div
                      className="grid grid-cols-2 text-card-foreground font-medium"
                      key={index}
                    >
                      <h1 className="text-sm font-medium">{curr.label}</h1>
                      <p>
                        :{" "}
                        <span className="px-2 text-sm font-medium text-wrap">
                          {curr[curr.access]}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Educational Details */}
          </div>
          {/* 2nd Column */}
          <div className="flex flex-col gap-5">
            {/* Current Semester Information */}
            <div className="flex flex-col gap-3">
              <h1 className="text-base font-semibold text-sky-700">
                Current Course Information
              </h1>
              <table className="w-full border-collapse rounded-lg border-[1px] mx-1">
                <thead>
                  <tr>
                    <th className="p-2 border-[1px] text-center bg-muted font-semibold text-[15px]">
                      Semester
                    </th>
                    <th className="p-2 border-[1px] text-center bg-muted font-semibold text-[15px]">
                      Backlogs
                    </th>
                    <th className="p-2 border-[1px] text-center bg-muted font-semibold text-[15px]">
                      CGPA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {studentDetails?.currentCourse?.map((curr, index) => {
                    return (
                      <tr key={index}>
                        <td className="p-2 border-[1px] text-center text-sm text-card-foreground">
                          {curr.semester}
                        </td>
                        <td className="p-2 border-[1px] text-center text-sm text-card-foreground">
                          {curr.backlogs === 0 ? "N/A" : curr.backlogs}
                        </td>
                        <td className="p-2 border-[1px] text-center text-sm text-card-foreground">
                          {curr.CGPA}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-2">
              <h1 className="text-base font-semibold text-sky-700">Skills</h1>
              <div className="flex flex-wrap gap-5 gap-y-3 mx-1">
                {studentDetails?.skills?.map((curr, index) => {
                  return (
                    <div
                      key={index}
                      className="text-sm text-muted-foreground rounded-full h-7 px-2 border-[1.5px]"
                    >
                      {curr}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-base font-semibold text-sky-700">
            Education Details
          </h1>
          <table className="w-full border-collapse rounded-lg mx-1">
            <thead>
              <tr>
                <th className="p-3 border-[1px] text-center bg-muted font-semibold text-[15px]">
                  Degree
                </th>
                <th className="p-3 border-[1px] text-center bg-muted font-semibold text-[15px]">
                  Stream
                </th>
                <th className="p-3 border-[1px] text-center bg-muted font-semibold text-[15px]">
                  Institute
                </th>
                <th className="p-3 border-[1px] text-center bg-muted font-semibold text-[15px]">
                  Passing Year
                </th>
                <th className="p-3 border-[1px] text-center bg-muted font-semibold text-[15px]">
                  Board/University
                </th>
                <th className="p-3 border-[1px] text-center bg-muted font-semibold text-[15px]">
                  Percentage/CGPA
                </th>
              </tr>
            </thead>
            <tbody>
              {studentDetails?.educationDetails?.map((curr, index) => {
                return (
                  <tr key={index}>
                    <td className="p-3 border-[1px] text-center text-sm text-card-foreground">
                      {curr.degree}
                    </td>
                    <td className="p-3 border-[1px] text-center text-sm text-card-foreground">
                      {curr.stream}
                    </td>
                    <td className="p-3 border-[1px] text-center text-sm text-card-foreground">
                      {curr.institute}
                    </td>
                    <td className="p-3 border-[1px] text-center text-sm text-card-foreground">
                      {curr.passingYear}
                    </td>
                    <td className="p-3 border-[1px] text-center text-sm text-card-foreground">
                      {curr.board}
                    </td>
                    <td className="p-3 border-[1px] text-center text-sm text-card-foreground">
                      {curr.percentage}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StudentDetailsBox;
