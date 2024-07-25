import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
const TopCompaniesStats = () => {
  const chartData = [
    { company: "Google", students: 186 },
    { company: "Amazon", students: 305 },
    { company: "Netflix", students: 237 },
    { company: "Blinkit", students: 73 },
    { company: "TCS", students: 209 },
    { company: "Accenture", students: 214 },
  ];

  const chartConfig = {
    students: {
      label: "Placed Students",
    },
  };
  return (
    <>
      <Card className="pt-3 w-[500px] h-[320px]">
        <CardContent className="flex flex-col gap-5">
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-lg font-semibold">Top Companies</h3>
            <p className="text-sm text-slate-400 font-medium">
              Number of Placed Students
            </p>
          </div>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
              }}
              height={500}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="company"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="students" fill="#2563EB" radius={8} barSize={40}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default TopCompaniesStats;
