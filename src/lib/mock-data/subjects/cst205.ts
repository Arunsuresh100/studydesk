import { SubjectBox } from "@/types";

export const cst205: SubjectBox = {
    id: "cst205", subjectName: "Object Oriented Programming Using Java", code: "CST205",
    description: "OOP concepts, Java syntax, classes, inheritance, polymorphism, interfaces, exception handling, I/O, and collections.",
    level: "UG", chapters: [{
      id: "ch-cst205-1", chapterNumber: 1, title: "Java Fundamentals & OOP Concepts",
      description: "Classes, objects, constructors, encapsulation, inheritance, and polymorphism.",
      notes: [{ id: "note-cst205-101", order: 1, title: "01. Java OOP — Classes, Inheritance & Polymorphism", summary: "Class anatomy, access modifiers, this/super keywords, method overriding vs overloading, abstract classes, interfaces.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst205-2", chapterNumber: 2, title: "Exception Handling, I/O & Collections",
      description: "Try-catch-finally, custom exceptions, Java streams, file handling, and collections framework.",
      notes: [{ id: "note-cst205-201", order: 1, title: "01. Exception Handling, File I/O & Java Collections", summary: "Checked vs unchecked exceptions, throws clause, byte/character streams, ArrayList, LinkedList, HashMap, and generics.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
