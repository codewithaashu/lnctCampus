import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeIndianRupee, MapPin, ShieldCheck } from "lucide-react";
import React from "react";

const JobCard = () => {
  return (
    <>
      <Card className=" w-full cursor-pointer hover:border-primary border-2">
        <a href="https://www.linkedin.com/jobs/view/3860132638" target="_blank">
          <CardContent className="py-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-row gap-5 items-center border-b pb-3">
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
            <div className="flex flex-col gap-4 py-3">
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
      </Card>
    </>
  );
};

export default JobCard;
