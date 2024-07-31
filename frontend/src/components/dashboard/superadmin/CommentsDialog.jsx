import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CommentsCard from "./CommentsCard";
import PaginationComponent from "@/shareable/PaginationComponent";
import SelectComponent from "@/shareable/SelectComponent";
import { commentSort } from "@/db/commentSort";
const CommentsDialog = ({ open, setOpen }) => {
  const [form, setForm] = useState({ criteria: "" });
  return (
    <Dialog open={open}>
      <DialogContent className="w-[425px] md:w-[720px] overflow-y-auto max-h-screen max-w-full no-scrollbar">
        <DialogHeader className={"flex flex-row justify-between"}>
          <DialogTitle>Comments</DialogTitle>
          <SelectComponent
            label={"Sort By"}
            items={commentSort}
            placeholder={"Sort By"}
            field={"criteria"}
            form={form}
            setForm={setForm}
            triggerWidth={"w-[100px]"}
          />
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <CommentsCard />
          <CommentsCard />
          <CommentsCard />
          <CommentsCard />
          <CommentsCard />
        </div>
        <PaginationComponent />
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
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CommentsDialog;
