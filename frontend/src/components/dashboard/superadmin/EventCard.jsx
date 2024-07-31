import React from "react";

const EventCard = () => {
  return (
    <>
      <div className="border border-primary p-3 rounded-lg border-l-[6px]  px-4 w-11/12">
        <div className="flex flex-col items-center w-fit gap-[2px]">
          <h1 className="text-base font-semibold leading-none">
            Google Placement Drive
          </h1>
          <p className="text-[13px] text-muted-foreground">26 August 2024</p>
        </div>
      </div>
    </>
  );
};

export default EventCard;
