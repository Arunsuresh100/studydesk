"use client";

import React, { useState } from "react";
import { useUser } from "@/context/UserContext";
import { COURSES_BY_LEVEL } from "@/lib/mock-data";
import { AcademicLevel } from "@/types";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  BookOpen,
  User,
  Sparkles,
  Check,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function OnboardingModal() {
  const { user, isOnboarded, setUserProfile, showOnboardingModal, setShowOnboardingModal } = useUser();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(isOnboarded ? (user?.name || "") : "");
  const [level, setLevel] = useState<AcademicLevel | null>(isOnboarded ? (user?.level || null) : null);
  const [course, setCourse] = useState(isOnboarded ? (user?.course || "") : "");
  const [semester, setSemester] = useState<number | null>(isOnboarded ? (user?.semester || null) : null);

  // Loading animation checkmarks phase
  const [loadingPhase, setLoadingPhase] = useState(1);

  const handleLevelChange = (newLevel: AcademicLevel) => {
    setLevel(newLevel);
    setCourse("");
    setSemester(null);
  };

  const getAvailableSemesters = () => {
    if (level === "PG") return [1, 2, 3, 4];
    if (course.includes("B.Tech")) return [1, 2, 3, 4, 5, 6, 7, 8];
    return [1, 2, 3, 4, 5, 6];
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !level || !course || !semester) return;

    setIsLoading(true);
    setLoadingPhase(1);

    // Sequence checkmark animations
    setTimeout(() => setLoadingPhase(2), 600);
    setTimeout(() => setLoadingPhase(3), 1200);

    setTimeout(() => {
      setUserProfile({
        name: name.trim(),
        level,
        course,
        semester: semester as number,
      });
      setIsLoading(false);
      setShowOnboardingModal(false);
      setLoadingPhase(1);
    }, 1800);
  };

  return (
    <Dialog open={showOnboardingModal} onOpenChange={setShowOnboardingModal}>
      <DialogContent className="sm:max-w-[640px] border border-gray-200 shadow-2xl bg-white text-black p-6 sm:p-9 rounded-3xl overflow-hidden">
        
        {/* Loading Transition Screen */}
        {isLoading ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="relative flex items-center justify-center">
              <div className="h-20 w-20 rounded-full border-4 border-gray-100 border-t-black animate-spin" />
              <Sparkles className="h-8 w-8 text-black absolute" />
            </div>

            <div className="space-y-1.5 max-w-sm">
              <h3 className="text-2xl font-bold tracking-tight text-black">
                Personalizing Your Workspace
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                Setting up StudyDesk for <span className="text-black font-semibold">{name}</span>
              </p>
            </div>

            {/* Checklist items during loading */}
            <div className="w-full max-w-md bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-3 text-left">
              <div className="flex items-center gap-3 text-xs font-semibold">
                <div className={`h-5 w-5 rounded-full flex items-center justify-center transition-colors ${loadingPhase >= 1 ? "bg-black text-white" : "bg-gray-200 text-gray-400"}`}>
                  <Check className="h-3 w-3" />
                </div>
                <span className={loadingPhase >= 1 ? "text-gray-900 font-bold" : "text-gray-400"}>
                  Indexing notes & PYQs for {course}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-semibold">
                <div className={`h-5 w-5 rounded-full flex items-center justify-center transition-colors ${loadingPhase >= 2 ? "bg-black text-white" : "bg-gray-200 text-gray-400"}`}>
                  <Check className="h-3 w-3" />
                </div>
                <span className={loadingPhase >= 2 ? "text-gray-900 font-bold" : "text-gray-400"}>
                  Structuring Semester {semester} syllabus checklist
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-semibold">
                <div className={`h-5 w-5 rounded-full flex items-center justify-center transition-colors ${loadingPhase >= 3 ? "bg-black text-white" : "bg-gray-200 text-gray-400"}`}>
                  <Check className="h-3 w-3" />
                </div>
                <span className={loadingPhase >= 3 ? "text-gray-900 font-bold" : "text-gray-400"}>
                  Curating recommended YouTube video playlists
                </span>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <DialogHeader className="space-y-1 text-left pb-2 border-b border-gray-100">
              <DialogTitle className="text-2xl font-extrabold tracking-tight text-black flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-black" />
                Academic Profile Setup
              </DialogTitle>
              <DialogDescription className="text-xs text-gray-500 font-medium">
                Enter your details to personalize your StudyDesk notes, syllabus tracker, and video playlists.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleFormSubmit} className="space-y-6 mt-4 p-1.5 max-h-[65vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              
              {/* 1. Full Name */}
              <div className="space-y-2">
                <label className="block mb-2.5 text-sm font-bold text-gray-800">
                  Full Name
                </label>
                <Input
                  type="text"
                  required
                  autoFocus
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 px-4 text-sm border-gray-200 focus:border-black focus:ring-1 focus:ring-black rounded-xl font-medium"
                />
              </div>

              {/* 2. Academic Level (UG / PG) */}
              <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <label className="block mb-2.5 text-sm font-bold text-gray-800">
                  Academic Level
                </label>
                <div className="grid grid-cols-2 gap-3 p-1">
                  <button
                    type="button"
                    onClick={() => handleLevelChange("UG")}
                    className={`p-3.5 rounded-xl border text-center transition-all flex items-center justify-center gap-2 ${
                      level === "UG"
                        ? "border-black bg-black text-white shadow-md font-bold ring-2 ring-black/20 ring-offset-1"
                        : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300 hover:bg-gray-100 font-medium"
                    }`}
                  >
                    <span className="text-sm">UG (Undergraduate)</span>
                    {level === "UG" && <CheckCircle2 className="h-4 w-4 text-white" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleLevelChange("PG")}
                    className={`p-3.5 rounded-xl border text-center transition-all flex items-center justify-center gap-2 ${
                      level === "PG"
                        ? "border-black bg-black text-white shadow-md font-bold ring-2 ring-black/20 ring-offset-1"
                        : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300 hover:bg-gray-100 font-medium"
                    }`}
                  >
                    <span className="text-sm">PG (Postgraduate)</span>
                    {level === "PG" && <CheckCircle2 className="h-4 w-4 text-white" />}
                  </button>
                </div>
              </div>

              {/* 3. Course Selection (SHOWN ONLY IF LEVEL SELECTED) */}
              {level && (
                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <label className="flex items-center justify-between block mb-2.5 text-sm font-bold text-gray-800">
                    <span>Select Course Program</span>
                    <span className="text-[10px] text-gray-400 font-medium">
                      {COURSES_BY_LEVEL[level].length} options
                    </span>
                  </label>
                  
                  {/* Row format (flex wrap) for horizontal pill layout */}
                  <div className="flex flex-wrap gap-2.5 p-1">
                    {COURSES_BY_LEVEL[level].map((c) => {
                      const isSelected = course === c;
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setCourse(c)}
                          className={`px-4 py-2.5 rounded-full border text-xs font-semibold transition-all flex items-center gap-1.5 capitalize ${
                            isSelected
                              ? "border-black bg-black text-white shadow-md ring-2 ring-black/20"
                              : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-white" />}
                          {c}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 4. Semester Selection (SHOWN ONLY IF LEVEL AND COURSE SELECTED) */}
              {level && course && (
                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <label className="block mb-2.5 text-sm font-bold text-gray-800">
                    Current Semester
                  </label>
                  <div className="flex flex-wrap gap-2.5 p-1">
                    {getAvailableSemesters().map((sem) => {
                      const isSelected = semester === sem;
                      return (
                        <button
                          key={sem}
                          type="button"
                          onClick={() => setSemester(sem)}
                          className={`px-5 py-2.5 flex items-center justify-center text-xs font-bold rounded-xl border transition-all ${
                            isSelected
                              ? "border-black bg-black text-white shadow-md ring-2 ring-black/20"
                              : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          Sem {sem}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Bottom Action CTA */}
              <div className="pt-3 border-t border-gray-100 flex justify-end">
                <Button
                  type="submit"
                  disabled={!name.trim() || !level || !course || !semester}
                  className="w-full sm:w-auto h-12 px-8 bg-black text-white hover:bg-gray-800 font-bold text-sm rounded-xl transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Complete Setup & Continue
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
