import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AlertDialogComponent from "@/shareable/AlertDialogComponent";
import { ErrorToast } from "@/utils/ErrorToast";
import { getSelectedRowArray } from "@/utils/getSelectedRowArray";
import React, { useState } from "react";

const StudentTableActionBtns = ({ table, setRowSelection }) => {
  const [openUnlockDataAlertDialog, setOpenUnlockDataAlertDialog] =
    useState(false);
  const [openBlacklistAlertDialog, setOpenBlacklistAlertDialog] =
    useState(false);
  const [openRemoveAlertDialog, setOpenRemoveAlertDialog] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [selectedRowDataText, setSelectedRowDataText] = useState("");

  const handleBlacklist = () => {
    if (table.getFilteredSelectedRowModel().rows.length === 0) {
      ErrorToast(
        "Uh oh! Something went wrong.",
        "Please select row before change status."
      );
    } else {
      const selectedRow = getSelectedRowArray(
        table.getFilteredSelectedRowModel().rows
      );
      setSelectedRowData(selectedRow);
      var selectedRowText = "";
      selectedRow.map(
        (curr) =>
          (selectedRowText += curr?.name + "(" + curr?.enrollNo + ")" + ", ")
      );
      setSelectedRowDataText(selectedRowText);
      setOpenBlacklistAlertDialog(true);
    }
  };

  const blacklistStudents = () => {
    setRowSelection({});
    setOpenBlacklistAlertDialog(false);
  };

  const handleUnlock = () => {
    if (table.getFilteredSelectedRowModel().rows.length === 0) {
      ErrorToast(
        "Uh oh! Something went wrong.",
        "Please select row before change status."
      );
    } else {
      const selectedRow = getSelectedRowArray(
        table.getFilteredSelectedRowModel().rows
      );
      setSelectedRowData(selectedRow);
      var selectedRowText = "";
      selectedRow.map(
        (curr) =>
          (selectedRowText += curr?.name + "(" + curr?.enrollNo + ")" + ", ")
      );
      setSelectedRowDataText(selectedRowText);
      setOpenUnlockDataAlertDialog(true);
    }
  };

  const unlockStudents = () => {
    setRowSelection({});
    setOpenUnlockDataAlertDialog(false);
  };

  const handleRemove = () => {
    if (table.getFilteredSelectedRowModel().rows.length === 0) {
      ErrorToast(
        "Uh oh! Something went wrong.",
        "Please select row before change status."
      );
    } else {
      const selectedRow = getSelectedRowArray(
        table.getFilteredSelectedRowModel().rows
      );
      setSelectedRowData(selectedRow);
      var selectedRowText = "";
      selectedRow.map(
        (curr) =>
          (selectedRowText += curr?.name + "(" + curr?.enrollNo + ")" + ", ")
      );
      setSelectedRowDataText(selectedRowText);
      setOpenRemoveAlertDialog(true);
    }
  };

  const removeStudent = () => {
    setRowSelection({});
    setOpenRemoveAlertDialog(false);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="ml-auto focus-visible:ring-0 focus-visible:ring-transparent">
            Actions
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleUnlock}>
            Unlock Data
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleBlacklist}>
            Blacklist
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleRemove}>Remove</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Alert Dialog */}
      <AlertDialogComponent
        open={openRemoveAlertDialog}
        setOpen={setOpenRemoveAlertDialog}
        title={"Are you absolutely sure?"}
        description={`This action cannot be undone. This will permanently remove ${selectedRowDataText.substring(
          0,
          selectedRowDataText.length - 2
        )} from the database.`}
        handleContinue={removeStudent}
      />
      <AlertDialogComponent
        open={openBlacklistAlertDialog}
        setOpen={setOpenBlacklistAlertDialog}
        title={"Are you absolutely sure?"}
        description={`This action cannot be undone. This will blacklist ${selectedRowDataText.substring(
          0,
          selectedRowDataText.length - 2
        )} from the TNP activities.`}
        handleContinue={blacklistStudents}
      />
      <AlertDialogComponent
        open={openUnlockDataAlertDialog}
        setOpen={setOpenUnlockDataAlertDialog}
        title={"Are you absolutely sure?"}
        description={`${selectedRowDataText.substring(
          0,
          selectedRowDataText.length - 2
        )} can edit the basic details. After changes it will automatically lock the data.`}
        handleContinue={unlockStudents}
      />
    </>
  );
};

export default StudentTableActionBtns;
