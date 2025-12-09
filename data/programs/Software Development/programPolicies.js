// data/programs/Emergency Medical Technician/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "Course Grading",
    content: [
      "All assignments in this course require 100% score with unlimited submissions. All quizzes require a minimum score of 80%.",
      "High School Power School Grades: Quarter student grades will be determined by student progress percentage. Faculty will use the higher percentage of either 1) quarter progress, or 2) cumulative progress for the current training plan year.",
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
      "You are required to keep your progress and attendance at 67% minimum. You must complete this program within 150% estimated program length. You are permitted one 15 minute break every 90 minutes. If you take more than one break in a 90 minute period or your break lasts longer than 15 minutes, your attendance will be penalized. 10 consecutive absences will lead to being withdrawn from the program. Please notify your instructors about absences as soon as possible. If absence is due to illness, please email your instructors prior to end of day.",
      "<strong>Cell Phone/Electronics:</strong> Cell phones cannot be used during class time. You may bring your personal computers to class. You must be on topic in the lab while clocked-in.",
      "<strong>Industry Environment:</strong> Computer science typically is very sedentary. This means you may sit at a desk for long hours. Be sure to move and get what exercise you can.",
      "<strong>Iron County High School Students:</strong> Your progress grade will be submitted every Friday to PowerSchool. You must maintain a progress percentage of 67% or over per quarter to stay in the course.",
    ]
  }
];
