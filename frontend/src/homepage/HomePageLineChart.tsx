import React from 'react'
"use client"
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
export const description = "A multiple line chart"
const chartData = [
    { month: "", desktop: 300, mobile: 0 },
    { month: "", desktop: 160, mobile: 200 },
    { month: "", desktop: 137, mobile: 120 },
    { month: "", desktop: 100, mobile: 190 },
    { month: "", desktop: 209, mobile: 130 },
    { month: "", desktop: 214, mobile: 140 },
]
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

const HomePageLineChart = () => {
    return (
        <>
          
                <CardContent className=' h-3/4 overflow-hidden'>
                    <ChartContainer config={chartConfig} className='mt-[15%] h-full'>
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <Line
                                dataKey="desktop"
                                type="monotone"
                                stroke="green"
                                strokeWidth={5}
                                dot={false}
                            />
                            <Line
                                dataKey="mobile"
                                type="monotone"
                                stroke="darkgreen"
                                strokeWidth={5}
                                dot={false}
                            />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
          
      
        </>
    )
}

export default HomePageLineChart