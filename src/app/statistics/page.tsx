"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/ui/chart";
import {
  TrendingUp,
  Info,
  Smartphone,
  Globe,
  Activity,
  Link as LinkIcon,
} from "lucide-react";

const trafficData = [
  { source: "Google", visitors: 4500, fill: "var(--chart-1)" },
  { source: "Direto", visitors: 3200, fill: "var(--chart-2)" },
  { source: "Social", visitors: 2100, fill: "var(--chart-3)" },
  { source: "Email", visitors: 1500, fill: "var(--chart-4)" },
  { source: "Outros", visitors: 900, fill: "var(--chart-5)" },
];

const referralData = [
  { source: "google.com", visitors: 3200, fill: "var(--chart-1)" },
  { source: "linkedin.com", visitors: 1800, fill: "var(--chart-2)" },
  { source: "twitter.com", visitors: 1200, fill: "var(--chart-3)" },
  { source: "facebook.com", visitors: 900, fill: "var(--chart-4)" },
];

const growthData = [
  { month: "Jan", free: 120, premium: 80 },
  { month: "Fev", free: 160, premium: 100 },
  { month: "Mar", free: 200, premium: 140 },
  { month: "Abr", free: 280, premium: 190 },
  { month: "Mai", free: 350, premium: 250 },
  { month: "Jun", free: 480, premium: 310 },
];

const performanceData = [
  { subject: "Velocidade", A: 120, B: 110, fullMark: 150 },
  { subject: "Confiabilidade", A: 98, B: 130, fullMark: 150 },
  { subject: "Segurança", A: 86, B: 130, fullMark: 150 },
  { subject: "Usabilidade", A: 99, B: 100, fullMark: 150 },
  { subject: "Design", A: 85, B: 90, fullMark: 150 },
  { subject: "SEO", A: 65, B: 85, fullMark: 150 },
];

const deviceData = [
  { device: "Desktop", users: 12500, fill: "var(--chart-1)" },
  { device: "Mobile", users: 8400, fill: "var(--chart-2)" },
  { device: "Tablet", users: 2300, fill: "var(--chart-3)" },
];

const trafficConfig = {
  visitors: { label: "Visitantes" },
  google: { label: "Google", color: "hsl(var(--chart-1))" },
  direct: { label: "Direto", color: "hsl(var(--chart-2))" },
  social: { label: "Social", color: "hsl(var(--chart-3))" },
  email: { label: "Email", color: "hsl(var(--chart-4))" },
  other: { label: "Outros", color: "hsl(var(--chart-5))" },
} satisfies ChartConfig;

const referralConfig = {
  visitors: { label: "Visitantes", color: "hsl(var(--chart-2))" },
} satisfies ChartConfig;

const growthConfig = {
  free: { label: "Free", color: "hsl(var(--chart-1))" },
  premium: { label: "Premium", color: "hsl(var(--chart-2))" },
} satisfies ChartConfig;

const radarConfig = {
  A: { label: "Este Mês", color: "hsl(var(--chart-1))" },
  B: { label: "Mês Anterior", color: "hsl(var(--chart-3))" },
} satisfies ChartConfig;

const deviceConfig = {
  users: { label: "Acessos" },
} satisfies ChartConfig;

export default function StatisticsPage() {
  const totalVisitors = trafficData.reduce(
    (acc, curr) => acc + curr.visitors,
    0
  );

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6 pb-20">
      <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Estatísticas Avançadas
          </h2>
          <p className="text-muted-foreground">
            Análise detalhada de tráfego, conversão e métricas técnicas.
          </p>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 lg:col-span-2 flex flex-col h-full min-h-125">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Crescimento de Usuários
            </CardTitle>
            <CardDescription>
              Comparativo Free vs Premium (Semestre 1)
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 min-h-75">
            <ChartContainer config={growthConfig} className="h-full w-full">
              <AreaChart
                data={growthData}
                margin={{ top: 20, left: 0, right: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="fillFree" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--chart-1)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--chart-1)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id="fillPremium" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--chart-2)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--chart-2)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  strokeOpacity={0.1}
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                  tick={{ fill: "var(--muted-foreground)" }}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Area
                  dataKey="premium"
                  type="monotone"
                  stroke="var(--chart-2)"
                  fill="url(#fillPremium)"
                  strokeWidth={2}
                  stackId="1"
                />
                <Area
                  dataKey="free"
                  type="monotone"
                  stroke="var(--chart-1)"
                  fill="url(#fillFree)"
                  strokeWidth={2}
                  stackId="1"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="border-t pt-4 bg-muted/10">
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Tendência de alta de 5.2% este mês{" "}
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  Conversão de usuários Free para Premium aumentou
                  significativamente.
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>

        <div className="col-span-1 flex flex-col gap-4 h-full">
          <Card className="flex-1 flex flex-col">
            <CardHeader className="items-center pb-0 pt-4">
              <CardTitle className="flex items-center gap-2 text-base">
                <Globe className="h-4 w-4 text-muted-foreground" /> Origem do
                Tráfego
              </CardTitle>
              <CardDescription className="text-xs">
                Distribuição por canal
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-2 min-h-45 flex items-center justify-center">
              <ChartContainer
                config={trafficConfig}
                className="mx-auto aspect-square h-full max-h-45"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={trafficData}
                    dataKey="visitors"
                    nameKey="source"
                    innerRadius={50}
                    outerRadius={80}
                    strokeWidth={3}
                    stroke="var(--background)"
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
                                className="fill-foreground text-2xl font-bold"
                              >
                                {totalVisitors.toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 20}
                                className="fill-muted-foreground text-[10px]"
                              >
                                Visitantes
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
            <CardFooter className="flex-col gap-1 text-xs text-center pt-2 pb-4 text-muted-foreground">
              <div>O tráfego orgânico lidera.</div>
            </CardFooter>
          </Card>

          <Card className="flex-1 flex flex-col">
            <CardHeader className="pb-2 pt-4">
              <CardTitle className="flex items-center gap-2 text-base">
                <LinkIcon className="h-4 w-4 text-muted-foreground" /> Top
                Referências
              </CardTitle>
              <CardDescription className="text-xs">
                Principais domínios externos
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-2 min-h-37">
              <ChartContainer
                config={referralConfig}
                className="h-full w-full max-h-45"
              >
                <BarChart
                  accessibilityLayer
                  data={referralData}
                  layout="vertical"
                  margin={{ left: 0, right: 10 }}
                >
                  <defs>
                    <linearGradient
                      id="barGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop
                        offset="0%"
                        stopColor="var(--color-visitors)"
                        stopOpacity={0.6}
                      />
                      <stop
                        offset="100%"
                        stopColor="var(--color-visitors)"
                        stopOpacity={1}
                      />
                    </linearGradient>
                  </defs>

                  <YAxis
                    dataKey="source"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                    width={80}
                  />
                  <XAxis type="number" hide />
                  <ChartTooltip
                    cursor={{ fill: "var(--muted)", opacity: 0.1 }}
                    content={<ChartTooltipContent />}
                  />
                  <Bar
                    dataKey="visitors"
                    layout="vertical"
                    fill="url(#barGradient)"
                    radius={[0, 4, 4, 0]}
                    barSize={24}
                  >
                    <LabelList
                      dataKey="visitors"
                      position="right"
                      className="fill-foreground font-medium"
                      fontSize={10}
                      formatter={(value: number) => value.toLocaleString()}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="col-span-1 flex flex-col h-full">
          <CardHeader className="items-center pb-4">
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-muted-foreground" /> Índice de
              Qualidade
            </CardTitle>
            <CardDescription>Comparativo Mensal</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0 min-h-62">
            <ChartContainer
              config={radarConfig}
              className="mx-auto aspect-square max-h-62"
            >
              <RadarChart data={performanceData}>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                />
                <PolarGrid stroke="var(--border)" />
                <Radar
                  dataKey="A"
                  fill="var(--chart-1)"
                  fillOpacity={0.4}
                  stroke="var(--chart-1)"
                  strokeWidth={2}
                />
                <Radar
                  dataKey="B"
                  fill="var(--chart-3)"
                  fillOpacity={0.1}
                  stroke="var(--chart-3)"
                  strokeWidth={2}
                />
              </RadarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="border-t pt-4 bg-muted/10">
            <div className="flex w-full items-start gap-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4 mt-0.5" />
              <p>
                Melhoria notável em <strong>Confiabilidade</strong> após update.
              </p>
            </div>
          </CardFooter>
        </Card>

        <Card className="col-span-1 lg:col-span-2 h-full flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-muted-foreground" />
              Dispositivos Utilizados
            </CardTitle>
            <CardDescription>
              Total de acessos únicos por plataforma
            </CardDescription>
          </CardHeader>

          {/* flex-1 faz este container crescer para ocupar o espaço vazio */}
          <CardContent className="flex-1 min-h-50">
            {/* h-full e aspect-auto garantem que o gráfico estique verticalmente */}
            <ChartContainer
              config={deviceConfig}
              className="h-full w-full aspect-auto"
            >
              <BarChart
                accessibilityLayer
                data={deviceData}
                layout="vertical"
                margin={{ left: 0, right: 10 }}
              >
                <CartesianGrid horizontal={false} strokeOpacity={0.1} />

                <YAxis
                  dataKey="device"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "var(--muted-foreground)" }}
                  width={80}
                />

                <XAxis dataKey="users" type="number" hide />

                <ChartTooltip
                  cursor={{ fill: "var(--muted)", opacity: 0.1 }}
                  content={<ChartTooltipContent />}
                />

                <Bar
                  dataKey="users"
                  layout="vertical"
                  radius={[0, 4, 4, 0]}
                  barSize={32}
                >
                  <LabelList
                    dataKey="users"
                    position="right"
                    className="fill-foreground font-medium"
                    fontSize={12}
                    formatter={(value: number) => value.toLocaleString()}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>

          <CardFooter className="flex items-center justify-between text-sm border-t pt-4 bg-muted/10 mt-auto">
            <div className="text-muted-foreground">
              Mobile representa 65% do tráfego total.
            </div>
            <div className="font-medium text-emerald-500 flex items-center">
              +8% Mobile <TrendingUp className="ml-1 h-3 w-3" />
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
