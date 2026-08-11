"use client";

import React, { useState } from "react";
import { mockPYQs } from "@/lib/mock-data";
import { useUser } from "@/context/UserContext";
import { PYQItem } from "@/types";
import {
  FileText,
  Search,
  Download,
  Eye,
  CheckCircle,
  AlertCircle,
  Filter,
  Calendar,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function QuestionPapersPage() {
  const { user } = useUser();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [selectedExamType, setSelectedExamType] = useState<string>("All");
  const [activePYQ, setActivePYQ] = useState<PYQItem | null>(null);

  const years = ["All", "2024", "2023", "2022", "2021"];
  const examTypes = ["All", "Midterm", "Final"];

  const filteredPYQs = mockPYQs.filter((pyq) => {
    const matchesYear = selectedYear === "All" || pyq.year === selectedYear;
    const matchesType = selectedExamType === "All" || pyq.examType === selectedExamType;
    const matchesSearch =
      pyq.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pyq.course.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesYear && matchesType && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200  pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full">
              Previous Year Question Papers
            </span>
            <span className="text-xs text-gray-500 font-semibold">{user?.course}</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-black ">
            PYQ Bank
          </h1>
          <p className="text-sm text-gray-600  mt-1">
            Practice past midterms and final semester exam papers.
          </p>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search papers by subject name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-11 border-gray-200  bg-white  rounded-xl"
          />
        </div>

        {/* Year & Exam Type Dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="h-11 px-4 py-2 bg-gray-100 border border-gray-200 rounded-xl focus:ring-0 focus:ring-offset-0 shadow-none hover:bg-gray-200 transition-colors duration-200 text-xs font-bold text-black w-auto min-w-[140px] flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-xs font-semibold text-gray-500">Year:</span>
              </div>
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent className="rounded-xl shadow-lg border-gray-100 bg-white">
              {years.map((y) => (
                <SelectItem key={y} value={y} className="text-xs font-semibold cursor-pointer rounded-lg hover:bg-gray-100 focus:bg-gray-100 transition-colors py-2">
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedExamType} onValueChange={setSelectedExamType}>
            <SelectTrigger className="h-11 px-4 py-2 bg-gray-100 border border-gray-200 rounded-xl focus:ring-0 focus:ring-offset-0 shadow-none hover:bg-gray-200 transition-colors duration-200 text-xs font-bold text-black w-auto min-w-[140px] flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-xs font-semibold text-gray-500">Exam:</span>
              </div>
              <SelectValue placeholder="Select Exam" />
            </SelectTrigger>
            <SelectContent className="rounded-xl shadow-lg border-gray-100 bg-white">
              {examTypes.map((t) => (
                <SelectItem key={t} value={t} className="text-xs font-semibold cursor-pointer rounded-lg hover:bg-gray-100 focus:bg-gray-100 transition-colors py-2">
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Question Papers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPYQs.map((pyq) => (
          <div
            key={pyq.id}
            className="rounded-2xl border border-gray-200 bg-white   p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-all hover:border-black  group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge className="bg-black text-white   font-mono text-[11px]">
                  {pyq.year}
                </Badge>
                <Badge variant="outline" className="text-[11px] font-bold">
                  {pyq.examType} Exam
                </Badge>
              </div>

              <h3 className="text-lg font-bold leading-snug group-hover:underline text-black ">
                {pyq.subject}
              </h3>

              <p className="text-xs text-gray-500">{pyq.course}</p>

              <div className="flex items-center gap-1.5 text-xs text-gray-600 font-semibold pt-1">
                <FileText className="h-4 w-4 text-gray-400" /> Question Paper Only
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100  flex items-center justify-between">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setActivePYQ(pyq)}
                className="rounded-lg h-8 text-xs font-medium"
              >
                <Eye className="h-3.5 w-3.5 mr-1" /> View Details
              </Button>
              <Button
                size="sm"
                className="bg-black text-white   rounded-lg h-8 text-xs font-medium"
              >
                <Download className="h-3.5 w-3.5 mr-1" /> Download
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filteredPYQs.length === 0 && (
        <div className="text-center py-16 border border-dashed border-gray-300  rounded-2xl p-8">
          <FileText className="h-10 w-10 text-gray-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold">No question papers found</h3>
          <p className="text-sm text-gray-500 mt-1">Try selecting a different year or search query.</p>
        </div>
      )}

      {/* PYQ Detail Modal */}
      {activePYQ && (
        <Dialog open={!!activePYQ} onOpenChange={() => setActivePYQ(null)}>
          <DialogContent className="sm:max-w-[550px] bg-white  border border-gray-200  p-6 rounded-2xl">
            <DialogHeader className="border-b border-gray-100  pb-4">
              <div className="flex items-center gap-2 mb-1">
                <Badge className="bg-black text-white  ">
                  {activePYQ.year}
                </Badge>
                <Badge variant="outline">{activePYQ.examType} Exam</Badge>
              </div>
              <DialogTitle className="text-xl font-bold">{activePYQ.subject}</DialogTitle>
              <p className="text-xs text-gray-500">{activePYQ.course}</p>
            </DialogHeader>

            <div className="space-y-4 my-4">
              <div className="p-4 rounded-xl bg-gray-50  border border-gray-200  space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Paper Specifications
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div><span className="text-gray-500">Duration:</span> 3 Hours</div>
                  <div><span className="text-gray-500">Max Marks:</span> 100</div>
                  <div><span className="text-gray-500">Format:</span> Standard PDF</div>
                  <div><span className="text-gray-500">Type:</span> Question Only</div>
                </div>
              </div>

              <Button className="w-full bg-black text-white   rounded-xl h-11 font-semibold text-sm">
                <Download className="h-4 w-4 mr-2" /> Download PYQ PDF ({activePYQ.year})
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
