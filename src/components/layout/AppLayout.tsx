"use client";

import React from "react";
import { Navbar } from "./Navbar";
import { OnboardingModal } from "@/components/onboarding/OnboardingModal";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans antialiased">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <OnboardingModal />
    </div>
  );
}
