/** ── MobielNest mock data ─────────────────────────────────
 *  Seed data for demo — all realistic running stats.
 *  Replace with real API data in production. */

export interface RunEntry {
  id: string;
  date: Date;
  distanceKm: number;
  durationSec: number;
  paceSecPerKm: number; // seconds per km
  elevationGain: number; // meters
  calories: number;
  routeName: string;
}

export interface WeeklySummary {
  weekStart: Date;
  totalKm: number;
  totalDurationSec: number;
  runCount: number;
  avgPaceSecPerKm: number;
}

export interface MonthlyStats {
  month: string; // "Jan", "Feb" etc
  totalKm: number;
  totalDurationSec: number;
  runCount: number;
  avgPaceSecPerKm: number;
}

// ── Realistic seed data ─────────────────────────────────

export const recentRuns: RunEntry[] = [
  {
    id: "run-1",
    date: new Date("2025-06-10"),
    distanceKm: 5.2,
    durationSec: 1716, // 28:36
    paceSecPerKm: 330, // 5:30/km
    elevationGain: 42,
    calories: 395,
    routeName: "Riverside Loop",
  },
  {
    id: "run-2",
    date: new Date("2025-06-08"),
    distanceKm: 10.1,
    durationSec: 3360, // 56:00
    paceSecPerKm: 333, // 5:33/km
    elevationGain: 87,
    calories: 768,
    routeName: "Park Circuit",
  },
  {
    id: "run-3",
    date: new Date("2025-06-06"),
    distanceKm: 3.8,
    durationSec: 1254, // 20:54
    paceSecPerKm: 330, // 5:30/km
    elevationGain: 15,
    calories: 289,
    routeName: "Morning Quickie",
  },
  {
    id: "run-4",
    date: new Date("2025-06-04"),
    distanceKm: 7.5,
    durationSec: 2460, // 41:00
    paceSecPerKm: 328, // 5:28/km
    elevationGain: 63,
    calories: 570,
    routeName: "Hill Climb",
  },
  {
    id: "run-5",
    date: new Date("2025-06-02"),
    distanceKm: 6.0,
    durationSec: 1980, // 33:00
    paceSecPerKm: 330, // 5:30/km
    elevationGain: 34,
    calories: 456,
    routeName: "Lakeside Trail",
  },
  {
    id: "run-6",
    date: new Date("2025-05-30"),
    distanceKm: 12.4,
    durationSec: 4250, // 1:10:50
    paceSecPerKm: 343, // 5:43/km
    elevationGain: 112,
    calories: 942,
    routeName: "Long Run Sunday",
  },
  {
    id: "run-7",
    date: new Date("2025-05-28"),
    distanceKm: 4.5,
    durationSec: 1485, // 24:45
    paceSecPerKm: 330, // 5:30/km
    elevationGain: 22,
    calories: 342,
    routeName: "Neighborhood Loop",
  },
];

export const weeklySummaries: WeeklySummary[] = [
  {
    weekStart: new Date("2025-06-09"),
    totalKm: 15.3,
    totalDurationSec: 5076,
    runCount: 3,
    avgPaceSecPerKm: 332,
  },
  {
    weekStart: new Date("2025-06-02"),
    totalKm: 25.9,
    totalDurationSec: 8640,
    runCount: 4,
    avgPaceSecPerKm: 334,
  },
  {
    weekStart: new Date("2025-05-26"),
    totalKm: 16.9,
    totalDurationSec: 5735,
    runCount: 3,
    avgPaceSecPerKm: 339,
  },
  {
    weekStart: new Date("2025-05-19"),
    totalKm: 30.2,
    totalDurationSec: 10200,
    runCount: 5,
    avgPaceSecPerKm: 338,
  },
];

export const monthlyStats: MonthlyStats[] = [
  { month: "Jan", totalKm: 98.5, totalDurationSec: 33000, runCount: 16, avgPaceSecPerKm: 335 },
  { month: "Feb", totalKm: 112.3, totalDurationSec: 37680, runCount: 18, avgPaceSecPerKm: 336 },
  { month: "Mar", totalKm: 145.7, totalDurationSec: 47880, runCount: 22, avgPaceSecPerKm: 329 },
  { month: "Apr", totalKm: 128.4, totalDurationSec: 42840, runCount: 20, avgPaceSecPerKm: 334 },
  { month: "May", totalKm: 156.2, totalDurationSec: 51840, runCount: 24, avgPaceSecPerKm: 332 },
  { month: "Jun", totalKm: 42.6, totalDurationSec: 14160, runCount: 7, avgPaceSecPerKm: 331 },
];

export const personalBests = {
  "5K": { time: 1620, date: new Date("2025-04-15") }, // 27:00
  "10K": { time: 3360, date: new Date("2025-06-08") }, // 56:00
  "Half Marathon": { time: 7380, date: new Date("2025-03-22") }, // 2:03:00
  "5K (seconds)": 1620,
  "10K (seconds)": 3360,
  "Half Marathon (seconds)": 7380,
};
