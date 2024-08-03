import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { jobPreviewData } from "@/db/jobPreviewData";
import React, { useEffect, useState } from "react";
import JobDetailsCard from "./JobDetailsCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CompanyDetails from "./CompanyDetails";

const PreviewDetailsForm = ({
  setFormStage,
  formStage,
  jobDetails,
  companyDetails,
}) => {
  const [driveFormData, setDriveFormData] = useState({});
  useEffect(() => {
    const jobLocations = jobDetails.jobLocations.map((curr) => curr.value);
    const skills = jobDetails.skills.map((curr) => curr.value);
    const updateJobDetails = {
      ...companyDetails,
      jobLocations,
      skills,
    };
    setDriveFormData({ ...updateJobDetails, ...companyDetails });
  }, []);
  const handleSubmit = () => {};

  return (
    <>
      <CardContent className="flex flex-col gap-2 p-4 md:p-6 h-full">
        <JobDetailsCard />
        {/* Navigation */}
        <Tabs
          defaultValue="description"
          className="flex flex-col gap-0 w-full rounded-lg"
        >
          <TabsList className="flex flex-row gap-2 md:gap-3 justify-start w-fit  bg-transparent overflow-x-auto  h-fit px-0 md:px-4 py-2 rounded-full ">
            <TabsTrigger
              value="description"
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white w-fit bg-muted text-card-foreground font-semibold"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="company"
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white w-fit bg-muted text-card-foreground font-semibold"
            >
              Company
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description">
            <div className="px-2 md:px-5 py-3 w-full md:w-11/12 text-sm font-normal text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              aliquam culpa accusantium cumque optio beatae ipsum saepe fuga in
              facilis error ut velit amet mollitia exercitationem eaque tenetur?
              Vero accusamus odit amet magni id?
            </div>
          </TabsContent>
          <TabsContent value="company">
            <CompanyDetails />
          </TabsContent>
        </Tabs>
        <div className="flex justify-between pt-3">
          <Button variant="outline" onClick={() => setFormStage(formStage - 1)}>
            Back
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </CardContent>
    </>
  );
};

export default PreviewDetailsForm;
