import { SubjectBox } from "@/types";

export const cst206: SubjectBox = {
    id: "cst206", subjectName: "Operating Systems", code: "CST206",
    description: "Process management, CPU scheduling, synchronization, deadlocks, memory management, file systems, and I/O.",
    level: "UG", chapters: [{
      id: "ch-cst206-1", chapterNumber: 1, title: "Processes, Scheduling & Synchronization",
      description: "Process lifecycle, scheduling algorithms, critical sections, semaphores, and deadlocks.",
      notes: [{ id: "note-cst206-101", order: 1, title: "01. Process Management, Scheduling & Synchronization", summary: "PCB, CPU scheduling algorithms (FCFS/SJF/RR/Priority), semaphores, monitors, and Banker's deadlock algorithm.", pages: 30, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst206-2", chapterNumber: 2, title: "Memory Management & File Systems",
      description: "Paging, segmentation, virtual memory, page replacement, and file system structures.",
      notes: [{ id: "note-cst206-201", order: 1, title: "01. Memory Management, Virtual Memory & File Systems", summary: "Logical vs physical addresses, paging hardware, TLB, page replacement algorithms, file directories, and disk scheduling.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
