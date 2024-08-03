import React from "react";

const Track = ({ formStage }) => {
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
              formStage === 1
                ? "text-primary font-semibold"
                : "text-muted-foreground font-medium"
            } text-[13px] `}
          >
            Job Details
          </h1>
        </div>
        <div className="flex flex-col gap-[2px] w-[45%]">
          <div className="flex items-center">
            <div
              className={`aspect-square w-7 h-7 flex items-center justify-center rounded-full ${
                formStage >= 2
                  ? "bg-primary font-semibold"
                  : "bg-muted-foreground font-medium"
              }  text-white object-center text-sm `}
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
              formStage === 2
                ? "text-primary font-semibold"
                : "text-muted-foreground font-medium"
            } text-[13px]`}
          >
            Company Details
          </h1>
        </div>
        <div className="flex flex-col gap-[2px] w-[5%]">
          <div className="flex items-center">
            <div
              className={`aspect-square w-7 h-7 flex items-center justify-center rounded-full ${
                formStage >= 3
                  ? "bg-primary font-semibold"
                  : "bg-muted-foreground font-medium"
              }  text-white object-center text-sm`}
            >
              <h1>3</h1>
            </div>
          </div>
          <h1
            className={`${
              formStage === 3
                ? "text-primary font-semibold"
                : "text-muted-foreground font-medium"
            } text-[13px]`}
          >
            Preview
          </h1>
        </div>
      </div>
    </>
  );
};

export default Track;
