import React, { useState } from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Label, Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SelectComponent from "@/shareable/SelectComponent";
import { Programs } from "@/db/programs";
import { colors, placementStats } from "@/db/placementStats";

const PlacedStudentStats = () => {
  const chartData = Object.keys(placementStats[0]).map((curr, index) => {
    return {
      program: curr,
      students: placementStats[0][curr],
      fill: colors[index],
      label: curr,
    };
  });
  var chartConfig = {};
  Object.keys(placementStats[0]).map((curr, index) => {
    const obj = { label: curr };
    chartConfig[curr] = obj;
  });
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.students, 0);
  }, []);
  const [form, setForm] = useState({ course: "" });
  return (
    <>
      <Card className="col-span-1 shadow-md h-fit">
        <CardHeader className="px-7 flex flex-row justify-between gap-5 items-center">
          <CardTitle className="text-lg">Placed Students</CardTitle>
          <SelectComponent
            placeholder={"Program"}
            label={"Program"}
            items={Programs}
            triggerWidth={"w-[100px] h-fit"}
            field={"course"}
            form={form}
            setForm={setForm}
          />
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
