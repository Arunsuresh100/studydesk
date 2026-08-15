import { SubjectBox } from "@/types";

export const mat101: SubjectBox = {
    id: "mat101", subjectName: "Linear Algebra and Calculus", code: "MAT101",
    description: "Matrices, determinants, eigenvalues, system of linear equations, differential calculus, partial derivatives, and integral calculus.",
    level: "UG", chapters: [{
      id: "ch-mat101-1", chapterNumber: 1, title: "Matrices & Linear Systems",
      description: "Matrix operations, row reduction, rank, and solving systems of linear equations.",
      notes: [{ id: "note-mat101-101", order: 1, title: "01. Matrices, Determinants & Row Reduction", summary: "Types of matrices, cofactor expansion, properties of determinants, Gaussian and Gauss-Jordan elimination.", pages: 24, author: "Dept. of Mathematics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-mat101-2", chapterNumber: 2, title: "Eigenvalues, Eigenvectors & Diagonalization",
      description: "Characteristic equation, eigenvalue-eigenvector computation, and matrix diagonalization.",
      notes: [{ id: "note-mat101-201", order: 1, title: "01. Eigenvalues & Eigenvectors — Theory and Problems", summary: "Characteristic polynomial, Cayley-Hamilton theorem, and diagonalization procedures.", pages: 20, author: "Dept. of Mathematics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }, {
      id: "ch-mat101-3", chapterNumber: 3, title: "Differential & Integral Calculus",
      description: "Limits, differentiation rules, partial derivatives, maxima-minima, and definite integrals.",
      notes: [{ id: "note-mat101-301", order: 1, title: "01. Differential Calculus — Derivatives & Applications", summary: "Chain rule, implicit differentiation, partial derivatives, gradient, and optimization.", pages: 28, author: "Dept. of Mathematics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-05" }],
    }],
  };
