import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const StatsCard = ({ title, value }) => {
  return (
    <>
      <Card className="statsCard pt-5 cursor-pointer hover:bg-primary hover:text-white  shadow-md border hover:border-primary">
        <CardContent className="flex flex-col items-center gap-[2px]">
          <h1 className="text-2xl font-semibold">{value}</h1>
          <p className="text-sm title font-semibold text-muted-foreground">
            {title}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default StatsCard;
