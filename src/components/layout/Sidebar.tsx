"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  FileText,
  FolderOpen,
  LayoutDashboard,
  PlayCircle,
  Zap,
  GraduationCap,
  Settings,
} from "lucide-react";
import { useUser } from "@/context/UserContext";
import { Badge } from "@/components/ui/badge";

const routes = [
  { href: "/", label: "Home", icon: LayoutDashboard },
  { href: "/notes", label: "Notes", icon: FolderOpen },
  { href: "/syllabus", label: "Syllabus Tracker", icon: BookOpen },
  { href: "/question-papers", label: "Question Papers (PYQ)", icon: FileText },
  { href: "/playlists", label: "YouTube Playlists", icon: PlayCircle },
  { href: "/short-note", label: "Short Notes", icon: Zap },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user, setShowOnboardingModal } = useUser();

  return (
    <aside className="hidden lg:block w-64 shrink-0 h-[calc(100vh-4rem)] sticky top-16 border-r border-gray-200 bg-white overflow-y-auto p-4">
      {/* User Course Card */}
      {user && (
        <div
          onClick={() => setShowOnboardingModal(true)}
          className="mb-6 p-4 rounded-xl border border-gray-200 bg-gray-50 shadow-sm cursor-pointer hover:border-black transition-all group"
        >
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap className="h-4 w-4 text-black" />
            <span className="text-xs font-bold capitalize tracking-wider text-gray-500">
              Student Profile
            </span>
          </div>
          <p className="font-bold text-sm text-black truncate">{user.name}</p>
          <div className="flex items-center gap-1.5 mt-2">
            <Badge variant="outline" className="text-[10px] font-semibold bg-black text-white border-none">
              {user.level}
            </Badge>
            <span className="text-xs text-gray-600 truncate">Sem {user.semester}</span>
          </div>
          <p className="text-xs text-gray-500 truncate mt-1">{user.course}</p>
          <span className="text-[11px] text-gray-400 group-hover:text-black underline inline-block mt-2 font-medium">
            Click to Edit Profile
          </span>
        </div>
      )}

      {/* Navigation Links */}
      <div className="space-y-1">
        <p className="text-[11px] font-bold capitalize tracking-wider text-gray-400 px-3 mb-2">
          Navigation
        </p>
        {routes.map((route) => {
          const isActive = pathname === route.href;
          return (
            <Link
              key={route.href}
              href={route.href}
              className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? "bg-black text-white font-semibold shadow-sm"
                  : "text-gray-600 hover:text-black hover:bg-gray-100"
              }`}
            >
              <route.icon className="h-4 w-4" />
              <span>{route.label}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
