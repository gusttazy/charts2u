import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Input } from "@/src/components/ui/input";
import { Search, CreditCard, Users, FileText } from "lucide-react";

interface SearchDialogProps {
  children: React.ReactNode; 
}

export function SearchDialog({ children }: SearchDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 gap-0 sm:max-w-130 overflow-hidden bg-background">
        <DialogHeader className="sr-only">
          <DialogTitle>Pesquisar</DialogTitle>
        </DialogHeader>

        {/* Área do Input */}
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Input
            placeholder="Digite para pesquisar..."
            className="flex h-12 w-full rounded-md border-0 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        {/* Área de Resultados Mockados (Visual Apenas) */}
        <div className="py-2">
          <p className="px-4 py-2 text-xs font-medium text-muted-foreground">
            Sugestões
          </p>
          <div className="flex flex-col px-2">
            <button className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground hover:bg-muted cursor-pointer transition-colors text-left">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
              <span>Transações Recentes</span>
            </button>
            <button className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground hover:bg-muted cursor-pointer transition-colors text-left">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>Novos Usuários</span>
            </button>
            <button className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground hover:bg-muted cursor-pointer transition-colors text-left">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span>Relatórios Mensais</span>
            </button>
          </div>
        </div>

        {/* Rodapé Visual */}
        <div className="flex items-center justify-between border-t bg-muted/50 px-4 py-2">
          <span className="text-xs text-muted-foreground">
            Pressione{" "}
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
              ESC
            </kbd>{" "}
            para fechar
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
