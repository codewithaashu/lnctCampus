import React from "react";

const StudentDetailsBoxHeader = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex gap-2 flex-col">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPWQTnePNQOhGoSq8Sv0hdxWo0QOU_Ys-6djgmxz3f7vYE_QqTANwmbRCU7TADxAQ6-dedxQ07miTw15vMFfBqOPxrZTid5BtVW8d55uP4Rl_z4jpHGUD8VjktnfAo5RMdLQ0ai7wJwOI/s570/Shazim+uddin+pp+image+with+stroke.jpg"
            alt="Human"
            className="w-28 h-28 rounded-full object-center aspect-square"
          />
          <div className="flex flex-col gap-[1px] items-center">
            <h1 className="text-lg font-semibold">Ashish Ranjan</h1>
            <p className="text-xs font-semibold text-muted-foreground">
              LNCT MCA Student
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetailsBoxHeader;
