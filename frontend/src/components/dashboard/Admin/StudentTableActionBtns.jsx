import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AlertDialogComponent from "@/shareable/AlertDialogComponent";
import { ErrorToast } from "@/utils/ErrorToast";
import exportToExcel from "@/utils/excelToExport";
import { getSelectedRowArray } from "@/utils/getSelectedRowArray";
import { File, LockOpen, ShieldBan, Trash2 } from "lucide-react";
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

  const handleExport = () => {
    if (table.getFilteredSelectedRowModel().rows.length === 0) {
      ErrorToast(
        "Uh oh! Something went wrong.",
        "Please select row before change status."
      );
      return;
    } else {
      const selectedRow = getSelectedRowArray(
        table.getFilteredSelectedRowModel().rows
      );
      exportToExcel(selectedRow, "studentsList");
      setRowSelection({});
    }
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
            <LockOpen className="w-3.5 h-3.5 mr-1 " /> Unlock Data
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleBlacklist}>
            <ShieldBan className="w-3.5 h-3.5 mr-1 " />
            Blacklist
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleRemove}>
            <Trash2 className="w-3.5 h-3.5 mr-1 " />
            Remove
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleExport}>
            <File className="w-3.5 h-3.5 mr-1 " />
            Export
          </DropdownMenuItem>
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
