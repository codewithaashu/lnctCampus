import CompanyDetailsForm from "@/components/dashboard/Admin/CompanyDetailsForm";
import JobDetailsForm from "@/components/dashboard/Admin/JobDetailsForm";
import PreviewDetailsForm from "@/components/dashboard/Admin/PreviewDetailsForm";
import Track from "@/components/dashboard/Admin/Track";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";

const CreateJobs = () => {
  const [formStage, setFormStage] = useState(1);
  const [jobDetails, setJobDetails] = useState({
    jobProfile: "",
    profileCategory: "",
    jobCategory: "",
    package: "",
    jobType: "",
    applyURL: "",
    jobLocations: [],
    skills: [],
    jobDescription: "",
  });
  const [companyDetails, setCompanyDetails] = useState({
    companyName: "",
    companyLocation: "",
    aboutCompany: "",
    companyLogo: "",
    companyWebsiteURL: "",
    companyLinkedinURL: "",
  });

  {
    /* Set the form according to their stage */
  }
  const showForm = (formStage) => {
    if (formStage === 1) {
      return (
        <Card className="h-fit">
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
          <CardContent className="pt-6">
            {/* Form */}
            <CompanyDetailsForm
              setFormStage={setFormStage}
              formStage={formStage}
              companyDetails={companyDetails}
              setCompanyDetails={setCompanyDetails}
            />
          </CardContent>
        </Card>
      );
    } else if (formStage === 3) {
      return (
        <Card className="h-fit">
          <CardContent className="h-fit pt-6">
            {/* Form */}
            <PreviewDetailsForm
              setFormStage={setFormStage}
              formStage={formStage}
              jobDetails={jobDetails}
              companyDetails={companyDetails}
            />
          </CardContent>
        </Card>
      );
    }
  };
  return (
    <>
      <div className="flex flex-col gap-5 w-full h-full">
        <Track formStage={formStage} />
        {showForm(formStage)}
      </div>
    </>
  );
};

export default CreateJobs;
