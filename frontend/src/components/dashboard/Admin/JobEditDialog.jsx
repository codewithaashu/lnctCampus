import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import InputComponent from "@/shareable/InputComponent";
import SelectLabelComponent from "@/shareable/SelectLabelComponent";
import { RoleCategories } from "@/db/RoleCategories";
import MultipleSelectComponent from "@/shareable/MultipleSelectComponent";
import { jobLocations } from "@/db/jobLocations";
import RichTextEditor from "@/shareable/RichTextEditor";
import { Skills } from "@/db/Skills";

const JobEditDialog = ({ open, setOpen, form }) => {
  const [jobForm, setJobForm] = useState(form);
  const handleSubmit = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open}>
        <DialogContent className="w-[425px] md:w-[720px] overflow-y-auto max-h-screen max-w-full no-scrollbar">
          <DialogHeader>
            <DialogTitle>Edit Drive</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-x-5 gap-y-4">
            <InputComponent
              placeholder={"Enter job profile or position or role"}
              label={"Job Profile"}
              type={"text"}
              field={"jobProfile"}
              form={jobForm}
              setForm={setJobForm}
            />
            <SelectLabelComponent
              title={"Profile Category"}
              items={RoleCategories}
              triggerWidth={"w-full"}
              placeholder={"Select job profile or role category"}
              label={"Profile Category"}
              field={"profileCategory"}
              form={jobForm}
              setForm={setJobForm}
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
              form={jobForm}
              setForm={setJobForm}
            />
            <InputComponent
              placeholder={"Enter package or stipend"}
              label={"Package or Stipend"}
              type={"text"}
              field={"package"}
              form={jobForm}
              setForm={setJobForm}
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
              form={jobForm}
              setForm={setJobForm}
            />
            <InputComponent
              placeholder={"Type job post url here..."}
              label={"Apply URL"}
              type={"text"}
              field={"applyURL"}
              form={jobForm}
              setForm={setJobForm}
            />
            <MultipleSelectComponent
              label={"Job Location"}
              items={jobLocations}
              emptyPlaceholder={"No location found."}
              placeholder={"Select job location(s)"}
              field={"jobLocations"}
              form={jobForm}
              setForm={setJobForm}
              isDialog={true}
            />
            {/* Job Description */}
            <RichTextEditor
              label={"Job Description"}
              field={"jobDescription"}
              form={jobForm}
              setForm={setJobForm}
            />
            <MultipleSelectComponent
              label={"Skills"}
              items={Skills}
              emptyPlaceholder={"No skills found."}
              placeholder={"Select skill(s)"}
              field={"skills"}
              form={jobForm}
              setForm={setJobForm}
              isDialog={true}
            />
          </div>
          <DialogFooter className={"sm:justify-between"}>
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </DialogClose>
            <Button type="submit" onClick={handleSubmit}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JobEditDialog;
