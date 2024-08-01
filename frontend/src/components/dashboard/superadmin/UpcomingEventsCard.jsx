import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import EventCard from "./EventCard";

const UpcomingEventsCard = () => {
  return (
    <>
      <div className="w-full h-full lg:col-span-3">
        <Card className="w-full h-full">
          <CardHeader className="px-7">
            <CardTitle className="text-lg">Upcoming Schedule</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default UpcomingEventsCard;
