import {
  Inbox,
  Home,
  Calendar,
  Search,
  Settings,
  User2,
  ChevronUp,
  LayoutDashboard,
  Plus,
  FolderOpen,
  ListPlus,
} from "lucide-react";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupAction,
} from "@/src/components/ui/sidebar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

// Array com os itens do menu da sidebar
// Cada item possui título, URL de destino e ícone
const items = [
  {
    title: "Início",
    url: "/",
    icon: Home,
  },
  {
    title: "Mensagens",
    url: "/",
    icon: Inbox,
  },
  {
    title: "Calendário",
    url: "/",
    icon: Calendar,
  },
  {
    title: "Pesquisar",
    url: "/",
    icon: Search,
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
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LayoutDashboard className="h-5 w-5 mr-2" />
              <span className="font-bold">charts2u</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Conteúdo principal da sidebar */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
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

        <SidebarGroup>
          <SidebarGroupLabel>Projetos</SidebarGroupLabel>
          <SidebarGroupAction>
            <ListPlus /> <span className="sr-only">Adicionar Projeto</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <FolderOpen />
                    Ver todos os projetos
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Plus />
                    Adicionar projeto
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Rodapé da sidebar com menu do usuário */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* Menu dropdown para opções do usuário */}
            <DropdownMenu>
              {/* Botão que abre o menu dropdown */}
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> charts2u <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              {/* Conteúdo do dropdown alinhado à direita */}
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Minha Conta</DropdownMenuItem>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuItem>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
