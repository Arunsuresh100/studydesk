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
import { hun101 } from "./subjects/hun101";
import { hun102 } from "./subjects/hun102";
import { mat201 } from "./subjects/mat201";
import { ect201 } from "./subjects/ect201";
import { ect203 } from "./subjects/ect203";
import { ect205 } from "./subjects/ect205";
import { ecl201 } from "./subjects/ecl201";
import { ecl203 } from "./subjects/ecl203";
import { mat204 } from "./subjects/mat204";
import { ect202 } from "./subjects/ect202";
import { ect204 } from "./subjects/ect204";
import { ect206 } from "./subjects/ect206";
import { ecl202 } from "./subjects/ecl202";
import { ecl204 } from "./subjects/ecl204";
import { ect301 } from "./subjects/ect301";
import { ect303 } from "./subjects/ect303";
import { ect305 } from "./subjects/ect305";
import { ect307 } from "./subjects/ect307";
import { hut310 } from "./subjects/hut310";
import { ecl331 } from "./subjects/ecl331";
import { ecl333 } from "./subjects/ecl333";
import { ect302 } from "./subjects/ect302";
import { ect304 } from "./subjects/ect304";
import { ect306 } from "./subjects/ect306";
import { ect308 } from "./subjects/ect308";
import { ecl332 } from "./subjects/ecl332";
import { ecd334 } from "./subjects/ecd334";
import { ect401 } from "./subjects/ect401";
import { ecl411 } from "./subjects/ecl411";
import { ecq413 } from "./subjects/ecq413";
import { ecd415 } from "./subjects/ecd415";
import { ect402 } from "./subjects/ect402";
import { ect404 } from "./subjects/ect404";
import { ecd416 } from "./subjects/ecd416";
import { met201 } from "./subjects/met201";
import { met203 } from "./subjects/met203";
import { met205 } from "./subjects/met205";
import { mel201 } from "./subjects/mel201";
import { mel203 } from "./subjects/mel203";
import { met202 } from "./subjects/met202";
import { met204 } from "./subjects/met204";
import { met206 } from "./subjects/met206";
import { mel202 } from "./subjects/mel202";
import { mel204 } from "./subjects/mel204";
import { met301 } from "./subjects/met301";
import { met303 } from "./subjects/met303";
import { met305 } from "./subjects/met305";
import { met307 } from "./subjects/met307";
import { mel331 } from "./subjects/mel331";
import { mel333 } from "./subjects/mel333";
import { met302 } from "./subjects/met302";
import { met304 } from "./subjects/met304";
import { met306 } from "./subjects/met306";
import { met308 } from "./subjects/met308";
import { mel332 } from "./subjects/mel332";
import { mel334 } from "./subjects/mel334";
import { met401 } from "./subjects/met401";
import { mel411 } from "./subjects/mel411";
import { meq413 } from "./subjects/meq413";
import { med415 } from "./subjects/med415";
import { met402 } from "./subjects/met402";
import { met404 } from "./subjects/met404";
import { med416 } from "./subjects/med416";
import { cet201 } from "./subjects/cet201";
import { cet203 } from "./subjects/cet203";
import { cet205 } from "./subjects/cet205";
import { cel201 } from "./subjects/cel201";
import { cel203 } from "./subjects/cel203";
import { cet202 } from "./subjects/cet202";
import { cet204 } from "./subjects/cet204";
import { cet206 } from "./subjects/cet206";
import { cel202 } from "./subjects/cel202";
import { cel204 } from "./subjects/cel204";
import { cet301 } from "./subjects/cet301";
import { cet303 } from "./subjects/cet303";
import { cet305 } from "./subjects/cet305";
import { cet307 } from "./subjects/cet307";
import { cet309 } from "./subjects/cet309";
import { cel331 } from "./subjects/cel331";
import { cel333 } from "./subjects/cel333";
import { cet302 } from "./subjects/cet302";
import { cet304 } from "./subjects/cet304";
import { cet306 } from "./subjects/cet306";
import { cet308 } from "./subjects/cet308";
import { cel332 } from "./subjects/cel332";
import { ced334 } from "./subjects/ced334";
import { cet401 } from "./subjects/cet401";
import { cel411 } from "./subjects/cel411";
import { ceq413 } from "./subjects/ceq413";
import { ced415 } from "./subjects/ced415";
import { cet402 } from "./subjects/cet402";
import { cet404 } from "./subjects/cet404";
import { cet406 } from "./subjects/cet406";
import { ced416 } from "./subjects/ced416";
import { eet201 } from "./subjects/eet201";
import { eet203 } from "./subjects/eet203";
import { eet205 } from "./subjects/eet205";
import { eel201 } from "./subjects/eel201";
import { eel203 } from "./subjects/eel203";
import { eet202 } from "./subjects/eet202";
import { eet204 } from "./subjects/eet204";
import { eet206 } from "./subjects/eet206";
import { eel202 } from "./subjects/eel202";
import { eel204 } from "./subjects/eel204";
import { eet301 } from "./subjects/eet301";
import { eet303 } from "./subjects/eet303";
import { eet305 } from "./subjects/eet305";
import { eet307 } from "./subjects/eet307";
import { eel331 } from "./subjects/eel331";
import { eel333 } from "./subjects/eel333";
import { eet302 } from "./subjects/eet302";
import { eet304 } from "./subjects/eet304";
import { eet306 } from "./subjects/eet306";
import { eet308 } from "./subjects/eet308";
import { eel332 } from "./subjects/eel332";
import { eed334 } from "./subjects/eed334";
import { eet401 } from "./subjects/eet401";
import { eel411 } from "./subjects/eel411";
import { eeq413 } from "./subjects/eeq413";
import { eed415 } from "./subjects/eed415";
import { eet402 } from "./subjects/eet402";
import { eet404 } from "./subjects/eet404";
import { eed416 } from "./subjects/eed416";
import { itt201 } from "./subjects/itt201";
import { itt203 } from "./subjects/itt203";
import { itt205 } from "./subjects/itt205";
import { itl201 } from "./subjects/itl201";
import { itl203 } from "./subjects/itl203";
import { itt202 } from "./subjects/itt202";
import { itt204 } from "./subjects/itt204";
import { itt206 } from "./subjects/itt206";
import { itl202 } from "./subjects/itl202";
import { itl204 } from "./subjects/itl204";
import { itt301 } from "./subjects/itt301";
import { itt303 } from "./subjects/itt303";
import { itt305 } from "./subjects/itt305";
import { itt307 } from "./subjects/itt307";
import { itt309 } from "./subjects/itt309";
import { itl331 } from "./subjects/itl331";
import { itl333 } from "./subjects/itl333";
import { itt302 } from "./subjects/itt302";
import { itt304 } from "./subjects/itt304";
import { itt306 } from "./subjects/itt306";
import { itt308 } from "./subjects/itt308";
import { itl332 } from "./subjects/itl332";
import { itd334 } from "./subjects/itd334";
import { itt401 } from "./subjects/itt401";
import { itl411 } from "./subjects/itl411";
import { itq413 } from "./subjects/itq413";
import { itd415 } from "./subjects/itd415";
import { itt402 } from "./subjects/itt402";
import { itt404 } from "./subjects/itt404";
import { itd416 } from "./subjects/itd416";
import { adt201 } from "./subjects/adt201";
import { adt203 } from "./subjects/adt203";
import { adt205 } from "./subjects/adt205";
import { adl201 } from "./subjects/adl201";
import { adl203 } from "./subjects/adl203";
import { adt202 } from "./subjects/adt202";
import { adt204 } from "./subjects/adt204";
import { adt206 } from "./subjects/adt206";
import { adl202 } from "./subjects/adl202";
import { adl204 } from "./subjects/adl204";
import { adt301 } from "./subjects/adt301";
import { adt303 } from "./subjects/adt303";
import { adt305 } from "./subjects/adt305";
import { adt307 } from "./subjects/adt307";
import { adt309 } from "./subjects/adt309";
import { adl331 } from "./subjects/adl331";
import { adl333 } from "./subjects/adl333";
import { adt302 } from "./subjects/adt302";
import { adt304 } from "./subjects/adt304";
import { adt306 } from "./subjects/adt306";
import { adt308 } from "./subjects/adt308";
import { adl332 } from "./subjects/adl332";
import { add334 } from "./subjects/add334";
import { adt401 } from "./subjects/adt401";
import { adl411 } from "./subjects/adl411";
import { adq413 } from "./subjects/adq413";
import { add415 } from "./subjects/add415";
import { adt402 } from "./subjects/adt402";
import { adt404 } from "./subjects/adt404";
import { add416 } from "./subjects/add416";
import { aut201 } from "./subjects/aut201";
import { aut203 } from "./subjects/aut203";
import { aul201 } from "./subjects/aul201";
import { mat202 } from "./subjects/mat202";
import { aut202 } from "./subjects/aut202";
import { aut204 } from "./subjects/aut204";
import { aut206 } from "./subjects/aut206";
import { aul202 } from "./subjects/aul202";
import { aut301 } from "./subjects/aut301";
import { aut303 } from "./subjects/aut303";
import { aut305 } from "./subjects/aut305";
import { aut307 } from "./subjects/aut307";
import { mul331 } from "./subjects/mul331";
import { aut304 } from "./subjects/aut304";
import { aut306 } from "./subjects/aut306";
import { aut308 } from "./subjects/aut308";
import { aul334 } from "./subjects/aul334";
import { aut401 } from "./subjects/aut401";
import { aul411 } from "./subjects/aul411";
import { auq413 } from "./subjects/auq413";
import { aud415 } from "./subjects/aud415";
import { aut402 } from "./subjects/aut402";
import { aut404 } from "./subjects/aut404";
import { aud416 } from "./subjects/aud416";
import { mg1dscbca100 } from "./subjects/mg1dscbca100";
import { mg1dscbca101 } from "./subjects/mg1dscbca101";
import { mg1dscbca102 } from "./subjects/mg1dscbca102";
import { mg1dscbca103 } from "./subjects/mg1dscbca103";
import { mg1mdcbca100 } from "./subjects/mg1mdcbca100";
import { mg1aeceng100 } from "./subjects/mg1aeceng100";
import { aec } from "./subjects/aec";
import { mg2ccrbca100 } from "./subjects/mg2ccrbca100";
import { mg2ccrbca101 } from "./subjects/mg2ccrbca101";
import { mg2ccrbca102 } from "./subjects/mg2ccrbca102";
import { mg2secbca100 } from "./subjects/mg2secbca100";
import { mg2vacbca100 } from "./subjects/mg2vacbca100";
import { mg3ccrbca200 } from "./subjects/mg3ccrbca200";
import { mg3ccrbca201 } from "./subjects/mg3ccrbca201";
import { mg3ccrbca202 } from "./subjects/mg3ccrbca202";
import { mg3ccrbca203 } from "./subjects/mg3ccrbca203";
import { mg3secbca200 } from "./subjects/mg3secbca200";
import { mg3dsebca200 } from "./subjects/mg3dsebca200";
import { mg3dsebca201 } from "./subjects/mg3dsebca201";
import { mg3dsebca202 } from "./subjects/mg3dsebca202";
import { mg4ccrbca200 } from "./subjects/mg4ccrbca200";
import { mg4secbca200 } from "./subjects/mg4secbca200";
import { mg4secbca201 } from "./subjects/mg4secbca201";
import { mg4secbca202 } from "./subjects/mg4secbca202";
import { mg4vacbca200 } from "./subjects/mg4vacbca200";
import { mg4vacbca201 } from "./subjects/mg4vacbca201";
import { mg4dsebca200 } from "./subjects/mg4dsebca200";
import { mg4dsebca201 } from "./subjects/mg4dsebca201";
import { mg4dsebca202 } from "./subjects/mg4dsebca202";
import { mg5ccrbca300 } from "./subjects/mg5ccrbca300";
import { mg5ccrbca301 } from "./subjects/mg5ccrbca301";
import { mg5ccrbca302 } from "./subjects/mg5ccrbca302";
import { mg601 } from "./subjects/mg601";
import { mg602 } from "./subjects/mg602";

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

  {
    courseId: "B.Tech Electronics & Comm",
    semester: 1,
    subjects: [
      mat101,
      pht100,
      est100,
      est120,
      hun101,
      phl120,
      esl120
    ],
  },
  {
    courseId: "B.Tech Electronics & Comm",
    semester: 2,
    subjects: [
      mat102,
      cyt100,
      est130,
      est110,
      est102,
      hun102,
      cyl120,
      esl130
    ],
  },
  {
    courseId: "B.Tech Electronics & Comm",
    semester: 3,
    subjects: [
      mat201,
      ect201,
      ect203,
      ect205,
      est200,
      hut200,
      mcn201,
      ecl201,
      ecl203
    ],
  },
  {
    courseId: "B.Tech Electronics & Comm",
    semester: 4,
    subjects: [
      mat204,
      ect202,
      ect204,
      ect206,
      est200,
      hut200,
      mcn202,
      ecl202,
      ecl204
    ],
  },
  {
    courseId: "B.Tech Electronics & Comm",
    semester: 5,
    subjects: [
      ect301,
      ect303,
      ect305,
      ect307,
      hut300,
      hut310,
      mcn301,
      ecl331,
      ecl333
    ],
  },
  {
    courseId: "B.Tech Electronics & Comm",
    semester: 6,
    subjects: [
      ect302,
      ect304,
      ect306,
      hut300,
      hut310,
      ect308,
      ecl332,
      ecd334
    ],
  },
  {
    courseId: "B.Tech Electronics & Comm",
    semester: 7,
    subjects: [
      ect401,
      mcn401,
      ecl411,
      ecq413,
      ecd415
    ],
  },
  {
    courseId: "B.Tech Electronics & Comm",
    semester: 8,
    subjects: [
      ect402,
      ect404,
      ecd416
    ],
  },

  {
    courseId: "B.Tech Mechanical Eng",
    semester: 1,
    subjects: [
      mat101,
      cyt100,
      est110,
      est130,
      hut101,
      cyl120,
      esl130
    ],
  },
  {
    courseId: "B.Tech Mechanical Eng",
    semester: 2,
    subjects: [
      mat102,
      pht100,
      est100,
      est120,
      hut102,
      phl120,
      esl120
    ],
  },
  {
    courseId: "B.Tech Mechanical Eng",
    semester: 3,
    subjects: [
      mat201,
      met201,
      met203,
      met205,
      est200,
      hut200,
      mcn201,
      mel201,
      mel203
    ],
  },
  {
    courseId: "B.Tech Mechanical Eng",
    semester: 4,
    subjects: [
      mat204,
      met202,
      met204,
      met206,
      est200,
      mcn202,
      mel202,
      mel204
    ],
  },
  {
    courseId: "B.Tech Mechanical Eng",
    semester: 5,
    subjects: [
      met301,
      met303,
      met305,
      met307,
      hut300,
      hut310,
      mcn301,
      mel331,
      mel333
    ],
  },
  {
    courseId: "B.Tech Mechanical Eng",
    semester: 6,
    subjects: [
      met302,
      met304,
      met306,
      hut300,
      hut310,
      met308,
      mel332,
      mel334
    ],
  },
  {
    courseId: "B.Tech Mechanical Eng",
    semester: 7,
    subjects: [
      met401,
      mcn401,
      mel411,
      meq413,
      med415
    ],
  },
  {
    courseId: "B.Tech Mechanical Eng",
    semester: 8,
    subjects: [
      met402,
      met404,
      med416
    ],
  },

  {
    courseId: "B.Tech Civil Engineering",
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
    courseId: "B.Tech Civil Engineering",
    semester: 2,
    subjects: [
      mat102,
      cyt100,
      est110,
      est130,
      est102,
      hut102,
      cyl120,
      esl130
    ],
  },
  {
    courseId: "B.Tech Civil Engineering",
    semester: 3,
    subjects: [
      mat201,
      cet201,
      cet203,
      cet205,
      est200,
      hut200,
      mcn201,
      cel201,
      cel203
    ],
  },
  {
    courseId: "B.Tech Civil Engineering",
    semester: 4,
    subjects: [
      mat204,
      cet202,
      cet204,
      cet206,
      est200,
      mcn202,
      cel202,
      cel204
    ],
  },
  {
    courseId: "B.Tech Civil Engineering",
    semester: 5,
    subjects: [
      cet301,
      cet303,
      cet305,
      cet307,
      cet309,
      mcn301,
      cel331,
      cel333
    ],
  },
  {
    courseId: "B.Tech Civil Engineering",
    semester: 6,
    subjects: [
      cet302,
      cet304,
      cet306,
      cet308,
      hut300,
      cel332,
      ced334
    ],
  },
  {
    courseId: "B.Tech Civil Engineering",
    semester: 7,
    subjects: [
      cet401,
      mcn401,
      cel411,
      ceq413,
      ced415
    ],
  },
  {
    courseId: "B.Tech Civil Engineering",
    semester: 8,
    subjects: [
      cet402,
      cet404,
      cet406,
      ced416
    ],
  },

  {
    courseId: "B.Tech Electrical & Electronics",
    semester: 1,
    subjects: [
      mat101,
      pht100,
      est100,
      est120,
      hun101,
      phl120,
      esl120
    ],
  },
  {
    courseId: "B.Tech Electrical & Electronics",
    semester: 2,
    subjects: [
      mat102,
      cyt100,
      est110,
      est130,
      est102,
      hun102,
      cyl120,
      esl130
    ],
  },
  {
    courseId: "B.Tech Electrical & Electronics",
    semester: 3,
    subjects: [
      mat201,
      eet201,
      eet203,
      eet205,
      est200,
      hut200,
      mcn201,
      eel201,
      eel203
    ],
  },
  {
    courseId: "B.Tech Electrical & Electronics",
    semester: 4,
    subjects: [
      mat204,
      eet202,
      eet204,
      eet206,
      est200,
      hut200,
      mcn202,
      eel202,
      eel204
    ],
  },
  {
    courseId: "B.Tech Electrical & Electronics",
    semester: 5,
    subjects: [
      eet301,
      eet303,
      eet305,
      eet307,
      hut300,
      hut310,
      mcn301,
      eel331,
      eel333
    ],
  },
  {
    courseId: "B.Tech Electrical & Electronics",
    semester: 6,
    subjects: [
      eet302,
      eet304,
      eet306,
      hut300,
      hut310,
      eet308,
      eel332,
      eed334
    ],
  },
  {
    courseId: "B.Tech Electrical & Electronics",
    semester: 7,
    subjects: [
      eet401,
      mcn401,
      eel411,
      eeq413,
      eed415
    ],
  },
  {
    courseId: "B.Tech Electrical & Electronics",
    semester: 8,
    subjects: [
      eet402,
      eet404,
      eed416
    ],
  },

  {
    courseId: "B.Tech Information Technology",
    semester: 1,
    subjects: [
      mat101,
      pht100,
      est100,
      est120,
      hun101,
      phl120,
      esl120
    ],
  },
  {
    courseId: "B.Tech Information Technology",
    semester: 2,
    subjects: [
      mat102,
      cyt100,
      est110,
      est130,
      est102,
      hun102,
      cyl120,
      esl130
    ],
  },
  {
    courseId: "B.Tech Information Technology",
    semester: 3,
    subjects: [
      mat203,
      itt201,
      itt203,
      itt205,
      est200,
      hut200,
      mcn201,
      itl201,
      itl203
    ],
  },
  {
    courseId: "B.Tech Information Technology",
    semester: 4,
    subjects: [
      mat206,
      itt202,
      itt204,
      itt206,
      est200,
      hut200,
      mcn202,
      itl202,
      itl204
    ],
  },
  {
    courseId: "B.Tech Information Technology",
    semester: 5,
    subjects: [
      itt301,
      itt303,
      itt305,
      itt307,
      itt309,
      mcn301,
      itl331,
      itl333
    ],
  },
  {
    courseId: "B.Tech Information Technology",
    semester: 6,
    subjects: [
      itt302,
      itt304,
      itt306,
      hut300,
      itt308,
      itl332,
      itd334
    ],
  },
  {
    courseId: "B.Tech Information Technology",
    semester: 7,
    subjects: [
      itt401,
      mcn401,
      itl411,
      itq413,
      itd415
    ],
  },
  {
    courseId: "B.Tech Information Technology",
    semester: 8,
    subjects: [
      itt402,
      itt404,
      itd416
    ],
  },

  {
    courseId: "B.Tech AI & Data Science",
    semester: 1,
    subjects: [
      mat101,
      pht100,
      est100,
      est120,
      phl120,
      esl120
    ],
  },
  {
    courseId: "B.Tech AI & Data Science",
    semester: 2,
    subjects: [
      mat102,
      cyt100,
      est110,
      est130,
      est102,
      cyl120,
      esl130
    ],
  },
  {
    courseId: "B.Tech AI & Data Science",
    semester: 3,
    subjects: [
      mat203,
      adt201,
      adt203,
      adt205,
      est200,
      mcn201,
      adl201,
      adl203
    ],
  },
  {
    courseId: "B.Tech AI & Data Science",
    semester: 4,
    subjects: [
      mat204,
      adt202,
      adt204,
      adt206,
      est200,
      mcn202,
      adl202,
      adl204
    ],
  },
  {
    courseId: "B.Tech AI & Data Science",
    semester: 5,
    subjects: [
      adt301,
      adt303,
      adt305,
      adt307,
      adt309,
      mcn301,
      adl331,
      adl333
    ],
  },
  {
    courseId: "B.Tech AI & Data Science",
    semester: 6,
    subjects: [
      adt302,
      adt304,
      adt306,
      hut300,
      adt308,
      adl332,
      add334
    ],
  },
  {
    courseId: "B.Tech AI & Data Science",
    semester: 7,
    subjects: [
      adt401,
      mcn401,
      adl411,
      adq413,
      add415
    ],
  },
  {
    courseId: "B.Tech AI & Data Science",
    semester: 8,
    subjects: [
      adt402,
      adt404,
      add416
    ],
  },

  {
    courseId: "B.Tech Automobile Engineering",
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
    courseId: "B.Tech Automobile Engineering",
    semester: 2,
    subjects: [
      mat102,
      cyt100,
      est110,
      est130,
      est102,
      hut102,
      cyl120,
      esl130
    ],
  },
  {
    courseId: "B.Tech Automobile Engineering",
    semester: 3,
    subjects: [
      mat201,
      met201,
      aut201,
      aut203,
      est200,
      hut200,
      mcn201,
      aul201,
      mel203
    ],
  },
  {
    courseId: "B.Tech Automobile Engineering",
    semester: 4,
    subjects: [
      mat202,
      aut202,
      aut204,
      aut206,
      est200,
      hut200,
      mcn202,
      mel202,
      aul202
    ],
  },
  {
    courseId: "B.Tech Automobile Engineering",
    semester: 5,
    subjects: [
      aut301,
      aut303,
      aut305,
      aut307,
      hut300,
      hut310,
      mcn301,
      mul331,
      mel333
    ],
  },
  {
    courseId: "B.Tech Automobile Engineering",
    semester: 6,
    subjects: [
      met302,
      aut304,
      aut306,
      hut300,
      hut310,
      aut308,
      mel332,
      aul334
    ],
  },
  {
    courseId: "B.Tech Automobile Engineering",
    semester: 7,
    subjects: [
      aut401,
      mcn401,
      aul411,
      auq413,
      aud415
    ],
  },
  {
    courseId: "B.Tech Automobile Engineering",
    semester: 8,
    subjects: [
      aut402,
      aut404,
      aud416
    ],
  },

  {
    courseId: "BCA (Computer Applications) - MGU",
    semester: 1,
    subjects: [
      mg1dscbca100,
      mg1dscbca101,
      mg1dscbca102,
      mg1dscbca103,
      mg1mdcbca100,
      mg1aeceng100,
      aec
    ],
  },
  {
    courseId: "BCA (Computer Applications) - MGU",
    semester: 2,
    subjects: [
      mg2ccrbca100,
      mg2ccrbca101,
      mg2ccrbca102,
      mg2secbca100,
      mg2vacbca100,
      aec,
      aec
    ],
  },
  {
    courseId: "BCA (Computer Applications) - MGU",
    semester: 3,
    subjects: [
      mg3ccrbca200,
      mg3ccrbca201,
      mg3ccrbca202,
      mg3ccrbca203,
      mg3secbca200,
      mg3dsebca200,
      mg3dsebca201,
      mg3dsebca202
    ],
  },
  {
    courseId: "BCA (Computer Applications) - MGU",
    semester: 4,
    subjects: [
      mg4ccrbca200,
      mg4secbca200,
      mg4secbca201,
      mg4secbca202,
      mg4vacbca200,
      mg4vacbca201,
      mg4dsebca200,
      mg4dsebca201,
      mg4dsebca202
    ],
  },
  {
    courseId: "BCA (Computer Applications) - MGU",
    semester: 5,
    subjects: [
      mg5ccrbca300,
      mg5ccrbca301,
      mg5ccrbca302
    ],
  },
  {
    courseId: "BCA (Computer Applications) - MGU",
    semester: 6,
    subjects: [
      mg601,
      mg602
    ],
  },
];
