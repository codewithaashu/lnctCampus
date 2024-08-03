import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EllipsisVertical } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import AlertDialogComponent from "@/shareable/AlertDialogComponent";
import DriveEditDialog from "./DriveEditDialog";
import { Badge } from "@/components/ui/badge";
const DriveCard = () => {
  const navigate = useNavigate();
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openCloseAlert, setOpenCloseAlert] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);

  const handleClick = () => {
    navigate("/drives/student-register");
  };

  const closeDrive = () => {
    setOpenCloseAlert(false);
  };

  const deleteDrive = () => {
    setOpenDeleteAlert(false);
  };

  return (
    <>
      <Card className="rounded-t-sm  border-t-[3px] border-t-primary">
        <div className="flex justify-between gap-5 items-center p-3 py-2 border-b-[1px]">
          <h1 className="text-base font-semibold">TCS Pvt. Ltd</h1>
          <div className="flex gap-3 items-center">
            <Badge
              // variant="secondary"
              // variant="destructive"
              className="bg-card-foreground hover:bg-card-foreground text-accent"
            >
              Active
            </Badge>
            <DropdownMenu className="w-fit ">
              <DropdownMenuTrigger>
                <Button
                  variant="ghost"
                  className="h-8 px-3 focus-visible:ring-0 focus-visible:ring-transparent"
                >
                  <EllipsisVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-fit">
                <DropdownMenuItem onClick={() => setOpenEditDialog(true)}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setOpenCloseAlert(true)}>
                  Close
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setOpenDeleteAlert(true)}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <CardContent className="pt-3 flex flex-col gap-1">
          <div className="flex gap-[6px] items-center">
            <h1 className="text-[13.5px] font-semibold">Profile:</h1>
            <p className="text-[13.5px]  text-muted-foreground">
              Softare Developer
            </p>
          </div>
          <div className="flex gap-[6px] items-center">
            <h1 className="text-[13.5px] font-semibold">Location:</h1>
            <p className="text-[13.5px]  text-muted-foreground">Delhi</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <h1 className="text-[13.5px] font-semibold">Courses:</h1>
            <p className="text-[13.5px]  text-muted-foreground">
              LNCT CSE, LNCTU CSE, MCA
            </p>
          </div>
          <div className="flex gap-[6px] items-center">
            <h1 className="text-[13.5px] font-semibold">Package:</h1>
            <p className="text-[13.5px]  text-muted-foreground">5-7LPA</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <h1 className="text-[13.5px] font-semibold">Drive date:</h1>
            <p className="text-[13.5px]  text-muted-foreground">16/08/2024</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <h1 className="text-[13.5px] font-semibold">Deadline:</h1>
            <p className="text-[13.5px]  text-muted-foreground">10/08/2024</p>
          </div>
          <div className="flex justify-between gap-5">
            <div className="flex gap-[6px] items-center">
              <h1 className="text-[13.5px] font-semibold">Eligibile:</h1>
              <p className="text-[13.5px]  text-muted-foreground">96</p>
            </div>
            <div className="flex gap-[6px] items-center">
              <h1 className="text-[13.5px] font-semibold">Selected:</h1>
              <p className="text-[13.5px]  text-muted-foreground">20</p>
            </div>
          </div>
          <Button className="mt-3 w-fit h-9 px-2 py-1" onClick={handleClick}>
            View Candidates
          </Button>
        </CardContent>
      </Card>
      {/* Dialog and alert component */}
      <DriveEditDialog
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        form={{
          companyName: "",
          location: "",
          jobProfile: "",
          package: "",
          jobDescription: "",
          driveDate: "",
          lastDateOfApplication: "",
        }}
      />
      <AlertDialogComponent
        open={openCloseAlert}
        setOpen={setOpenCloseAlert}
        title={"Are you absolutely sure?"}
        description={`This drive will be closed and no one students can fill form.`}
        handleContinue={closeDrive}
      />
      <AlertDialogComponent
        open={openDeleteAlert}
        setOpen={setOpenDeleteAlert}
        title={"Are you absolutely sure?"}
        description={`This action cannot be undone. This will permanently delete the drive.`}
        handleContinue={deleteDrive}
      />
    </>
  );
};

export default DriveCard;
