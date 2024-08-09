import EventsCard from "@/components/dashboard/coordinators/EventsCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { eventSortCriteria } from "@/db/eventSortCriteria";
import { jobsSortCriteria } from "@/db/jobsSortCriteria";
import SearchInput from "@/shareable/SearchInput";
import SelectComponent from "@/shareable/SelectComponent";
import { CalendarPlus2 } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const [form, setForm] = useState({ sortBy: "" });
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/events/event", {
      state: {
        pageType: "create",
        form: {
          eventName: "",
          eventLocation: "",
          eventCategory: "",
          eventLogo: "",
          eventDate: "",
          lastDateOfApplication: "",
          courses: [],
          eventDescription: "",
        },
      },
    });
  };

  return (
    <>
      <Card className="w-full">
        {/* Heading */}
        <div>
          <h1 className="p-3 text-xl font-semibold px-5">All Events</h1>
          <Separator />
        </div>
        <CardContent className="pt-6">
          {/* Search and Sort By Box */}
          <div className="flex justify-between">
            <SearchInput
              placeholder={"Search the event by event name"}
              className={"max-w-sm"}
              value={value}
              setValue={setValue}
            />
            <div className="flex gap-5">
              <SelectComponent
                placeholder={"Sort By"}
                label={"Sort By"}
                items={eventSortCriteria}
                triggerWidth={"w-[140px]"}
                field={"sortBy"}
                form={form}
                setForm={setForm}
              />
              <Button onClick={handleClick}>
                <CalendarPlus2 className="w-3.5 h-3.5 mr-1" />
                Create Event
              </Button>
            </div>
          </div>
          {/* Drive Container */}
          <div className="grid grid-cols-3 gap-5 gap-y-8 pt-8 w-full justify-center">
            <EventsCard />
            <EventsCard />
            <EventsCard />
            <EventsCard />
            <EventsCard />
            <EventsCard />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Events;
