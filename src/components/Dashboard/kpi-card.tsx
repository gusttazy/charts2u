import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import { KpiData } from "@/src/data/mock-dashboard";

const iconMap = {
  dollar: DollarSign,
  users: Users,
  "credit-card": CreditCard,
  activity: Activity,
};

export function KpiCard({ data }: { data: KpiData }) {
  const Icon = iconMap[data.icon];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {data.title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{data.value}</div>
        <p className="text-xs text-muted-foreground mt-1">
          <span
            className={
              data.change > 0 ? "text-emerald-500 font-medium" : "text-rose-500 font-medium"
            }
          >
            {data.change > 0 ? "+" : ""}
            {data.change}%
          </span>{" "}
          {data.description}
        </p>
      </CardContent>
    </Card>
  );
}