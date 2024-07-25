import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const StatsCard = ({ title, value }) => {
  return (
    <>
      <Card className="statsCard pt-5 cursor-pointer hover:bg-primary hover:text-white text-black">
        <CardContent className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">{value}</h1>
          <p className="text-[15px] title font-semibold text-gray-500 ">
            {title}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default StatsCard;
