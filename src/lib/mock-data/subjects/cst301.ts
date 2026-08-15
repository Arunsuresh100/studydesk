import { SubjectBox } from "@/types";

export const cst301: SubjectBox = {
    id: "cst301", subjectName: "Formal Languages and Automata Theory", code: "CST301",
    description: "Regular languages, finite automata, pushdown automata, context-free grammars, Turing machines, and decidability.",
    level: "UG", chapters: [{
      id: "ch-cst301-1", chapterNumber: 1, title: "Regular Languages & Finite Automata",
      description: "DFA, NFA, regular expressions, and Pumping Lemma.",
      notes: [{ id: "note-cst301-101", order: 1, title: "01. Finite Automata & Regular Languages", summary: "DFA design, NFA to DFA conversion, regular expressions, Kleene's theorem, and Pumping Lemma proofs.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst301-2", chapterNumber: 2, title: "CFGs, PDAs & Turing Machines",
      description: "Context-free grammars, CNF, pushdown automata, Turing machines, and decidability.",
      notes: [{ id: "note-cst301-201", order: 1, title: "01. CFGs, PDAs, Turing Machines & Decidability", summary: "CFG parsing, CNF, CYK algorithm, PDA design, Turing machine construction, and halting problem.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
