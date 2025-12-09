// data/programs/Phlebotomy/programPolicies.js
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
      "Course Policies: Students must adhere to the Program Safety, Work Ethic, and Dress Code as outlined in the Phlebotomy Policies & Orientation. Attendance is important to your success in the Phlebotomy program. You are responsible for the schedule that you set at the beginning of your course and to sign in at the clock-in station at the beginning of your first hour and sign out after your last hour. You are allotted one 15-minute break during each 3-hour block of time, breaks should not be taken within the first or last 30 minutes of your schedule. Problems with signing in must be reported to an instructor as soon as possible. You must maintain 80% attendance in the program. Failure to meet the required attendance standard will result in academic corrective action being taken. If you are going to be absent, communication with the instructor is required to set up time to make up the time missed. This makeup time will be scheduled at the convenience of the instructors and the availability of the classroom and clinic. If you do not have a schedule for ten (10) consecutive days, you will be withdrawn from Southwest Tech. Students are expected to complete coursework according to the scheduled amount of hours designated for the course. All students in the program must stay on task and maintain a minimum 67% progress to retain financial aid eligibility. Failure to meet these requirements shall result in the student completing an Academic Intervention Plan with the Phlebotomy program leadership team and possibly academic warning, probation, and withdrawal from the program if not brought up by the end of each quarter. Cell phones should be on silent and are not allowed in the clinic area. Be courteous to your classmates and take phone calls out in the hall. Excessive cell phone use can hinder progress.",
    ]
  }
];
