import { Button } from "@/components/ui/button";
import DateComponent from "@/shareable/DateComponent";
import InputComponent from "@/shareable/InputComponent";
import RichTextEditor from "@/shareable/RichTextEditor";
import React from "react";

const JobDetailsForm = ({
  setFormStage,
  formStage,
  jobDetails,
  setJobDetails,
}) => {
  const handleSave = () => {
    console.log(jobDetails);
    setFormStage(formStage + 1);
  };
  return (
    <>
      <div className="flex flex-col gap-6 justify-self-end">
        <div className="grid grid-cols-2 gap-x-5 gap-y-4">
          <InputComponent
            placeholder={"Enter Company name"}
            label={"Company Name"}
            type={"text"}
            field={"companyName"}
            form={jobDetails}
            setForm={setJobDetails}
          />
          <InputComponent
            placeholder={"Enter working location. e.g. Bengaluru or Remote"}
            label={"Job Location"}
            type={"text"}
            field={"location"}
            form={jobDetails}
            setForm={setJobDetails}
          />
          <InputComponent
            placeholder={"Enter job profile or position or role"}
            label={"Job Profile"}
            type={"text"}
            field={"jobProfile"}
            form={jobDetails}
            setForm={setJobDetails}
          />
          <InputComponent
            placeholder={"Enter package. e.g. 5LPA or Not disclosed"}
            label={"Package (CTC)"}
            type={"text"}
            field={"package"}
            form={jobDetails}
            setForm={setJobDetails}
          />
          {/* Job Description */}
          <RichTextEditor
            label={"Job Description"}
            field={"jobDescription"}
            form={jobDetails}
            setForm={setJobDetails}
          />
          <DateComponent
            placeholder={"Date of Drive"}
            label={"Date of Drive"}
            field={"driveDate"}
            form={jobDetails}
            setForm={setJobDetails}
          />
          <DateComponent
            placeholder={"Last Date of Application"}
            label={"Last Date of Application"}
            field={"lastDateOfApplication"}
            form={jobDetails}
            setForm={setJobDetails}
          />
        </div>
        <div className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSave}>Save and Proceed</Button>
        </div>
      </div>
    </>
  );
};

export default JobDetailsForm;
