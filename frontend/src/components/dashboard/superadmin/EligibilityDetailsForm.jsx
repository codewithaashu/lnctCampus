import { Button } from "@/components/ui/button";
import { courses } from "@/db/courses";
import eligibileBatch from "@/db/eligibileBatch";
import { gapCriteria } from "@/db/gapCriteria";
import { percentageCriteria } from "@/db/percentageCriteria";
import InputComponent from "@/shareable/InputComponent";
import MultipleSelectComponent from "@/shareable/MultipleSelectComponent";
import SelectLabelComponent from "@/shareable/SelectLabelComponent";
import React from "react";

const EligibilityDetailsForm = ({
  setFormStage,
  formStage,
  eligibilityDetails,
  setEligibilityDetails,
}) => {
  const handleSave = () => {
    setFormStage(formStage + 1);
  };
  return (
    <div className="flex flex-col gap-10 justify-self-end">
      <div className="grid grid-cols-2 gap-x-5 gap-y-4">
        <SelectLabelComponent
          title={"10th Percentage"}
          items={percentageCriteria}
          triggerWidth={"w-full"}
          placeholder={"Select percentage criteria"}
          label={"Percentage criteria"}
          field={"percent10th"}
          form={eligibilityDetails}
          setForm={setEligibilityDetails}
        />
        <SelectLabelComponent
          title={"12th Percentage"}
          items={percentageCriteria}
          triggerWidth={"w-full"}
          placeholder={"Select percentage criteria"}
          label={"Percentage criteria"}
          field={"percent12th"}
          form={eligibilityDetails}
          setForm={setEligibilityDetails}
        />
        <SelectLabelComponent
          title={"Batch"}
          items={eligibileBatch}
          triggerWidth={"w-full"}
          placeholder={"Select eligible batch"}
          label={"Eligibile Batch"}
          field={"batch"}
          form={eligibilityDetails}
          setForm={setEligibilityDetails}
        />
        <InputComponent
          placeholder={"Enter minimum CGPA"}
          label={"Current Course CGPA"}
          type={"number"}
          field={"cgpa"}
          form={eligibilityDetails}
          setForm={setEligibilityDetails}
        />
        <SelectLabelComponent
          title={"Gap"}
          items={gapCriteria}
          triggerWidth={"w-full"}
          placeholder={"Select gap criteria"}
          label={"Gap criteria"}
          field={"gap"}
          form={eligibilityDetails}
          setForm={setEligibilityDetails}
        />
        <InputComponent
          placeholder={"Enter maximum backlogs"}
          label={"Backlogs"}
          type={"number"}
          field={"backlogs"}
          form={eligibilityDetails}
          setForm={setEligibilityDetails}
        />
        <MultipleSelectComponent
          label={"Course(s)"}
          items={courses}
          emptyPlaceholder={"No course found."}
          placeholder={"Select course(s)"}
          field={"courses"}
          form={eligibilityDetails}
          setForm={setEligibilityDetails}
        />
      </div>
      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setFormStage(formStage - 1)}>
          Back
        </Button>
        <Button onClick={handleSave}>Save and Proceed</Button>
      </div>
    </div>
  );
};

export default EligibilityDetailsForm;
