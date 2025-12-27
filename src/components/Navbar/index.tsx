"use client";

import {
  LogOut,
  Moon,
  Settings2,
  Sun,
  User,
  UserCircle2,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Button } from "@/src/components/ui/button";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "../ui/sidebar";

export default function Navbar() {
  // Hook para gerenciar o tema (claro/escuro/sistema)
  const { setTheme } = useTheme();

  return (
    // Navbar principal com padding e itens distribuídos entre as extremidades
    <nav className="p-4 flex items-center justify-between">
      {/* LADO ESQUERDO - Botão para abrir/fechar sidebar */}
      <SidebarTrigger />

      {/* LADO DIREITO - Links e menus de usuário */}
      <div className="flex items-center gap-4">
        {/* Link para a página do Dashboard */}
        <Link href="/">Dashboard</Link>

        {/* MENU DROPDOWN DE TEMAS */}
        <DropdownMenu>
          {/* Botão que abre o menu de temas */}
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              {/* Ícone de sol - visível no tema claro */}
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              {/* Ícone de lua - visível no tema escuro */}
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              {/* Texto acessível para leitores de tela */}
              <span className="sr-only">Trocar Tema</span>
            </Button>
          </DropdownMenuTrigger>
          {/* Conteúdo do dropdown alinhado à direita */}
          <DropdownMenuContent align="end">
            {/* Opção para tema claro */}
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            {/* Opção para tema escuro */}
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            {/* Opção para seguir o tema do sistema */}
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* MENU DROPDOWN DE USUÁRIO */}
        <DropdownMenu>
          {/* Ícone de usuário que abre o menu */}
          <DropdownMenuTrigger>
            <UserCircle2 className="h-8 w-8 cursor-pointer" />
          </DropdownMenuTrigger>
          {/* Conteúdo do menu com espaçamento superior de 10px */}
          <DropdownMenuContent sideOffset={10}>
            {/* Título do menu */}
            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
            {/* Linha divisória */}
            <DropdownMenuSeparator />
            {/* Opção para ver perfil do usuário */}
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2" />
              Perfil
            </DropdownMenuItem>
            {/* Opção para acessar configurações */}
            <DropdownMenuItem>
              <Settings2 className="h-[1.2rem] w-[1.2rem] mr-2" />
              Configurações
            </DropdownMenuItem>
            {/* Opção para sair com estilo destrutivo (vermelho) */}
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2 " />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}