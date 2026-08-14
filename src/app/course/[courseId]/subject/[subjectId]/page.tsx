"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, CheckSquare, Square, FileText, PlayCircle, Filter, FileSpreadsheet } from "lucide-react";
import { mockSubjectBoxes, mockSyllabus, mockNotes, mockPlaylists, mockPYQs } from "@/lib/mock-data";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@/context/UserContext";

export default function SubjectPage({ params }: { params: Promise<{ courseId: string; subjectId: string }> }) {
  const resolvedParams = use(params);
  const decodedCourse = decodeURIComponent(resolvedParams.courseId);
  const subjectId = resolvedParams.subjectId;
  const { user, setShowOnboardingModal } = useUser();

  // Find the subject from mockSubjectBoxes
  const subjectBox = mockSubjectBoxes.find(sb => sb.id === subjectId);
  
  const [activeTab, setActiveTab] = useState<"syllabus" | "notes" | "playlists" | "pyqs">("syllabus");

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

  if (!subjectBox) {
    return <div className="p-10 text-center">Subject not found.</div>;
  }

  // Find related data
  const syllabusData = mockSyllabus.find(s => s.code === subjectBox.code);
  const notesData = mockNotes.filter(n => n.subject.includes(subjectBox.subjectName.split(' ')[0])); // Simple match
  const playlistsData = mockPlaylists.filter(p => p.subject.includes(subjectBox.subjectName.split(' ')[0]));
  const pyqsData = mockPYQs.filter(p => p.subject.includes(subjectBox.subjectName.split(' ')[0]));

  return (
    <div className="min-h-screen bg-gray-50/50 text-black font-sans selection:bg-black selection:text-white pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
          <Link href={`/course/${resolvedParams.courseId}`} className="flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {decodedCourse}
          </Link>
          <div className="font-bold text-black hidden sm:block">{subjectBox.subjectName}</div>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 mt-10">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-gray-100 text-black hover:bg-gray-200 font-mono tracking-wider border-0">
              {subjectBox.code}
            </Badge>
            <span className="text-sm font-medium text-gray-500">{subjectBox.level}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black mb-3">
            {subjectBox.subjectName}
          </h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            {subjectBox.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab("syllabus")}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === "syllabus"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
              }`}
            >
              Syllabus
            </button>
            <button
              onClick={() => setActiveTab("notes")}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === "notes"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
              }`}
            >
              Notes
            </button>
            <button
              onClick={() => setActiveTab("playlists")}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === "playlists"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
              }`}
            >
              YouTube Playlists
            </button>
            <button
              onClick={() => setActiveTab("pyqs")}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                activeTab === "pyqs"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
              }`}
            >
              Previous Year Papers
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          {activeTab === "syllabus" && (
            <SyllabusTab syllabusData={syllabusData} courseId={decodedCourse} subjectId={subjectBox.id} />
          )}
          {activeTab === "notes" && (
            <NotesTab notes={subjectBox.chapters.flatMap(ch => ch.notes)} />
          )}
          {activeTab === "playlists" && (
            <PlaylistsTab playlists={playlistsData} />
          )}
          {activeTab === "pyqs" && (
            <PYQsTab pyqs={pyqsData} />
          )}
        </div>
      </main>
    </div>
  );
}

// -------------------------------------------------------------
// TAB COMPONENTS
// -------------------------------------------------------------

function SyllabusTab({ syllabusData, courseId, subjectId }: { syllabusData: any, courseId: string, subjectId: string }) {
  const [syllabus, setSyllabus] = useState(syllabusData);
  const [progress, setProgress] = useState(0);

  const storageKey = `progress:${courseId}:${subjectId}`;

  useEffect(() => {
    if (!syllabus) return;
    
    // Load state from localStorage
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const checkedMap = JSON.parse(saved);
        
        // Apply checked state to syllabus
        const updated = { ...syllabus };
        updated.units = updated.units.map((unit: any) => ({
          ...unit,
          topics: unit.topics.map((topic: any) => ({
            ...topic,
            completed: !!checkedMap[topic.id]
          }))
        }));
        setSyllabus(updated);
        calculateProgress(updated);
      } else {
        calculateProgress(syllabus);
      }
    } catch (e) {
      console.error(e);
      calculateProgress(syllabus);
    }
  }, [syllabusData]); // Only run when syllabusData changes

  const calculateProgress = (data: any) => {
    if (!data) return;
    const allTopics = data.units.flatMap((u: any) => u.topics);
    const completed = allTopics.filter((t: any) => t.completed).length;
    const percentage = allTopics.length > 0 ? Math.round((completed / allTopics.length) * 100) : 0;
    setProgress(percentage);
  };

  const toggleTopic = (unitId: string, topicId: string) => {
    if (!syllabus) return;

    const updatedUnits = syllabus.units.map((unit: any) => {
      if (unit.id !== unitId) return unit;
      return {
        ...unit,
        topics: unit.topics.map((topic: any) => {
          if (topic.id === topicId) return { ...topic, completed: !topic.completed };
          return topic;
        })
      };
    });

    const updatedSyllabus = { ...syllabus, units: updatedUnits };
    setSyllabus(updatedSyllabus);
    calculateProgress(updatedSyllabus);

    // Save to localStorage
    const checkedMap: Record<string, boolean> = {};
    updatedSyllabus.units.forEach((u: any) => {
      u.topics.forEach((t: any) => {
        if (t.completed) checkedMap[t.id] = true;
      });
    });
    localStorage.setItem(storageKey, JSON.stringify(checkedMap));
  };

  if (!syllabus) {
    return <div className="text-gray-500 py-10 text-center">Syllabus structure not available for this subject yet.</div>;
  }

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
        <div className="flex justify-between items-end mb-2">
          <span className="font-bold text-black">Syllabus Completion</span>
          <span className="font-mono font-bold text-black">{progress}%</span>
        </div>
        <Progress value={progress} className="h-3 bg-gray-200" />
      </div>

      <div className="space-y-6">
        {syllabus.units.map((unit: any) => (
          <div key={unit.id} className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 font-bold text-black">
              {unit.title}
            </div>
            <div className="divide-y divide-gray-100">
              {unit.topics.map((topic: any) => (
                <label
                  key={topic.id}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => toggleTopic(unit.id, topic.id)}
                >
                  {topic.completed ? (
                    <CheckSquare className="h-5 w-5 text-black shrink-0" />
                  ) : (
                    <Square className="h-5 w-5 text-gray-300 shrink-0" />
                  )}
                  <span className={`text-sm ${topic.completed ? 'text-gray-500 line-through' : 'text-gray-700 font-medium'}`}>
                    {topic.title}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotesTab({ notes }: { notes: any[] }) {
  if (!notes || notes.length === 0) {
    return <div className="text-gray-500 py-10 text-center">No notes available.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {notes.map((note) => (
        <a key={note.id} href={note.url} target="_blank" rel="noopener noreferrer" className="block group">
          <div className="border border-gray-200 rounded-xl p-5 hover:border-black hover:shadow-md transition-all h-full">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-gray-50 text-black rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-black group-hover:underline">{note.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{note.pages} pages • By {note.author}</p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{note.summary}</p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

function PlaylistsTab({ playlists }: { playlists: any[] }) {
  if (!playlists || playlists.length === 0) {
    return <div className="text-gray-500 py-10 text-center">No playlists available.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {playlists.map((playlist) => (
        <a key={playlist.id} href={`https://youtube.com/playlist?list=${playlist.embedId}`} target="_blank" rel="noopener noreferrer" className="group">
          <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-black hover:shadow-md transition-all h-full flex flex-col">
            <div className="relative aspect-video bg-gray-100 overflow-hidden">
              <img src={playlist.thumbnail} alt={playlist.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="h-12 w-12 text-white" />
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h4 className="font-bold text-black text-sm line-clamp-2 group-hover:underline">{playlist.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{playlist.channelName}</p>
              </div>
              <Badge className="w-fit bg-gray-100 text-gray-700 border-0">{playlist.videoCount} Videos</Badge>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

function PYQsTab({ pyqs }: { pyqs: any[] }) {
  if (!pyqs || pyqs.length === 0) {
    return <div className="text-gray-500 py-10 text-center">No previous year papers available.</div>;
  }

  return (
    <div className="space-y-3">
      {pyqs.map((pyq) => (
        <a key={pyq.id} href={pyq.url} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-black transition-colors group">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-gray-50 text-black rounded-lg flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
              <FileSpreadsheet className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-black group-hover:underline">{pyq.year} - {pyq.examType} Exam</h4>
              <p className="text-xs text-gray-500">PDF • {pyq.hasSolution ? 'With Solution' : 'Question Paper Only'}</p>
            </div>
          </div>
          <span className="text-black font-bold text-sm">Download</span>
        </a>
      ))}
    </div>
  );
}
