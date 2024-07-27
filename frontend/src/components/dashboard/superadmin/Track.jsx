import React from "react";

const Track = ({ setFormStage, formStage }) => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col gap-[2px] w-[45%]">
          <div className="flex items-center">
            <div className="aspect-square w-7 h-7 flex items-center justify-center rounded-full bg-primary text-white object-center text-sm font-semibold">
              <h1>1</h1>
            </div>
            <div
              className={`h-1 w-full bg-primary ${
                formStage > 1 ? "opacity-100" : "opacity-30"
              } rounded-full`}
            ></div>
          </div>
          <h1
            className={`${
              formStage === 1 ? "text-primary" : "text-muted-foreground"
            } text-[13px] font-semibold`}
          >
            Job Details
          </h1>
        </div>
        <div className="flex flex-col gap-[2px] w-[45%]">
          <div className="flex items-center">
            <div
              className={`aspect-square w-7 h-7 flex items-center justify-center rounded-full ${
                formStage >= 2 ? "bg-primary" : "bg-[#E5D7FC]"
              }  text-white object-center text-sm font-semibold`}
            >
              <h1>2</h1>
            </div>
            <div
              className={`h-1 w-full bg-primary ${
                formStage > 2 ? "opacity-100" : "opacity-30"
              } rounded-full`}
            ></div>
          </div>
          <h1
            className={`${
              formStage === 2 ? "text-primary" : "text-muted-foreground"
            } text-[13px] font-semibold`}
          >
            Eligibility
          </h1>
        </div>
        <div className="flex flex-col gap-[2px] w-[5%]">
          <div className="flex items-center">
            <div
              className={`aspect-square w-7 h-7 flex items-center justify-center rounded-full ${
                formStage >= 3 ? "bg-primary" : "bg-[#E5D7FC]"
              }  text-white object-center text-sm font-semibold`}
            >
              <h1>3</h1>
            </div>
          </div>
          <h1
            className={`${
              formStage === 3 ? "text-primary" : "text-muted-foreground"
            } text-[13px] font-semibold`}
          >
            Preview
          </h1>
        </div>
      </div>
    </>
  );
};

export default Track;
