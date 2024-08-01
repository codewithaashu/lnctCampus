import ProfileBox from "@/components/dashboard/superadmin/ProfileBox";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Profile = () => {
  return (
    <>
      <Card className="w-full">
        {/* Heading */}
        <div>
          <h1 className="p-3 text-xl font-semibold px-5">My Profile</h1>
          <Separator />
        </div>
        <CardContent className="pt-5">
          <ProfileBox />
        </CardContent>
      </Card>
    </>
  );
};

export default Profile;
