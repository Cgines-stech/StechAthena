// data/programs/Unmanned Aircraft Systems/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "Course Grading",
    content: [
      "Chapter tests may be attempted up to THREE times and will remain open until the posted due date. Each exam must be passed with a minimum of 80%. If quizzes are attempted multiple times, the highest score will be saved.",
      "If exams and all other graded metrics do not meet the minimum required score of 80%, the student will not be recommended for testing and the awarded grade will present as an F.",
      "Hands-on skills are a demanding and integral part of the learning experience. All skills must be demonstrated (physically & verbally) with 100% accuracy to prove competency. No exceptions.",
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
      "Expected Classroom/Campus Behaviors: {empty}",
      "Safety: {empty}",
      "Cell Phone Use: {empty}",
      "Attendance: {empty}"
    ]
  }
];
