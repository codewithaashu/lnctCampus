import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SelectComponent from "./SelectComponent";
import { applicationStatus } from "@/db/applicationStatus";
const DialogWithSelect = ({
  open,
  setOpen,
  title,
  description,
  handleSubmit,
}) => {
  const [statusForm, setStatusForm] = useState({ status: "" });
  return (
    <>
      <Dialog open={open}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <SelectComponent
              label={"Application Status"}
              items={applicationStatus}
              placeholder={"Select Status"}
              triggerWidth={"w-full"}
              field={"status"}
              form={statusForm}
              setForm={setStatusForm}
            />
          </div>
          <DialogFooter className="justify-between">
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </DialogClose>
            <Button align="end" type="button" onClick={handleSubmit}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogWithSelect;
