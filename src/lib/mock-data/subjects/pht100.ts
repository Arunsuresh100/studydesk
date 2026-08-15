import { SubjectBox } from "@/types";

export const pht100: SubjectBox = {
    id: "pht100", subjectName: "Engineering Physics A", code: "PHT100",
    description: "Oscillations, wave optics, lasers, fiber optics, quantum mechanics, semiconductor physics, and superconductivity.",
    level: "UG", chapters: [{
      id: "ch-pht100-1", chapterNumber: 1, title: "Oscillations & Wave Optics",
      description: "SHM, interference, diffraction, and polarization of light.",
      notes: [{ id: "note-pht100-101", order: 1, title: "01. Oscillations & Wave Optics — Module Notes", summary: "SHM equations, energy in SHM, Young's double slit, single-slit diffraction, and Brewster's law.", pages: 22, author: "Dept. of Physics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-pht100-2", chapterNumber: 2, title: "Lasers, Fiber Optics & Quantum Mechanics",
      description: "Laser principles, optical fibers, wave-particle duality, and Schrödinger equations.",
      notes: [{ id: "note-pht100-201", order: 1, title: "01. Lasers & Fiber Optics", summary: "Stimulated emission, population inversion, types of lasers, total internal reflection, and fiber optic communication.", pages: 18, author: "Dept. of Physics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
