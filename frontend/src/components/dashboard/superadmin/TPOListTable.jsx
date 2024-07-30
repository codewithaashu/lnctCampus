import React, { useEffect, useState } from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DebouncedInput from "@/shareable/DebounceInput";
import TableViewBtn from "@/shareable/TableViewBtn";
import CustomTable from "@/shareable/CustomTable";
import TPOAddBtn from "./TPOAddBtn";

const TPOListTable = ({
  data,
  columns,
  columnVisibility,
  setColumnVisibility,
}) => {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGlobalFilter(globalFilter);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [globalFilter]);

  //   Table Configuration
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    enableGlobalFilter: true,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
  });

  return (
    <>
      <div className="w-full">
        {/* Top Bar */}
        <div className="flex items-center py-4">
          {/* Search */}
          <div className="flex justify-between w-full">
            <DebouncedInput
              value={globalFilter ?? ""}
              onChange={(value) => setGlobalFilter(String(value))}
            />
            <div className="flex gap-5">
              {/* Toggle Columns */}
              <TableViewBtn table={table} />
              {/* Actions */}
              <TPOAddBtn />
            </div>
          </div>
        </div>
        <CustomTable table={table} columns={columns} />
      </div>
    </>
  );
};

export default TPOListTable;
