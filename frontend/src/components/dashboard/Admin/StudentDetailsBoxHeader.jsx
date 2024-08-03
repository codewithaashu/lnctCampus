import { Button } from "@/components/ui/button";
import AlertDialogComponent from "@/shareable/AlertDialogComponent";
import TooltipComponent from "@/shareable/TooltipComponent";
import { ShieldBan, Trash2 } from "lucide-react";
import React, { useState } from "react";

const StudentDetailsBoxHeader = () => {
  const [openBlacklistAlertDialog, setOpenBlacklistAlertDialog] =
    useState(false);
  const [openRemoveAlertDialog, setOpenRemoveAlertDialog] = useState(false);
  const removeStudent = () => {
    setOpenRemoveAlertDialog(false);
  };
  const blacklistStudent = () => {
    setOpenBlacklistAlertDialog(false);
  };

  const getBadgeColor = (status) => {
    if (status === "Verified") {
      return "bg-indigo-100 text-indigo-600 ";
    } else if (status === "Unverified") {
      return "bg-yellow-100 text-yellow-600 ";
    } else if (status === "Hired") {
      return "bg-green-100 text-green-600 ";
    }
    return "bg-red-100 text-red-600";
  };

  return (
    <>
      <div className="flex justify-between gap-5 items-center">
        <div className="flex gap-5 items-center">
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
            <p
              className={`mt-1 text-[11.5px] w-full text-center font-medium rounded-full ${getBadgeColor(
                "Verified"
              )} border px-1 py-[1px]`}
            >
              Verified
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button className="px-5" size="sm">
            Verify
          </Button>
          {/* <Button className="px-5 h-9 bg-green-100 text-green-600 hover:bg-green-100 ">
            Verified
          </Button> */}
          <TooltipComponent
            Icon={ShieldBan}
            content={"Blacklist"}
            handleClick={() => setOpenBlacklistAlertDialog(true)}
          />
          <TooltipComponent
            Icon={Trash2}
            content={"Remove"}
            handleClick={() => setOpenRemoveAlertDialog(true)}
          />
        </div>
      </div>
      {/* Alert Dialog */}
      <AlertDialogComponent
        open={openRemoveAlertDialog}
        setOpen={setOpenRemoveAlertDialog}
        title={"Are you absolutely sure?"}
        description={`This action cannot be undone. This will permanently remove ${"Ashish Ranjan"} from the database.`}
        handleContinue={removeStudent}
      />
      <AlertDialogComponent
        open={openBlacklistAlertDialog}
        setOpen={setOpenBlacklistAlertDialog}
        title={"Are you absolutely sure?"}
        description={`This action cannot be undone. This will blacklist ${"Ashish Ranjan"} from the TNP activities.`}
        handleContinue={blacklistStudent}
      />
    </>
  );
};

export default StudentDetailsBoxHeader;
