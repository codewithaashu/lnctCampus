import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AlertDialogComponent from "@/shareable/AlertDialogComponent";
import DialogWithSelect from "@/shareable/DialogWithSelect";
import { MoreHorizontal } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterStudentTableActions = ({ row }) => {
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false);
  const [openChangeStatusDialog, setOpenChangeStatusDialog] = useState(false);
  const navigate = useNavigate();
  const removeStudent = () => {
    setOpenRemoveDialog(false);
  };
  const changeStatus = () => {
    setOpenChangeStatusDialog(false);
  };
  const markHired = (data) => {};
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => navigate("/drives/view-student")}>
          View Details
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setOpenChangeStatusDialog(true)}>
          Change Status
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => markHired(row)}>
          Hired
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setOpenRemoveDialog(true)}>
          Remove
        </DropdownMenuItem>
      </DropdownMenuContent>
      <AlertDialogComponent
        open={openRemoveDialog}
        setOpen={setOpenRemoveDialog}
        title={"Are you absolutely sure?"}
        description={`This action cannot be undone. This will permanently remove ${row?.name} from this job profile.`}
        handleContinue={removeStudent}
      />
      <DialogWithSelect
        open={openChangeStatusDialog}
        setOpen={setOpenChangeStatusDialog}
        title={"Change Application Status"}
        description={`Change the application status of ${row.name} ${row.enrollNo}`}
        handleSubmit={changeStatus}
      />
    </DropdownMenu>
  );
};

export default RegisterStudentTableActions;
