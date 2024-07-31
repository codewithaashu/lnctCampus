import ProfileBox from "@/components/dashboard/superadmin/ProfileBox";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex justify-center w-full h-full items-center ">
        <Card className="w-11/12">
          {/* Heading */}
          <div className="p-2 flex gap-3 items-center rounded-t-sm bg-muted text-lg  font-semibold px-3">
            <h1>My Profile</h1>
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
