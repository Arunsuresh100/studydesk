"use client";

import React, { use } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Layers } from "lucide-react";
import { mockSubjectBoxes } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@/context/UserContext";

export default function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const resolvedParams = use(params);
  const decodedCourse = decodeURIComponent(resolvedParams.courseId);
  const { user, setShowOnboardingModal } = useUser();

  // Filter subjects for this course and the user's selected semester
  const courseSubjects = mockSubjectBoxes.filter(
    (sb) => sb.course === decodedCourse && (!sb.semester || sb.semester === user.semester)
  );

  if (!user) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gray-50/50 text-black px-4 text-center">
        <h2 className="text-2xl font-bold mb-3">Profile Incomplete</h2>
        <p className="text-gray-500 mb-6 max-w-md">You need to select your course and set up your profile before viewing this page.</p>
        <button 
          onClick={() => setShowOnboardingModal(true)}
          className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-3 font-medium transition-colors"
        >
          Setup Profile
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 text-black font-sans selection:bg-black selection:text-white pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>
          <div className="font-bold text-black hidden sm:block">{decodedCourse}</div>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 mt-10">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black mb-3">
            {decodedCourse} Subjects
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Select a subject below to access its syllabus tracker, notes, playlists, and previous year question papers.
          </p>
        </div>

        {courseSubjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
            {courseSubjects.map((sb) => {
              const totalNotes = sb.chapters.reduce((acc, ch) => acc + ch.notes.length, 0);
              const subjectSlug = sb.id; // Or encodeURIComponent(sb.subjectName) if we want named slugs

              return (
                <Link key={sb.id} href={`/course/${resolvedParams.courseId}/subject/${subjectSlug}`} className="group">
                  <div className="rounded-xl border border-gray-200 bg-white p-6 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-md hover:border-black transition-all h-full">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                          <BookOpen className="h-5 w-5 text-black group-hover:text-white" />
                        </div>
                        <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 font-mono text-[10px] tracking-wider px-2.5 py-1 border-0">
                          {sb.code}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-black leading-snug group-hover:underline transition-colors">
                          {sb.subjectName}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium mt-1">
                          {sb.level}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-700">
                      <span className="flex items-center gap-1.5 text-gray-500">
                        <Layers className="h-3.5 w-3.5" />
                        {sb.chapters.length} Units • {totalNotes} Notes
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-gray-200 rounded-xl">
            <h3 className="text-lg font-bold text-black">No subjects found</h3>
            <p className="text-gray-500 mt-2">Check back later for updates to this course.</p>
          </div>
        )}
      </main>
    </div>
  );
}
