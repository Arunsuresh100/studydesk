import { SubjectBox } from "@/types";

export const cst404: SubjectBox = {
    id: "cst404", subjectName: "Comprehensive Course Viva", code: "CST404",
    description: "End-of-program comprehensive viva covering all major CS subjects from semester 1 through 8.",
    level: "UG", chapters: [{
      id: "ch-cst404-1", chapterNumber: 1, title: "Comprehensive Viva Preparation",
      description: "Topic-wise question banks and revision notes for viva.",
      notes: [{ id: "note-cst404-101", order: 1, title: "01. Comprehensive Viva Question Bank & Revision Notes", summary: "150+ frequently asked viva questions with answers covering DS, Algorithms, OS, DBMS, CN, Compiler Design, AI, and Distributed Computing.", pages: 60, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }],
  };
