import { SubjectBox } from "@/types";

export const cst306: SubjectBox = {
    id: "cst306", subjectName: "Algorithm Analysis and Design", code: "CST306",
    description: "Divide-and-conquer, greedy, dynamic programming, backtracking, NP-completeness, and approximation algorithms.",
    level: "UG", chapters: [{
      id: "ch-cst306-1", chapterNumber: 1, title: "Algorithm Paradigms — D&C, Greedy & DP",
      description: "Merge sort, quick sort, Huffman coding, greedy algorithms, Floyd-Warshall, and optimal BST.",
      notes: [{ id: "note-cst306-101", order: 1, title: "01. Divide & Conquer, Greedy & Dynamic Programming", summary: "Master theorem, merge sort, greedy activity selection, Huffman coding, Floyd-Warshall, matrix chain multiplication.", pages: 32, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst306-2", chapterNumber: 2, title: "Backtracking, Branch & Bound, and NP-Completeness",
      description: "N-Queens, B&B for TSP/Knapsack, P vs NP, NP-hard, and approximations.",
      notes: [{ id: "note-cst306-201", order: 1, title: "01. Backtracking, NP-Completeness & Approximations", summary: "State-space trees for N-Queens/graph coloring, B&B for TSP/Knapsack, P vs NP, SAT, vertex cover approximation.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
