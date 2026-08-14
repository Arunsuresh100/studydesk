import { SubjectBox } from "@/types";

export const csBtechSubjects: SubjectBox[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // CS B.Tech — Semester 1 subjects
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "cs-s1-mat101", subjectName: "Linear Algebra and Calculus", code: "MAT101",
    description: "Matrices, determinants, eigenvalues, system of linear equations, differential calculus, partial derivatives, and integral calculus.",
    course: "B.Tech Computer Science", level: "UG", semester: 1,
    chapters: [{
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
  },
  {
    id: "cs-s1-pht100", subjectName: "Engineering Physics A", code: "PHT100",
    description: "Oscillations, wave optics, lasers, fiber optics, quantum mechanics, semiconductor physics, and superconductivity.",
    course: "B.Tech Computer Science", level: "UG", semester: 1,
    chapters: [{
      id: "ch-pht100-1", chapterNumber: 1, title: "Oscillations & Wave Optics",
      description: "SHM, interference, diffraction, and polarization of light.",
      notes: [{ id: "note-pht100-101", order: 1, title: "01. Oscillations & Wave Optics — Module Notes", summary: "SHM equations, energy in SHM, Young's double slit, single-slit diffraction, and Brewster's law.", pages: 22, author: "Dept. of Physics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-pht100-2", chapterNumber: 2, title: "Lasers, Fiber Optics & Quantum Mechanics",
      description: "Laser principles, optical fibers, wave-particle duality, and Schrödinger equations.",
      notes: [{ id: "note-pht100-201", order: 1, title: "01. Lasers & Fiber Optics", summary: "Stimulated emission, population inversion, types of lasers, total internal reflection, and fiber optic communication.", pages: 18, author: "Dept. of Physics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s1-est100", subjectName: "Engineering Mechanics", code: "EST100",
    description: "Statics and dynamics: force systems, equilibrium, friction, kinematics, Newton's laws, work-energy, and impulse-momentum.",
    course: "B.Tech Computer Science", level: "UG", semester: 1,
    chapters: [{
      id: "ch-est100-1", chapterNumber: 1, title: "Statics — Force Systems & Equilibrium",
      description: "Resultant of forces, FBD, Lami's theorem, and equilibrium conditions.",
      notes: [{ id: "note-est100-101", order: 1, title: "01. Force Systems, Resultants & Equilibrium", summary: "Concurrent/non-concurrent force systems, moment of a force, couple, FBDs, and equilibrium equations.", pages: 26, author: "Dept. of Civil Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }, {
      id: "ch-est100-2", chapterNumber: 2, title: "Dynamics — Kinematics & Kinetics",
      description: "Rectilinear and curvilinear motion, Newton's laws, work-energy theorem.",
      notes: [{ id: "note-est100-201", order: 1, title: "01. Kinematics & Newton's Laws of Motion", summary: "Velocity-acceleration graphs, projectile motion, circular motion, Newton's 2nd law, and D'Alembert's principle.", pages: 24, author: "Dept. of Civil Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-04" }],
    }],
  },
  {
    id: "cs-s1-est120", subjectName: "Basics of Civil & Mechanical Engineering", code: "EST120",
    description: "Introduction to surveying, building materials, construction, thermodynamics, machine elements, and manufacturing processes.",
    course: "B.Tech Computer Science", level: "UG", semester: 1,
    chapters: [{
      id: "ch-est120-1", chapterNumber: 1, title: "Civil Engineering Fundamentals",
      description: "Surveying basics, building materials, and construction methods.",
      notes: [{ id: "note-est120-101", order: 1, title: "01. Surveying & Building Materials", summary: "Chain surveying, leveling, building materials classification, properties of cement and concrete.", pages: 18, author: "Dept. of Civil Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }, {
      id: "ch-est120-2", chapterNumber: 2, title: "Mechanical Engineering Fundamentals",
      description: "Thermodynamics basics, machine elements, and manufacturing processes.",
      notes: [{ id: "note-est120-201", order: 1, title: "01. Thermodynamics, Machine Elements & Manufacturing", summary: "Laws of thermodynamics overview, types of machine elements (gears, bearings, shafts), and manufacturing process classification.", pages: 20, author: "Dept. of Mechanical Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-04" }],
    }],
  },
  {
    id: "cs-s1-hut101", subjectName: "Life Skills", code: "HUT101",
    description: "Communication skills, critical thinking, emotional intelligence, leadership, time management, and professional development.",
    course: "B.Tech Computer Science", level: "UG", semester: 1,
    chapters: [{
      id: "ch-hut101-1", chapterNumber: 1, title: "Communication & Critical Thinking",
      description: "Verbal/non-verbal communication, active listening, and critical thinking frameworks.",
      notes: [{ id: "note-hut101-101", order: 1, title: "01. Effective Communication & Critical Thinking Skills", summary: "LSRW skills, 7Cs of communication, critical thinking models, barriers to communication.", pages: 16, author: "Dept. of Humanities", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-hut101-2", chapterNumber: 2, title: "Emotional Intelligence & Leadership",
      description: "Self-awareness, empathy, leadership styles, team dynamics, and conflict resolution.",
      notes: [{ id: "note-hut101-201", order: 1, title: "01. Emotional Intelligence & Leadership Styles", summary: "Goleman's EI model, self-regulation, transformational vs transactional leadership, and team building.", pages: 14, author: "Dept. of Humanities", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s1-phl120", subjectName: "Engineering Physics Lab", code: "PHL120",
    description: "Practical experiments in optics, mechanics, and electronics to reinforce Engineering Physics A concepts.",
    course: "B.Tech Computer Science", level: "UG", semester: 1,
    chapters: [{
      id: "ch-phl120-1", chapterNumber: 1, title: "Optics & Mechanics Lab Experiments",
      description: "Young's double slit, Newton's rings, torsional pendulum, and resonance experiments.",
      notes: [{ id: "note-phl120-101", order: 1, title: "01. Lab Manual — Optics & Mechanics Experiments", summary: "Step-by-step procedures, observations, calculations, and viva questions for 8 standard experiments.", pages: 30, author: "Dept. of Physics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },
  {
    id: "cs-s1-esl120", subjectName: "Civil & Mechanical Workshop", code: "ESL120",
    description: "Hands-on workshop practice in carpentry, fitting, sheet metal, welding, plumbing, and basic electrical wiring.",
    course: "B.Tech Computer Science", level: "UG", semester: 1,
    chapters: [{
      id: "ch-esl120-1", chapterNumber: 1, title: "Workshop Trades — Civil & Mechanical",
      description: "Carpentry, fitting, sheet metal work, welding, plumbing, and safety practices.",
      notes: [{ id: "note-esl120-101", order: 1, title: "01. Workshop Manual — Civil & Mechanical Trades", summary: "Tools, materials, safety guidelines, and step-by-step instructions for carpentry joints, fitting exercises, arc welding, and plumbing.", pages: 28, author: "Dept. of Mechanical Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CS B.Tech — Semester 2 subjects
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "cs-s2-mat102", subjectName: "Vector Calculus, Differential Equations and Transforms", code: "MAT102",
    description: "Vector differentiation and integration, line/surface/volume integrals, ODE solving methods, Laplace and Fourier transforms.",
    course: "B.Tech Computer Science", level: "UG", semester: 2,
    chapters: [{
      id: "ch-mat102-1", chapterNumber: 1, title: "Vector Calculus",
      description: "Gradient, divergence, curl, and integral theorems.",
      notes: [{ id: "note-mat102-101", order: 1, title: "01. Vector Calculus — Gradient, Divergence & Curl", summary: "Del operator, scalar/vector fields, directional derivatives, Green's, Stokes', and Gauss divergence theorems.", pages: 26, author: "Dept. of Mathematics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-mat102-2", chapterNumber: 2, title: "Differential Equations & Transforms",
      description: "First/higher order ODEs, Laplace and Fourier transforms.",
      notes: [{ id: "note-mat102-201", order: 1, title: "01. ODEs & Laplace/Fourier Transforms", summary: "Separable equations, integrating factor, Bernoulli equations, standard Laplace pairs, and Fourier series coefficients.", pages: 28, author: "Dept. of Mathematics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s2-pht110", subjectName: "Engineering Physics B", code: "PHT110",
    description: "Properties of matter, thermal physics, magnetism, electromagnetic induction, and modern physics fundamentals.",
    course: "B.Tech Computer Science", level: "UG", semester: 2,
    chapters: [{
      id: "ch-pht110-1", chapterNumber: 1, title: "Properties of Matter & Thermal Physics",
      description: "Elasticity, viscosity, thermal conductivity, and thermodynamic processes.",
      notes: [{ id: "note-pht110-101", order: 1, title: "01. Properties of Matter & Thermal Physics", summary: "Stress-strain, Poisson's ratio, viscous flow, Newton's law of cooling, and thermal conductivity experiments.", pages: 22, author: "Dept. of Physics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }],
  },
  {
    id: "cs-s2-cyt100", subjectName: "Engineering Chemistry", code: "CYT100",
    description: "Water chemistry, electrochemistry, corrosion, polymers, fuels, and instrumental analytical methods.",
    course: "B.Tech Computer Science", level: "UG", semester: 2,
    chapters: [{
      id: "ch-cyt100-1", chapterNumber: 1, title: "Water Chemistry & Electrochemistry",
      description: "Hardness of water, softening methods, electrochemical cells, and Nernst equation.",
      notes: [{ id: "note-cyt100-101", order: 1, title: "01. Water Chemistry & Electrochemistry Notes", summary: "Types of hardness, lime-soda/ion exchange, galvanic cells, EMF, electrode potentials, and electrolysis.", pages: 20, author: "Dept. of Chemistry", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }, {
      id: "ch-cyt100-2", chapterNumber: 2, title: "Polymers, Fuels & Instrumentation",
      description: "Classification of polymers, plastics, rubber, fuels, and analytical instruments.",
      notes: [{ id: "note-cyt100-201", order: 1, title: "01. Polymers, Fuels & Analytical Methods", summary: "Addition vs condensation polymers, calorific value of fuels, proximate analysis, and UV-Vis spectroscopy basics.", pages: 22, author: "Dept. of Chemistry", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-04" }],
    }],
  },
  {
    id: "cs-s2-est110", subjectName: "Engineering Graphics", code: "EST110",
    description: "Principles of engineering drawing, orthographic projections, isometric views, sections, and AutoCAD basics.",
    course: "B.Tech Computer Science", level: "UG", semester: 2,
    chapters: [{
      id: "ch-est110-1", chapterNumber: 1, title: "Projections & Drawing Fundamentals",
      description: "First/third angle projections, auxiliary views, sectional views, and dimensioning standards.",
      notes: [{ id: "note-est110-101", order: 1, title: "01. Engineering Graphics — Projections & Isometric Drawing", summary: "BIS conventions, first vs third angle projection, orthographic projections of solids, and isometric drawing techniques.", pages: 32, author: "Dept. of Civil Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }],
  },
  {
    id: "cs-s2-est102", subjectName: "Programming in C", code: "EST102",
    description: "C programming fundamentals: data types, control flow, functions, arrays, pointers, structures, and file I/O.",
    course: "B.Tech Computer Science", level: "UG", semester: 2,
    chapters: [{
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
  },
  {
    id: "cs-s2-est130", subjectName: "Basics of Electrical & Electronics Engineering", code: "EST130",
    description: "DC/AC circuits, transformers, electric machines, semiconductor devices, and basic digital electronics.",
    course: "B.Tech Computer Science", level: "UG", semester: 2,
    chapters: [{
      id: "ch-est130-1", chapterNumber: 1, title: "DC & AC Circuits",
      description: "Kirchhoff's laws, mesh/node analysis, AC fundamentals, phasors, and resonance.",
      notes: [{ id: "note-est130-101", order: 1, title: "01. DC & AC Circuit Analysis", summary: "KVL/KCL, superposition, Thevenin/Norton theorems, sinusoidal steady state, power factor, and resonance.", pages: 28, author: "Dept. of Electrical Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }, {
      id: "ch-est130-2", chapterNumber: 2, title: "Semiconductor Devices & Digital Electronics",
      description: "Diodes, BJTs, FETs, logic gates, Boolean algebra, and combinational circuits.",
      notes: [{ id: "note-est130-201", order: 1, title: "01. Semiconductor Devices & Digital Electronics", summary: "PN junction diode, Zener diode, BJT modes, FET operation, logic gates truth tables, Boolean simplification, and half-adder.", pages: 24, author: "Dept. of Electronics Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-04" }],
    }],
  },
  {
    id: "cs-s2-hut102", subjectName: "Professional Communication", code: "HUT102",
    description: "Technical writing, business correspondence, presentations, group discussions, interviews, and grammar for engineers.",
    course: "B.Tech Computer Science", level: "UG", semester: 2,
    chapters: [{
      id: "ch-hut102-1", chapterNumber: 1, title: "Technical Writing & Business Correspondence",
      description: "Report writing, letters, memos, emails, and technical documentation.",
      notes: [{ id: "note-hut102-101", order: 1, title: "01. Technical Writing & Professional Correspondence", summary: "Structure of technical reports, executive summaries, formal/informal letters, business email etiquette, and memo formats.", pages: 18, author: "Dept. of Humanities", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }],
  },
  {
    id: "cs-s2-cyl120", subjectName: "Engineering Chemistry Lab", code: "CYL120",
    description: "Laboratory experiments in water analysis, electrochemistry, and polymer characterization.",
    course: "B.Tech Computer Science", level: "UG", semester: 2,
    chapters: [{
      id: "ch-cyl120-1", chapterNumber: 1, title: "Chemistry Lab Experiments",
      description: "Experiments on water hardness, electrochemical measurements, and polymer properties.",
      notes: [{ id: "note-cyl120-101", order: 1, title: "01. Engineering Chemistry Lab Manual", summary: "Hardness estimation by EDTA, conductometric titration, viscosity measurement, and Beer-Lambert law verification.", pages: 26, author: "Dept. of Chemistry", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },
  {
    id: "cs-s2-esl130", subjectName: "Electrical & Electronics Workshop", code: "ESL130",
    description: "Hands-on lab sessions in electrical wiring, electronic circuit assembly, PCB fabrication, and soldering skills.",
    course: "B.Tech Computer Science", level: "UG", semester: 2,
    chapters: [{
      id: "ch-esl130-1", chapterNumber: 1, title: "Electrical & Electronics Workshop Practicals",
      description: "Wiring, soldering, PCB making, and testing basic electronic circuits.",
      notes: [{ id: "note-esl130-101", order: 1, title: "01. Electrical & Electronics Workshop Manual", summary: "Safety precautions, domestic wiring practice (staircase, two-way switching), PCB design, soldering techniques.", pages: 24, author: "Dept. of Electrical Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CS B.Tech — Semester 3 subjects
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "cs-s3-mat203", subjectName: "Discrete Mathematical Structures", code: "MAT203",
    description: "Sets, relations, functions, propositional logic, predicate logic, graph theory, combinatorics, and algebraic structures.",
    course: "B.Tech Computer Science", level: "UG", semester: 3,
    chapters: [{
      id: "ch-mat203-1", chapterNumber: 1, title: "Logic, Sets & Relations",
      description: "Propositional and predicate logic, sets, relations and their properties.",
      notes: [{ id: "note-mat203-101", order: 1, title: "01. Logic & Set Theory", summary: "Truth tables, logical equivalences, quantifiers, power sets, binary relations, equivalence classes, and partial orders.", pages: 24, author: "Dept. of Mathematics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-mat203-2", chapterNumber: 2, title: "Combinatorics & Algebraic Structures",
      description: "Counting principles, permutations, combinations, recurrence, groups, rings, and lattices.",
      notes: [{ id: "note-mat203-201", order: 1, title: "01. Combinatorics, Groups & Lattices", summary: "Pigeonhole principle, generating functions, solving recurrences, group axioms, subgroups, and Boolean lattices.", pages: 26, author: "Dept. of Mathematics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s3-cst201", subjectName: "Data Structures", code: "CST201",
    description: "Arrays, linked lists, stacks, queues, trees, heaps, graphs, sorting algorithms, and complexity analysis.",
    course: "B.Tech Computer Science", level: "UG", semester: 3,
    chapters: [{
      id: "ch-cst201-1", chapterNumber: 1, title: "Linear Data Structures",
      description: "Arrays, linked lists, stacks, queues, and their applications.",
      notes: [{ id: "note-cst201-101", order: 1, title: "01. Arrays, Linked Lists, Stacks & Queues", summary: "Array operations, singly/doubly linked lists, stack and queue ADT implementations, expression evaluation applications.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst201-2", chapterNumber: 2, title: "Non-Linear Data Structures & Sorting",
      description: "Trees, heaps, graphs, sorting algorithms, and searching techniques.",
      notes: [{ id: "note-cst201-201", order: 1, title: "01. Trees, Graphs & Sorting Algorithms", summary: "BST, AVL trees, heaps, BFS/DFS, bubble/merge/quick sort, and binary search.", pages: 32, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s3-cst203", subjectName: "Logic System Design", code: "CST203",
    description: "Boolean algebra, combinational circuits, sequential circuits, state machines, registers, and counters.",
    course: "B.Tech Computer Science", level: "UG", semester: 3,
    chapters: [{
      id: "ch-cst203-1", chapterNumber: 1, title: "Boolean Algebra & Combinational Circuits",
      description: "Boolean minimization, multiplexers, decoders, adders, and comparators.",
      notes: [{ id: "note-cst203-101", order: 1, title: "01. Boolean Algebra & Combinational Circuit Design", summary: "SOP/POS forms, Karnaugh map simplification, hazards, and implementation using multiplexers and arithmetic circuits.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst203-2", chapterNumber: 2, title: "Sequential Circuits & State Machines",
      description: "Flip-flops, registers, counters, Mealy and Moore machines.",
      notes: [{ id: "note-cst203-201", order: 1, title: "01. Flip-Flops, Counters & Finite State Machines", summary: "SR/D/JK/T flip-flops, synchronous/asynchronous counters, shift registers, Mealy vs Moore machine design.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s3-cst205", subjectName: "Object Oriented Programming Using Java", code: "CST205",
    description: "OOP concepts, Java syntax, classes, inheritance, polymorphism, interfaces, exception handling, I/O, and collections.",
    course: "B.Tech Computer Science", level: "UG", semester: 3,
    chapters: [{
      id: "ch-cst205-1", chapterNumber: 1, title: "Java Fundamentals & OOP Concepts",
      description: "Classes, objects, constructors, encapsulation, inheritance, and polymorphism.",
      notes: [{ id: "note-cst205-101", order: 1, title: "01. Java OOP — Classes, Inheritance & Polymorphism", summary: "Class anatomy, access modifiers, this/super keywords, method overriding vs overloading, abstract classes, interfaces.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst205-2", chapterNumber: 2, title: "Exception Handling, I/O & Collections",
      description: "Try-catch-finally, custom exceptions, Java streams, file handling, and collections framework.",
      notes: [{ id: "note-cst205-201", order: 1, title: "01. Exception Handling, File I/O & Java Collections", summary: "Checked vs unchecked exceptions, throws clause, byte/character streams, ArrayList, LinkedList, HashMap, and generics.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s3-est200", subjectName: "Design and Engineering", code: "EST200",
    description: "Introduction to engineering design process, product development lifecycle, innovation, and design thinking.",
    course: "B.Tech Computer Science", level: "UG", semester: 3,
    chapters: [{
      id: "ch-est200s3-1", chapterNumber: 1, title: "Engineering Design Process & Design Thinking",
      description: "Problem identification, ideation, prototyping, testing, and iterative design.",
      notes: [{ id: "note-est200s3-101", order: 1, title: "01. Engineering Design Process & Design Thinking", summary: "IDEO design thinking stages, customer empathy, brainstorming techniques, prototyping methods, and usability testing.", pages: 18, author: "Dept. of Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },
  {
    id: "cs-s3-hut200", subjectName: "Professional Ethics", code: "HUT200",
    description: "Ethics in engineering, codes of professional conduct, intellectual property, environmental responsibility, and social impacts.",
    course: "B.Tech Computer Science", level: "UG", semester: 3,
    chapters: [{
      id: "ch-hut200s3-1", chapterNumber: 1, title: "Professional Ethics & Engineering Codes",
      description: "Engineering ethics frameworks, case studies, IPR, environmental ethics, and whistleblowing.",
      notes: [{ id: "note-hut200s3-101", order: 1, title: "01. Engineering Ethics — Codes, IPR & Case Studies", summary: "NSPE code of ethics, moral dilemmas in engineering, patents and copyright, Challenger case study.", pages: 16, author: "Dept. of Humanities", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },
  {
    id: "cs-s3-mcn201", subjectName: "Sustainable Engineering", code: "MCN201",
    description: "Sustainability concepts, renewable energy, waste management, carbon footprint, life cycle assessment, and green engineering.",
    course: "B.Tech Computer Science", level: "UG", semester: 3,
    chapters: [{
      id: "ch-mcn201-1", chapterNumber: 1, title: "Sustainability & Green Engineering Principles",
      description: "Sustainable development goals, renewable energy sources, waste hierarchy, and LCA.",
      notes: [{ id: "note-mcn201-101", order: 1, title: "01. Sustainable Engineering — Principles & Green Technologies", summary: "UN SDGs, solar and wind energy basics, waste management hierarchy, carbon footprint, and green building concepts.", pages: 20, author: "Dept. of Environmental Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },
  {
    id: "cs-s3-csl201", subjectName: "Data Structures Lab", code: "CSL201",
    description: "Lab implementation of arrays, linked lists, stacks, queues, trees, graphs, and sorting in C/Java.",
    course: "B.Tech Computer Science", level: "UG", semester: 3,
    chapters: [{
      id: "ch-csl201-1", chapterNumber: 1, title: "Data Structures Lab Programs",
      description: "Practical implementations of all major data structures and algorithms.",
      notes: [{ id: "note-csl201-101", order: 1, title: "01. Data Structures Lab Manual", summary: "C/Java programs for linked list operations, stack, queue, BST insertion/deletion, BFS/DFS, and sorting algorithms.", pages: 40, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },
  {
    id: "cs-s3-csl203", subjectName: "OOP Lab", code: "CSL203",
    description: "Java programming lab covering OOP principles, exception handling, file I/O, collections, and GUI programming.",
    course: "B.Tech Computer Science", level: "UG", semester: 3,
    chapters: [{
      id: "ch-csl203-1", chapterNumber: 1, title: "Java OOP Lab Programs",
      description: "Practical Java programs demonstrating OOP concepts and Java features.",
      notes: [{ id: "note-csl203-101", order: 1, title: "01. Java OOP Lab Manual", summary: "Java programs for inheritance, polymorphism, interfaces, exception handling, file I/O, ArrayList/HashMap, and basic Swing GUI.", pages: 38, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CS B.Tech — Semester 4 subjects
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "cs-s4-mat206", subjectName: "Graph Theory", code: "MAT206",
    description: "Graphs, trees, connectivity, Euler/Hamiltonian paths, planar graphs, graph coloring, and network flows.",
    course: "B.Tech Computer Science", level: "UG", semester: 4,
    chapters: [{
      id: "ch-mat206-1", chapterNumber: 1, title: "Graphs, Trees & Connectivity",
      description: "Basic graph terminology, spanning trees, connectivity, bridges, and cut vertices.",
      notes: [{ id: "note-mat206-101", order: 1, title: "01. Graph Theory — Fundamentals & Trees", summary: "Graph types, degree sequence, Euler formula, spanning trees, cut vertices, bridges, and graph connectivity.", pages: 24, author: "Dept. of Mathematics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-mat206-2", chapterNumber: 2, title: "Planar Graphs, Coloring & Network Flows",
      description: "Planarity testing, chromatic number, graph coloring, max-flow min-cut.",
      notes: [{ id: "note-mat206-201", order: 1, title: "01. Planar Graphs, Graph Coloring & Network Flows", summary: "Kuratowski's theorem, chromatic polynomial, four-color theorem, and Ford-Fulkerson max-flow algorithm.", pages: 22, author: "Dept. of Mathematics", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s4-cst202", subjectName: "Computer Organisation and Architecture", code: "CST202",
    description: "Instruction sets, CPU design, ALU, memory hierarchy, cache, I/O, pipelining, and parallel architectures.",
    course: "B.Tech Computer Science", level: "UG", semester: 4,
    chapters: [{
      id: "ch-cst202-1", chapterNumber: 1, title: "CPU Organisation & Instruction Sets",
      description: "Register organization, RISC vs CISC, addressing modes, and instruction formats.",
      notes: [{ id: "note-cst202-101", order: 1, title: "01. CPU Design, Addressing Modes & Instruction Sets", summary: "Fetch-decode-execute cycle, ALU design, addressing modes, and RISC vs CISC comparison.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst202-2", chapterNumber: 2, title: "Memory Hierarchy, Cache & Pipelining",
      description: "Cache design, mapping functions, memory hierarchy, pipeline hazards.",
      notes: [{ id: "note-cst202-201", order: 1, title: "01. Memory Hierarchy, Cache & Pipeline Design", summary: "Cache mapping (direct/set-associative/fully-associative), replacement policies, pipeline stages, and hazards.", pages: 30, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s4-cst204", subjectName: "Database Management Systems", code: "CST204",
    description: "Relational model, SQL, ER diagrams, normalization, transactions, concurrency control, and query optimization.",
    course: "B.Tech Computer Science", level: "UG", semester: 4,
    chapters: [{
      id: "ch-cst204-1", chapterNumber: 1, title: "ER Modelling, Relational Model & SQL",
      description: "ER diagrams, relational schema, SQL DDL/DML, joins, and subqueries.",
      notes: [{ id: "note-cst204-101", order: 1, title: "01. ER Diagrams, SQL Queries & Joins", summary: "ER to relational mapping, SQL SELECT with complex JOINs, GROUP BY/HAVING, nested subqueries, and view creation.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst204-2", chapterNumber: 2, title: "Normalization, Transactions & Concurrency",
      description: "Normal forms (1NF to BCNF), ACID properties, serializability, and locking.",
      notes: [{ id: "note-cst204-201", order: 1, title: "01. Normalization, Transactions & Concurrency Control", summary: "FD closure, normal forms, ACID properties, 2PL protocol, deadlock detection, and timestamp ordering.", pages: 30, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s4-cst206", subjectName: "Operating Systems", code: "CST206",
    description: "Process management, CPU scheduling, synchronization, deadlocks, memory management, file systems, and I/O.",
    course: "B.Tech Computer Science", level: "UG", semester: 4,
    chapters: [{
      id: "ch-cst206-1", chapterNumber: 1, title: "Processes, Scheduling & Synchronization",
      description: "Process lifecycle, scheduling algorithms, critical sections, semaphores, and deadlocks.",
      notes: [{ id: "note-cst206-101", order: 1, title: "01. Process Management, Scheduling & Synchronization", summary: "PCB, CPU scheduling algorithms (FCFS/SJF/RR/Priority), semaphores, monitors, and Banker's deadlock algorithm.", pages: 30, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst206-2", chapterNumber: 2, title: "Memory Management & File Systems",
      description: "Paging, segmentation, virtual memory, page replacement, and file system structures.",
      notes: [{ id: "note-cst206-201", order: 1, title: "01. Memory Management, Virtual Memory & File Systems", summary: "Logical vs physical addresses, paging hardware, TLB, page replacement algorithms, file directories, and disk scheduling.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s4-hut200", subjectName: "Professional Ethics", code: "HUT200",
    description: "Ethics in engineering, codes of professional conduct, intellectual property, environmental responsibility, and social impacts.",
    course: "B.Tech Computer Science", level: "UG", semester: 4,
    chapters: [{
      id: "ch-hut200s4-1", chapterNumber: 1, title: "Professional Ethics & Engineering Codes",
      description: "Engineering ethics frameworks, case studies, IPR, and environmental ethics.",
      notes: [{ id: "note-hut200s4-101", order: 1, title: "01. Engineering Ethics — Codes, IPR & Case Studies", summary: "NSPE code of ethics, moral dilemmas, patents and copyright, Challenger case study, and sustainable engineering.", pages: 16, author: "Dept. of Humanities", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },
  {
    id: "cs-s4-mcn202", subjectName: "Constitution of India", code: "MCN202",
    description: "Preamble, fundamental rights, directive principles, constitutional amendments, judiciary, and democratic governance.",
    course: "B.Tech Computer Science", level: "UG", semester: 4,
    chapters: [{
      id: "ch-mcn202-1", chapterNumber: 1, title: "Constitution: Preamble, Rights & Directives",
      description: "History of Indian constitution, fundamental rights, DPSPs, and fundamental duties.",
      notes: [{ id: "note-mcn202-101", order: 1, title: "01. Constitution of India — Preamble, Rights & Directives", summary: "Constituent Assembly, Preamble ideals, Articles 12–35 (Fundamental Rights), Articles 36–51 (DPSPs), and Article 51A.", pages: 18, author: "Dept. of Humanities", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },
  {
    id: "cs-s4-csl202", subjectName: "Digital Lab", code: "CSL202",
    description: "Practical implementation of combinational and sequential circuits using logic gates, ICs, and FPGAs.",
    course: "B.Tech Computer Science", level: "UG", semester: 4,
    chapters: [{
      id: "ch-csl202-1", chapterNumber: 1, title: "Digital Lab Experiments",
      description: "Combinational and sequential circuit implementation and verification.",
      notes: [{ id: "note-csl202-101", order: 1, title: "01. Digital Lab Manual", summary: "Experiments on adder/subtractor, multiplexer, decoder, D/JK flip-flops, shift registers, synchronous counters.", pages: 36, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },
  {
    id: "cs-s4-csl204", subjectName: "Operating Systems Lab", code: "CSL204",
    description: "Shell scripting, system calls, process management, IPC, and memory management programming exercises.",
    course: "B.Tech Computer Science", level: "UG", semester: 4,
    chapters: [{
      id: "ch-csl204-1", chapterNumber: 1, title: "OS Lab Programs",
      description: "System programming exercises in Linux/Unix environment.",
      notes: [{ id: "note-csl204-101", order: 1, title: "01. Operating Systems Lab Manual", summary: "Shell scripting, C programs for process creation (fork/exec), IPC (pipes, shared memory, semaphores), and memory management simulations.", pages: 42, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CS B.Tech — Semester 5 subjects
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "cs-s5-cst301", subjectName: "Formal Languages and Automata Theory", code: "CST301",
    description: "Regular languages, finite automata, pushdown automata, context-free grammars, Turing machines, and decidability.",
    course: "B.Tech Computer Science", level: "UG", semester: 5,
    chapters: [{
      id: "ch-cst301-1", chapterNumber: 1, title: "Regular Languages & Finite Automata",
      description: "DFA, NFA, regular expressions, and Pumping Lemma.",
      notes: [{ id: "note-cst301-101", order: 1, title: "01. Finite Automata & Regular Languages", summary: "DFA design, NFA to DFA conversion, regular expressions, Kleene's theorem, and Pumping Lemma proofs.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst301-2", chapterNumber: 2, title: "CFGs, PDAs & Turing Machines",
      description: "Context-free grammars, CNF, pushdown automata, Turing machines, and decidability.",
      notes: [{ id: "note-cst301-201", order: 1, title: "01. CFGs, PDAs, Turing Machines & Decidability", summary: "CFG parsing, CNF, CYK algorithm, PDA design, Turing machine construction, and halting problem.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s5-cst303", subjectName: "Computer Networks", code: "CST303",
    description: "OSI/TCP-IP layers, data link protocols, routing algorithms, transport layer (TCP/UDP), and application protocols.",
    course: "B.Tech Computer Science", level: "UG", semester: 5,
    chapters: [{
      id: "ch-cst303-1", chapterNumber: 1, title: "Data Link & Network Layer",
      description: "Framing, error control, ARQ protocols, IP addressing, and routing.",
      notes: [{ id: "note-cst303-101", order: 1, title: "01. Data Link Protocols & IP Routing", summary: "HDLC, sliding window protocols, IPv4 addressing, subnetting, distance vector vs link-state routing, OSPF, and BGP.", pages: 30, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst303-2", chapterNumber: 2, title: "Transport Layer & Application Protocols",
      description: "TCP/UDP, flow control, congestion control, HTTP, DNS, and security overview.",
      notes: [{ id: "note-cst303-201", order: 1, title: "01. TCP/UDP, HTTP, DNS & Network Security", summary: "TCP three-way handshake, sliding window, congestion control (slow start/AIMD), DNS resolution, HTTP/HTTPS.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s5-cst305", subjectName: "System Software", code: "CST305",
    description: "Assemblers, loaders, linkers, macros, compilers (lexical analysis, parsing, code generation), and interpreters.",
    course: "B.Tech Computer Science", level: "UG", semester: 5,
    chapters: [{
      id: "ch-cst305-1", chapterNumber: 1, title: "Assemblers, Loaders & Linkers",
      description: "Two-pass assembler design, relocatable object files, linker operations, and loader types.",
      notes: [{ id: "note-cst305-101", order: 1, title: "01. Assemblers, Loaders & Linkers", summary: "Symbol table, opcode table, two-pass assembly, relocation bits, absolute/relocating/dynamic loaders.", pages: 24, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst305-2", chapterNumber: 2, title: "Compiler Phases & Macros",
      description: "Lexical analysis, syntax analysis, semantic analysis, code generation, and macro processing.",
      notes: [{ id: "note-cst305-201", order: 1, title: "01. Compiler Design Phases & Macro Processing", summary: "Lexer tokenization, parser types (LL, LR), semantic rules, intermediate code, and macro expansion mechanisms.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s5-cst307", subjectName: "Microprocessors and Microcontrollers", code: "CST307",
    description: "8085/8086 microprocessor architecture, instruction sets, interfacing, and 8051 microcontroller programming.",
    course: "B.Tech Computer Science", level: "UG", semester: 5,
    chapters: [{
      id: "ch-cst307-1", chapterNumber: 1, title: "8085/8086 Architecture & Instruction Set",
      description: "Register set, flags, memory segmentation, addressing modes, and assembly language.",
      notes: [{ id: "note-cst307-101", order: 1, title: "01. 8085/8086 Architecture & Assembly Programming", summary: "8085 pin signals, 8086 segment registers, addressing modes, ALP for arithmetic/string operations, and interrupt structure.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst307-2", chapterNumber: 2, title: "Interfacing & 8051 Microcontroller",
      description: "Memory and I/O interfacing, 8255 PPI, 8051 architecture, and embedded programming.",
      notes: [{ id: "note-cst307-201", order: 1, title: "01. Interfacing & 8051 Microcontroller Programming", summary: "8255 PPI modes, ADC/DAC interfacing, 8051 memory, SFRs, timer/counter, serial communication, and interrupts.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s5-cst309", subjectName: "Management of Software Systems", code: "CST309",
    description: "Software project management, SDLC models, estimation, risk management, quality assurance, and agile methodologies.",
    course: "B.Tech Computer Science", level: "UG", semester: 5,
    chapters: [{
      id: "ch-cst309-1", chapterNumber: 1, title: "SDLC, Estimation & Project Planning",
      description: "Waterfall, spiral, agile models, FP estimation, COCOMO, and scheduling.",
      notes: [{ id: "note-cst309-101", order: 1, title: "01. SDLC Models, Estimation & Project Scheduling", summary: "Waterfall vs agile vs spiral, function point analysis, COCOMO II, Gantt charts, PERT/CPM, and risk identification.", pages: 22, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }],
  },
  {
    id: "cs-s5-mcn301", subjectName: "Disaster Management", code: "MCN301",
    description: "Types of disasters, risk reduction, emergency response, national disaster management policy, and case studies.",
    course: "B.Tech Computer Science", level: "UG", semester: 5,
    chapters: [{
      id: "ch-mcn301-1", chapterNumber: 1, title: "Disaster Types, Risk Reduction & Response",
      description: "Natural and manmade disasters, disaster risk reduction strategies, and emergency response.",
      notes: [{ id: "note-mcn301-101", order: 1, title: "01. Disaster Management — Types, Risk & Response", summary: "Classification of disasters, Sendai Framework 2015, NDMA India policies, community preparedness, and relief operations.", pages: 18, author: "Dept. of Civil Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },
  {
    id: "cs-s5-csl331", subjectName: "System Software & Microprocessors Lab", code: "CSL331",
    description: "Lab on assembler/linker design, ALP programming for 8085/8086, and 8051 microcontroller experiments.",
    course: "B.Tech Computer Science", level: "UG", semester: 5,
    chapters: [{
      id: "ch-csl331-1", chapterNumber: 1, title: "System Software & Microprocessors Lab Programs",
      description: "Assembler simulation, ALP exercises, and 8051 microcontroller programming.",
      notes: [{ id: "note-csl331-101", order: 1, title: "01. System Software & Microprocessors Lab Manual", summary: "Two-pass assembler implementation, 8085 ALP programs (sorting, searching), 8051 timer/counter/serial programs.", pages: 44, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },
  {
    id: "cs-s5-csl333", subjectName: "DBMS Lab", code: "CSL333",
    description: "Practical SQL programming, PL/SQL, triggers, stored procedures, and database design exercises.",
    course: "B.Tech Computer Science", level: "UG", semester: 5,
    chapters: [{
      id: "ch-csl333-1", chapterNumber: 1, title: "DBMS Lab Programs",
      description: "SQL and PL/SQL programming exercises.",
      notes: [{ id: "note-csl333-101", order: 1, title: "01. DBMS Lab Manual — SQL & PL/SQL", summary: "DDL/DML exercises, complex SQL queries, PL/SQL blocks, cursors, stored procedures, functions, triggers, and exception handling.", pages: 40, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CS B.Tech — Semester 6 subjects
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "cs-s6-cst302", subjectName: "Compiler Design", code: "CST302",
    description: "Lexical analysis, parsing (LL, LR, LALR), semantic analysis, intermediate code, optimization, and code generation.",
    course: "B.Tech Computer Science", level: "UG", semester: 6,
    chapters: [{
      id: "ch-cst302-1", chapterNumber: 1, title: "Lexical Analysis & Parsing",
      description: "Tokenization, LEX, LL(1) and LR parsers, and parse table construction.",
      notes: [{ id: "note-cst302-101", order: 1, title: "01. Lexical Analysis, LL & LR Parsing", summary: "Regular expressions for tokens, LEX tool, first/follow sets for LL(1), LR item sets, SLR/LALR parser tables.", pages: 30, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst302-2", chapterNumber: 2, title: "Semantic Analysis, Optimization & Code Generation",
      description: "Type checking, intermediate code, basic blocks, DAG, and target code generation.",
      notes: [{ id: "note-cst302-201", order: 1, title: "01. Semantic Analysis, Code Optimization & Generation", summary: "Attribute grammars, SDT, three-address code, basic blocks, DAG optimization, and register allocation.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s6-cst304", subjectName: "Computer Graphics and Image Processing", code: "CST304",
    description: "2D/3D graphics, rasterization, transformations, clipping, rendering, image enhancement, and compression.",
    course: "B.Tech Computer Science", level: "UG", semester: 6,
    chapters: [{
      id: "ch-cst304-1", chapterNumber: 1, title: "2D/3D Graphics & Transformations",
      description: "Line/circle algorithms, 2D/3D transformations, viewing pipelines, and clipping.",
      notes: [{ id: "note-cst304-101", order: 1, title: "01. Graphics Algorithms & Transformations", summary: "Bresenham's line/circle, 2D homogeneous transformations, 3D projections, Cohen-Sutherland clipping.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst304-2", chapterNumber: 2, title: "Image Processing Techniques",
      description: "Image enhancement, filtering, edge detection, segmentation, and compression.",
      notes: [{ id: "note-cst304-201", order: 1, title: "01. Image Enhancement, Filtering & Segmentation", summary: "Histogram equalization, spatial filters, Sobel/Canny edge detection, thresholding, and JPEG/RLE compression.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s6-cst306", subjectName: "Algorithm Analysis and Design", code: "CST306",
    description: "Divide-and-conquer, greedy, dynamic programming, backtracking, NP-completeness, and approximation algorithms.",
    course: "B.Tech Computer Science", level: "UG", semester: 6,
    chapters: [{
      id: "ch-cst306-1", chapterNumber: 1, title: "Algorithm Paradigms — D&C, Greedy & DP",
      description: "Merge sort, quick sort, Huffman coding, greedy algorithms, Floyd-Warshall, and optimal BST.",
      notes: [{ id: "note-cst306-101", order: 1, title: "01. Divide & Conquer, Greedy & Dynamic Programming", summary: "Master theorem, merge sort, greedy activity selection, Huffman coding, Floyd-Warshall, matrix chain multiplication.", pages: 32, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst306-2", chapterNumber: 2, title: "Backtracking, Branch & Bound, and NP-Completeness",
      description: "N-Queens, B&B for TSP/Knapsack, P vs NP, NP-hard, and approximations.",
      notes: [{ id: "note-cst306-201", order: 1, title: "01. Backtracking, NP-Completeness & Approximations", summary: "State-space trees for N-Queens/graph coloring, B&B for TSP/Knapsack, P vs NP, SAT, vertex cover approximation.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s6-hut300", subjectName: "Industrial Economics and Foreign Trade", code: "HUT300",
    description: "Micro/macroeconomics, demand-supply analysis, market structures, international trade, and Indian economic policy.",
    course: "B.Tech Computer Science", level: "UG", semester: 6,
    chapters: [{
      id: "ch-hut300-1", chapterNumber: 1, title: "Economics & Foreign Trade",
      description: "Demand-supply, elasticity, cost curves, market structures, national income, and international trade.",
      notes: [{ id: "note-hut300-101", order: 1, title: "01. Industrial Economics & Foreign Trade", summary: "Law of demand, elasticity, production theory, GDP/GNP computation, Keynesian model, WTO, and comparative advantage.", pages: 22, author: "Dept. of Humanities", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }],
  },
  {
    id: "cs-s6-cst308", subjectName: "Comprehensive Course Work", code: "CST308",
    description: "Integrated review of core CS subjects including algorithms, OS, networks, DBMS, and system software.",
    course: "B.Tech Computer Science", level: "UG", semester: 6,
    chapters: [{
      id: "ch-cst308-1", chapterNumber: 1, title: "Comprehensive CS Review",
      description: "Integrated topic-wise review for all major CS subjects.",
      notes: [{ id: "note-cst308-101", order: 1, title: "01. CS Comprehensive Review Notes", summary: "Concise revision notes for DS, Algorithms, OS, DBMS, Computer Networks, and System Software — ideal for exam preparation.", pages: 50, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }],
  },
  {
    id: "cs-s6-csl332", subjectName: "Networking Lab", code: "CSL332",
    description: "Practical experiments in network configuration, socket programming, and simulation using Cisco Packet Tracer.",
    course: "B.Tech Computer Science", level: "UG", semester: 6,
    chapters: [{
      id: "ch-csl332-1", chapterNumber: 1, title: "Networking Lab Experiments",
      description: "Socket programming, network configuration, and protocol simulation.",
      notes: [{ id: "note-csl332-101", order: 1, title: "01. Networking Lab Manual", summary: "TCP/UDP socket programming, subnetting/routing in Packet Tracer, Wireshark packet analysis, and HTTP client-server programs.", pages: 40, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CS B.Tech — Semester 7 subjects
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "cs-s7-cst401", subjectName: "Artificial Intelligence", code: "CST401",
    description: "AI fundamentals, search algorithms, knowledge representation, machine learning basics, and expert systems.",
    course: "B.Tech Computer Science", level: "UG", semester: 7,
    chapters: [{
      id: "ch-cst401-1", chapterNumber: 1, title: "Search, Knowledge Representation & Reasoning",
      description: "Uninformed/informed search, A* algorithm, propositional/first-order logic, and inference.",
      notes: [{ id: "note-cst401-101", order: 1, title: "01. AI Search Algorithms & Knowledge Representation", summary: "BFS/DFS/IDS for AI, A* heuristics, propositional and first-order logic, forward/backward chaining, and resolution.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst401-2", chapterNumber: 2, title: "Machine Learning & Expert Systems",
      description: "Supervised learning, decision trees, neural networks, and expert system architectures.",
      notes: [{ id: "note-cst401-201", order: 1, title: "01. Machine Learning Fundamentals & Expert Systems", summary: "Supervised vs unsupervised learning, decision tree (ID3), perceptron, basic neural networks, and expert system components.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s7-mcn401", subjectName: "Industrial Safety Engineering", code: "MCN401",
    description: "Workplace safety, hazard identification, risk assessment, safety standards, and industrial accident prevention.",
    course: "B.Tech Computer Science", level: "UG", semester: 7,
    chapters: [{
      id: "ch-mcn401-1", chapterNumber: 1, title: "Industrial Safety & Hazard Management",
      description: "Safety legislation, hazard identification, risk assessment, and accident analysis.",
      notes: [{ id: "note-mcn401-101", order: 1, title: "01. Industrial Safety, Hazard & Risk Management", summary: "Indian Factories Act, OSHA standards, HAZOP study, fault tree analysis, near-miss investigations, and PPE requirements.", pages: 20, author: "Dept. of Mechanical Engineering", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },
  {
    id: "cs-s7-csl411", subjectName: "Compiler Design Lab", code: "CSL411",
    description: "Practical implementation of compiler phases: lexer, parser, semantic analyzer, and code generator using LEX/YACC.",
    course: "B.Tech Computer Science", level: "UG", semester: 7,
    chapters: [{
      id: "ch-csl411-1", chapterNumber: 1, title: "Compiler Design Lab Programs",
      description: "LEX/YACC programs implementing compiler phases.",
      notes: [{ id: "note-csl411-101", order: 1, title: "01. Compiler Design Lab Manual — LEX & YACC", summary: "LEX programs for tokenizers, YACC programs for expression parsers, semantic action programs, and 3-address code generation.", pages: 38, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-02" }],
    }],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // CS B.Tech — Semester 8 subjects
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "cs-s8-cst402", subjectName: "Distributed Computing", code: "CST402",
    description: "Distributed system models, communication, consistency, replication, distributed file systems, and cloud computing.",
    course: "B.Tech Computer Science", level: "UG", semester: 8,
    chapters: [{
      id: "ch-cst402-1", chapterNumber: 1, title: "Distributed System Fundamentals & Communication",
      description: "Models, clocks, RPC, message passing, and distributed coordination.",
      notes: [{ id: "note-cst402-101", order: 1, title: "01. Distributed System Models & Communication", summary: "Client-server/P2P models, Lamport/vector clocks, RPC semantics, distributed mutual exclusion, and consensus algorithms.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst402-2", chapterNumber: 2, title: "Replication, Fault Tolerance & Cloud Computing",
      description: "Consistency models, replication strategies, distributed file systems, and cloud services.",
      notes: [{ id: "note-cst402-201", order: 1, title: "01. Replication, Fault Tolerance & Cloud Services", summary: "CAP theorem, Paxos/Raft consensus, GFS/HDFS design, MapReduce, cloud deployment models (IaaS/PaaS/SaaS).", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  },
  {
    id: "cs-s8-cst404", subjectName: "Comprehensive Course Viva", code: "CST404",
    description: "End-of-program comprehensive viva covering all major CS subjects from semester 1 through 8.",
    course: "B.Tech Computer Science", level: "UG", semester: 8,
    chapters: [{
      id: "ch-cst404-1", chapterNumber: 1, title: "Comprehensive Viva Preparation",
      description: "Topic-wise question banks and revision notes for viva.",
      notes: [{ id: "note-cst404-101", order: 1, title: "01. Comprehensive Viva Question Bank & Revision Notes", summary: "150+ frequently asked viva questions with answers covering DS, Algorithms, OS, DBMS, CN, Compiler Design, AI, and Distributed Computing.", pages: 60, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }],
  },
];
