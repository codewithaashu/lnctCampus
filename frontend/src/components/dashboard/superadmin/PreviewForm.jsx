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
      <div className="flex flex-col gap-2">
        {Object.keys(previewData)?.map((curr, index) => (
          <div key={index}>
            <h1 className="text-base font-semibold">{curr}</h1>
            {previewData?.[curr]?.map((curr, index) => (
              <div
                className="grid grid-cols-3 items-center my-1 justify-center"
                key={index}
              >
                <h1 className="text-sm col-span-1">{curr.label}:</h1>
                <p className="text-[15px] text-muted-foreground  col-span-2">
                  {(curr.startsWith ? curr.startsWith : "") +
                    " " +
                    driveFormData[curr.value] +
                    " " +
                    (curr.endsWith ? curr.endsWith : "")}
                </p>
              </div>
            ))}
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
