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
const CoordinatorAddDialog = ({ open, setOpen }) => {
  const [CoordinatorForm, setCoordinatorForm] = useState({
    image: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    contactNo: "",
    whatsappNo: "",
    currentAddress: "",
    permanentAddress: "",
    gender: "",
    department: "",
  });
  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogContent className="w-[425px] md:w-[720px] overflow-y-auto max-h-screen max-w-full no-scrollbar">
        <DialogHeader>
          <DialogTitle>Add Coordinator</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="col-span-2 justify-self-center">
            <ImageUploadComponent
              field={"image"}
              form={CoordinatorForm}
              setForm={setCoordinatorForm}
            />
          </div>
          <InputComponent
            field={"firstName"}
            form={CoordinatorForm}
            label={"First name"}
            placeholder={"Enter first name"}
            type={"text"}
            setForm={setCoordinatorForm}
          />
          <InputComponent
            field={"lastName"}
            form={CoordinatorForm}
            label={"Last name"}
            placeholder={"Enter last name"}
            type={"text"}
            setForm={setCoordinatorForm}
          />
          <DateComponent
            field={"dob"}
            form={CoordinatorForm}
            setForm={setCoordinatorForm}
            label={"Date of Birth"}
            placeholder={"Enter date of birth"}
          />
          <InputComponent
            field={"email"}
            form={CoordinatorForm}
            label={"Email ID"}
            placeholder={"Enter email address "}
            type={"email"}
            setForm={setCoordinatorForm}
          />
          <InputComponent
            field={"contactNo"}
            form={CoordinatorForm}
            label={"Contact Number"}
            placeholder={"Enter phone number "}
            type={"tel"}
            setForm={setCoordinatorForm}
          />
          <InputComponent
            field={"whatsappNo"}
            form={CoordinatorForm}
            label={"Whatsapp Number"}
            placeholder={"Enter whatsapp number "}
            type={"tel"}
            setForm={setCoordinatorForm}
          />
          <InputComponent
            field={"currentAddress"}
            form={CoordinatorForm}
            setForm={setCoordinatorForm}
            label={"Current Address"}
            placeholder={"Enter local or current address"}
          />
          <InputComponent
            field={"permanentAddress"}
            form={CoordinatorForm}
            setForm={setCoordinatorForm}
            label={"Permanent Address"}
            placeholder={"Enter permanent address"}
          />
          <SelectLabelComponent
            field={"gender"}
            form={CoordinatorForm}
            setForm={setCoordinatorForm}
            placeholder={"Select Gender"}
            label={"Gender"}
            title={"Gender"}
            triggerWidth={"w-full"}
            items={gender}
          />
          <SelectLabelComponent
            field={"department"}
            form={CoordinatorForm}
            setForm={setCoordinatorForm}
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

export default CoordinatorAddDialog;
