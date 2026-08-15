import { SubjectBox } from "@/types";

export const cst204: SubjectBox = {
    id: "cst204", subjectName: "Database Management Systems", code: "CST204",
    description: "Relational model, SQL, ER diagrams, normalization, transactions, concurrency control, and query optimization.",
    level: "UG", chapters: [{
      id: "ch-cst204-1", chapterNumber: 1, title: "ER Modelling, Relational Model & SQL",
      description: "ER diagrams, relational schema, SQL DDL/DML, joins, and subqueries.",
      notes: [{ id: "note-cst204-101", order: 1, title: "01. ER Diagrams, SQL Queries & Joins", summary: "ER to relational mapping, SQL SELECT with complex JOINs, GROUP BY/HAVING, nested subqueries, and view creation.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst204-2", chapterNumber: 2, title: "Normalization, Transactions & Concurrency",
      description: "Normal forms (1NF to BCNF), ACID properties, serializability, and locking.",
      notes: [{ id: "note-cst204-201", order: 1, title: "01. Normalization, Transactions & Concurrency Control", summary: "FD closure, normal forms, ACID properties, 2PL protocol, deadlock detection, and timestamp ordering.", pages: 30, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
