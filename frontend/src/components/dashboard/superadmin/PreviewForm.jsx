import { Button } from "@/components/ui/button";
import { previewData } from "@/db/previewData";
import React, { useEffect, useState } from "react";

const PreviewForm = ({
  setFormStage,
  formStage,
  jobDetails,
  eligibilityDetails,
}) => {
  const [driveFormData, setDriveFormData] = useState({});
  useEffect(() => {
    const courses = eligibilityDetails.courses.map((curr, index) => curr.value);
    const updateEligibilityDetails = {
      ...eligibilityDetails,
      courses,
    };
    setDriveFormData({ ...jobDetails, ...updateEligibilityDetails });
  }, []);
  const handleSubmit = () => {};
  return (
    <div className="flex flex-col gap-5 justify-between h-full">
      <div className="grid grid-cols-2 gap-5">
        {Object.keys(previewData)?.map((curr, index) => (
          <div
            key={index}
            className={`${
              curr === "Job Details" ? "col-span-2" : "col-span-1"
            } flex flex-col gap-[6px]`}
          >
            <h1 className="text-[17px] font-semibold">{curr}</h1>
            <div className="flex flex-col gap-1 px-1">
              {previewData?.[curr]?.map((curr, index) => (
                <div className="grid grid-cols-2 gap-4" key={index}>
                  <h1 className="text-sm col-span-1 font-medium">
                    {curr.label}
                  </h1>
                  <p className="text-sm col-span-1 font-medium text-wrap">
                    <span className="pr-2">:</span>{" "}
                    {(curr.startsWith ? curr.startsWith : "") +
                      " " +
                      driveFormData[curr.value] +
                      " " +
                      (curr.endsWith ? curr.endsWith : "")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <h1></h1>
      </div>
      <div className="flex justify-between justify-self-end">
        <Button variant="outline" onClick={() => setFormStage(formStage - 1)}>
          Back
        </Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default PreviewForm;
