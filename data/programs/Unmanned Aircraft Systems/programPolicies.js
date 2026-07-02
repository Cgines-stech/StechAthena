// data/programs/Unmanned Aircraft Systems/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "Course Grading",
    content: [
      "High School Power School Grades: Quarter student grades will be determined by student progress percentage. Faculty will use the higher percentage of either 1) quarter progress, or 2) cumulative progress for the current training plan year."
    ]
  },

  // Special, typed block for the grade scale
  {
    type: "gradeScale",
    title: GS?.title || "",
    description: GS?.description || "",
    scale: GS?.scale || []   // expecting 12 items with { letter, range }
  },

  {
    title: "Course Policies",
    content: [
      "<strong>Attendance:</strong> {empty}",
      "<strong>Expected Classroom/Campus Behaviors:</strong> {empty}",
      "<strong>Lab Rules:</strong> {empty}",
      "<strong>Safety:</strong> {empty}",
      "<strong>Cell Phone Use:</strong> {empty}",
      "<strong>Competencies:</strong> {empty}",
    ]
  }
];
