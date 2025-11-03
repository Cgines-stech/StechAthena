// data/programs/Culinary Arts/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "Course Grading",
    content: [
      "An overall grade of 75% must be maintained in order to pass the course. All skills must be passed off at 100%, and EACH quiz score must be 70% or higher",
      "High School Power School Grades: Quarter student grades will be determined by student progress percentage. Faculty will use the higher percentage of either 1) quarter progress, or 2) cumulative progress for the current training plan year",
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
      "90% attendance is required to pass the course. You MUST call in if you are unable to attend. Any coursework missed will need to be made up; arrangements must be made with your instructor upon return to class. You must leave your space clean and in proper order upon completion of each day’s work. You may need to complete this outside of the 5-hour class time if you are unable to complete it during regular program hours. Cell phones can be used to do math, research a recipe, or to listen to music. The music genre must be agreed upon by other classmates, or you must use a single earbud to listen privately. Two earbuds or over the ear headphones are not allowed for safety reasons. If cell phones become a distraction they will be removed from the class.",
    ]
  }
];
