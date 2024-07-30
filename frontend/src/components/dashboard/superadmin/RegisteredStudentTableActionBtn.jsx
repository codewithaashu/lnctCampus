import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AlertDialogComponent from "@/shareable/AlertDialogComponent";
import DialogWithSelect from "@/shareable/DialogWithSelect";
import { ErrorToast } from "@/utils/ErrorToast";
import { getSelectedRowArray } from "@/utils/getSelectedRowArray";
import React, { useState } from "react";

const RegisteredStudentTableActionBtn = ({ table, setRowSelection }) => {
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false);
  const [openChangeStatusDialog, setOpenChangeStatusDialog] = useState(false);
  const [openHiredDialog, setOpenHiredDialog] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [selectedRowDataText, setSelectedRowDataText] = useState("");

  const handleChangeStatus = () => {
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
      setOpenChangeStatusDialog(true);
    }
  };

  const changeStatus = () => {
    setRowSelection({});
    setOpenChangeStatusDialog(false);
  };

  const handleHired = () => {
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
      setOpenHiredDialog(true);
    }
  };

  const groupHired = () => {
    setRowSelection({});
    setOpenHiredDialog(false);
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
      setOpenRemoveDialog(true);
    }
  };

  const removeStudent = () => {
    setRowSelection({});
    setOpenRemoveDialog(false);
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
          <DropdownMenuItem onClick={handleChangeStatus}>
            Change Status
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleHired}>Hired</DropdownMenuItem>
          <DropdownMenuItem onClick={handleRemove}>Remove</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialogComponent
        open={openHiredDialog}
        setOpen={setOpenHiredDialog}
        title={"Are you absolutely sure?"}
        description={`Mark these students as hired for this job profile: ${selectedRowDataText.substring(
          0,
          selectedRowDataText.length - 2
        )}.`}
        handleContinue={groupHired}
      />
      <AlertDialogComponent
        open={openRemoveDialog}
        setOpen={setOpenRemoveDialog}
        title={"Are you absolutely sure?"}
        description={`This action cannot be undone. This will permanently remove ${selectedRowDataText.substring(
          0,
          selectedRowDataText.length - 2
        )} from this job profile.`}
        handleContinue={removeStudent}
      />
      <DialogWithSelect
        open={openChangeStatusDialog}
        setOpen={setOpenChangeStatusDialog}
        title={"Change Application Status"}
        description={`Change the application status of ${selectedRowDataText.substring(
          0,
          selectedRowDataText.length - 2
        )}`}
        handleSubmit={changeStatus}
      />
    </>
  );
};

export default RegisteredStudentTableActionBtn;
