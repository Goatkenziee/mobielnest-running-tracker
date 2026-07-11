import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0-100
  variant?: "default" | "rose";
  size?: "sm" | "md";
}

function Progress({
  className,
  value,
  variant = "default",
  size = "md",
  ...props
}: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        "relative overflow-hidden rounded-full bg-secondary",
        size === "sm" ? "h-1.5" : "h-2.5",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "h-full rounded-full transition-all duration-500 ease-out",
          variant === "rose" ? "bg-gradient-to-r from-rose-400 to-rose-500" : "bg-primary"
        )}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

export { Progress };
