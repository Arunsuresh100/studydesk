import { SubjectBox } from "@/types";

export const est100: SubjectBox = {
    id: "est100", subjectName: "Engineering Mechanics", code: "EST100",
    description: "Statics and dynamics: force systems, equilibrium, friction, kinematics, Newton's laws, work-energy, and impulse-momentum.",
    level: "UG", chapters: [{
      id: "ch-est100-1", chapterNumber: 1, title: "Statics — Force Systems & Equilibrium",
      description: "Resultant of forces, FBD, Lami's theorem, and equilibrium conditions.",
      notes: [{ id: "note-est100-101", order: 1, title: "01. Force Systems, Resultants & Equilibrium", summary: "Concurrent/non-concurrent force systems, moment of a force, couple, FBDs, and equilibrium equations.", pages: 26, author: "Dept. of Civil Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }, {
      id: "ch-est100-2", chapterNumber: 2, title: "Dynamics — Kinematics & Kinetics",
      description: "Rectilinear and curvilinear motion, Newton's laws, work-energy theorem.",
      notes: [{ id: "note-est100-201", order: 1, title: "01. Kinematics & Newton's Laws of Motion", summary: "Velocity-acceleration graphs, projectile motion, circular motion, Newton's 2nd law, and D'Alembert's principle.", pages: 24, author: "Dept. of Civil Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-04" }],
    }],
  };
