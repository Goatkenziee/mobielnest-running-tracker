"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate, formatDistance, formatDuration, formatPace } from "@/lib/utils";
import { RunEntry } from "@/lib/mock-data";
import { MapPin, Timer, TrendingUp, Mountain } from "lucide-react";

interface RecentRunsProps {
  runs: RunEntry[];
}

export function RecentRuns({ runs }: RecentRunsProps) {
  if (runs.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Runs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Timer className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">No runs recorded yet</p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              Start your first run to see it here
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Runs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {runs.map((run) => (
          <div
            key={run.id}
            className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-secondary/50"
          >
            {/* Date badge */}
            <div className="flex w-12 shrink-0 flex-col items-center">
              <span className="text-xs font-medium text-muted-foreground">
                {run.date.toLocaleDateString("en-US", { month: "short" })}
              </span>
              <span className="text-lg font-bold leading-none">
                {run.date.getDate()}
              </span>
            </div>

            {/* Run details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold truncate">
                  {run.routeName}
                </span>
                <Badge variant="rose" className="text-[10px] px-1.5 py-0">
                  {formatDistance(run.distanceKm)}
                </Badge>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Timer className="h-3 w-3" />
                  {formatDuration(run.durationSec)}
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {formatPace(run.paceSecPerKm)}/km
                </span>
                <span className="flex items-center gap-1">
                  <Mountain className="h-3 w-3" />
                  {run.elevationGain}m
                </span>
                <span>{run.calories} cal</span>
              </div>
            </div>

            {/* Chevron */}
            <div className="shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
