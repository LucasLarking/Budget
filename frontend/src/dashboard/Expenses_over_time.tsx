"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
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
export const description = "A bar chart";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "June", desktop: 24 },
  { month: "June", desktop: 114 },
  { month: "June", desktop: 24 },
  { month: "June", desktop: 74 },
  { month: "June", desktop: 214 },
  { month: "June", desktop: 214 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#09B96D",
  },
} satisfies ChartConfig;

const Expenses_over_time = () => {
  return (
    <>
      {/* #09B96D */}
      <div className="h-96 pb-4  bg-[#09B96D]   overscroll-hide relative  border ">
        <div className="mt-4 ml-4">
          <h3 className="font-semibold text-lg text-white">Utgifter</h3>
          <span className="text-white">Uppdelat På Dagar</span>
        </div>
        <div className="relative h-full">
          <ChartContainer config={chartConfig} className="  max-h-[80%] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
              className="text-white"
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                // tick={{ fill: 'white' }}
                
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="desktop" fill="#86efad" radius={8} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </>
  );
};

export default Expenses_over_time;
