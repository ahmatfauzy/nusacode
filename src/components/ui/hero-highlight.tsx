"use client";
import { cn } from "../../lib/utils";
import { useMotionValue } from "motion/react";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
       "group relative flex h-[24rem] w-full max-w-none items-center justify-center bg-white dark:bg-black",
        // background baru di sini:
        "bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900",
        containerClassName,
      )}
      onMouseMove={handleMouseMove}
    >
      <div className={cn("relative z-20 w-full px-0 leading-tight text-sm", className)}>
        {children}
      </div>
    </div>
  );
};
