import { SubjectBox } from "@/types";

export const est102: SubjectBox = {
    id: "est102", subjectName: "Programming in C", code: "EST102",
    description: "C programming fundamentals: data types, control flow, functions, arrays, pointers, structures, and file I/O.",
    level: "UG", chapters: [{
      id: "ch-est102-1", chapterNumber: 1, title: "C Fundamentals & Control Flow",
      description: "Variables, data types, operators, if-else, loops, and switch-case.",
      notes: [{ id: "note-est102-101", order: 1, title: "01. C Programming Basics — Data Types & Control Flow", summary: "Integer, float, char data types, arithmetic operators, precedence, for/while/do-while loops, break/continue.", pages: 20, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-est102-2", chapterNumber: 2, title: "Functions, Arrays & Pointers",
      description: "Function definition, recursion, 1D/2D arrays, pointer arithmetic, and dynamic memory allocation.",
      notes: [{ id: "note-est102-201", order: 1, title: "01. Functions, Arrays & Pointer Concepts in C", summary: "Call-by-value vs call-by-reference, recursive functions, array-pointer relationship, malloc/calloc/free.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }, {
      id: "ch-est102-3", chapterNumber: 3, title: "Structures, Unions & File I/O",
      description: "Structure definitions, unions, typedef, file modes, and text/binary file handling.",
      notes: [{ id: "note-est102-301", order: 1, title: "01. Structures, Unions & File Handling in C", summary: "Nested structures, union memory sharing, typedef aliases, fopen/fclose/fread/fwrite, and error handling.", pages: 22, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-05" }],
    }],
  };
