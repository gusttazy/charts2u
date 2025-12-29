"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/src/components/ui/chart";
import { categoryData } from "@/src/data/mock-dashboard";

const chartConfig = {
  sales: {
    label: "Vendas",
    color: "var(--chart-1)",
  },
  visitors: {
    label: "Visitantes",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function CategoryStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance por Categoria</CardTitle>
        <CardDescription>Relação Vendas x Visitantes</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Altura responsiva */}
        <ChartContainer config={chartConfig} className="h-62.5 w-full md:h-75">
          <BarChart accessibilityLayer data={categoryData}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              strokeOpacity={0.1}
            />
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            />
            <ChartTooltip
              cursor={{ fill: "var(--muted)", opacity: 0.1 }}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="sales"
              fill="var(--color-sales)"
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
            />
            <Bar
              dataKey="visitors"
              fill="var(--color-visitors)"
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
