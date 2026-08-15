import { SubjectBox } from "@/types";

export const hut101: SubjectBox = {
    id: "hut101", subjectName: "Life Skills", code: "HUT101",
    description: "Communication skills, critical thinking, emotional intelligence, leadership, time management, and professional development.",
    level: "UG", chapters: [{
      id: "ch-hut101-1", chapterNumber: 1, title: "Communication & Critical Thinking",
      description: "Verbal/non-verbal communication, active listening, and critical thinking frameworks.",
      notes: [{ id: "note-hut101-101", order: 1, title: "01. Effective Communication & Critical Thinking Skills", summary: "LSRW skills, 7Cs of communication, critical thinking models, barriers to communication.", pages: 16, author: "Dept. of Humanities", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-hut101-2", chapterNumber: 2, title: "Emotional Intelligence & Leadership",
      description: "Self-awareness, empathy, leadership styles, team dynamics, and conflict resolution.",
      notes: [{ id: "note-hut101-201", order: 1, title: "01. Emotional Intelligence & Leadership Styles", summary: "Goleman's EI model, self-regulation, transformational vs transactional leadership, and team building.", pages: 14, author: "Dept. of Humanities", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
