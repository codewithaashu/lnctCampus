import ProfileBox from "@/components/dashboard/superadmin/ProfileBox";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex justify-center w-full h-full items-center ">
        <Card className="w-11/12">
          {/* Heading */}
          <div>
            <h1 className="p-3 text-xl  font-semibold px-5">My Profile</h1>
            <Separator className="border" />
          </div>
          <CardContent className="pt-5">
            <ProfileBox />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Profile;
