import { KpiCard } from "@/src/components/Dashboard/kpi-card";
import { OverviewChart } from "@/src/components/Dashboard/overview-chart";
import { CategoryStats } from "@/src/components/Dashboard/category-stats";
import { kpiMetrics } from "@/src/data/mock-dashboard";
import { Button } from "@/src/components/ui/button";
import { Download } from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 min-h-screen">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Dashboard
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Visão geral analítica do desempenho da plataforma.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="w-full md:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Exportar Dados
          </Button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {kpiMetrics.map((kpi) => (
          <KpiCard key={kpi.title} data={kpi} />
        ))}
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
        <div className="col-span-1 lg:col-span-4">
          <OverviewChart />
        </div>

        <div className="col-span-1 lg:col-span-3">
          <CategoryStats />
        </div>
      </div>
    </div>
  );
}
