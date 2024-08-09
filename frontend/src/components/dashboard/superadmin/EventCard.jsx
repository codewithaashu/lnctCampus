import React from "react";

const EventCard = ({ event }) => {
  return (
    <>
      <div className="border border-primary p-2.5 rounded-lg border-l-[6px]  px-4">
        <div className="flex flex-col items-center w-fit gap-[2px]">
          <h1 className="text-base font-semibold leading-none">
            {event.title}
          </h1>
          <p className="text-[13px] text-muted-foreground">{event.date}</p>
        </div>
      </div>
    </>
  );
};

export default EventCard;
