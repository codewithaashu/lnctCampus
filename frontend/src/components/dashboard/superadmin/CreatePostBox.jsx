import { Button } from "@/components/ui/button";
import { courses } from "@/db/courses";
import { postCategory } from "@/db/postCategory";
import InputComponent from "@/shareable/InputComponent";
import MultipleSelectComponent from "@/shareable/MultipleSelectComponent";
import MultipleUploadComponent from "@/shareable/MultipleUploadComponent";
import RichTextEditor from "@/shareable/RichTextEditor";
import SelectLabelComponent from "@/shareable/SelectLabelComponent";
import React, { useState } from "react";

const CreatePostBox = () => {
  const [postDetails, setPostDetails] = useState({
    title: "",
    category: "",
    description: "",
    courses: [],
    files: [],
  });
  const handleSubmit = () => {
    const courses = postDetails.courses.map((curr) => curr.value);
    const updatePostDetails = {
      ...postDetails,
      courses,
    };
  };
  return (
    <>
      <div className="flex flex-col gap-6 justify-self-end">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            <InputComponent
              placeholder={"Write post title here..."}
              label={"Post Title"}
              type={"text"}
              field={"title"}
              form={postDetails}
              setForm={setPostDetails}
            />
            <SelectLabelComponent
              title={"Post Category"}
              items={postCategory}
              triggerWidth={"w-full"}
              placeholder={"Select post category"}
              label={"Post Category"}
              field={"category"}
              form={postDetails}
              setForm={setPostDetails}
            />
          </div>

          {/* Post Description */}
          <RichTextEditor
            label={"Post Description"}
            field={"description"}
            form={postDetails}
            setForm={setPostDetails}
          />
          <MultipleSelectComponent
            label={"Course(s)"}
            items={courses}
            emptyPlaceholder={"No course found."}
            placeholder={"Select course(s) for which post has to be added"}
            field={"courses"}
            form={postDetails}
            setForm={setPostDetails}
          />
          <MultipleUploadComponent
            label={"Upload File(s)"}
            placeholder={"Upload related images or documents"}
            field={"files"}
            form={postDetails}
            setForm={setPostDetails}
          />
        </div>
        <div className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </>
  );
};

export default CreatePostBox;
