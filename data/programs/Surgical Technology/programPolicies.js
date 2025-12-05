// data/programs/Surgical Technology/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "Course Grading",
    content: [
      "Each assignment is awarded points according to how well the submission follows the requirement of the assignment. Students must maintain a minimum of 80% in the course. The assignment groups weight will be as follows: assignments 40%, module quizzes 25%, lab pass-offs and participation 15%, and the final exam 20%. If a student scores less than 80% on a final exam, he/she will have the opportunity to retake the exam for a second attempt. If a student fails to pass the final exam or the course with a minimum of 80%, the student will be dismissed from the program.",
    ]
  },

  // Special, typed block for the grade scale
  {
    type: "gradeScale",
    title: GS?.title || "Grading Scale",
    description: GS?.description || "",
    scale: GS?.scale || []   // expecting 12 items with { letter, range }
  },

  {
    title: "General Course Policies",
    content: [
      "Course Policies: If at any time a student falls below the 80% course minimum, a meeting will be scheduled with the student and instructor/s to discuss make-up opportunities or actions the student may take to improve their grades. Students are expected to attend all scheduled courses at the provided time. Each student must maintain a minimum of 80% attendance in the program. If you are going to be absent, communication with the instructor is required to set up time to make up the time missed. This make up time will be scheduled at the convenience of the instructors. Failure to meet the required attendance standards will result in program dismissal. You may use your cell phones at your own discretion. NO USING CELL PHONES DURING CLASS PRESENTATIONS OR QUIZZES/EXAMS. CELL PHONES ARE NOT ALLOWED IN THE LAB.",
    ]
  }
];
