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
import SelectLabelComponent from "@/shareable/SelectLabelComponent";
import { courses } from "@/db/courses";
import ImageUploadComponent from "@/shareable/ImageUploadComponent";
import { gender } from "@/db/gender";
const TPOAddDialog = ({ open, setOpen, editable = false, form }) => {
  const [TPOForm, setTPOForm] = useState(form);
  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogContent className="w-[425px] md:w-[720px] overflow-y-auto max-h-screen max-w-full no-scrollbar">
        <DialogHeader>
          <DialogTitle>{editable ? "Edit TPO" : "Add TPO"}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="col-span-2 justify-self-center">
            <ImageUploadComponent
              field={"image"}
              form={TPOForm}
              setForm={setTPOForm}
            />
          </div>
          <InputComponent
            field={"firstName"}
            form={TPOForm}
            label={"First name"}
            placeholder={"Enter first name"}
            type={"text"}
            setForm={setTPOForm}
          />
          <InputComponent
            field={"lastName"}
            form={TPOForm}
            label={"Last name"}
            placeholder={"Enter last name"}
            type={"text"}
            setForm={setTPOForm}
          />
          <DateComponent
            field={"dob"}
            form={TPOForm}
            setForm={setTPOForm}
            label={"Date of Birth"}
            placeholder={"Enter date of birth"}
          />
          <InputComponent
            field={"email"}
            form={TPOForm}
            label={"Email ID"}
            placeholder={"Enter email address "}
            type={"email"}
            setForm={setTPOForm}
          />
          <InputComponent
            field={"contactNo"}
            form={TPOForm}
            label={"Contact Number"}
            placeholder={"Enter phone number "}
            type={"tel"}
            setForm={setTPOForm}
          />
          <InputComponent
            field={"whatsappNo"}
            form={TPOForm}
            label={"Whatsapp Number"}
            placeholder={"Enter whatsapp number "}
            type={"tel"}
            setForm={setTPOForm}
          />
          <InputComponent
            field={"currentAddress"}
            form={TPOForm}
            setForm={setTPOForm}
            label={"Current Address"}
            placeholder={"Enter local or current address"}
          />
          <InputComponent
            field={"permanentAddress"}
            form={TPOForm}
            setForm={setTPOForm}
            label={"Permanent Address"}
            placeholder={"Enter permanent address"}
          />
          <SelectLabelComponent
            field={"gender"}
            form={TPOForm}
            setForm={setTPOForm}
            placeholder={"Select Gender"}
            label={"Gender"}
            title={"Gender"}
            triggerWidth={"w-full"}
            items={gender}
          />
          <SelectLabelComponent
            field={"department"}
            form={TPOForm}
            setForm={setTPOForm}
            placeholder={"Select Department"}
            label={"Department"}
            title={"Department"}
            triggerWidth={"w-full"}
            items={courses}
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

export default TPOAddDialog;
