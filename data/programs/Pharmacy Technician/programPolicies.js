// data/programs/Pharmacy Technician/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "",
    content: [
      "Course Grading: Students must have a minimum of 80% on each module to pass off the module. All modules must be passed off before students move on to the next class. All tests, assignments, quizzes, and labs can be resubmitted if the total module score is below 80%. Any grade below a B- will result in a withdrawal/incomplete. Each assignment is awarded points according to how well the submission follows the directions. Written submissions will be graded on but not limited to spelling, grammar, and punctuation. At the end of each module, students are asked to submit a 'Student Acknowledgement Statement' showing completion of all module requirements. End of Course grades are based off the average module grades on Canvas and the number of enrollments in said course.",
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
      "Course Policies: Students must have a minimum of 80% on each module to pass that module. All assignments must be submitted during your scheduled in-class time. All tests will be taken during your scheduled in-class time, either in the classroom or at the Testing Center. The student is required to keep their attendance above 80%. Please come to class well groomed, appropriately dressed (pharmacy workplace appropriate), and ready to learn! Students are expected to be patients, pharmacists, managers, etc. for each other during simulations and labs. Students must sign up for one lab at a time so that all students can progress during lab-based modules. All students must become CPR certified, complete the Wellbeing Promotion and Disease Prevention Project, obtain a Pharmacy Tech Trainee License, and complete/upload all required items on Verified Credentials before the end of TEPT 1100. Please refer to the Pharmacy Technician Program Handbook for more specific information.",
      "<strong>Attendance:</strong> When a student signs up for this class, the student commits to a schedule that is expected to be followed. The student required to keep their attendance at an 80% minimum. If the student is below 80% at the weekly check, we will put the student on a Student Improvement Plan (SIP). An example of SIP can be found in the Pharmacy Technician Program Handbook. The student will need to come in and make up the hours they have missed. Each student may take a 10-minute break for every 60 minutes scheduled. Please email your instructor immediately if the student needs help with their schedule.",
      "<strong>Behavior & Attire:</strong> If your attire or behavior is not work or school-place-appropriate, you will be asked to change your behavior and/or attire. The student will get three warnings: one verbal warning, one written warning, and the last warning, which will be a meeting with Tim Hatch, Heidi Choate, and Eliza DeMille. Failure to improve behavior and/or attire may result in program dismissal. Please refer to the Pharmacy Technician Program Handbook for expected behavior and attire.",
      "<strong>Cell Phone / Electronics:</strong> Be courteous to your classmates and keep cell phone use to a minimum. If your phone/iPad/tablet is out for non-coursework-related activities, you will be asked to put it away. Listening to music with headphones is acceptable, but if you are listening to music while using your phone/iPad/tablet for non-coursework- related activities, you will be asked to put them away. If you must make or take a phone call, please go out into the hall. No cellphones in the lab.",
      "<strong>High School Specific Information:</strong> This is a college-level course; the students are expected to go through a lot of material each quarter. If the student stays on track this year, they should complete at least 330 hours of didactic/simulation and earn 11 college credits. Each student is welcome to (and encouraged to) complete more hours if they wish. If the student completes the entire program, it will count as 17 college credits. Pharmacy Technician students must wear scrubs to class every day. Each student will become CPR-certified and complete a Wellness Promotion & Disease Prevention project this year. Unless a high school student wants to go to an externship, they do not need to get a trainee license, a background check, a drug test, or any vaccines.",
      "<strong>High school Class Schedule:</strong> 1st & 2nd Period Cedar 8:00 am - 10:29 am (M-Th) and 8:00 am - 9:55 am (F) Canyon View 8:05 am - 10:10 am (M-Th) and 8:05 am - 9:18 am (F) 3rd & 4th Period or 4th & 5th Period Cedar 12 pm - 2 pm (M-Th) and 10 am - 12:05 pm (F) Canyon View 12:30 pm - 2:32 pm (M-Th) and 10:32 am - 11:45 am (F)",
    ]
  }
];
