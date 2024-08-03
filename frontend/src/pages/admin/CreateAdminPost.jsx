import CreatePostBox from "@/components/dashboard/Admin/CreatePostBox";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

const CreateAdminPost = () => {
  return (
    <>
      <Card className="w-full">
        <h1 className="p-3 text-xl font-semibold px-5">Create Post</h1>
        <Separator />
        <CardContent className="pt-6">
          <CreatePostBox />
        </CardContent>
      </Card>
    </>
  );
};

export default CreateAdminPost;
