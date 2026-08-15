import { SubjectBox } from "@/types";

export const mat206: SubjectBox = {
    id: "mat206", subjectName: "Graph Theory", code: "MAT206",
    description: "Graphs, trees, connectivity, Euler/Hamiltonian paths, planar graphs, graph coloring, and network flows.",
    level: "UG", chapters: [{
      id: "ch-mat206-1", chapterNumber: 1, title: "Graphs, Trees & Connectivity",
      description: "Basic graph terminology, spanning trees, connectivity, bridges, and cut vertices.",
      notes: [{ id: "note-mat206-101", order: 1, title: "01. Graph Theory — Fundamentals & Trees", summary: "Graph types, degree sequence, Euler formula, spanning trees, cut vertices, bridges, and graph connectivity.", pages: 24, author: "Dept. of Mathematics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-mat206-2", chapterNumber: 2, title: "Planar Graphs, Coloring & Network Flows",
      description: "Planarity testing, chromatic number, graph coloring, max-flow min-cut.",
      notes: [{ id: "note-mat206-201", order: 1, title: "01. Planar Graphs, Graph Coloring & Network Flows", summary: "Kuratowski's theorem, chromatic polynomial, four-color theorem, and Ford-Fulkerson max-flow algorithm.", pages: 22, author: "Dept. of Mathematics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
