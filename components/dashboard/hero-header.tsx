"use client";

import * as React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Bell, Plus } from "lucide-react";

interface HeroHeaderProps {
  runnerName?: string;
  runnerAvatar?: string;
  currentWeekLabel?: string;
}

export function HeroHeader({
  runnerName = "Runner",
  runnerAvatar,
  currentWeekLabel = "Week 24",
}: HeroHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <Avatar src={runnerAvatar} fallback={runnerName.charAt(0)} size="lg" />
        <div>
          <h1 className="text-xl font-bold tracking-tight">
            Good morning, {runnerName}
          </h1>
          <p className="text-sm text-muted-foreground">
            {currentWeekLabel} · Let&apos;s lace up
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-muted-foreground hover:bg-secondary/80 transition-colors">
          <Bell className="h-4 w-4" />
        </button>
        <button className="flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          <Plus className="h-4 w-4" />
          <span>Log Run</span>
        </button>
      </div>
    </div>
  );
}
