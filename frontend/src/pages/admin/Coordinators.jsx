import CoordinatorTable from "@/components/dashboard/Admin/CoordinatorTable";
import CoordinatorTableColumns from "@/components/dashboard/Admin/CoordinatorTableColumns";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { coordinatorLists } from "@/db/coordinatorLists";
import React, { useState } from "react";

const Coordinators = () => {
  const [columnVisibility, setColumnVisibility] = useState({
    dob: false,
  });
  return (
    <>
      <Card className="w-full h-full">
        {/* Heading */}
        <div>
          <h1 className="p-3 text-xl  font-semibold px-5">Coordinators List</h1>
          <Separator />
        </div>
        <CardContent className="pt-5">
          <CoordinatorTable
            data={coordinatorLists}
            columns={CoordinatorTableColumns}
            columnVisibility={columnVisibility}
            setColumnVisibility={setColumnVisibility}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default Coordinators;
