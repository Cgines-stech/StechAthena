// data/programs/Information Technology/programPolicies.js
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
      "You are required to keep your progress and attendance at 67% minimum. You must complete this program within 150% estimated program length. You are permitted one 15 minute break every 90 minutes. If you take more than one break in a 90 minute period or your break lasts longer than 15 minutes, your attendance will be penalized. 10 consecutive absences will lead to being withdrawn from the program. Please notify your instructors about absences as soon as possible. If absence is due to illness, please email your instructors prior to end of day. Cell Phone/Electronics – Cell phones cannot be used during class time. You may bring your personal computers to class. You must be on topic in the lab while clocked-in. Industry Environment – computer science typically is very sedentary. This means you may sit at a desk for long hours. Be sure to move and get what exercise you can.",
    ]
  },

  {
    title: "Cohort Courses Policies",
    content: [
      "<strong>Attendance:</strong> Cohort Class: The IT cohort curriculum will be covered over 10 months. Students who are not in class will be unable to learn and miss needed information; therefore, attendance is mandatory. If an absence is unavoidable, the student must notify the instructor prior to the absence when possible. An absence is defined as more than 15 minutes of missed class time, regardless of whether missed time occurs at the beginning, middle, or end of a scheduled class. Breaks will be provided at specified intervals throughout the class sessions to attend to personal needs.", 
      "Mobile phones and other electronic devices must remain in silent mode throughout the duration of the lectures. Please do not disrupt the class by receiving calls or leaving inappropriately. Excessive text messaging/social media during class will not be tolerated. Use of the technologies, as mentioned above, during class, will result in students being asked to leave for the remainder of the class with an absence recorded on their attendance record. Should any specific issues arise, students should discuss them with the instructor.",
      "<strong>Punctuality:</strong> Cohort Class Arriving late, leaving early, or frequently exiting the classroom during class disrupts the instructor and classmates. In order to mirror professional workplace standards, punctuality will be tracked. Tardiness is defined as missing 1 to 14 minutes of class time after the class has started. The determination of tardiness will be made at the discretion of the faculty.",
      "Habitual tardiness in the cohort setting will prompt the implementation of an academic intervention plan, which will be structured according to the following scale:",
      "2 tardies/course = verbal warning",
      "3 tardies/course = academic intervention plan",
      "5 tardies/course = dismissal from program ",
    ]
  }
];
