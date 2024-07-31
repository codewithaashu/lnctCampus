import React, { useState } from "react";
import { UserRoundCog, UserRoundPen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TooltipComponent from "@/shareable/TooltipComponent";
import SuperAdminProfileEditDialog from "./SuperAdminProfileEditDialog";
const ProfileBoxHeader = () => {
  const navigate = useNavigate();
  const [openEditDialog, setOpenEditDialog] = useState(false);
  return (
    <>
      <div className="grid grid-cols-2 w-full">
        <div className="flex gap-2 flex-col justify-self-end">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPWQTnePNQOhGoSq8Sv0hdxWo0QOU_Ys-6djgmxz3f7vYE_QqTANwmbRCU7TADxAQ6-dedxQ07miTw15vMFfBqOPxrZTid5BtVW8d55uP4Rl_z4jpHGUD8VjktnfAo5RMdLQ0ai7wJwOI/s570/Shazim+uddin+pp+image+with+stroke.jpg"
            alt="Human"
            className="w-28 h-28 rounded-full object-center aspect-square"
          />
          <div className="flex flex-col gap-[1px] items-center">
            <h1 className="text-lg font-semibold">Pushpank Thakur</h1>
            <p className="text-xs font-semibold text-muted-foreground">
              Training & Placement Head
            </p>
          </div>
        </div>
        <div className="flex gap-5 justify-self-end self-center">
          <TooltipComponent
            Icon={UserRoundPen}
            content={"Edit Profile"}
            handleClick={() => setOpenEditDialog(true)}
          />
          <TooltipComponent
            Icon={UserRoundCog}
            content={"Change Password"}
            handleClick={() => navigate("/change-password")}
          />
        </div>
      </div>
      <SuperAdminProfileEditDialog
        form={{
          image: "",
          name: "Pushpank Thakur",
          gender: "Male",
          dob: "16/08/2001",
          email: "",
          contactNo: "",
          whatsappNo: "",
          currentAddress: "",
          permanentAddress: "",
        }}
        open={openEditDialog}
        setOpen={setOpenEditDialog}
      />
    </>
  );
};

export default ProfileBoxHeader;
