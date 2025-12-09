// data/programs/Master Esthetician/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "Course Grading",
    content: [
      "Students are expected to maintain a minimum grade of 80% to pass all coursework. Any assignments that do not meet this standard must be redone.",
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
      "Attendance is mandatory for all scheduled classes and lab sessions, as this is a DOPL regulated program, and all hours are needed to qualify for licensure. Professional appearance is required—students must wear scrubs in both the classroom and spa areas, with hair secured when working on students and models, and in the student spa when working on clients. Closed-toe, non-slip athletic shoes are mandatory in both the classroom and student spa. Safety protocols must be followed at all times when handling equipment and products, including proper sanitation and disinfection practices. Any use of substances that impair judgment or performance is strictly prohibited and may result in removal from the program. Cell phones should be put away during class and lab unless being used for course-related purposes. Further, policies adheres to the guidelines and standards outlined in the Master Esthetician Program Handbook. A more detailed description of program requirements, expectations, grading policy, attendance protocols, and uniform guidelines can be found in the handbook. Students are responsible for reviewing these policies to ensure compliance and successful completion of the program. If you have questions about these guidelines, please contact your instructor.",
    ]
  }
];
