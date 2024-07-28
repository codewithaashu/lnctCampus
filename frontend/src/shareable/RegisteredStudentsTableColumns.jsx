import React from "react";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const HeaderWithSortBtn = ({ title, column }) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {title}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};
const RegisteredStudentsTableColumns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "enrollNo",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"Enroll No."} column={column} />
    ),
    cell: ({ row }) => (
      <div className="uppercase ">{row.getValue("enrollNo")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"Name"} column={column} />
    ),
    cell: ({ row }) => (
      <div className="capitalize ">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"Email"} column={column} />
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "contactNo",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"Contact No."} column={column} />
    ),
    cell: ({ row }) => <div className="">{row.getValue("contactNo")}</div>,
  },
  {
    accessorKey: "program",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"Program"} column={column} />
    ),
    cell: ({ row }) => <div className="">{row.getValue("program")}</div>,
  },
  {
    accessorKey: "department",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"Department"} column={column} />
    ),
    cell: ({ row }) => <div className="">{row.getValue("department")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"Status"} column={column} />
    ),
    cell: ({ row }) => <div className="">{row.getValue("status")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Change Status</DropdownMenuItem>
            <DropdownMenuItem>Hired</DropdownMenuItem>
            <DropdownMenuItem>Remove</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default RegisteredStudentsTableColumns;
