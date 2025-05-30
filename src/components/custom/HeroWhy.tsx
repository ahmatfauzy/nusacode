"use client";
import { cn } from "../../lib/utils";
import { useMotionValue, motion } from "motion/react";
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
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className={cn("relative z-20 w-full leading-tight", className)}>
        {children}
      </div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
        lineHeight: "1.2",
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 px-1 pb-1 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};

// HeroWhy Component
import { useLanguage } from "../context/LanguageContext";

export function HeroWhy() {
  const { language } = useLanguage();

  const text = {
    id: {
      pre: "Dari ide hingga penerapan. NusaCode memetakan perjalanan koding Anda. ",
      highlight: "Belajar, membangun, dan berkembang dengan percaya diri",
    },
    en: {
      pre: "From idea to deployment. NusaCode charts your coding journey. ",
      highlight: "Learn, build, and grow with confidence.",
    },
  };

  return (
    <HeroHighlight
      containerClassName="!bg-gray-700/10" 
    >
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl md:text-4xl lg:text-4xl font-bold text-white max-w-4xl leading-snug text-center mx-auto"
      >
        {text[language].pre}
        <Highlight className="text-white">{text[language].highlight}</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
