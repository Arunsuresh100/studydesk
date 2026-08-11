"use client";

import React, { useState, useEffect } from "react";
import { mockSyllabus } from "@/lib/mock-data";
import { useUser } from "@/context/UserContext";
import { SyllabusSubject } from "@/types";
import {
  BookOpen,
  CheckSquare,
  Square,
  TrendingUp,
  Award,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function SyllabusPage() {
  const { user } = useUser();
  const [syllabusData, setSyllabusData] = useState<SyllabusSubject[]>(mockSyllabus);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({
    "u1-1": true,
    "u1-2": true,
    "u2-1": true,
  });

  // Load completed topics from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("studydesk_syllabus_state");
      if (saved) {
        setSyllabusData(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load syllabus progress", e);
    }
  }, []);

  const toggleTopicCompletion = (subjectId: string, unitId: string, topicId: string) => {
    const updated = syllabusData.map((subject) => {
      if (subject.id !== subjectId) return subject;

      const updatedUnits = subject.units.map((unit) => {
        if (unit.id !== unitId) return unit;

        const updatedTopics = unit.topics.map((top) => {
          if (top.id === topicId) {
            return { ...top, completed: !top.completed };
          }
          return top;
        });

        return { ...unit, topics: updatedTopics };
      });

      // Calculate subject progress
      const allTopics = updatedUnits.flatMap((u) => u.topics);
      const completedCount = allTopics.filter((t) => t.completed).length;
      const newProgress = Math.round((completedCount / (allTopics.length || 1)) * 100);

      return {
        ...subject,
        progress: newProgress,
        units: updatedUnits,
      };
    });

    setSyllabusData(updated);
    try {
      localStorage.setItem("studydesk_syllabus_state", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to save syllabus progress", e);
    }
  };

  const toggleUnitExpand = (unitId: string) => {
    setExpandedUnits((prev) => ({ ...prev, [unitId]: !prev[unitId] }));
  };

  // Filter subjects based on search
  const filteredSyllabus = syllabusData.filter((sub) =>
    sub.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (sub.code && sub.code.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200  pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge className="bg-black text-white  ">
              Syllabus Tracker
            </Badge>
            <span className="text-xs text-gray-500 font-medium">{user?.course}</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-black ">
            Course Syllabus & Progress Checklist
          </h1>
          <p className="text-sm text-gray-600  mt-1">
            Track your topic completion unit by unit. Your progress is saved automatically.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
        <Input
          type="search"
          placeholder="Search subjects or units..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-11 border-gray-200  bg-white  rounded-xl"
        />
      </div>

      {/* Subject Syllabus List */}
      <div className="space-y-8">
        {filteredSyllabus.map((subject) => (
          <div
            key={subject.id}
            className="rounded-2xl border border-gray-200 bg-white   p-6 shadow-sm space-y-6"
          >
            {/* Subject Header with Progress Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-100 ">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-gray-400">{subject.code}</span>
                  <h2 className="text-xl font-bold text-black ">{subject.subject}</h2>
                </div>
                <p className="text-xs text-gray-500">{subject.units.length} Core Units</p>
              </div>

              <div className="md:w-64 space-y-2">
                <div className="flex items-baseline justify-between text-xs font-bold">
                  <span className="text-gray-500">Progress</span>
                  <span className="text-black  font-mono text-sm">{subject.progress}%</span>
                </div>
                <Progress value={subject.progress} className="h-2.5" />
              </div>
            </div>

            {/* Units & Topic Checklists */}
            <div className="space-y-4">
              {subject.units.map((unit) => {
                const isExpanded = expandedUnits[unit.id] !== false; // default true
                const completedTopics = unit.topics.filter((t) => t.completed).length;

                return (
                  <div
                    key={unit.id}
                    className="rounded-xl border border-gray-200  overflow-hidden bg-gray-50/50 "
                  >
                    {/* Unit Accordion Header */}
                    <button
                      onClick={() => toggleUnitExpand(unit.id)}
                      className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-100  transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-sm text-black ">{unit.title}</span>
                        <Badge variant="outline" className="text-[10px]">
                          {completedTopics}/{unit.topics.length} Done
                        </Badge>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                      )}
                    </button>

                    {/* Unit Topics Checklist */}
                    {isExpanded && (
                      <div className="px-5 pb-4 pt-1 space-y-2 border-t border-gray-200  bg-white ">
                        {unit.topics.map((topic) => (
                          <label
                            key={topic.id}
                            onClick={() => toggleTopicCompletion(subject.id, unit.id, topic.id)}
                            className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer select-none ${
                              topic.completed
                                ? "bg-gray-50  border-gray-200 text-gray-500 line-through"
                                : "bg-white  border-gray-200  text-black  hover:border-black"
                            }`}
                          >
                            {topic.completed ? (
                              <CheckSquare className="h-5 w-5 text-black  shrink-0" />
                            ) : (
                              <Square className="h-5 w-5 text-gray-400 shrink-0" />
                            )}
                            <span className="text-sm font-medium">{topic.title}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
