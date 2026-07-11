"use client";

import * as React from "react";
import { AppShell } from "@/components/layout/app-shell";
import { HeroHeader } from "@/components/dashboard/hero-header";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { RunChart } from "@/components/dashboard/run-chart";
import { RecentRuns } from "@/components/dashboard/recent-runs";
import { PersonalBests } from "@/components/dashboard/personal-bests";
import { WeeklySummaryList } from "@/components/dashboard/weekly-summary";
import { recentRuns, weeklySummaries, monthlyStats, personalBests } from "@/lib/mock-data";
import { formatPace } from "@/lib/utils";

export default function Home() {
  const currentWeek = weeklySummaries[0];
  const bests = [
    { label: "5K", time: personalBests["5K (seconds)"] as number, date: personalBests["5K"].date as Date },
    { label: "10K", time: personalBests["10K (seconds)"] as number, date: personalBests["10K"].date as Date },
    { label: "Half Marathon", time: personalBests["Half Marathon (seconds)"] as number, date: personalBests["Half Marathon"].date as Date },
  ];

  const totalElevation = recentRuns
    .slice(0, 7)
    .reduce((sum, r) => sum + r.elevationGain, 0);

  const totalCalories = recentRuns
    .slice(0, 7)
    .reduce((sum, r) => sum + r.calories, 0);

  return (
    <AppShell>
      <HeroHeader
        runnerName="Alex"
        currentWeekLabel="Week 24 · Building consistency"
      />

      <StatsCards
        weeklyKm={currentWeek?.totalKm ?? 0}
        weeklyDurationSec={currentWeek?.totalDurationSec ?? 0}
        runCount={currentWeek?.runCount ?? 0}
        avgPace={formatPace(currentWeek?.avgPaceSecPerKm ?? 330)}
        totalElevation={totalElevation}
        totalCalories={totalCalories}
        weeklyChange={8}
      />

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <RunChart monthlyData={monthlyStats} />
          <RecentRuns runs={recentRuns.slice(0, 5)} />
        </div>
        <div className="space-y-6">
          <PersonalBests bests={bests} />
          <WeeklySummaryList weeks={weeklySummaries} weeklyGoalKm={30} />
        </div>
      </div>
    </AppShell>
  );
}
