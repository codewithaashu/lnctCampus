import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EllipsisVertical } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
const DriveCard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/drives/student-register");
  };
  return (
    <>
      <Card className="rounded-t-sm  border-t-[3px] border-t-primary">
        <div className="flex justify-between gap-5 items-center p-3 py-2 border-b-[1px]">
          <h1 className="text-base font-semibold">TCS Pvt. Ltd</h1>
          <div className="flex gap-3 items-center">
            <p className="p-[2px] px-2 text-blue-600 bg-blue-100 text-xs  rounded-full">
              Active
            </p>
            <DropdownMenu className="w-fit ">
              <DropdownMenuTrigger className="cursor-pointer hover:bg-muted p-1 rounded-full">
                <EllipsisVertical className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-fit">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Close</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <CardContent className="pt-3 flex flex-col gap-1">
          <div className="flex gap-[6px] items-center">
            <h1 className="text-[13.5px] font-semibold">Profile:</h1>
            <p className="text-[13.5px]  text-muted-foreground">
              Softare Developer
            </p>
          </div>
          <div className="flex gap-[6px] items-center">
            <h1 className="text-[13.5px] font-semibold">Location:</h1>
            <p className="text-[13.5px]  text-muted-foreground">Delhi</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <h1 className="text-[13.5px] font-semibold">Courses:</h1>
            <p className="text-[13.5px]  text-muted-foreground">
              LNCT CSE, LNCTU CSE, MCA
            </p>
          </div>
          <div className="flex gap-[6px] items-center">
            <h1 className="text-[13.5px] font-semibold">Package:</h1>
            <p className="text-[13.5px]  text-muted-foreground">5-7LPA</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <h1 className="text-[13.5px] font-semibold">Drive date:</h1>
            <p className="text-[13.5px]  text-muted-foreground">16/08/2024</p>
          </div>
          <div className="flex gap-[6px] items-center">
            <h1 className="text-[13.5px] font-semibold">Deadline:</h1>
            <p className="text-[13.5px]  text-muted-foreground">10/08/2024</p>
          </div>
          <div className="flex justify-between gap-5">
            <div className="flex gap-[6px] items-center">
              <h1 className="text-[13.5px] font-semibold">Eligibile:</h1>
              <p className="text-[13.5px]  text-muted-foreground">96</p>
            </div>
            <div className="flex gap-[6px] items-center">
              <h1 className="text-[13.5px] font-semibold">Selected:</h1>
              <p className="text-[13.5px]  text-muted-foreground">20</p>
            </div>
          </div>
          <Button className="mt-3 w-fit h-9 px-2 py-1" onClick={handleClick}>
            View Candidates
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default DriveCard;
