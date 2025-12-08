// data/programs/Welding Technology/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "Course Grading",
    content: [
      "Students must achieve 80% (B-) or higher to pass graded work. Incomplete assignments must be redone to meet the required standards. Guidelines, rules, and expectations for completing assignments are provided in each course.",
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
      "Course Policies:",
      "Attendance: Students are expected to follow their schedule. Absences, tardiness, and early departures will affect your record. Maintain at least 80% attendance. If below 80%, work with the instructor to improve. Take a 10-minute break per hour; inform the instructor if you need longer. Notify the instructor ASAP if you'll be late or absent.",
      "Cell Phone / Electronics: Limit phone use to coursework. Put away devices if used for non-coursework. Headphones are allowed for music. In the welding lab, keep one ear free and when needed, use OSHA-approved hearing protection; consumer headphones are not acceptable. Take calls or check messages outside the lab and welding booths to maintain a focused work environment.",
      "Prerequisites: Follow the course order in the welding program's sequence unless changed by instructors. Lab courses require a demonstration of skills. Skills Upgrade and Personal Interest students must show prerequisite knowledge through tests or skill demonstrations before enrolling. All students must complete the Welding Safety course before entering the welding lab.",
      "Competencies: Complete all reading assignments and written responses to progress. Using AI or searching the internet for answers is considered cheating. Outside materials are allowed if assignments are fulfilled. Lab modules require demonstrating welding skills per American Welding Society standards. Check course parameters on Canvas. Homeschool students on a postsecondary schedule will undergo an SAP check each quarter. If progress is insufficient, they will receive a warning, then probation, similar to post-secondary students. Dismissal for low SAP means re-enrollment is only possible the next year.",
      "Lab Rules: Students will not be permitted to enter the lab without first submitting a signed copy of the Safety and Behavior Disclosure for Welding Technology to their instructor. Students shall wear safety glasses at all times in the lab. Other PPE includes but is not limited to long pants and, no synthetics, no open-toed shoes. Steeled-toed or composite-toed that are nonslip are preferred. Each course will require specific PPE as you go through the program. We are training students for industry, and most welding businesses will require these things, it is good to start investing in them. Only water bottles with sealable lids are allowed; no other food or drink. Report injuries to an instructor immediately. Only use machines with proper permission and training. Clean your workspace and participate in group clean-ups. Violations will result in a verbal warning, a write-up, and potentially removal from the program. Egregious violations may result in immediate removal.",
      "Industry Environment: Be ready to work in hot, cold, dirty, dusty, and noisy conditions. Speak clearly for effective communication. Maintain situational awareness to avoid impacting others or being impacted. Use and knowledge of proper PPE are mandatory for safety. While vulgar language may be used in some shops, it is not allowed in the lab. Keep your space clean to minimize hazards. Always treat everyone with consideration and courtesy.",
      "Substance Abuse: Possession or use of controlled substances or their imitations in the welding lab, which can impair judgment or emergency response, is a severe safety violation. This disregard for safety may result in immediate withdrawal from the program. No one may work in the lab with any substance, legal or otherwise, that may impair them in any way.",
      "Cheating: Performing a weld out of position, using incorrect parameters, or passing off another's work will result in immediate removal from the program with zero tolerance. Mistakes or confusion will receive a verbal warning, a note in the student system, and an email to the student and the director of Manufacturing. Instructors may require a weld demonstration to verify the student's work quality before passing off.",
    ]
  }
];
