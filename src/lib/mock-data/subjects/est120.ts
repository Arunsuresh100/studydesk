import { SubjectBox } from "@/types";

export const est120: SubjectBox = {
    id: "est120", subjectName: "Basics of Civil & Mechanical Engineering", code: "EST120",
    description: "Introduction to surveying, building materials, construction, thermodynamics, machine elements, and manufacturing processes.",
    level: "UG", chapters: [{
      id: "ch-est120-1", chapterNumber: 1, title: "Civil Engineering Fundamentals",
      description: "Surveying basics, building materials, and construction methods.",
      notes: [{ id: "note-est120-101", order: 1, title: "01. Surveying & Building Materials", summary: "Chain surveying, leveling, building materials classification, properties of cement and concrete.", pages: 18, author: "Dept. of Civil Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }, {
      id: "ch-est120-2", chapterNumber: 2, title: "Mechanical Engineering Fundamentals",
      description: "Thermodynamics basics, machine elements, and manufacturing processes.",
      notes: [{ id: "note-est120-201", order: 1, title: "01. Thermodynamics, Machine Elements & Manufacturing", summary: "Laws of thermodynamics overview, types of machine elements (gears, bearings, shafts), and manufacturing process classification.", pages: 20, author: "Dept. of Mechanical Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-04" }],
    }],
  };
