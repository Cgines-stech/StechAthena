// data/programs/Commercial Driver's License Class A/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "",
    content: [
      "Course Grading: Students must achieve 80% (B-) or higher to pass graded work. Your grades are weighted in the following categories: Classroom Work – 30%, Pre-trip – 20%, Skills – 20%, Road – 30%.",
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
      "Course Policies: Class attendance is required during your scheduled time. The Federal Motor Carrier Safety Administration (FMCSA) requires everyone wishing to obtain a Commercial Drivers License (CDL) to attend an approved training program and have documented hours. Cell Phone Use – When driving or observing in the semi-trucks cell phones are not permitted, no exceptions; it's the law. Drug & Alcohol Safety Policy – Drug and alcohol use and abuse during the duration of the training program are strictly prohibited. If you are suspected or found abusing any substance, Southwest Technical College has the right to require an additional full drug screen at the student expense. Each individual is responsible for safety, and we reserve the right to remove anyone from the training program which includes in class instruction and/or in-truck driving training for any unsafe practices. This will be determined by the instructor and college administration. No exceptions! Smoking is not permitted in the semi-trucks. Industry Environment – The program is designed to provide the student with real-world hands-on driving experience. If you are unsafe behind the wheel while driving, you will be asked to stop the vehicle and removed from driving. This decision is from the instructors and director.",
    ]
  }
];
