"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Footprints, BarChart3, Route, Settings, ChevronLeft } from "lucide-react";

interface AppShellProps {
  children: React.ReactNode;
}

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "runs", label: "Runs", icon: Footprints },
  { id: "routes", label: "Routes", icon: Route },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

type NavTab = (typeof navItems)[number]["id"];

export function AppShell({ children }: AppShellProps) {
  const [activeNav, setActiveNav] = React.useState<NavTab>("dashboard");
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* ── Sidebar ─────────────────────────────────────────── */}
      <aside
        className={cn(
          "flex flex-col border-r border-border/50 bg-card transition-all duration-300",
          sidebarOpen ? "w-56" : "w-16"
        )}
      >
        {/* Logo area */}
        <div className="flex h-14 items-center gap-2 px-4 border-b border-border/30">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-rose-400 to-rose-500 text-white text-sm font-bold">
            M
          </div>
          {sidebarOpen && (
            <span className="text-sm font-semibold tracking-tight">MobielNest</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Collapse button */}
        <div className="border-t border-border/30 p-2">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs text-muted-foreground hover:bg-secondary"
          >
            <ChevronLeft
              className={cn(
                "h-3.5 w-3.5 transition-transform",
                !sidebarOpen && "rotate-180"
              )}
            />
            {sidebarOpen && <span>Collapse</span>}
          </button>
        </div>
      </aside>

      {/* ── Main content ────────────────────────────────────── */}
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-6 py-6">
          {children}
        </div>
      </main>
    </div>
  );
}
