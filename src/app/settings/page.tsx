"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Switch } from "@/src/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Separator } from "@/src/components/ui/separator";
import { Button } from "@/src/components/ui/button";
import { Save, RefreshCw, Monitor, BellRing } from "lucide-react";

export default function SettingsPage() {
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [animations, setAnimations] = useState(true);
  const [soundEffects, setSoundEffects] = useState(false);
  const [privacyMode, setPrivacyMode] = useState(false);

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6 pb-20">
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="space-y-1 text-center sm:text-left">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Configurações
          </h2>
          <p className="text-sm text-muted-foreground">
            Gerencie as preferências globais do sistema.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <RefreshCw className="mr-2 h-4 w-4" />
            Restaurar
          </Button>
          <Button size="sm" className="w-full sm:w-auto">
            <Save className="mr-2 h-4 w-4" />
            Salvar
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Monitor className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>Interface & Aparência</CardTitle>
                <CardDescription>Visualização da plataforma.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="theme-select" className="text-base sm:text-sm">
                  Tema do Sistema
                </Label>
                <p className="text-xs text-muted-foreground">
                  Padrão de cores da interface.
                </p>
              </div>
              <Select defaultValue="dark">
                <SelectTrigger className="w-full sm:w-45" id="theme-select">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Claro</SelectItem>
                  <SelectItem value="dark">Escuro (Neon)</SelectItem>
                  <SelectItem value="system">Sistema</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="animations" className="text-base sm:text-sm">
                  Animações
                </Label>
                <p className="text-xs text-muted-foreground">
                  Transições suaves na tela.
                </p>
              </div>
              <Switch
                id="animations"
                checked={animations}
                onCheckedChange={setAnimations}
              />
            </div>

            <Separator />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="density" className="text-base sm:text-sm">
                  Densidade
                </Label>
                <p className="text-xs text-muted-foreground">
                  Compactar tabelas de dados.
                </p>
              </div>
              <Select defaultValue="comfortable">
                <SelectTrigger className="w-full sm:w-45" id="density">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="comfortable">Confortável</SelectItem>
                  <SelectItem value="compact">Compacto</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <RefreshCw className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>Dados & Performance</CardTitle>
                <CardDescription>Frequência e formatação.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="auto-refresh" className="text-base sm:text-sm">
                  Tempo Real
                </Label>
                <p className="text-xs text-muted-foreground">
                  Atualizar via WebSocket.
                </p>
              </div>
              <Switch
                id="auto-refresh"
                checked={autoRefresh}
                onCheckedChange={setAutoRefresh}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="privacy" className="text-base sm:text-sm">
                  Modo Privacidade
                </Label>
                <p className="text-xs text-muted-foreground">
                  Ocultar valores (Blur).
                </p>
              </div>
              <Switch
                id="privacy"
                checked={privacyMode}
                onCheckedChange={setPrivacyMode}
              />
            </div>

            <Separator />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="currency" className="text-base sm:text-sm">
                  Moeda Principal
                </Label>
                <p className="text-xs text-muted-foreground">
                  Padrão para KPIs.
                </p>
              </div>
              <Select defaultValue="brl">
                <SelectTrigger className="w-full sm:w-45" id="currency">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brl">BRL (R$)</SelectItem>
                  <SelectItem value="usd">USD ($)</SelectItem>
                  <SelectItem value="eur">EUR (€)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <BellRing className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>Notificações do Sistema</CardTitle>
                <CardDescription>Alertas e sons.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="flex items-center justify-between p-4 border rounded-lg bg-card/50">
              <div className="space-y-0.5">
                <Label htmlFor="sounds" className="text-base sm:text-sm">
                  Efeitos Sonoros
                </Label>
                <p className="text-xs text-muted-foreground">
                  Sons de interação.
                </p>
              </div>
              <Switch
                id="sounds"
                checked={soundEffects}
                onCheckedChange={setSoundEffects}
              />
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg bg-card/50">
              <div className="space-y-0.5">
                <Label htmlFor="maintenance" className="text-base sm:text-sm">
                  Manutenção
                </Label>
                <p className="text-xs text-muted-foreground">
                  Avisos de update.
                </p>
              </div>
              <Switch id="maintenance" defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
