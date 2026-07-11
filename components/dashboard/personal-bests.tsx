"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDuration } from "@/lib/utils";
import { Award } from "lucide-react";

interface BestEntry {
  label: string;
  time: number; // seconds
  date: Date;
}

interface PersonalBestsProps {
  bests: BestEntry[];
}

export function PersonalBests({ bests }: PersonalBestsProps) {
  if (bests.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Personal Bests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <Award className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">No PBs yet</p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              Set your first personal best!
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Bests</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {bests.map((best) => (
          <div
            key={best.label}
            className="flex items-center justify-between rounded-xl bg-secondary/30 px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium">{best.label}</p>
              <p className="text-xs text-muted-foreground">
                {best.date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold tabular-nums tracking-tight">
                {formatDuration(best.time)}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
