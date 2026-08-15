import { SubjectBox } from "@/types";

export const cst402: SubjectBox = {
    id: "cst402", subjectName: "Distributed Computing", code: "CST402",
    description: "Distributed system models, communication, consistency, replication, distributed file systems, and cloud computing.",
    level: "UG", chapters: [{
      id: "ch-cst402-1", chapterNumber: 1, title: "Distributed System Fundamentals & Communication",
      description: "Models, clocks, RPC, message passing, and distributed coordination.",
      notes: [{ id: "note-cst402-101", order: 1, title: "01. Distributed System Models & Communication", summary: "Client-server/P2P models, Lamport/vector clocks, RPC semantics, distributed mutual exclusion, and consensus algorithms.", pages: 26, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-01" }],
    }, {
      id: "ch-cst402-2", chapterNumber: 2, title: "Replication, Fault Tolerance & Cloud Computing",
      description: "Consistency models, replication strategies, distributed file systems, and cloud services.",
      notes: [{ id: "note-cst402-201", order: 1, title: "01. Replication, Fault Tolerance & Cloud Services", summary: "CAP theorem, Paxos/Raft consensus, GFS/HDFS design, MapReduce, cloud deployment models (IaaS/PaaS/SaaS).", pages: 28, author: "Dept. of Computer Science", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", dateAdded: "2026-08-03" }],
    }],
  };
