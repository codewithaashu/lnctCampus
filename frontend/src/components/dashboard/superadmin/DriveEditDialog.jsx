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
import DateComponent from "@/shareable/DateComponent";
import RichTextEditor from "@/shareable/RichTextEditor";
const DriveEditDialog = ({ open, setOpen, form }) => {
  const [driveForm, setDriveForm] = useState(form);
  const handleSubmit = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open}>
      <DialogContent className="w-[425px] md:w-[720px] overflow-y-auto max-h-screen max-w-full no-scrollbar">
        <DialogHeader>
          <DialogTitle>Edit Drive</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <InputComponent
            placeholder={"Enter Company name"}
            label={"Company Name"}
            type={"text"}
            field={"companyName"}
            form={driveForm}
            setForm={setDriveForm}
          />
          <InputComponent
            placeholder={"Enter working location. e.g. Bengaluru or Remote"}
            label={"Job Location"}
            type={"text"}
            field={"location"}
            form={driveForm}
            setForm={setDriveForm}
          />
          <InputComponent
            placeholder={"Enter job profile or position or role"}
            label={"Job Profile"}
            type={"text"}
            field={"jobProfile"}
            form={driveForm}
            setForm={setDriveForm}
          />
          <InputComponent
            placeholder={"Enter package. e.g. 5LPA or Not disclosed"}
            label={"Package (CTC)"}
            type={"text"}
            field={"package"}
            form={driveForm}
            setForm={setDriveForm}
          />
          {/* Job Description */}
          <RichTextEditor
            label={"Job Description"}
            field={"jobDescription"}
            form={driveForm}
            setForm={setDriveForm}
          />
          <DateComponent
            placeholder={"Date of Drive"}
            label={"Date of Drive"}
            field={"driveDate"}
            form={driveForm}
            setForm={setDriveForm}
          />
          <DateComponent
            placeholder={"Last Date of Application"}
            label={"Last Date of Application"}
            field={"lastDateOfApplication"}
            form={driveForm}
            setForm={setDriveForm}
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
  );
};

export default DriveEditDialog;
