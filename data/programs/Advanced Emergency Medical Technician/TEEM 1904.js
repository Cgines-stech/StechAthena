// TEEM 1904

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEEM1904 = [
  {
    id: 10002,
    programId: 1,
    courseNumber: "TEEM 1904",
    courseName: "AEMT Clinical Practice",
    courseCredits: 1,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 48,
    courseTuition: 95.00,
    courseFee: 0.00,
    instructionalType: "SUP",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This clinical course provides Advanced Emergency Medical Technician (AEMT) students with essential hands-on experience in advanced patient management and emergency care. Through practical application in clinical settings, students will master advanced airway management, cardiac care, trauma response, medical emergencies, and specialized obstetric and pediatric care, ensuring preparedness for complex pre-hospital scenarios.",

    courseObjectives: [
      "Conduct comprehensive patient assessments using advanced clinical reasoning to evaluate and manage diverse medical and trauma situations.",
      "Demonstrate proficiency in advanced airway and respiratory management, including supraglottic airway insertion, ventilation techniques, and oxygen therapy across various patient populations.",
      "Perform medication administration, cardiac interventions, trauma management techniques, and patient transport procedures for critically ill or injured patients in pre-hospital settings."
    ],

    courseOutline: [
      "AEMT Clinical Practice 1",
      "AEMT Clinical Practice 2",
      "AEMT Clinical Practice 3",
      "AEMT Clinical Practice 4"
    ],

    courseBooks: [
      {}
    ],

    syllabiBooks: [
      {}
    ],
    
    courseTools: [
      {}
    ],

    courseCertifications: [
      {}
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
        {
          startDate: "08-10-2025",
          endDate: "12-21-2025",
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "9:00 AM - 5:00 PM",
        }
    ],

    instructorContactInformation: [
        {}
    ],

    course_Policies: [
        {
            title: "Course Grading",
            content: [
            "Chapter tests may be attempted up to THREE times and will remain open until the posted due date. Each exam must be passed with a minimum of 80%. If quizzes are attempted multiple times, the highest score will be saved.",
            "Hands-on skills are a demanding and integral part of the learning experience. All skills must be demonstrated (physically & verbally) with 100% accuracy to prove competency. No exceptions.",
            "High School Power School Grades: Quarter student grades will be determined by student progress percentage. Faculty will use the higher percentage of either 1) quarter progress, or 2) cumulative progress for the current training plan year."
            ]
            
        },
        gradeScale,
    ],

    courseAssignmentsandAsssessments: [
        "Instructor Clinical",
        "Field Evaluation",
        "Student Clinical Journal",
        "Self Evaluation"
    ]
  }
]

export default TEEM1904;