import CreatePostBox from "@/components/dashboard/superadmin/CreatePostBox";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const CreatePosts = () => {
  return (
    <div className="w-full flex justify-center h-full">
      <Card className="w-3/4">
        <h1 className="p-2 rounded-t-sm bg-primary text-lg text-white font-semibold px-5">
          Create Post
        </h1>
        <CardContent className="pt-6">
          <CreatePostBox />
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePosts;
