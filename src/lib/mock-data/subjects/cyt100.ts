import { SubjectBox } from "@/types";

export const cyt100: SubjectBox = {
    id: "cyt100", subjectName: "Engineering Chemistry", code: "CYT100",
    description: "Water chemistry, electrochemistry, corrosion, polymers, fuels, and instrumental analytical methods.",
    level: "UG", chapters: [{
      id: "ch-cyt100-1", chapterNumber: 1, title: "Water Chemistry & Electrochemistry",
      description: "Hardness of water, softening methods, electrochemical cells, and Nernst equation.",
      notes: [{ id: "note-cyt100-101", order: 1, title: "01. Water Chemistry & Electrochemistry Notes", summary: "Types of hardness, lime-soda/ion exchange, galvanic cells, EMF, electrode potentials, and electrolysis.", pages: 20, author: "Dept. of Chemistry", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }, {
      id: "ch-cyt100-2", chapterNumber: 2, title: "Polymers, Fuels & Instrumentation",
      description: "Classification of polymers, plastics, rubber, fuels, and analytical instruments.",
      notes: [{ id: "note-cyt100-201", order: 1, title: "01. Polymers, Fuels & Analytical Methods", summary: "Addition vs condensation polymers, calorific value of fuels, proximate analysis, and UV-Vis spectroscopy basics.", pages: 22, author: "Dept. of Chemistry", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-04" }],
    }],
  };
