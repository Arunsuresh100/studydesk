import { CurriculumMapping } from "@/types";
import { mat101 } from "./subjects/mat101";
import { pht100 } from "./subjects/pht100";
import { est100 } from "./subjects/est100";
import { est120 } from "./subjects/est120";
import { hut101 } from "./subjects/hut101";
import { phl120 } from "./subjects/phl120";
import { esl120 } from "./subjects/esl120";
import { mat102 } from "./subjects/mat102";
import { pht110 } from "./subjects/pht110";
import { cyt100 } from "./subjects/cyt100";
import { est110 } from "./subjects/est110";
import { est102 } from "./subjects/est102";
import { est130 } from "./subjects/est130";
import { hut102 } from "./subjects/hut102";
import { cyl120 } from "./subjects/cyl120";
import { esl130 } from "./subjects/esl130";
import { mat203 } from "./subjects/mat203";
import { cst201 } from "./subjects/cst201";
import { cst203 } from "./subjects/cst203";
import { cst205 } from "./subjects/cst205";
import { est200 } from "./subjects/est200";
import { hut200 } from "./subjects/hut200";
import { mcn201 } from "./subjects/mcn201";
import { csl201 } from "./subjects/csl201";
import { csl203 } from "./subjects/csl203";
import { mat206 } from "./subjects/mat206";
import { cst202 } from "./subjects/cst202";
import { cst204 } from "./subjects/cst204";
import { cst206 } from "./subjects/cst206";
import { mcn202 } from "./subjects/mcn202";
import { csl202 } from "./subjects/csl202";
import { csl204 } from "./subjects/csl204";
import { cst301 } from "./subjects/cst301";
import { cst303 } from "./subjects/cst303";
import { cst305 } from "./subjects/cst305";
import { cst307 } from "./subjects/cst307";
import { cst309 } from "./subjects/cst309";
import { mcn301 } from "./subjects/mcn301";
import { csl331 } from "./subjects/csl331";
import { csl333 } from "./subjects/csl333";
import { cst302 } from "./subjects/cst302";
import { cst304 } from "./subjects/cst304";
import { cst306 } from "./subjects/cst306";
import { hut300 } from "./subjects/hut300";
import { cst308 } from "./subjects/cst308";
import { csl332 } from "./subjects/csl332";
import { cst401 } from "./subjects/cst401";
import { mcn401 } from "./subjects/mcn401";
import { csl411 } from "./subjects/csl411";
import { cst402 } from "./subjects/cst402";
import { cst404 } from "./subjects/cst404";

export const allCurriculums: CurriculumMapping[] = [
  {
    courseId: "B.Tech Computer Science",
    semester: 1,
    subjects: [
      mat101,
      pht100,
      est100,
      est120,
      hut101,
      phl120,
      esl120
    ],
  },
  {
    courseId: "B.Tech Computer Science",
    semester: 2,
    subjects: [
      mat102,
      pht110,
      cyt100,
      est110,
      est102,
      est130,
      hut102,
      cyl120,
      esl130
    ],
  },
  {
    courseId: "B.Tech Computer Science",
    semester: 3,
    subjects: [
      mat203,
      cst201,
      cst203,
      cst205,
      est200,
      hut200,
      mcn201,
      csl201,
      csl203
    ],
  },
  {
    courseId: "B.Tech Computer Science",
    semester: 4,
    subjects: [
      mat206,
      cst202,
      cst204,
      cst206,
      hut200,
      mcn202,
      csl202,
      csl204
    ],
  },
  {
    courseId: "B.Tech Computer Science",
    semester: 5,
    subjects: [
      cst301,
      cst303,
      cst305,
      cst307,
      cst309,
      mcn301,
      csl331,
      csl333
    ],
  },
  {
    courseId: "B.Tech Computer Science",
    semester: 6,
    subjects: [
      cst302,
      cst304,
      cst306,
      hut300,
      cst308,
      csl332
    ],
  },
  {
    courseId: "B.Tech Computer Science",
    semester: 7,
    subjects: [
      cst401,
      mcn401,
      csl411
    ],
  },
  {
    courseId: "B.Tech Computer Science",
    semester: 8,
    subjects: [
      cst402,
      cst404
    ],
  },
];
