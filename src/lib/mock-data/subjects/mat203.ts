import { SubjectBox } from "@/types";

export const mat203: SubjectBox = {
    id: "mat203", subjectName: "Discrete Mathematical Structures", code: "MAT203",
    description: "Sets, relations, functions, propositional logic, predicate logic, graph theory, combinatorics, and algebraic structures.",
    level: "UG", chapters: [{
      id: "ch-mat203-1", chapterNumber: 1, title: "Logic, Sets & Relations",
      description: "Propositional and predicate logic, sets, relations and their properties.",
      notes: [{ id: "note-mat203-101", order: 1, title: "01. Logic & Set Theory", summary: "Truth tables, logical equivalences, quantifiers, power sets, binary relations, equivalence classes, and partial orders.", pages: 24, author: "Dept. of Mathematics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-mat203-2", chapterNumber: 2, title: "Combinatorics & Algebraic Structures",
      description: "Counting principles, permutations, combinations, recurrence, groups, rings, and lattices.",
      notes: [{ id: "note-mat203-201", order: 1, title: "01. Combinatorics, Groups & Lattices", summary: "Pigeonhole principle, generating functions, solving recurrences, group axioms, subgroups, and Boolean lattices.", pages: 26, author: "Dept. of Mathematics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
