import { Button } from "@/components/ui/button";
import DateComponent from "@/shareable/DateComponent";
import ImageInputComponent from "@/shareable/ImageInputComponent";
import InputComponent from "@/shareable/InputComponent";
import RichTextEditor from "@/shareable/RichTextEditor";
import TextAreaComponent from "@/shareable/TextAreaComponent";
import React from "react";

const CompanyDetailsForm = ({
  setFormStage,
  formStage,
  companyDetails,
  setCompanyDetails,
}) => {
  const handleSave = () => {
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
            form={companyDetails}
            setForm={setCompanyDetails}
          />
          <InputComponent
            placeholder={"Enter company location"}
            label={"Company Location"}
            type={"text"}
            field={"companyLocation"}
            form={companyDetails}
            setForm={setCompanyDetails}
          />
          <InputComponent
            placeholder={"Type company linkedin URL here..."}
            label={"Company Linkedin URL"}
            type={"text"}
            field={"companyLinkedinURL"}
            form={companyDetails}
            setForm={setCompanyDetails}
          />
          <InputComponent
            placeholder={"Type company website URL here..."}
            label={"Company Website URL"}
            type={"text"}
            field={"companyWebsiteURL"}
            form={companyDetails}
            setForm={setCompanyDetails}
          />
          {/* Company Description */}
          <TextAreaComponent
            placeholder={"Write about the company in short..."}
            label={"About Company"}
            field={"jobDescription"}
            form={companyDetails}
            setForm={setCompanyDetails}
          />
          <ImageInputComponent
            placeholder={"Upload company logo"}
            field={"companyLogo"}
            form={companyDetails}
            setForm={setCompanyDetails}
          />
        </div>
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setFormStage(formStage - 1)}>
            Back
          </Button>
          <Button onClick={handleSave}>Save and Proceed</Button>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailsForm;
