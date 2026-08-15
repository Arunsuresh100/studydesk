import { SubjectBox } from "@/types";

export const cst201: SubjectBox = {
    id: "cst201", subjectName: "Data Structures", code: "CST201",
    description: "Arrays, linked lists, stacks, queues, trees, heaps, graphs, sorting algorithms, and complexity analysis.",
    level: "UG", chapters: [{
      id: "ch-cst201-1", chapterNumber: 1, title: "Linear Data Structures",
      description: "Arrays, linked lists, stacks, queues, and their applications.",
      notes: [{ id: "note-cst201-101", order: 1, title: "01. Arrays, Linked Lists, Stacks & Queues", summary: "Array operations, singly/doubly linked lists, stack and queue ADT implementations, expression evaluation applications.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst201-2", chapterNumber: 2, title: "Non-Linear Data Structures & Sorting",
      description: "Trees, heaps, graphs, sorting algorithms, and searching techniques.",
      notes: [{ id: "note-cst201-201", order: 1, title: "01. Trees, Graphs & Sorting Algorithms", summary: "BST, AVL trees, heaps, BFS/DFS, bubble/merge/quick sort, and binary search.", pages: 32, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
