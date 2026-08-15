import { SubjectBox } from "@/types";

export const mat102: SubjectBox = {
    id: "mat102", subjectName: "Vector Calculus, Differential Equations and Transforms", code: "MAT102",
    description: "Vector differentiation and integration, line/surface/volume integrals, ODE solving methods, Laplace and Fourier transforms.",
    level: "UG", chapters: [{
      id: "ch-mat102-1", chapterNumber: 1, title: "Vector Calculus",
      description: "Gradient, divergence, curl, and integral theorems.",
      notes: [{ id: "note-mat102-101", order: 1, title: "01. Vector Calculus — Gradient, Divergence & Curl", summary: "Del operator, scalar/vector fields, directional derivatives, Green's, Stokes', and Gauss divergence theorems.", pages: 26, author: "Dept. of Mathematics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-mat102-2", chapterNumber: 2, title: "Differential Equations & Transforms",
      description: "First/higher order ODEs, Laplace and Fourier transforms.",
      notes: [{ id: "note-mat102-201", order: 1, title: "01. ODEs & Laplace/Fourier Transforms", summary: "Separable equations, integrating factor, Bernoulli equations, standard Laplace pairs, and Fourier series coefficients.", pages: 28, author: "Dept. of Mathematics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
