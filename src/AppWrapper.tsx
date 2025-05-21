"use client";
import { type ReactNode } from "react";
import { LanguageProvider } from "./components/context/LaguageContext";

type AppWrapperProps = {
  children: ReactNode;
};

export function AppWrapper({ children }: AppWrapperProps) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}