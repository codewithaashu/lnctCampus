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
import TPOAddDialog from "./TPOAddDialog";
import ViewTPODetails from "./ViewTPODetails";

const TPOTableActions = ({ row }) => {
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [viewDetails, setViewDetails] = useState(false);
  const removeStudent = () => {
    console.log(row);
    setOpenRemoveDialog(false);
  };
  const changeStatus = () => {
    console.log(row);
    setOpenChangeStatusDialog(false);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setViewDetails(true)}>
          View Details
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setOpenEditDialog(true)}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setOpenRemoveDialog(true)}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
      <AlertDialogComponent
        open={openRemoveDialog}
        setOpen={setOpenRemoveDialog}
        title={"Are you absolutely sure?"}
        description={`This action cannot be undone. This will permanently remove ${row?.name} from TPO List.`}
        handleContinue={removeStudent}
      />
      <TPOAddDialog
        setOpen={setOpenEditDialog}
        open={openEditDialog}
        editable={true}
        form={{
          image: "",
          firstName: "Dr. Virendra",
          lastName: "Tiwari",
          dob: "",
          email: "",
          contactNo: "",
          whatsappNo: "",
          currentAddress: "",
          permanentAddress: "",
          gender: "",
          department: "",
        }}
      />
      <ViewTPODetails setOpen={setViewDetails} open={viewDetails} />
    </DropdownMenu>
  );
};

export default TPOTableActions;
