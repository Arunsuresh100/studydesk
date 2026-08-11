"use client";

import React, { useState } from "react";
import { mockSubjectBoxes } from "@/lib/mock-data";
import { useUser } from "@/context/UserContext";
import { ChapterNote, SubjectBox, SubjectChapter } from "@/types";
import {
  FolderOpen,
  Search,
  FileText,
  Download,
  Eye,
  Plus,
  BookOpen,
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  Layers,
  FileCode,
  CreditCard,
  PlayCircle,
  Loader2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function NotesPage() {
  const { user } = useUser();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  
  const [activeNote, setActiveNote] = useState<ChapterNote | null>(null);
  
  // Monetization Flow States
  const [downloadTarget, setDownloadTarget] = useState<ChapterNote | null>(null);
  const [adState, setAdState] = useState<'idle' | 'playing' | 'completed'>('idle');

  // Active Subject object
  const activeSubject = mockSubjectBoxes.find((sb) => sb.id === selectedSubjectId) || null;

  // Active Chapter object
  const activeChapter = activeSubject?.chapters.find((ch) => ch.id === selectedChapterId) || null;

  // Search filtering
  const filteredSubjects = mockSubjectBoxes.filter((sb) => {
    const matchesSearch =
      sb.subjectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sb.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sb.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleResetNavigation = () => {
    setSelectedSubjectId(null);
    setSelectedChapterId(null);
  };

  const handleFreeDownload = () => {
    setAdState('playing');
    setTimeout(() => {
      setAdState('completed');
      if (downloadTarget) {
        window.open(downloadTarget.url, "_blank");
      }
      setTimeout(() => {
        setDownloadTarget(null);
        setAdState('idle');
      }, 1000);
    }, 4000);
  };

  const handlePremiumDownload = () => {
    if (downloadTarget) {
      window.open(downloadTarget.url, "_blank");
    }
    setDownloadTarget(null);
  };

  return (
    <div className="space-y-8 max-w-[1280px] mx-auto pb-12">
      {/* Header & Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
        <div>
          {/* Breadcrumb path */}
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-2 flex-wrap">
            <button
              onClick={handleResetNavigation}
              className={`hover:text-black transition-colors ${!selectedSubjectId ? "text-black font-bold" : ""}`}
            >
              Subjects
            </button>
            {activeSubject && (
              <>
                <ChevronRight className="h-3 w-3 text-gray-400" />
                <button
                  onClick={() => setSelectedChapterId(null)}
                  className={`hover:text-black transition-colors ${!selectedChapterId ? "text-black font-bold" : ""}`}
                >
                  {activeSubject.subjectName}
                </button>
              </>
            )}
            {activeChapter && (
              <>
                <ChevronRight className="h-3 w-3 text-gray-400" />
                <span className="text-black font-bold">Chapter {activeChapter.chapterNumber}</span>
              </>
            )}
          </div>

          {!selectedChapterId ? (
            <>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black mt-2">
                {!selectedSubjectId
                  ? "Study Notes Hub"
                  : activeSubject?.subjectName}
              </h1>
              <p className="text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
                {!selectedSubjectId
                  ? "Select a subject box to explore structured chapter notes, lecture guides, and organized PDF resources."
                  : `Browse chapter units for ${activeSubject?.subjectName} (${activeSubject?.code}). Click any chapter to view notes in order.`}
              </p>
            </>
          ) : (
            <div className="mt-8">
              <span className="text-xs capitalize tracking-widest text-gray-500 font-bold block mb-1">
                Chapter {activeChapter?.chapterNumber} • {activeSubject?.subjectName}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                {activeChapter?.title}
              </h1>
              <p className="text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
                {activeChapter?.description}
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          {!selectedSubjectId && (
            <div className="relative w-full sm:w-64 md:w-80 lg:w-96">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search subjects by name, code, or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-11 border-gray-200 bg-white rounded-xl text-sm font-medium"
              />
            </div>
          )}
        </div>
      </div>

      {/* VIEW 1: SUBJECT BOXES GRID (No subject selected) */}
      {!selectedSubjectId && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-black flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-black" />
              Subjects
            </h3>
            <Badge variant="outline" className="text-xs font-semibold bg-gray-50 text-gray-600 border-gray-200 px-3 py-1">
              {filteredSubjects.length} {filteredSubjects.length === 1 ? "Subject" : "Subjects"}
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubjects.map((sb) => {
              const totalNotes = sb.chapters.reduce((acc, ch) => acc + ch.notes.length, 0);
              return (
                <div
                  key={sb.id}
                  onClick={() => setSelectedSubjectId(sb.id)}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-md hover:border-black transition-all cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                        <BookOpen className="h-5 w-5 text-black group-hover:text-white" />
                      </div>
                      <Badge className="bg-black text-white font-mono text-[10px] tracking-wider px-2.5 py-1">
                        {sb.code}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-black leading-snug">
                        {sb.subjectName}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium mt-1">
                        {sb.course} • {sb.level}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-700">
                    <span className="flex items-center gap-1.5 text-gray-500">
                      <Layers className="h-3.5 w-3.5" />
                      {sb.chapters.length} Chapters • {totalNotes} Notes
                    </span>

                    <span className="text-black font-bold flex items-center group-hover:translate-x-1 transition-transform">
                      Explore Chapters →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredSubjects.length === 0 && (
            <div className="text-center py-16 border border-dashed border-gray-300 rounded-2xl p-8 bg-gray-50/50">
              <FolderOpen className="h-10 w-10 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold">No subjects found</h3>
              <p className="text-sm text-gray-500 mt-1">Try searching with a different subject keyword or code.</p>
            </div>
          )}
        </div>
      )}

      {/* VIEW 2: CHAPTERS LIST (Subject selected, No chapter selected) */}
      {activeSubject && !selectedChapterId && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-black flex items-center gap-2">
              <Layers className="h-5 w-5 text-black" />
              Select a Chapter
            </h3>
            <Badge variant="outline" className="text-xs font-semibold bg-gray-50 text-gray-600 border-gray-200 px-3 py-1">
              {activeSubject.chapters.length} {activeSubject.chapters.length === 1 ? "Chapter" : "Chapters"}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {activeSubject.chapters.map((ch) => (
              <div
                key={ch.id}
                onClick={() => setSelectedChapterId(ch.id)}
                className="group p-6 rounded-2xl border border-gray-200 bg-white flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md hover:border-black transition-all cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-[11px] font-bold border-gray-300 text-gray-700">
                      Chapter {ch.chapterNumber}
                    </Badge>
                    <span className="text-xs text-black font-semibold bg-gray-100 px-2.5 py-0.5 rounded-full">
                      {ch.notes.length} {ch.notes.length === 1 ? "Note" : "Notes"} available
                    </span>
                  </div>

                  <h4 className="text-lg font-bold tracking-tight text-black">
                    {ch.title}
                  </h4>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {ch.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-black">
                  <span className="text-gray-500 font-medium">Click to view chapter notes</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    View Notes →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: NOTES LIST IN PROPER ORDER (Chapter selected) */}
      {activeChapter && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-black flex items-center gap-2">
                <FileText className="h-5 w-5 text-black" />
                Notes Arranged in Proper Order
              </h3>
              <Badge variant="outline" className="text-xs font-semibold bg-gray-50 text-gray-600 border-gray-200 px-3 py-1 self-start sm:self-auto">
                {activeChapter.notes.length} Notes
              </Badge>
            </div>

            <div className="space-y-4">
              {activeChapter.notes
                .sort((a, b) => a.order - b.order)
                .map((note) => (
                  <div
                    key={note.id}
                    className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-black transition-all shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="bg-black text-white font-mono text-xs font-bold px-3 py-1 rounded-full">
                          #{String(note.order).padStart(2, "0")}
                        </span>
                        <span className="text-xs font-medium text-gray-500">
                          {note.pages} Pages
                        </span>
                        {note.dateAdded && (
                          <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-mono">
                            Added {note.dateAdded}
                          </span>
                        )}
                      </div>

                      <h4 className="text-lg font-bold text-black">
                        {note.title}
                      </h4>

                      <p className="text-xs text-gray-600 leading-relaxed max-w-3xl">
                        {note.summary}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <a href={note.url} target="_blank" rel="noreferrer">
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-xl h-9 px-4 text-xs font-semibold border-gray-300 hover:border-black"
                        >
                          <Eye className="h-3.5 w-3.5 mr-1.5" /> Read Note
                        </Button>
                      </a>
                      <Button
                        size="sm"
                        onClick={() => setDownloadTarget(note)}
                        className="bg-black text-white hover:bg-gray-800 rounded-xl h-9 px-4 text-xs font-semibold"
                      >
                        <Download className="h-3.5 w-3.5 mr-1.5" /> Download PDF
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* PDF / Document Viewer Modal */}
      {activeNote && (
        <Dialog open={!!activeNote} onOpenChange={() => setActiveNote(null)}>
          <DialogContent className="sm:max-w-[700px] bg-white border border-gray-200 p-6 sm:p-8 rounded-3xl">
            <DialogHeader className="border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2 mb-1">
                <Badge className="bg-black text-white text-[10px] font-mono">
                  Order #{String(activeNote.order).padStart(2, "0")}
                </Badge>
                <span className="text-xs text-gray-500 font-medium">
                  {activeNote.pages} Pages
                </span>
              </div>
              <DialogTitle className="text-xl font-bold text-black">{activeNote.title}</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 my-4">
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Executive Chapter Summary
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {activeNote.summary}
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-8 text-center bg-gray-50/50 min-h-[200px] flex flex-col items-center justify-center space-y-3">
                <FileText className="h-12 w-12 text-black" />
                <div>
                  <h5 className="font-bold text-base text-black">Ready to Study</h5>
                  <p className="text-xs text-gray-500 mt-1">
                    Download or open the complete high-resolution PDF document for full access.
                  </p>
                </div>
                <Button
                  onClick={() => setDownloadTarget(activeNote)}
                  className="bg-black text-white hover:bg-gray-800 rounded-xl h-11 px-6 font-bold text-xs mt-2 shadow-sm"
                >
                  <Download className="h-4 w-4 mr-2" /> Download Full PDF ({activeNote.pages} Pages)
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Monetization / Download Modal */}
      <Dialog open={!!downloadTarget} onOpenChange={(open) => !open && setDownloadTarget(null)}>
        <DialogContent className="sm:max-w-[640px] bg-white border border-gray-200 p-6 sm:p-8 rounded-3xl">
          <DialogHeader className="mb-4 text-center">
            <DialogTitle className="text-xl font-extrabold text-black">Download Options</DialogTitle>
            <p className="text-sm text-gray-500 mt-2">
              Choose how you'd like to download this high-quality note.
            </p>
          </DialogHeader>

          {adState === 'playing' ? (
            <div className="py-12 flex flex-col items-center justify-center space-y-4">
              <Loader2 className="h-10 w-10 text-black animate-spin" />
              <h3 className="text-lg font-bold text-black">Playing sponsor message...</h3>
              <p className="text-xs text-gray-500">Your download will start automatically.</p>
            </div>
          ) : adState === 'completed' ? (
            <div className="py-12 flex flex-col items-center justify-center space-y-4">
              <CheckCircle2 className="h-10 w-10 text-green-500" />
              <h3 className="text-lg font-bold text-black">Ad Completed!</h3>
              <p className="text-xs text-gray-500">Downloading your file now...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Premium Option */}
              <div 
                onClick={handlePremiumDownload}
                className="group p-5 rounded-2xl border-2 border-gray-200 bg-white hover:border-black transition-all cursor-pointer shadow-sm relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                  RECOMMENDED
                </div>
                <div className="h-10 w-10 shrink-0 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors mb-3">
                  <CreditCard className="h-5 w-5 text-black group-hover:text-white" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h4 className="text-base font-bold text-black">Premium Download</h4>
                  <p className="text-xs text-gray-500 mt-1 mb-4 flex-1">Instant download, no ads.</p>
                  <div className="inline-flex items-center self-start text-sm font-extrabold text-black bg-gray-100 px-3 py-1 rounded-lg">
                    $0.50
                  </div>
                </div>
              </div>

              {/* Free Option */}
              <div 
                onClick={handleFreeDownload}
                className="group p-5 rounded-2xl border-2 border-gray-200 bg-gray-50 hover:border-black transition-all cursor-pointer shadow-sm flex flex-col h-full"
              >
                <div className="h-10 w-10 shrink-0 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors mb-3">
                  <PlayCircle className="h-5 w-5 text-black group-hover:text-white" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h4 className="text-base font-bold text-black">Free Download</h4>
                  <p className="text-xs text-gray-500 mt-1 mb-4 flex-1">Watch a short sponsor message.</p>
                  <div className="inline-flex items-center self-start text-sm font-bold text-gray-600 border border-gray-300 px-3 py-1 rounded-lg">
                    Free (Ad-Supported)
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
