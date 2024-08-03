import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { colors } from "@/db/placementStats";
import React, { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";

const PlacedStudentStats = ({ placedStats }) => {
  const chartData = Object.keys(placedStats).map((curr, index) => {
    return {
      program: curr,
      students: placedStats[curr],
      fill: colors[index],
      label: curr,
    };
  });
  var chartConfig = {};
  Object.keys(placedStats).map((curr, index) => {
    const obj = { label: curr };
    chartConfig[curr] = obj;
  });
  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.students, 0);
  }, []);
  return (
    <>
      <Card className="col-span-1 shadow-md h-fit">
        <CardHeader className="px-7 flex flex-row justify-between gap-5 items-center">
          <CardTitle className="text-lg">Placed Students</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="students"
                nameKey="program"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Placed Students
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default PlacedStudentStats;
