"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatDistance, formatDuration, formatPace } from "@/lib/utils";
import { WeeklySummary as WeeklySummaryType } from "@/lib/mock-data";
import { CalendarDays } from "lucide-react";

interface WeeklySummaryProps {
  weeks: WeeklySummaryType[];
  weeklyGoalKm?: number; // target distance per week
}

export function WeeklySummaryList({
  weeks,
  weeklyGoalKm = 30,
}: WeeklySummaryProps) {
  if (weeks.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Weekly Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <CalendarDays className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">No weekly data yet</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {weeks.map((week) => {
          const goalProgress = Math.min(100, (week.totalKm / weeklyGoalKm) * 100);
          return (
            <div key={week.weekStart.toISOString()} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Week of{" "}
                  {week.weekStart.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="text-xs text-muted-foreground">
                  {week.runCount} runs
                </span>
              </div>
              <Progress value={goalProgress} variant="rose" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{formatDistance(week.totalKm)}</span>
                <span>{formatDuration(week.totalDurationSec)}</span>
                <span>{formatPace(week.avgPaceSecPerKm)}/km</span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
