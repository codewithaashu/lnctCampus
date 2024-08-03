import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronsLeftRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CoordinatorTableActions from "./CoordinatorTableActions";

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
const CoordinatorTableColumns = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"Name"} column={column} />
    ),
    cell: ({ row }) => (
      <div className="flex gap-3 items-center">
        <Avatar className="cursor-pointer h-10 w-10">
          <AvatarImage src={row?.original?.imgSrc} />
          <AvatarFallback>{row.getValue("name")}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center justify-center">
          <div className="capitalize text-[15px] font-medium text-card-foreground">
            {row.getValue("name")}
          </div>
          <div className=" text-xs font-medium text-muted-foreground">
            {row?.original?.email}
          </div>
        </div>
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "userId",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"User ID"} column={column} />
    ),
    cell: ({ row }) => (
      <div className="capitalize ">{row.getValue("userId")}</div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "dob",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"Date of Birth"} column={column} />
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("dob")}</div>,
  },
  {
    accessorKey: "contactNo",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"Phone No."} column={column} />
    ),
    cell: ({ row }) => <div className="">{row.getValue("contactNo")}</div>,
  },
  {
    accessorKey: "whatsappNo",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"Whatsapp No."} column={column} />
    ),
    cell: ({ row }) => <div className="">{row.getValue("whatsappNo")}</div>,
  },
  {
    accessorKey: "department",
    header: ({ column }) => (
      <HeaderWithSortBtn title={"Department"} column={column} />
    ),
    cell: ({ row }) => <div className="">{row.getValue("department")}</div>,
    enableHiding: false,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <CoordinatorTableActions row={row.original} />,
    size: 50,
  },
];

export default CoordinatorTableColumns;
