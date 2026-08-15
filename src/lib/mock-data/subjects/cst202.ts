import { SubjectBox } from "@/types";

export const cst202: SubjectBox = {
    id: "cst202", subjectName: "Computer Organisation and Architecture", code: "CST202",
    description: "Instruction sets, CPU design, ALU, memory hierarchy, cache, I/O, pipelining, and parallel architectures.",
    level: "UG", chapters: [{
      id: "ch-cst202-1", chapterNumber: 1, title: "CPU Organisation & Instruction Sets",
      description: "Register organization, RISC vs CISC, addressing modes, and instruction formats.",
      notes: [{ id: "note-cst202-101", order: 1, title: "01. CPU Design, Addressing Modes & Instruction Sets", summary: "Fetch-decode-execute cycle, ALU design, addressing modes, and RISC vs CISC comparison.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst202-2", chapterNumber: 2, title: "Memory Hierarchy, Cache & Pipelining",
      description: "Cache design, mapping functions, memory hierarchy, pipeline hazards.",
      notes: [{ id: "note-cst202-201", order: 1, title: "01. Memory Hierarchy, Cache & Pipeline Design", summary: "Cache mapping (direct/set-associative/fully-associative), replacement policies, pipeline stages, and hazards.", pages: 30, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
