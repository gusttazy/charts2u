"use client";

import { LogOut, Moon, Settings2, Sun, User, UserCircle2 } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { SidebarTrigger } from "../ui/sidebar";

export default function Navbar() {
  const { setTheme } = useTheme();

  return (
    <nav
      className="flex items-center justify-between p-4"
      aria-label="Barra de navegação principal"
    >
      <SidebarTrigger aria-label="Alternar sidebar" />

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Alterar tema">
              <Sun
                className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
                aria-hidden
              />
              <Moon
                className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
                aria-hidden
              />
              <span className="sr-only">Trocar tema</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Claro
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Escuro
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              Sistema
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Menu do usuário">
              <UserCircle2 aria-hidden />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent sideOffset={10} align="end">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" aria-hidden />
              Perfil
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Settings2 className="mr-2 h-4 w-4" aria-hidden />
              Configurações
            </DropdownMenuItem>

            <DropdownMenuItem variant="destructive">
              <LogOut className="mr-2 h-4 w-4" aria-hidden />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
