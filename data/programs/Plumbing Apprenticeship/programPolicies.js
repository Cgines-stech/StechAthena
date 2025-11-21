// data/programs/Plumbing Apprenticeship/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "Course Grading",
    content: [
      "Chapter tests may be attempted up to THREE times and will remain open until the posted due date. Each exam must be passed with a minimum of 80%. If quizzes are attempted multiple times, the highest score will be saved. If exams and all other graded metrics do not meet the minimum required score of 80%, the student will not be recommended for testing and the awarded grade will present as F.",
      "Hands-on skills are a demanding and integral part of the learning experience. All skills must be demonstrated (physically & verbally) with 100% accuracy to prove competency. No exceptions. To achieve this level each student must be attentive and willing to participate fully during each skills lab. All lab time must be used wisely. Students may practice and evaluate one another while preparing to pass off skills with a Utah endorsed EMS Instructor. A Utah endorsed EMS Instructor must observe and evaluate each student until the master competency level is achieved. Students failing to use their time wisely as directed by the Course Coordinator, EMS Instructors and other STECH faculty will not be recommended for testing. Students failing to demonstrate 100% competency as deemed by the Course Coordinator and EMS Instructors will not be recommended for testing.",
      "High School Power School Grades: Quarter student grades will be determined by student progress percentage. Faculty will use the higher percentage of either 1) quarter progress, or 2) cumulative progress for the current training plan year.",
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
      "Course Policies: Expected Classroom/Campus Behaviors: Students are expected to follow STECH and classroom rules and policies. Appropriate dress is to be worn each day which consists of the EMS uniform. Keep the classroom clean and neat. Clean and put away all equipment and supplies, place chairs in their proper position, counter tops, tables, pick up trash each day and vacuum as needed. All use of illegal drugs, abuse of prescription and/or OTC medication, use of tobacco and alcohol on campus is prohibited. Any student arriving at school under the influence may be disciplined in the following ways: dismissed from the course, not recommended for testing, suspended from STECH and law enforcement may be notified. Inappropriate language, disruptive behavior, lying, cheating, bullying, stalking, threats and/or acts of violence toward faculty and/or student/s may result in involving law enforcement, dismissal from the course and the student will not be recommended for testing. Rules are subject to change without notice.",
      "Safety: The safety of all students and patients is taken very seriously. Personal safety, followed by the safety of the EMS partner, and then the patient is the first skill taught and the most often discussed aspect of EMS. All rules outlined in this syllabus as well as rules given in class throughout the course pertaining to specific skills and concepts including, but not limited to lifting & moving, glucose testing, IV access, spinal immobilization, vital signs, patient assessments, communication, etc. are expected to be followed precisely to ensure the safe practice of emergency medicine in the classroom as well as the field. If the student chooses to practice skills in a manner not taught as appropriate by the Course Coordinator or Adjunct Instructor/s, the student will likely be dismissed from the course and not recommended for testing.",
      "Cell Phone Use: During class hours, phones are to be turned on silent and only used for EMS related learning. Breaks are given during class at which time personal use of phones is appropriate. Misuse of cell phone, tablet or laptop during class may result in dismissal of the course and failure to be recommended for testing.",
      "Attendance: Students must attend or make up all hours of EMT/AEMT classroom time in order to be recommended for testing. Missing more than 15 hours of classroom time will result in the student not being recommended for testing. EMR students must attend 42 hours of classroom time. Missing more than 10 hours of classroom time will result in the EMR students not being recommended for testing. Students must be in their seats, in appropriate EMT uniform and ready to learn when class begins.",
      "See Course Coordinator to schedule make up time. No Exceptions. All final decisions regarding recommendations to test will be determined by the Course Coordinator and the Medical Director.",
    ]
  }
];
