"use client";

import React, { useState } from "react";
import { mockShortNotes } from "@/lib/mock-data";
import { useUser } from "@/context/UserContext";
import { Zap, Search, Clock, BookOpen, Copy, Check, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ShortNotesPage() {
  const { user } = useUser();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<string>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const subjects = ["All", ...Array.from(new Set(mockShortNotes.map((s) => s.subject)))];

  const filteredShortNotes = mockShortNotes.filter((note) => {
    const matchesSubject = selectedSubject === "All" || note.subject === selectedSubject;
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.keyPoints.some((kp) => kp.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSubject && matchesSearch;
  });

  const handleCopyFormula = (id: string, formulaText: string) => {
    navigator.clipboard.writeText(formulaText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200  pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge className="bg-black text-white  ">
              Exam Night Cheat Sheets
            </Badge>
            <span className="text-xs text-gray-500 font-medium">{user?.course}</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-black ">
            Short Revision Notes & Formula Cards
          </h1>
          <p className="text-sm text-gray-600  mt-1">
            Bite-sized summaries, essential formulas, and key points for quick last-minute exam revision.
          </p>
        </div>
      </div>

      {/* Search & Subject Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search key points, formulas, algorithms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-11 border-gray-200  bg-white  rounded-xl"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          <Filter className="h-4 w-4 text-gray-400 shrink-0 hidden sm:inline" />
          {subjects.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedSubject === sub
                  ? "bg-black text-white   shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200  "
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Short Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredShortNotes.map((note) => (
          <div
            key={note.id}
            className="rounded-2xl border border-gray-200 bg-white   p-6 flex flex-col justify-between space-y-5 shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-[11px] font-bold">
                  {note.subject}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                  <Clock className="h-3.5 w-3.5" /> {note.readTime}
                </div>
              </div>

              <h3 className="text-xl font-bold text-black  leading-snug">
                {note.title}
              </h3>

              {/* Bullet Key Points */}
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Key Takeaways
                </p>
                <ul className="space-y-2">
                  {note.keyPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700  leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-black  mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Formula Card if present */}
              {note.formula && (
                <div className="p-3.5 rounded-xl bg-gray-100  border border-gray-200  flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                      Core Formula
                    </span>
                    <span className="font-mono text-xs font-bold text-black ">
                      {note.formula}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleCopyFormula(note.id, note.formula!)}
                    className="h-8 w-8 p-0"
                  >
                    {copiedId === note.id ? (
                      <Check className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredShortNotes.length === 0 && (
        <div className="text-center py-16 border border-dashed border-gray-300  rounded-2xl p-8">
          <Zap className="h-10 w-10 text-gray-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold">No short notes found</h3>
          <p className="text-sm text-gray-500 mt-1">Try searching for another topic or subject.</p>
        </div>
      )}
    </div>
  );
}
