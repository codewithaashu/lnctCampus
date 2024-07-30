import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronsLeftRightIcon,
  FileDown,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import RegisterStudentTableActions from "../components/dashboard/superadmin/RegisterStudentTableActions";

const getStatusColor = (value) => {
  if (value === "Shortlisted") {
    return "bg-indigo-100 text-indigo-600";
  } else if (value === "Next Round") {
    return "bg-yellow-100 text-yellow-600";
  } else if (value === "Pending") {
    return "bg-orange-100 text-orange-600";
  } else if (value === "Hired") {
    return "bg-green-100 text-green-600";
  }
  return "bg-red-100 text-red-600";
};

const renderSortIcon = (column) => {
  const sort = column.getIsSorted();
  if (!sort) {
    return <ChevronsLeftRightIcon className="ml-2 h-4 w-4 rotate-90" />;
  }
  return sort === "desc" ? (
    <ArrowDownIcon className="ml-2 h-4 w-4" />
  ) : (
    <ArrowUpIcon className="ml-2 h-4 w-4" />
  );
};

const HeaderWithSortBtn = ({ title, column }) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {title}
      {renderSortIcon(column)}
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
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"Name"} column={column} />
    ),
    cell: ({ row }) => (
      <div className="capitalize ">{row.getValue("name")}</div>
    ),
    enableHiding: false,
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
    accessorKey: "cgpa",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"CGPA"} column={column} />
    ),
    cell: ({ row }) => <div className="">{row.getValue("cgpa")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"Status"} column={column} />
    ),
    cell: ({ row }) => (
      <div
        className={`${getStatusColor(
          row.getValue("status")
        )} font-medium rounded-full`}
      >
        {row.getValue("status")}
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "resume",
    header: ({ column }) => <div className="text-sm font-medium">Resume</div>,
    cell: ({ row }) => (
      <a href={row.getValue("resume")} target="_blank">
        <Button className="bg-muted text-primary border-primary border-[1px] text-sm h-fit hover:bg-transparent">
          <FileDown className="w-4 h-4" /> <span className="px-1">CV</span>
        </Button>
      </a>
    ),
    enableSorting: false,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <RegisterStudentTableActions row={row.original} />,
    size: 50,
  },
];

export default RegisteredStudentsTableColumns;
