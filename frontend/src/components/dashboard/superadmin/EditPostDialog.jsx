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
import { postCategory } from "@/db/postCategory";
import RichTextEditor from "@/shareable/RichTextEditor";
import MultipleUploadComponent from "@/shareable/MultipleUploadComponent";
const EditPostDialog = ({ open, setOpen, handleSubmit, editPostForm }) => {
  const [form, setForm] = useState(editPostForm);
  return (
    <Dialog open={open}>
      <DialogContent className="w-[425px] md:w-[720px] overflow-y-auto max-h-screen max-w-full no-scrollbar">
        <DialogHeader>
          <DialogTitle>Edit Post</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <InputComponent
            placeholder={"Write post title here..."}
            label={"Post Title"}
            type={"text"}
            field={"title"}
            form={form}
            setForm={setForm}
          />
          <SelectLabelComponent
            title={"Post Category"}
            items={postCategory}
            triggerWidth={"w-full"}
            placeholder={"Select post category"}
            label={"Post Category"}
            field={"category"}
            form={form}
            setForm={setForm}
          />
          {/* Post Description */}
          <RichTextEditor
            label={"Post Description"}
            field={"description"}
            form={form}
            setForm={setForm}
          />
          <MultipleUploadComponent
            label={"Upload File(s)"}
            placeholder={"Upload related images or documents"}
            field={"files"}
            form={form}
            setForm={setForm}
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

export default EditPostDialog;
