import { SubjectBox } from "@/types";

export const cst307: SubjectBox = {
    id: "cst307", subjectName: "Microprocessors and Microcontrollers", code: "CST307",
    description: "8085/8086 microprocessor architecture, instruction sets, interfacing, and 8051 microcontroller programming.",
    level: "UG", chapters: [{
      id: "ch-cst307-1", chapterNumber: 1, title: "8085/8086 Architecture & Instruction Set",
      description: "Register set, flags, memory segmentation, addressing modes, and assembly language.",
      notes: [{ id: "note-cst307-101", order: 1, title: "01. 8085/8086 Architecture & Assembly Programming", summary: "8085 pin signals, 8086 segment registers, addressing modes, ALP for arithmetic/string operations, and interrupt structure.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst307-2", chapterNumber: 2, title: "Interfacing & 8051 Microcontroller",
      description: "Memory and I/O interfacing, 8255 PPI, 8051 architecture, and embedded programming.",
      notes: [{ id: "note-cst307-201", order: 1, title: "01. Interfacing & 8051 Microcontroller Programming", summary: "8255 PPI modes, ADC/DAC interfacing, 8051 memory, SFRs, timer/counter, serial communication, and interrupts.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
