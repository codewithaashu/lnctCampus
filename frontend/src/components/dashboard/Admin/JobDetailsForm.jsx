import { Button } from "@/components/ui/button";
import { jobLocations } from "@/db/jobLocations";
import { RoleCategories } from "@/db/RoleCategories";
import { Skills } from "@/db/Skills";
import InputComponent from "@/shareable/InputComponent";
import MultipleSelectComponent from "@/shareable/MultipleSelectComponent";
import RichTextEditor from "@/shareable/RichTextEditor";
import SelectLabelComponent from "@/shareable/SelectLabelComponent";
import React from "react";

const JobDetailsForm = ({
  setFormStage,
  formStage,
  jobDetails,
  setJobDetails,
}) => {
  const handleSave = () => {
    setFormStage(formStage + 1);
  };
  return (
    <>
      <div className="flex flex-col gap-6 justify-self-end">
        <div className="grid grid-cols-2 gap-x-5 gap-y-4">
          <InputComponent
            placeholder={"Enter job profile or position or role"}
            label={"Job Profile"}
            type={"text"}
            field={"jobProfile"}
            form={jobDetails}
            setForm={setJobDetails}
          />
          <SelectLabelComponent
            title={"Profile Category"}
            items={RoleCategories}
            triggerWidth={"w-full"}
            placeholder={"Select job profile or role category"}
            label={"Profile Category"}
            field={"profileCategory"}
            form={jobDetails}
            setForm={setJobDetails}
          />
          <SelectLabelComponent
            title={"Job Category"}
            items={[
              { label: "Full Time Jobs", value: "Full Time Jobs" },
              { label: "Internship", value: "Internship" },
            ]}
            triggerWidth={"w-full"}
            placeholder={"Select job category"}
            label={"Job Category"}
            field={"jobCategory"}
            form={jobDetails}
            setForm={setJobDetails}
          />
          <InputComponent
            placeholder={"Enter package or stipend"}
            label={"Package or Stipend"}
            type={"text"}
            field={"package"}
            form={jobDetails}
            setForm={setJobDetails}
          />
          <SelectLabelComponent
            title={"Job Type"}
            items={[
              { label: "Hybrid", value: "Hybrid" },
              { label: "Work from Home", value: "Work from Home" },
              { label: "Work from Office", value: "Work from Office" },
            ]}
            triggerWidth={"w-full"}
            placeholder={"Select job type"}
            label={"Job Type"}
            field={"jobType"}
            form={jobDetails}
            setForm={setJobDetails}
          />
          <InputComponent
            placeholder={"Type job post url here..."}
            label={"Apply URL"}
            type={"text"}
            field={"applyURL"}
            form={jobDetails}
            setForm={setJobDetails}
          />
          <MultipleSelectComponent
            label={"Job Location"}
            items={jobLocations}
            emptyPlaceholder={"No location found."}
            placeholder={"Select job location(s)"}
            field={"jobLocations"}
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
          <MultipleSelectComponent
            label={"Skills"}
            items={Skills}
            emptyPlaceholder={"No skills found."}
            placeholder={"Select skill(s)"}
            field={"skills"}
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
