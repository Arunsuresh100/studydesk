"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Edit3 } from "lucide-react";
import { useUser } from "@/context/UserContext";

export function Navbar() {
  const { user, setShowOnboardingModal } = useUser();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/notes", label: "Notes" },
    { href: "/syllabus", label: "Syllabus" },
    { href: "/question-papers", label: "Question Papers" },
    { href: "/playlists", label: "Playlists" },
    { href: "/short-note", label: "Short Note" },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="w-full px-6 md:px-8 flex h-16 items-center justify-between mx-auto">
        {/* Brand Logo - Exact Old Design */}
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-black" />
          <span className="font-bold tracking-tight text-xl text-black">StudyDesk</span>
        </Link>

        {/* Navigation Links - Exact Old Design */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors capitalize ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

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
