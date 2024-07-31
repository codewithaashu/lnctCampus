import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ImageUploadComponent from "@/shareable/ImageUploadComponent";
import DateComponent from "@/shareable/DateComponent";
import SelectLabelComponent from "@/shareable/SelectLabelComponent";
import InputComponent from "@/shareable/InputComponent";
import { gender } from "@/db/gender";
import { Button } from "@/components/ui/button";
const SuperAdminProfileEditDialog = ({ form, setOpen, open }) => {
  const [editForm, setEditForm] = useState(form);
  const handleSubmit = () => {
    console.log(editForm);
    setOpen(false);
  };
  return (
    <Dialog open={open}>
      <DialogContent className="w-[425px] md:w-[720px] overflow-y-auto max-h-screen max-w-full no-scrollbar">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="col-span-2 justify-self-center">
            <ImageUploadComponent
              field={"image"}
              form={editForm}
              setForm={setEditForm}
            />
          </div>
          <InputComponent
            field={"name"}
            form={editForm}
            setForm={setEditForm}
            label={"Name"}
            placeholder={"Enter name"}
            type={"text"}
          />
          <SelectLabelComponent
            field={"gender"}
            form={editForm}
            setForm={setEditForm}
            placeholder={"Select Gender"}
            label={"Gender"}
            title={"Gender"}
            triggerWidth={"w-full"}
            items={gender}
          />
          <DateComponent
            field={"dob"}
            form={editForm}
            setForm={setEditForm}
            label={"Date of Birth"}
            placeholder={"Enter date of birth"}
          />
          <InputComponent
            field={"email"}
            form={editForm}
            setForm={setEditForm}
            label={"Email ID"}
            placeholder={"Enter email address "}
            type={"email"}
          />
          <InputComponent
            field={"contactNo"}
            form={editForm}
            setForm={setEditForm}
            label={"Contact Number"}
            placeholder={"Enter phone number "}
            type={"tel"}
          />
          <InputComponent
            field={"whatsappNo"}
            form={editForm}
            setForm={setEditForm}
            label={"Whatsapp Number"}
            placeholder={"Enter whatsapp number "}
            type={"tel"}
          />
          <InputComponent
            field={"currentAddress"}
            form={editForm}
            setForm={setEditForm}
            label={"Current Address"}
            placeholder={"Enter local or current address"}
          />
          <InputComponent
            field={"permanentAddress"}
            form={editForm}
            setForm={setEditForm}
            label={"Permanent Address"}
            placeholder={"Enter permanent address"}
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

export default SuperAdminProfileEditDialog;
