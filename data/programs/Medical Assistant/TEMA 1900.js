// TEMA 1900

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEMA1900 = [
  {
    id: 14012,
    programId: 1,
    courseNumber: "TEMA 1900",
    courseName: "Medical Assistant Externship I",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 190.00,
    courseFee: 0.00,
    instructionalType: "WBL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Medical Assistant Externship I course allows the medical assistant student the opportunity to demonstrate their administrative and clinical skills in a healthcare setting.  This externship takes place in a working medical office or clinic under the supervision of a licensed provider.",

    courseObjectives: [
      "Demonstrate competency of skills learned in the classroom and lab in the ambulatory healthcare setting.",
      "Work effectively in diverse workplace environments.",
      "Acquire additional interpersonal communication and interaction skills.",
      "Successfully complete required externship hours in an ambulatory healthcare setting.",
    ],

    courseOutline: [
      { title: "Practicum Hours I", hours: 30},
      { title: "Practicum Hours II", hours: 30},
      { title: "Practicum Hours III", hours: 30},
    ],

    courseBooks: [
      {
        name: "Medical Assistant (CCMA) Online Study Guide 2.0 + Online Practice Test 2.0", 
        price: 94.0,
        isbn: "",
        note: "",
      },
    ],

    syllabiBooks: [
      {
        name: "Medical Assistant (CCMA) Online Study Guide 2.0 + Online Practice Test 2.0", 
        price: 94.0,
        isbn: "",
        note: "",
      },
    ],
    
    courseTools: [
      {},
    ],

    courseCertifications: [
      {
         name: "NHA CCMA Exam",
         price: 165.0,
         note: ""
      },
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
      {}
    ],

    instructorContactInformation: [
      {}
    ],

    course_Policies: [
      {}
    ],

    courseAssignmentsandAsssessments: [
      "Time/ Performance Tracking",
      "Time/ Performance Tracking",
      "Time/ Performance Tracking",
      "End of Course Survey",
    ]
  }
]

export default TEMA1900;