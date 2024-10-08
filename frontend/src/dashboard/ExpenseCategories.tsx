"use client";
import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export const description = "A donut chart with text";
const chartData = [
  { browser: "chrome", visitors: 275, fill: "#1dc355" },
  { browser: "safari", visitors: 200, fill: "#125427" },
  { browser: "firefox", visitors: 287, fill: "#098637" },
  { browser: "edge", visitors: 173, fill: "#113b1d" },
  { browser: "other", visitors: 190, fill: "#0e2014" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#1dc355",
  },
  safari: {
    label: "Safari",
    color: "#125427",
  },
  firefox: {
    label: "Firefox",
    color: "#098637",
  },
  edge: {
    label: "Edge",
    color: "#113b1d",
  },
  other: {
    label: "Other",
    color: "#0e2014",
  },
} satisfies ChartConfig;




const ExpenseCategories = () => {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);
  return (
    <>
      <div className="w-[500px] border m-5 pr-5">
        <div className="top px-5 pt-5">
          <h3 className="font-semibold text-lg">Dina Stora Utgifter</h3>
        </div>
        <div className="flex">
          <div className="w-1 pb-0 flex-1 ">
            <ChartContainer
              config={chartConfig}
              className="aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="visitors"
                  nameKey="browser"
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
                              Kronor
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </div>
          <div className="right grid grid-cols-2 gap-4">
            {chartData.map((expenseObj, index) => (
              <div className="max-h-16 500 border-l-4 border-green-950 pl-1 " key={index} style={{ borderColor: expenseObj.fill }}>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">{expenseObj.browser}</span>
                  <span className="text-lg font-medium" style={{ color: expenseObj.fill }}>24%</span>
                </div>
                <div className="text-base opacity-40">
                  12 300
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </>
  );
};

export default ExpenseCategories;
