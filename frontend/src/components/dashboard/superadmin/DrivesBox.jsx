import { Card, CardContent } from "@/components/ui/card";
import { driveSortCriteria } from "@/db/sortBt";
import SelectComponent from "@/shareable/SelectComponent";
import React, { useState } from "react";
import DriveCard from "./DriveCard";

const DrivesBox = () => {
  const [form, setForm] = useState({ sortBy: "" });
  const [value, setValue] = useState("");
  return (
    <>
      <Card className="w-11/12">
        {/* Heading */}
        <div>
          <h1 className="p-2 rounded-t-sm bg-muted text-lg  font-semibold px-5">
            All Drives
          </h1>
        </div>
        <CardContent className="pt-6">
          {/* Search and Sort By Box */}
          <div className="flex justify-between">
            <SearchInput
              placeholder={"Search for Company, Course"}
              className={"w-[280px]"}
              value={value}
              setValue={setValue}
            />
            <SelectComponent
              placeholder={"Sort By"}
              label={"Sort By"}
              items={driveSortCriteria}
              triggerWidth={"w-[140px] h-fit"}
              field={"sortBy"}
              form={form}
              setForm={setForm}
            />
          </div>
          {/* Drive Container */}
          <div className="grid grid-cols-3 gap-5 gap-y-8 pt-10">
            <DriveCard />
            <DriveCard />
            <DriveCard />
            <DriveCard />
            <DriveCard />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default DrivesBox;
