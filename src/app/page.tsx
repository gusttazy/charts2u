import { KpiCard } from "@/src/components/KpiCard";
import { ZonesRanking } from "@/src/components/ZonesRanking";
import { GrowthChart } from "@/src/components/GrowthChart";
import { Activity, Calendar, TrendingUp } from "lucide-react";

const kpis = [
  {
    label: "Mês Atual",
    sublabel: "dezembro 2025",
    value: "123",
    change: "+12%",
    trend: "up" as const,
    icon: Activity,
  },
  {
    label: "Mês Passado",
    sublabel: "novembro 2025",
    value: "201",
    change: "-8%",
    trend: "down" as const,
    icon: Calendar,
  },
  {
    label: "Total Anual",
    sublabel: "2025",
    value: "1.263",
    change: "+24%",
    trend: "up" as const,
    icon: TrendingUp,
  },
];

export default function App() {
  return (
    <div className="min-h-screen w-full p-4 bg-background">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Grid de KPIs - 3 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.label} {...kpi} />
          ))}
        </div>

        {/* Grid de Análises - 2 colunas com proporção 2:3 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2">
            <ZonesRanking />
          </div>
          
          <div className="lg:col-span-3">
            <GrowthChart />
          </div>
        </div>
      </div>
    </div>
  );
}