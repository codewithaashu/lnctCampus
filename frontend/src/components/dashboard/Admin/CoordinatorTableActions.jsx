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
import ViewTPODetails from "../superadmin/ViewTPODetails";
import { coordinatorDetails } from "@/db/coordinatorDetails";

const CoordinatorTableActions = ({ row }) => {
  const [openRemoveAlert, setOpenRemoveAlert] = useState(false);
  const [viewDetails, setViewDetails] = useState(false);
  const removeStudent = () => {
    setOpenRemoveAlert(false);
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
        <DropdownMenuItem onClick={() => setViewDetails(true)}>
          View Details
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setOpenRemoveAlert(true)}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
      <AlertDialogComponent
        open={openRemoveAlert}
        setOpen={setOpenRemoveAlert}
        title={"Are you absolutely sure?"}
        description={`This action cannot be undone. This will permanently remove ${row?.name} from TPO List.`}
        handleContinue={removeStudent}
      />
      <ViewTPODetails
        setOpen={setViewDetails}
        open={viewDetails}
        data={coordinatorDetails}
      />
    </DropdownMenu>
  );
};

export default CoordinatorTableActions;
