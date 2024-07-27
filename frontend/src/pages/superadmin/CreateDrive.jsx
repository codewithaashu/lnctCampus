import EligibilityDetailsForm from "@/components/dashboard/superadmin/EligibilityDetailsForm";
import JobDetailsForm from "@/components/dashboard/superadmin/JobDetailsForm";
import PreviewForm from "@/components/dashboard/superadmin/PreviewForm";
import Track from "@/components/dashboard/superadmin/Track";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";

const CreateDrive = () => {
  const [formStage, setFormStage] = useState(1);
  const [jobDetails, setJobDetails] = useState({
    companyName: "",
    location: "",
    jobProfile: "",
    package: "",
    jobDescription: "",
    driveDate: "",
    lastDateOfApplication: "",
  });
  const [eligibilityDetails, setEligibilityDetails] = useState({
    percent10th: "",
    percent12th: "",
    batch: "",
    gap: "",
    cgpa: "",
    courses: "",
    backlogs: "",
  });
  {
    /* Set the form according to their stage */
  }
  const showForm = (formStage) => {
    if (formStage === 1) {
      return (
        <Card className="h-fit">
          <h1 className="p-2 rounded-t-sm bg-primary text-lg text-white font-semibold px-5">
            Job Details
          </h1>
          <CardContent className="pt-6">
            <JobDetailsForm
              setFormStage={setFormStage}
              formStage={formStage}
              jobDetails={jobDetails}
              setJobDetails={setJobDetails}
            />
          </CardContent>
        </Card>
      );
    } else if (formStage === 2) {
      return (
        <Card className="h-fit">
          {/* Heading */}
          <h1 className="p-2 rounded-t-sm bg-primary text-lg text-white font-semibold px-5">
            Eligibility
          </h1>
          <CardContent className="pt-6">
            {/* Form */}
            <EligibilityDetailsForm
              setFormStage={setFormStage}
              formStage={formStage}
              eligibilityDetails={eligibilityDetails}
              setEligibilityDetails={setEligibilityDetails}
            />
          </CardContent>
        </Card>
      );
    } else if (formStage === 3) {
      return (
        <Card className="h-fit">
          {/* Heading */}
          <h1 className="p-2 rounded-t-sm bg-primary text-lg text-white font-semibold px-5">
            Preview
          </h1>
          <CardContent className="h-fit pt-6">
            {/* Form */}
            <PreviewForm
              setFormStage={setFormStage}
              formStage={formStage}
              driveFormData={{ ...jobDetails, ...eligibilityDetails }}
            />
          </CardContent>
        </Card>
      );
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5 w-full h-full">
        <Track setFormStage={setFormStage} formStage={formStage} />
        {showForm(formStage)}
      </div>
    </>
  );
};

export default CreateDrive;
