import { SubjectBox } from "@/types";

export const cst303: SubjectBox = {
    id: "cst303", subjectName: "Computer Networks", code: "CST303",
    description: "OSI/TCP-IP layers, data link protocols, routing algorithms, transport layer (TCP/UDP), and application protocols.",
    level: "UG", chapters: [{
      id: "ch-cst303-1", chapterNumber: 1, title: "Data Link & Network Layer",
      description: "Framing, error control, ARQ protocols, IP addressing, and routing.",
      notes: [{ id: "note-cst303-101", order: 1, title: "01. Data Link Protocols & IP Routing", summary: "HDLC, sliding window protocols, IPv4 addressing, subnetting, distance vector vs link-state routing, OSPF, and BGP.", pages: 30, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst303-2", chapterNumber: 2, title: "Transport Layer & Application Protocols",
      description: "TCP/UDP, flow control, congestion control, HTTP, DNS, and security overview.",
      notes: [{ id: "note-cst303-201", order: 1, title: "01. TCP/UDP, HTTP, DNS & Network Security", summary: "TCP three-way handshake, sliding window, congestion control (slow start/AIMD), DNS resolution, HTTP/HTTPS.", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
