export type AcademicLevel = "UG" | "PG";

export interface UserProfile {
  name: string;
  level: AcademicLevel;
  course: string;
  semester: number;
}

export interface NoteItem {
  id: string;
  title: string;
  subject: string;
  pages: number;
  lastOpened: string;
  author?: string;
  url: string;
  level: AcademicLevel;
  course: string;
  summary?: string;
}

export interface PYQItem {
  id: string;
  year: string;
  subject: string;
  examType: "Midterm" | "Final" | "Quiz";
  url: string;
  course: string;
  level: AcademicLevel;
  hasSolution?: boolean;
}

export interface SyllabusTopic {
  id: string;
  title: string;
  completed: boolean;
}

export interface SyllabusUnit {
  id: string;
  title: string;
  topics: SyllabusTopic[];
}

export interface SyllabusSubject {
  id: string;
  subject: string;
  code?: string;
  course: string;
  level: AcademicLevel;
  progress: number;
  units: SyllabusUnit[];
}

export interface PlaylistCard {
  id: string;
  title: string;
  subject: string;
  channelName: string;
  videoCount: number;
  thumbnail: string;
  embedId: string;
  course: string;
  level: AcademicLevel;
  durationHours: number;
}

export interface ShortNoteItem {
  id: string;
  title: string;
  subject: string;
  readTime: string;
  course: string;
  level: AcademicLevel;
  keyPoints: string[];
  formula?: string;
}

export interface ChapterNote {
  id: string;
  order: number;
  title: string;
  summary: string;
  pages: number;
  author: string;
  url: string;
  dateAdded?: string;
}

export interface SubjectChapter {
  id: string;
  chapterNumber: number;
  title: string;
  description: string;
  notes: ChapterNote[];
}

export interface SubjectBox {
  id: string;
  subjectName: string;
  code: string;
  description: string;
  course: string;
  level: AcademicLevel;
  chapters: SubjectChapter[];
}
