// data/programs/Automation Technology/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "Course Grading",
    content: [
      "Course Grading: Students must achieve 80% (B-) or higher to pass graded work. Incomplete assignments must be redone to meet the required standards. Guidelines, rules, and expectations for completing assignments are provided in each course.",
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
      "Class attendance is required during your scheduled time. Cell phones for many have become a distraction. When you are in class or lab we encourage you to keep your cell phones put away in a secure location. If you use ear buds we ask that you only use one so you can still hear the things going on around you. If you are using your phone for things other than school related items, instructors will ask you to put them away. Please follow the direction of your instructors. Those who have been asked to refrain from using your cell phone and fail to do so will be asked to meet with the Director of Transportation and student services will be notified. The program is designed to provide the student with as much hands-on work as possible. In the automotive industry you may be required to lift heavy objects and stand for hours at a time to complete work required. Technicians deal with chemicals and materials which require caution, these will be identified in the Right to Know Agreement provided to you. You will also be required to use computers to track and complete work."
    ]
  }
];
