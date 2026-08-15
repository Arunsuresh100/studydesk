import { SubjectBox } from "@/types";

export const cst304: SubjectBox = {
    id: "cst304", subjectName: "Computer Graphics and Image Processing", code: "CST304",
    description: "2D/3D graphics, rasterization, transformations, clipping, rendering, image enhancement, and compression.",
    level: "UG", chapters: [{
      id: "ch-cst304-1", chapterNumber: 1, title: "2D/3D Graphics & Transformations",
      description: "Line/circle algorithms, 2D/3D transformations, viewing pipelines, and clipping.",
      notes: [{ id: "note-cst304-101", order: 1, title: "01. Graphics Algorithms & Transformations", summary: "Bresenham's line/circle, 2D homogeneous transformations, 3D projections, Cohen-Sutherland clipping.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst304-2", chapterNumber: 2, title: "Image Processing Techniques",
      description: "Image enhancement, filtering, edge detection, segmentation, and compression.",
      notes: [{ id: "note-cst304-201", order: 1, title: "01. Image Enhancement, Filtering & Segmentation", summary: "Histogram equalization, spatial filters, Sobel/Canny edge detection, thresholding, and JPEG/RLE compression.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
