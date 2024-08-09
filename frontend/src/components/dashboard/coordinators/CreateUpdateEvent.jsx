import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { courses } from "@/db/courses";
import { eventCategory } from "@/db/eventCategory";
import DateComponent from "@/shareable/DateComponent";
import ImageInputComponent from "@/shareable/ImageInputComponent";
import InputComponent from "@/shareable/InputComponent";
import MultipleSelectComponent from "@/shareable/MultipleSelectComponent";
import RichTextEditor from "@/shareable/RichTextEditor";
import SelectComponent from "@/shareable/SelectComponent";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CreateUpdateEvent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { form, pageType } = location.state;
  const [eventForm, setEventForm] = useState(form);

  const handleBackBtn = () => {
    navigate(-1);
  };
  const handleSave = () => {};

  return (
    <>
      <Card className="w-full">
        {/* Heading */}
        <div className="p-3 flex gap-3 items-center  text-xl  font-semibold px-5">
          <ArrowLeft
            className="w-6 h-6 object-cover  rounded-full cursor-pointer border-[1px] p-1 shadow-sm"
            onClick={handleBackBtn}
          />
          <h1>{pageType === "create" ? "Create Events" : "Update Event"}</h1>
        </div>
        <Separator />
        <CardContent className="pt-5">
          <div className="flex flex-col gap-6 justify-self-end">
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              <InputComponent
                placeholder={"Enter name of event"}
                label={"Event Name"}
                type={"text"}
                field={"eventName"}
                form={eventForm}
                setForm={setEventForm}
              />
              <InputComponent
                placeholder={"Enter location of event "}
                label={"Event Location"}
                type={"text"}
                field={"eventLocation"}
                form={eventForm}
                setForm={setEventForm}
              />
              <DateComponent
                placeholder={"Date of Event"}
                label={"Date of Event"}
                field={"eventDate"}
                form={eventForm}
                setForm={setEventForm}
              />
              <DateComponent
                placeholder={"Last Date of Application"}
                label={"Last Date of Application"}
                field={"lastDateOfApplication"}
                form={eventForm}
                setForm={setEventForm}
              />
              <div className="flex flex-col gap-2">
                <label className="text-base px-1">Event Category</label>
                <SelectComponent
                  triggerWidth={"w-full"}
                  placeholder={"Select event category"}
                  label={"Event Category"}
                  field={"eventCategory"}
                  form={eventForm}
                  setForm={setEventForm}
                  items={eventCategory}
                />
              </div>
              <ImageInputComponent
                field={"eventLogo"}
                form={eventForm}
                setForm={setEventForm}
                placeholder={"Upload logo or image of event"}
              />
              {/* Event Description */}
              <RichTextEditor
                label={"Event Description"}
                field={"eventDescription"}
                form={eventForm}
                setForm={setEventForm}
              />

              <MultipleSelectComponent
                label={"Eligible Course(s)"}
                items={courses}
                emptyPlaceholder={"No course found."}
                placeholder={"Select course(s)"}
                field={"courses"}
                form={eventForm}
                setForm={setEventForm}
              />
            </div>
            <div className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSave}>
                {pageType === "create" ? "Create" : "Update"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CreateUpdateEvent;
