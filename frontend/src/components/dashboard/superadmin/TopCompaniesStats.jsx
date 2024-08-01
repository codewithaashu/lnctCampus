import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      color: "hsl(var(--primary))",
    },
  };
  return (
    <>
      <Card className="shadow-md w-full lg:col-span-4">
        <CardContent className="flex flex-col gap-5">
          <CardHeader className="px-3 flex flex-row justify-between gap-5">
            <CardTitle className="text-lg">Top Companies</CardTitle>
            <p className="text-sm text-muted-foreground font-medium">
              Number of Placed Students
            </p>
          </CardHeader>
          <CardContent className="pl-2">
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
                <Bar
                  dataKey="students"
                  fill="var(--color-students)"
                  radius={8}
                  barSize={40}
                >
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
        </CardContent>
      </Card>
    </>
  );
};

export default TopCompaniesStats;
