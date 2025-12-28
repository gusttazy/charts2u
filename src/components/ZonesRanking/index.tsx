"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";

const zones = [
  { name: "Zona Norte", value: 239, color: "bg-chart-1" },
  { name: "Zona Leste", value: 160, color: "bg-chart-2" },
  { name: "Zona Sul", value: 55, color: "bg-chart-3" },
  { name: "Zona Centro-Sul", value: 32, color: "bg-chart-4" },
  { name: "Zona Oeste", value: 22, color: "bg-chart-5" },
  { name: "Zona Centro-Oeste", value: 10, color: "bg-primary" },
];

const maxValue = Math.max(...zones.map((z) => z.value));

export function ZonesRanking() {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-border/50 flex flex-col">
      <CardHeader className="p-3.5 pb-3 border-b border-border/50 shrink-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm font-semibold text-foreground truncate">
              Ranking de Zonas
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5 truncate">
              Distribuição - Manaus/AM
            </p>
          </div>
          <Badge variant="secondary" className="text-[10px] font-bold shrink-0">
            Top 6
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-3.5 flex-1">
        <div className="h-62.5 sm:h-70 lg:h-80 w-full flex flex-col justify-evenly">
          {zones.map((zone, index) => (
            <div key={zone.name} className="group">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <Badge
                    variant="outline"
                    className="h-5 w-5 p-0 flex items-center justify-center text-[10px] font-bold shrink-0"
                  >
                    {index + 1}
                  </Badge>
                  <span className="text-xs font-medium text-foreground truncate">
                    {zone.name}
                  </span>
                </div>
                <span className="text-xs font-bold text-foreground tabular-nums ml-2 shrink-0">
                  {zone.value}
                </span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${zone.color} rounded-full transition-all duration-700 ease-out group-hover:opacity-90`}
                  style={{ width: `${(zone.value / maxValue) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
