"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { month: "Jan", value: 120 },
  { month: "Fev", value: 145 },
  { month: "Mar", value: 160 },
  { month: "Abr", value: 180 },
  { month: "Mai", value: 210 },
  { month: "Jun", value: 252 },
];

export function GrowthChart() {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-border/50 flex flex-col">
      <CardHeader className="p-3.5 pb-3 border-b border-border/50 shrink-0">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm font-semibold text-foreground truncate">
              Taxa de Crescimento
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5 truncate">
              Evolução mensal - 2025
            </p>
          </div>
          <Badge
            variant="secondary"
            className="flex items-center gap-1 text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/50 text-[10px] font-bold shrink-0"
          >
            <TrendingUp className="w-3 h-3" strokeWidth={2.5} />
            +20%
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-3.5 flex-1">
        <div className="h-62.5 sm:h-70 lg:h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 2,
                left: -2,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="oklch(0.55 0.2 250)"
                    stopOpacity={0.4}
                  />
                  <stop
                    offset="100%"
                    stopColor="oklch(0.55 0.2 250)"
                    stopOpacity={0.05}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                opacity={0.3}
                vertical={false}
              />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                dy={5}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                width={30}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                  fontSize: "11px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  padding: "6px 10px",
                }}
                labelStyle={{
                  color: "hsl(var(--foreground))",
                  fontWeight: 600,
                  fontSize: "11px",
                }}
                itemStyle={{
                  color: "hsl(var(--muted-foreground))",
                  fontSize: "11px",
                }}
              />

              <Area
                type="monotone"
                dataKey="value"
                stroke="oklch(0.55 0.2 250)"
                strokeWidth={2.5}
                fill="url(#colorGrowth)"
                animationDuration={1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
