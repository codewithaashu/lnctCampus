import TPOListTable from "@/components/dashboard/superadmin/TPOListTable";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { tpoLists } from "@/db/tpoLists";
import TPOTableColumns from "@/utils/TPOTableColumns";
import React, { useState } from "react";

const TPOList = () => {
  const [columnVisibility, setColumnVisibility] = useState({
    dob: false,
  });
  return (
    <>
      <Card className="w-full h-full">
        {/* Heading */}
        <div>
          <h1 className="p-3 text-xl  font-semibold px-5">
            Training Placement Officer List
          </h1>
          <Separator />
        </div>
        <CardContent className="pt-5">
          <TPOListTable
            data={tpoLists}
            columns={TPOTableColumns}
            columnVisibility={columnVisibility}
            setColumnVisibility={setColumnVisibility}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default TPOList;
