import Link from "next/link";
import {
  ChartNoAxesCombined,
  ChartPie,
  Home,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/ui/sidebar";

type SidebarItem = {
  title: string;
  url: string;
  icon: React.ElementType;
};

const items: SidebarItem[] = [
  {
    title: "Início",
    url: "/",
    icon: Home,
  },
  {
    title: "Pesquisar",
    url: "/",
    icon: Search,
  },
  {
    title: "Estatísticas",
    url: "/",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Configurações",
    url: "/",
    icon: Settings,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon" aria-label="Menu lateral principal">
      <SidebarHeader className="py-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton aria-label="Página inicial do dashboard">
              <ChartPie aria-hidden />
              <span className="font-semibold">charts2u</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(({ title, url, icon: Icon }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton asChild aria-label={title}>
                    <Link href={url}>
                      <Icon className="mr-2 h-4 w-4" aria-hidden />
                      <span>{title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
