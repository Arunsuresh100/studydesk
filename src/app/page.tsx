"use client";

import Link from "next/link";
import {
  BookOpen,
  FileText,
  Filter,
  FolderOpen,
  LayoutDashboard,
  PlayCircle,
  Zap,
  ArrowRight,
  GraduationCap,
  Edit3,
} from "lucide-react";
import { useUser } from "@/context/UserContext";

const features = [
  {
    icon: FolderOpen,
    title: "Simplify Notes",
    desc: "Browse PDF notes, chapter guides, and readable summaries for your course.",
    href: "/notes",
  },
  {
    icon: Filter,
    title: "PYQs Bank",
    desc: "Browse previous year question papers by subject, year, and exam type.",
    href: "/question-papers",
  },
  {
    icon: LayoutDashboard,
    title: "Syllabus Tracker",
    desc: "Track topic completion visually with an interactive checklist.",
    href: "/syllabus",
  },
  {
    icon: PlayCircle,
    title: "YouTube Playlists",
    desc: "Curated video lecture series from top educators embedded directly.",
    href: "/playlists",
  },
  {
    icon: Zap,
    title: "Short Notes",
    desc: "Last-minute exam revision bullet points and formula cheat sheets.",
    href: "/short-note",
  },
];

export default function LandingPage() {
  const { user, isOnboarded, setShowOnboardingModal } = useUser();

  const handleStartLearning = () => {
    if (!isOnboarded) {
      setShowOnboardingModal(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-black selection:text-white font-sans overflow-x-hidden">
      <main className="flex-1 flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full px-4 sm:px-6 md:px-8 py-10 md:py-16">
          <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start text-left max-w-2xl">


              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-5 leading-[1.1] text-black">
                The minimalist<br />
                <span className="text-gray-500">study companion.</span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                A focused environment for college students to manage notes, past papers, syllabi, and video playlists without the visual noise.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {isOnboarded ? (
                  <Link href="/notes">
                    <button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-base sm:text-lg font-medium transition-colors cursor-pointer shadow-sm">
                      Start learning →
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={handleStartLearning}
                    className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-base sm:text-lg font-medium transition-colors cursor-pointer shadow-sm"
                  >
                    Start learning
                  </button>
                )}

                <Link href="/short-note">
                  <button className="bg-white text-black border border-gray-300 hover:border-gray-800 hover:bg-gray-50 rounded-full px-8 py-4 text-base sm:text-lg font-medium transition-colors cursor-pointer">
                    Learning for exam
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full flex items-center justify-center lg:justify-end">
              <img
                src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-learn-clipart-character-studying-in-the-library-by-a-boy-with-vector-png-image_6803624.png"
                alt="Student studying in library"
                className="w-full max-w-lg object-contain"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full px-4 sm:px-6 md:px-8 py-16 md:py-20 bg-gray-50/50 border-t border-gray-100">
          <div className="max-w-[1280px] mx-auto w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                Everything you need.
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                Powerful tools designed specifically for students to organize their academic life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
              {features.map((feature, i) => (
                <Link key={i} href={feature.href} className="group">
                  <div className="flex flex-col items-start p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md hover:border-black transition-all h-full justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="h-10 w-10 rounded-lg border border-gray-200 flex items-center justify-center bg-gray-50 group-hover:bg-black group-hover:text-white transition-colors">
                        <feature.icon className="h-5 w-5 text-black group-hover:text-white" />
                      </div>
                      <h3 className="font-bold text-lg tracking-tight text-black group-hover:underline">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>

                    <div className="flex items-center text-xs font-bold text-black pt-2">
                      Explore <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 w-full bg-white">
        <p>StudyDesk &copy; {new Date().getFullYear()}. Minimalist study companion.</p>
      </footer>
    </div>
  );
}
