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
import { SearchDialog } from "@/src/components/SearchDialog";

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
            <SidebarMenuButton
              size="lg"
              aria-label="Página inicial do dashboard"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ChartPie className="size-4" aria-hidden />
              </div>
              <span className="font-semibold">charts2u</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const Icon = item.icon;

                // LÓGICA ESPECIAL PARA O BOTÃO DE PESQUISA
                if (item.title === "Pesquisar") {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SearchDialog>
                        {/* Note que removemos o 'asChild' aqui para controlar o botão diretamente */}
                        <SidebarMenuButton
                          aria-label={item.title}
                          className="cursor-pointer"
                        >
                          <Icon className="mr-2 h-4 w-4" aria-hidden />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      </SearchDialog>
                    </SidebarMenuItem>
                  );
                }

                // LÓGICA PADRÃO PARA LINKS
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild aria-label={item.title}>
                      <Link href={item.url}>
                        <Icon className="mr-2 h-4 w-4" aria-hidden />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
