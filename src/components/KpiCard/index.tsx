import { Card, CardContent } from "@/src/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  label: string;
  sublabel: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
}

export function KpiCard({
  label,
  sublabel,
  value,
  change,
  trend,
  icon: Icon,
}: KpiCardProps) {
  const isPositive = trend === "up";
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-border/50 flex flex-col">
      <CardContent className="p-5">
        {/* Header com label e ícone */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-foreground truncate">
              {label}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5 truncate">
              {sublabel}
            </p>
          </div>

          <div className="flex shrink-0 p-2.5 rounded-lg bg-primary/5 ring-1 ring-primary/10">
            <Icon className="w-4 h-4 text-primary" strokeWidth={2.5} />
          </div>
        </div>

        {/* Valor e mudança */}
        <div className="flex items-end justify-between gap-3">
          <span className="text-3xl font-bold text-foreground tracking-tight">
            {value}
          </span>

          <div
            className={cn(
              "flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md transition-colors",
              isPositive
                ? "text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/50"
                : "text-red-700 bg-red-50 dark:text-red-400 dark:bg-red-950/50"
            )}
          >
            <TrendIcon className="w-3.5 h-3.5" strokeWidth={2.5} />
            <span>{change}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
