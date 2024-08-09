import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AlertDialogComponent from "@/shareable/AlertDialogComponent";
import {
  BadgeIndianRupee,
  Ellipsis,
  Eye,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import React, { useState } from "react";
import JobEditDialog from "./JobEditDialog";

const JobCard = () => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const deleteDrive = () => {};
  return (
    <>
      <Card className=" w-full cursor-pointer hover:border-primary border-2">
        <a href="https://www.linkedin.com/jobs/view/3860132638" target="_blank">
          <CardContent className="pt-4 pb-0">
            <div className="flex justify-between items-center border-b">
              <div className="flex flex-row gap-5 items-center  pb-3">
                <img
                  src="https://media.licdn.com/dms/image/C4E0BAQErzXWSFkn9tQ/company-logo_100_100/0/1663664110809/cgi_logo?e=1726099200&v=beta&t=qHLQIGhITuqESsPtC55uz6RH3tivCEDfxyRDRVJ6Wz8"
                  alt="Company Logo"
                  className="w-[60px] h-[60px]"
                />
                <div className="flex flex-col gap-0">
                  <p className="text-base font-semibold leading-6">
                    React Developer
                  </p>
                  <p className="text-[13px] text-muted-foreground font-semibold">
                    LinkedIn Corporation
                  </p>
                  <p className="text-[11px] text-muted-foreground font-medium">
                    Bangalore,India
                  </p>
                </div>
              </div>
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col gap-4 py-3 border-b">
              <div className="flex flex-col gap-[6px]">
                <div className="flex flex-row gap-2 items-center">
                  <MapPin className="text-sm text-muted-foreground w-[14px] h-[14px]" />
                  <p className="text-[13px] text-muted-foreground">
                    Rohtak,Gurgaon,Delhi
                  </p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <BadgeIndianRupee className="text-sm text-muted-foreground w-[14px] h-[14px]" />
                  <p className="text-[13px] text-muted-foreground">
                    ₹ 3,60,000/year
                  </p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/14765/14765084.png"
                    alt="Icon"
                    className="w-[14px] h-[14px] text-muted-foreground"
                  />
                  <p className="text-[13px] text-muted-foreground">
                    Python, C, C++, Java, JavaScript
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <Badge className="text-xs font-semibold bg-green-100 text-green-600 hover:bg-green-100">
                  Internship
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-muted-foreground font-normal text-xs"
                >
                  2 days ago
                </Badge>
              </div>
            </div>
          </CardContent>
        </a>
        <div className="flex justify-between py-3 px-4">
          <div className="flex gap-1 items-center">
            <Eye className="w-4 h-4" />
            <p className="text-xs font-normal text-muted-foreground">
              300 Impressions
            </p>
          </div>
          <DropdownMenu className="w-fit">
            <DropdownMenuTrigger>
              <Button
                variant="ghost"
                className="h-8 px-3 focus-visible:ring-0 focus-visible:ring-transparent"
              >
                <Ellipsis className="cursor-pointer w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="top" className="w-fit">
              <DropdownMenuItem onClick={() => setOpenEditDialog(true)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpenDeleteAlert(true)}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>
      {/* Dialog and alert component */}
      <JobEditDialog
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        form={{
          jobProfile: "",
          profileCategory: "",
          jobCategory: "",
          package: "",
          jobType: "",
          applyURL: "",
          jobLocations: [],
          skills: [],
          jobDescription: "",
        }}
      />
      <AlertDialogComponent
        open={openDeleteAlert}
        setOpen={setOpenDeleteAlert}
        title={"Are you absolutely sure?"}
        description={`This action cannot be undone. This will permanently delete the job.`}
        handleContinue={deleteDrive}
      />
    </>
  );
};

export default JobCard;
