import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AlertDialogComponent from "@/shareable/AlertDialogComponent";
import { MoreHorizontal } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentTableActions = ({ row }) => {
  const [openUnlockDataAlertDialog, setOpenUnlockDataAlertDialog] =
    useState(false);
  const [openBlacklistAlertDialog, setOpenBlacklistAlertDialog] =
    useState(false);
  const [openRemoveAlertDialog, setOpenRemoveAlertDialog] = useState(false);
  const navigate = useNavigate();
  const removeStudent = () => {
    setOpenRemoveAlertDialog(false);
  };
  const blacklistStudent = () => {
    setOpenBlacklistAlertDialog(false);
  };
  const unlockStudent = () => {
    setOpenUnlockDataAlertDialog(false);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 w-8 p-0 focus-visible:ring-0 focus-visible:ring-transparent"
        >
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => navigate("/students/view-student")}>
          View Details
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setOpenUnlockDataAlertDialog(true)}>
          Unlock Data
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setOpenBlacklistAlertDialog(true)}>
          Blacklist
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setOpenRemoveAlertDialog(true)}>
          Remove
        </DropdownMenuItem>
      </DropdownMenuContent>

      {/* Alert Dialog */}
      <AlertDialogComponent
        open={openRemoveAlertDialog}
        setOpen={setOpenRemoveAlertDialog}
        title={"Are you absolutely sure?"}
        description={`This action cannot be undone. This will permanently remove ${row?.name} from the database.`}
        handleContinue={removeStudent}
      />
      <AlertDialogComponent
        open={openBlacklistAlertDialog}
        setOpen={setOpenBlacklistAlertDialog}
        title={"Are you absolutely sure?"}
        description={`This action cannot be undone. This will blacklist ${row?.name} from the TNP activities.`}
        handleContinue={blacklistStudent}
      />
      <AlertDialogComponent
        open={openUnlockDataAlertDialog}
        setOpen={setOpenUnlockDataAlertDialog}
        title={"Are you absolutely sure?"}
        description={`${row?.name} can edit the basic details. After changes it will automatically lock the data.`}
        handleContinue={unlockStudent}
      />
    </DropdownMenu>
  );
};

export default StudentTableActions;
