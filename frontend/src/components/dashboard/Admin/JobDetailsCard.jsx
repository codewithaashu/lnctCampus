import { Badge } from "@/components/ui/badge";
import { BadgeIndianRupee, IndianRupee, MapPin } from "lucide-react";
import React from "react";

const JobDetailsCard = () => {
  return (
    <>
      <div className="w-full py-[14px] border-b">
        <div className="flex flex-row gap-5 items-center">
          <img
            src="https://media.licdn.com/dms/image/C4E0BAQErzXWSFkn9tQ/company-logo_100_100/0/1663664110809/cgi_logo?e=1726099200&v=beta&t=qHLQIGhITuqESsPtC55uz6RH3tivCEDfxyRDRVJ6Wz8"
            alt="Company Logo"
            className="w-[60px] h-[60px]"
          />
          <div className="flex flex-col gap-0">
            <p className="text-lg font-semibold leading-6">React Developer</p>
            <p className="text-sm text-muted-foreground font-semibold">
              LinkedIn Corporation
            </p>
            <p className="text-xs text-muted-foreground font-medium">
              Bangalore,India
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1 items-start">
              <div className="flex flex-row gap-1 items-center">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <p className="text-[13px] md:text-sm text-muted-foreground">
                  Job location
                </p>
              </div>
              <p className="text-xs md:text-[13px] text-muted-foreground">
                Rohtak,Gurgaon,Delhi
              </p>
            </div>
            <div className="flex flex-col gap-1 ">
              <div className="flex flex-row gap-1 items-center">
                <BadgeIndianRupee className="w-4 h-4 text-muted-foreground" />
                <p className="text-[13px] md:text-sm text-muted-foreground">
                  Salary or Stipend
                </p>
              </div>
              <p className="text-xs md:text-[13px] text-muted-foreground">
                ₹ 3,60,000/year
              </p>
            </div>
            <div className="flex flex-col gap-1 ">
              <div className="flex flex-row gap-1 items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/14765/14765084.png"
                  alt="Icon"
                  className="w-4 h-4"
                />
                <p className="text-[13px] md:text-sm text-muted-foreground">
                  Skills
                </p>
              </div>
              <p className="text-xs md:text-[13px] text-muted-foreground">
                Python, C, C++, Java, JavaScript
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
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
      </div>
    </>
  );
};

export default JobDetailsCard;
