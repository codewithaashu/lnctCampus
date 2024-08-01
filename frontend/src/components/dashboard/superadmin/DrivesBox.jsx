import { Card, CardContent } from "@/components/ui/card";
import { driveSortCriteria } from "@/db/sortBt";
import SelectComponent from "@/shareable/SelectComponent";
import React, { useState } from "react";
import DriveCard from "./DriveCard";
import SearchInput from "@/shareable/SearchInput";
import { Separator } from "@/components/ui/separator";

const DrivesBox = () => {
  const [form, setForm] = useState({ sortBy: "" });
  const [value, setValue] = useState("");
  return (
    <>
      <Card className="w-full">
        {/* Heading */}
        <div>
          <h1 className="p-3 text-xl font-semibold px-5">All Drives</h1>
          <Separator />
        </div>
        <CardContent className="pt-6">
          {/* Search and Sort By Box */}
          <div className="flex justify-between">
            <SearchInput
              placeholder={"Search for Company, Course"}
              className={"max-w-sm"}
              value={value}
              setValue={setValue}
            />
            <SelectComponent
              placeholder={"Sort By"}
              label={"Sort By"}
              items={driveSortCriteria}
              triggerWidth={"w-[140px]"}
              field={"sortBy"}
              form={form}
              setForm={setForm}
            />
          </div>
          {/* Drive Container */}
          <div className="grid grid-cols-3 gap-5 gap-y-8 pt-8">
            <DriveCard />
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
