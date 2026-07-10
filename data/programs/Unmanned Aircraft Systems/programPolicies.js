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
      "<strong>Attendance:</strong> Your attendance will be part of your grade. Students are expected to follow their schedule. Absences, tardiness, and early departures will affect your record. Maintain at least 80% attendance. If below 80%, work with the instructor to improve. Take a 10-minute break per hour; inform the instructor if you need longer. Notify the instructor ASAP if you'll be late or absent.",
      "<strong>Assessment and Grading:</strong> Student progress in this course is measured through a combination of module assignments, quizzes, written responses, mission planning activities, final mission planning project, final exam, and attendance and professional participation. This course uses a letter-grade system. Student performance will be evaluated based on completion, accuracy, understanding of course concepts, quality of work, professionalism, and participation. Assignments and assessments are designed to measure both conceptual understanding and applied decision-making. Final grades will reflect the student’s overall performance in the course according to the course grading scale.",
      "<strong>How to Succeed in This Course:</strong> Complete modules in order. Read or watch assigned materials before attempting quizzes. Use course vocabulary in written responses. Ask questions early if a concept is unclear. Stay on pace each week to avoid falling behind. Review feedback and correct misunderstandings before moving on.",
      "<strong>Cell Phone / Electronics:</strong> Limit phone use to coursework. Put away devices if used for non-coursework. Headphones may be allowed during individual work time when approved by the instructor, but students must remain able to hear instructions, safety reminders, and class discussion.",
      "<strong>Course Progress and Expectations:</strong> Students are expected to complete all reading assignments, written responses, quizzes, and course activities in order to stay on pace and successfully complete the course. Some modules may require demonstration of flight skills, mission planning, or applied understanding as assigned in Canvas. Students should review course parameters and assignment directions in Canvas carefully. Homeschool students on a post-secondary schedule will undergo an SAP check each quarter. If progress is insufficient, they will receive a warning, then probation, similar to post-secondary students. Dismissal for low SAP means re-enrollment is only possible the next year.",
      "<strong>Lab Rules:</strong> Students will only use the computers for the assignment that they are working on. Only water bottles with sealable lids are allowed, no other food or drink. Water bottles will be kept on the floor so they do not spill on the computers. Clean your workspace and participate in group clean-ups. Violations will result in a verbal warning, a write-up, and potentially removal from the program. Egregious violations may result in immediate removal.",
      "<strong>Drone and Flight Safety:</strong> Students are expected to demonstrate safe judgment in all flight-related activities. This includes awareness of weather, environmental conditions, battery safety, preflight checks, safe operating space, and instructor directions. Unsafe behavior during any drone-related activity may result in loss of participation privileges and disciplinary action according to program policy.",
      "<strong>Substance Abuse:</strong> Possession or use of controlled substances or any substance that may impair judgment, awareness, or safe participation is a severe safety violation and may result in immediate removal from the program.",
      "<strong>Academic Integrity/cheating expectations for this course:</strong> Students are expected to complete all quizzes, written responses, and assignments using course materials and their own understanding. The use of AI tools, answer generators, or internet searches to obtain assignment answers is considered cheating unless the instructor gives specific permission for a particular activity. Students may ask the instructor for clarification when unsure whether a resource is allowed. Cheating or passing off another person’s work as one’s own may result in disciplinary action up to and including removal from the program, in accordance with program and school policy. Mistakes or confusion about allowed resources may first be addressed through instructor clarification, warning, documentation in the student system, and communication with the student and program leadership, depending on the situation."
    ]
  }
];
