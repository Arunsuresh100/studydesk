"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { useUser } from "@/context/UserContext";

export function Navbar() {
  const { user, setShowOnboardingModal } = useUser();

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-[1280px] w-full px-4 sm:px-6 md:px-8 flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="flex items-center gap-2 group">
          <BookOpen className="h-6 w-6 text-black group-hover:text-gray-700 transition-colors" />
          <span className="font-extrabold tracking-tight text-xl text-black group-hover:text-gray-700 transition-colors">StudyDesk</span>
        </Link>
        
        {/* User Profile Badge (if onboarded) or Edit Action */}
        {user ? (
          <button
            onClick={() => setShowOnboardingModal(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-all text-left"
            title="Click to edit student profile or switch course"
          >
            <div className="h-6 w-6 rounded-full bg-black text-white text-[11px] font-bold flex items-center justify-center">
              {user.name ? user.name.slice(0, 1).toUpperCase() : "S"}
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-black">
              <span>{user.name}</span>
            </div>
          </button>
        ) : (
          <button
            onClick={() => setShowOnboardingModal(true)}
            className="text-xs font-semibold text-black bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
          >
            Setup Profile
          </button>
        )}
      </div>
    </header>
  );
}
