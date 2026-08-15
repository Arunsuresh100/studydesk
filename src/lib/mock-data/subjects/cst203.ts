import { SubjectBox } from "@/types";

export const cst203: SubjectBox = {
    id: "cst203", subjectName: "Logic System Design", code: "CST203",
    description: "Boolean algebra, combinational circuits, sequential circuits, state machines, registers, and counters.",
    level: "UG", chapters: [{
      id: "ch-cst203-1", chapterNumber: 1, title: "Boolean Algebra & Combinational Circuits",
      description: "Boolean minimization, multiplexers, decoders, adders, and comparators.",
      notes: [{ id: "note-cst203-101", order: 1, title: "01. Boolean Algebra & Combinational Circuit Design", summary: "SOP/POS forms, Karnaugh map simplification, hazards, and implementation using multiplexers and arithmetic circuits.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst203-2", chapterNumber: 2, title: "Sequential Circuits & State Machines",
      description: "Flip-flops, registers, counters, Mealy and Moore machines.",
      notes: [{ id: "note-cst203-201", order: 1, title: "01. Flip-Flops, Counters & Finite State Machines", summary: "SR/D/JK/T flip-flops, synchronous/asynchronous counters, shift registers, Mealy vs Moore machine design.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
