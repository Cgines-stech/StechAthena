// data/programs/Paramedic/programPolicies.js
import gradeScale from "../../gradescale.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

export default [
  {
    title: "Course Grading",
    content: [
      "Students must demonstrate a minimum competence in all areas of the course with an 80% to be able to progress in the program. Any grade below a B- is considered failing the course.",
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
      "The preparatory nature of this course requires the student be actively involved and dedicated to learning the material and completing the coursework. Course content is foundational to the education of a paramedic. If there is difficulty with any of the information or concepts, please seek help early so that you can be assisted in attaining and assimilating the essential content. If a student has completed foundational courses in Anatomy, Physiology, English, and Math and demonstrates adequate retention and integration of content, OR passes the Fisdap Paramedic Entrance Exam with >80%, credit will be awarded and attendance of this course will be waived. This course does not contain any tests, but various assignments to assess understanding. Each writing assignment is awarded points according to how well the submission follows the requirements of the assignment and are graded according to the college writing guidelines. Math, Anatomy and Physiology assignments are graded on accuracy and correctness. The concepts in this course are essential to progress within the program, and the course is very brief. Therefore, 100% attendance is required. If there are extreme circumstances, contact the Program Director to discuss the situation. Be courteous to your other classmates and keep cell phone use to a minimum and take only necessary phone calls out in the hall.",
    ]
  }
];
