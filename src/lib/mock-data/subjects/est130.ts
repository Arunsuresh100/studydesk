import { SubjectBox } from "@/types";

export const est130: SubjectBox = {
    id: "est130", subjectName: "Basics of Electrical & Electronics Engineering", code: "EST130",
    description: "DC/AC circuits, transformers, electric machines, semiconductor devices, and basic digital electronics.",
    level: "UG", chapters: [{
      id: "ch-est130-1", chapterNumber: 1, title: "DC & AC Circuits",
      description: "Kirchhoff's laws, mesh/node analysis, AC fundamentals, phasors, and resonance.",
      notes: [{ id: "note-est130-101", order: 1, title: "01. DC & AC Circuit Analysis", summary: "KVL/KCL, superposition, Thevenin/Norton theorems, sinusoidal steady state, power factor, and resonance.", pages: 28, author: "Dept. of Electrical Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }, {
      id: "ch-est130-2", chapterNumber: 2, title: "Semiconductor Devices & Digital Electronics",
      description: "Diodes, BJTs, FETs, logic gates, Boolean algebra, and combinational circuits.",
      notes: [{ id: "note-est130-201", order: 1, title: "01. Semiconductor Devices & Digital Electronics", summary: "PN junction diode, Zener diode, BJT modes, FET operation, logic gates truth tables, Boolean simplification, and half-adder.", pages: 24, author: "Dept. of Electronics Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-04" }],
    }],
  };
