import JobCard from "@/components/dashboard/Admin/JobCard";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { jobsSortCriteria } from "@/db/jobsSortCriteria";
import SearchInput from "@/shareable/SearchInput";
import SelectComponent from "@/shareable/SelectComponent";
import React, { useState } from "react";

const Jobs = () => {
  const [form, setForm] = useState({ sortBy: "" });
  const [value, setValue] = useState("");
  return (
    <>
      <Card className="w-full">
        {/* Heading */}
        <div>
          <h1 className="p-3 text-xl font-semibold px-5">All Jobs</h1>
          <Separator />
        </div>
        <CardContent className="pt-6">
          {/* Search and Sort By Box */}
          <div className="flex justify-between">
            <SearchInput
              placeholder={"Search the job by any field"}
              className={"max-w-sm"}
              value={value}
              setValue={setValue}
            />
            <SelectComponent
              placeholder={"Sort By"}
              label={"Sort By"}
              items={jobsSortCriteria}
              triggerWidth={"w-[140px]"}
              field={"sortBy"}
              form={form}
              setForm={setForm}
            />
          </div>
          {/* Drive Container */}
          <div className="grid grid-cols-3 gap-5 gap-y-8 pt-8">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Jobs;
