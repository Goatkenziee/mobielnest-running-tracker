"use client";

import * as React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MonthlyStats } from "@/lib/mock-data";

interface RunChartProps {
  monthlyData: MonthlyStats[];
}

export function RunChart({ monthlyData }: RunChartProps) {
  const chartData = monthlyData.map((m) => ({
    name: m.month,
    distance: m.totalKm,
    runs: m.runCount,
    pace: Math.round(m.avgPaceSecPerKm),
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Training Volume</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="distance">
          <TabsList>
            <TabsTrigger value="distance">Distance</TabsTrigger>
            <TabsTrigger value="pace">Avg Pace</TabsTrigger>
          </TabsList>

          <TabsContent value="distance">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                    axisLine={false}
                    tickLine={false}
                    unit=" km"
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid hsl(var(--border))",
                      background: "hsl(var(--card))",
                      fontSize: 13,
                    }}
                    formatter={(value: number) => [`${value.toFixed(1)} km`, "Distance"]}
                  />
                  <Bar
                    dataKey="distance"
                    fill="hsl(var(--primary))"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="pace">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                    axisLine={false}
                    tickLine={false}
                    domain={["dataMin - 10", "dataMax + 10"]}
                    tickFormatter={(v: number) => `${Math.floor(v / 60)}:${(v % 60).toString().padStart(2, "0")}`}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid hsl(var(--border))",
                      background: "hsl(var(--card))",
                      fontSize: 13,
                    }}
                    formatter={(value: number) => {
                      const min = Math.floor(value / 60);
                      const sec = value % 60;
                      return [`${min}:${sec.toString().padStart(2, "0")}/km`, "Avg Pace"];
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="pace"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary) / 0.1)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
