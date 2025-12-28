import {
  Home,
  Plus,
  Search,
  Settings,
  ChartNoAxesCombined,
  ChartPie,
} from "lucide-react";
import {
  SidebarContent,
  SidebarHeader,
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/src/components/ui/sidebar";
import Link from "next/link";

// Array com os itens do menu da sidebar
// Cada item possui título, URL de destino e ícone
const items = [
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
    title: "Adicionar",
    url: "/",
    icon: Plus,
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
    // Sidebar principal com opção de colapsar em ícones
    <Sidebar collapsible="icon">
      {/* Cabeçalho da sidebar com logo/nome do app */}
      <SidebarHeader className="py-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <ChartPie />
              <span className="font-semibold">charts2u</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      {/* Conteúdo principal da sidebar */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Mapeia cada item do array criando um link de navegação */}
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {/* asChild permite que o Link do Next.js seja o elemento clicável */}
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      {/* Renderiza o ícone do item */}
                      <item.icon className="mr-2 h-4 w-4" />
                      {/* Renderiza o título do item */}
                      <span>{item.title}</span>
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
