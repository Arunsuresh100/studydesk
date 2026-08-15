import { SubjectBox } from "@/types";

export const cst305: SubjectBox = {
    id: "cst305", subjectName: "System Software", code: "CST305",
    description: "Assemblers, loaders, linkers, macros, compilers (lexical analysis, parsing, code generation), and interpreters.",
    level: "UG", chapters: [{
      id: "ch-cst305-1", chapterNumber: 1, title: "Assemblers, Loaders & Linkers",
      description: "Two-pass assembler design, relocatable object files, linker operations, and loader types.",
      notes: [{ id: "note-cst305-101", order: 1, title: "01. Assemblers, Loaders & Linkers", summary: "Symbol table, opcode table, two-pass assembly, relocation bits, absolute/relocating/dynamic loaders.", pages: 24, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst305-2", chapterNumber: 2, title: "Compiler Phases & Macros",
      description: "Lexical analysis, syntax analysis, semantic analysis, code generation, and macro processing.",
      notes: [{ id: "note-cst305-201", order: 1, title: "01. Compiler Design Phases & Macro Processing", summary: "Lexer tokenization, parser types (LL, LR), semantic rules, intermediate code, and macro expansion mechanisms.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
