import TPOListTable from "@/components/dashboard/superadmin/TPOListTable";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import TPOTableColumns from "@/utils/TPOTableColumns";
import React, { useState } from "react";

const TPOList = () => {
  const rowData = [
    {
      name: "Dr. Virendra Tiwari",
      email: "virendratiwari@lnct.ac.in",
      imgSrc:
        "https://img.freepik.com/free-photo/confident-male-teacher-wearing-glasses-sitting-table-with-school-tools-classroom_141793-114409.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721088000&semt=ais_user",
      userId: "virendra28",
      dob: "10/12/1986",
      contactNo: "8973214560",
      whatsappNo: "725894561",
      department: "MCA",
    },
    {
      name: "Prof. Dev chauhan",
      email: "virendratiwari@lnct.ac.in",
      imgSrc:
        "https://img.freepik.com/free-photo/confident-male-teacher-wearing-glasses-sitting-table-with-school-tools-classroom_141793-114409.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721088000&semt=ais_user",
      userId: "dev28",
      dob: "10/12/1985",
      contactNo: "8973214560",
      whatsappNo: "725894561",
      department: "MCA",
    },
    {
      name: "Dr. Virendra Tiwari",
      email: "virendratiwari@lnct.ac.in",
      imgSrc:
        "https://img.freepik.com/free-photo/confident-male-teacher-wearing-glasses-sitting-table-with-school-tools-classroom_141793-114409.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721088000&semt=ais_user",
      userId: "virendra28",
      dob: "10/12/1986",
      contactNo: "8973214560",
      whatsappNo: "725894561",
      department: "MCA",
    },
    {
      name: "Dr. Virendra Tiwari",
      email: "virendratiwari@lnct.ac.in",
      imgSrc:
        "https://img.freepik.com/free-photo/confident-male-teacher-wearing-glasses-sitting-table-with-school-tools-classroom_141793-114409.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721088000&semt=ais_user",
      userId: "virendra28",
      dob: "10/12/1986",
      contactNo: "8973214560",
      whatsappNo: "725894561",
      department: "MCA",
    },
  ];
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
            data={rowData}
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
