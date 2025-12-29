export interface KpiData {
  title: string;
  value: string | number;
  change: number;
  description: string;
  icon: "dollar" | "users" | "credit-card" | "activity";
}

export const kpiMetrics: KpiData[] = [
  {
    title: "Receita Total",
    value: "R$ 45.231,89",
    change: 20.1,
    description: "vs. mês anterior",
    icon: "dollar",
  },
  {
    title: "Novos Usuários",
    value: "+2350",
    change: 180.1,
    description: "vs. mês anterior",
    icon: "users",
  },
  {
    title: "Vendas",
    value: "+12,234",
    change: 19,
    description: "vs. mês anterior",
    icon: "credit-card",
  },
  {
    title: "Ativos Agora",
    value: "+573",
    change: 201,
    description: "usuários online",
    icon: "activity",
  },
];

export const revenueData = [
  { month: "Jan", revenue: 1800, expenses: 1200 },
  { month: "Fev", revenue: 2500, expenses: 1400 },
  { month: "Mar", revenue: 3200, expenses: 1600 },
  { month: "Abr", revenue: 2900, expenses: 2100 },
  { month: "Mai", revenue: 4500, expenses: 2800 },
  { month: "Jun", revenue: 3800, expenses: 2400 },
  { month: "Jul", revenue: 5200, expenses: 3100 },
];

export const categoryData = [
  { category: "Eletrônicos", sales: 4500, visitors: 3200 },
  { category: "Roupas", sales: 3200, visitors: 2800 },
  { category: "Casa", sales: 2100, visitors: 1900 },
  { category: "Livros", sales: 1500, visitors: 1100 },
];