"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { OnboardingModal } from "@/components/onboarding/OnboardingModal";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans antialiased">
      <Navbar />
      {isHomePage ? (
        <main className="flex-1 w-full">{children}</main>
      ) : (
        <div className="flex-1 flex w-full">
          <Sidebar />
          <main className="flex-1 p-4 sm:p-6 md:p-8 min-w-0 bg-white text-black max-w-[1400px] mx-auto">{children}</main>
        </div>
      )}
      <OnboardingModal />
    </div>
  );
}
