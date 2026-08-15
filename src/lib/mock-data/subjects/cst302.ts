import { SubjectBox } from "@/types";

export const cst302: SubjectBox = {
    id: "cst302", subjectName: "Compiler Design", code: "CST302",
    description: "Lexical analysis, parsing (LL, LR, LALR), semantic analysis, intermediate code, optimization, and code generation.",
    level: "UG", chapters: [{
      id: "ch-cst302-1", chapterNumber: 1, title: "Lexical Analysis & Parsing",
      description: "Tokenization, LEX, LL(1) and LR parsers, and parse table construction.",
      notes: [{ id: "note-cst302-101", order: 1, title: "01. Lexical Analysis, LL & LR Parsing", summary: "Regular expressions for tokens, LEX tool, first/follow sets for LL(1), LR item sets, SLR/LALR parser tables.", pages: 30, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst302-2", chapterNumber: 2, title: "Semantic Analysis, Optimization & Code Generation",
      description: "Type checking, intermediate code, basic blocks, DAG, and target code generation.",
      notes: [{ id: "note-cst302-201", order: 1, title: "01. Semantic Analysis, Code Optimization & Generation", summary: "Attribute grammars, SDT, three-address code, basic blocks, DAG optimization, and register allocation.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
