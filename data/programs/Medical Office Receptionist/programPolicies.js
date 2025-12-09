// data/programs/Medical Office Receptionist/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "",
    content: [
      "Course Grading: Students must have a minimum of 80% on each module to pass off the module and all modules must be passed off before students are allowed to sign up for the next class. Each assignment is awarded points according to how well the submission follows the assignment's requirements. Written submissions are graded according to the college writing guidelines. Some assignments may be submitted more than once. If that is the case, the assignment will clearly state this. At the end of each module, students are asked to submit a Module Checkpoint Meeting showing that they have completed all module requirements.",
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
    title: "",
    content: [
      "Course Policies: Students must adhere to the Program Safety, Work Ethic, and Dress Code as outlined in the Medical Office Receptionist Policies & Orientation. Students are expected to complete coursework according to the scheduled amount of hours designated for the course. Progress is calculated by the number of scheduled hours versus the number of module hours signed off in Northstar. A course timeline will be provided to help you track this progress. You and an instructor will review this during a required weekly video meeting. All students in the program must stay on task and maintain a minimum 67% progress. Failure to meet these requirements shall result in the student completing an Academic Intervention Plan with the Medical Office Receptionist program leadership team and possibly academic warning, probation, and withdrawal from the program if not brought up by the end of each quarter. If you do not have a schedule for ten (10) consecutive scheduled days, you will be withdrawn from Southwest Tech. Excessive cell phone use can hinder progress.",
    ]
  }
];
