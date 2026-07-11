"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn, formatDistance, formatDuration } from "@/lib/utils";
import { TrendingUp, TrendingDown, Footprints, Flame, Mountain, Clock } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  sublabel?: string;
  trend?: "up" | "down" | "neutral";
  icon: React.ReactNode;
}

function StatCard({ label, value, sublabel, trend, icon }: StatCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {label}
            </p>
            <p className="text-2xl font-bold tracking-tight">{value}</p>
            {sublabel && (
              <p className="text-xs text-muted-foreground">{sublabel}</p>
            )}
          </div>
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl",
              trend === "up"
                ? "bg-emerald-50 text-emerald-600"
                : trend === "down"
                ? "bg-rose-50 text-rose-500"
                : "bg-secondary text-muted-foreground"
            )}
          >
            {icon}
          </div>
        </div>
        {trend && (
          <div className="mt-3 flex items-center gap-1 text-xs">
            {trend === "up" ? (
              <TrendingUp className="h-3 w-3 text-emerald-500" />
            ) : trend === "down" ? (
              <TrendingDown className="h-3 w-3 text-rose-500" />
            ) : null}
            <span
              className={cn(
                trend === "up" && "text-emerald-600",
                trend === "down" && "text-rose-500"
              )}
            >
              {sublabel}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface StatsCardsProps {
  weeklyKm: number;
  weeklyDurationSec: number;
  runCount: number;
  avgPace: string;
  totalElevation: number;
  totalCalories: number;
  weeklyChange?: number; // % change from previous week
}

export function StatsCards({
  weeklyKm,
  weeklyDurationSec,
  runCount,
  avgPace,
  totalElevation,
  totalCalories,
  weeklyChange,
}: StatsCardsProps) {
  const stats: StatCardProps[] = [
    {
      label: "Weekly Distance",
      value: formatDistance(weeklyKm),
      sublabel: weeklyChange != null 
        ? `${weeklyChange >= 0 ? "+" : ""}${weeklyChange}% vs last week`
        : undefined,
      trend: weeklyChange != null ? (weeklyChange >= 0 ? "up" : "down") : "neutral",
      icon: <Footprints className="h-5 w-5" />,
    },
    {
      label: "Total Time",
      value: formatDuration(weeklyDurationSec),
      sublabel: `${runCount} runs this week`,
      icon: <Clock className="h-5 w-5" />,
    },
    {
      label: "Avg Pace",
      value: avgPace,
      sublabel: "per kilometer",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      label: "Elevation",
      value: `${totalElevation}m`,
      sublabel: "total gain",
      icon: <Mountain className="h-5 w-5" />,
    },
    {
      label: "Calories",
      value: `${totalCalories.toLocaleString()}`,
      sublabel: "burned this week",
      icon: <Flame className="h-5 w-5" />,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
