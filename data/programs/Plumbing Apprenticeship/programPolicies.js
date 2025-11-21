// data/programs/Plumbing Apprenticeship/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "Course Grading",
    content: [
      "You will also be required to complete the course, exams and homework, with 75% or higher accuracy for credit and DOPL licensure points.",
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
      "Course Policies: Cell phones for many have become a distraction. When you are in class or lab we encourage you to keep your cell phones put away in a secure location. If you use ear buds we ask that you only use one so you can still hear the things going on around you. If you are using your phone for things other than school related items, instructors will ask you to put them away. Please follow the direction of your instructors. Those who have been asked to refrain from using your cell phone and fail to do so will be asked to meet with the Director of Transportation, and student services will be notified.",
    ]
  }
];
