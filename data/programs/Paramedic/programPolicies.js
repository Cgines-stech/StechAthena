// data/programs/Paramedic/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "Course Grading",
    content: [
      "Students must demonstrate a minimum competence in all areas of the course with an 80% to be able to progress in the program. Any grade below a B- is considered failing the course.",
    ]
  },

];
