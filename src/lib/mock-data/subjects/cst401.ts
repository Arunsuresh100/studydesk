import { SubjectBox } from "@/types";

export const cst401: SubjectBox = {
    id: "cst401", subjectName: "Artificial Intelligence", code: "CST401",
    description: "AI fundamentals, search algorithms, knowledge representation, machine learning basics, and expert systems.",
    level: "UG", chapters: [{
      id: "ch-cst401-1", chapterNumber: 1, title: "Search, Knowledge Representation & Reasoning",
      description: "Uninformed/informed search, A* algorithm, propositional/first-order logic, and inference.",
      notes: [{ id: "note-cst401-101", order: 1, title: "01. AI Search Algorithms & Knowledge Representation", summary: "BFS/DFS/IDS for AI, A* heuristics, propositional and first-order logic, forward/backward chaining, and resolution.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst401-2", chapterNumber: 2, title: "Machine Learning & Expert Systems",
      description: "Supervised learning, decision trees, neural networks, and expert system architectures.",
      notes: [{ id: "note-cst401-201", order: 1, title: "01. Machine Learning Fundamentals & Expert Systems", summary: "Supervised vs unsupervised learning, decision tree (ID3), perceptron, basic neural networks, and expert system components.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
