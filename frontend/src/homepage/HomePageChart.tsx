import { motion } from 'framer-motion';
"use client"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
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
export const description = "A multiple bar chart"
const chartData = [
    { month: "", desktop: 186, mobile: 80 },
    { month: "", desktop: 305, mobile: 200 },
    { month: "", desktop: 237, mobile: 120 },
    { month: "", desktop: 73, mobile: 190 },
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


const bars = [
    { "height": "33", "duration": 1, "delay": "0" },
    { "height": "52", "duration": 0.5, "delay": "0.6" },
    { "height": "81", "duration": 2.2, "delay": "0" },
    { "height": "24", "duration": 1.7, "delay": "1" },
    { "height": "47", "duration": 3, "delay": "0" },
    { "height": "30", "duration": 1.8, "delay": "0.3" },
    { "height": "14", "duration": 2.8, "delay": "0.3" },
    { "height": "67", "duration": 2.0, "delay": "0" },
    { "height": "59", "duration": 2, "delay": "0" },
    { "height": "15", "duration": 0.7, "delay": "0" },
    { "height": "5", "duration": 1, "delay": "0" },
]


const HomePageChart = () => {
    return (
        <>

            <div className="barContainer ml-16 overflow-hidden  w-1/2   flex items-end  relative bottom-[-0px]">


                {bars.map((bar, index) => (

                    <motion.div key={index} className="bar w-[36px] bg-[#09B96D] mx-4 "
                        initial={{ height: 0 }}
                        animate={{ height: `${bar.height}%` }}
                        transition={{ type: "spring", duration: `${bar.duration}`, delay: parseFloat(bar.delay), }}>

                    </motion.div>
                ))}

            </div >

        </>
    )
}

export default HomePageChart