// TECA 1920

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1920 = [
  {
    id: 50016,
    programId: 1,
    courseNumber: "TECA 1920",
    courseName: "Culinary Arts Externship",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 90,
    courseTuition: 190.00,
    courseFee: 40.00,
    instructionalType: "WBL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "Externship students will have a work-based learning experience in a foodservice environment under the supervision of a pre-approved chef. Food service will involve at least 51 percent cooking from scratch.",

    courseObjectives: [
      "Identify opportunities to learn new skills.",
      "Demonstrate working knowledge of learned skills.",
      "Execute proper sanitation and professionalism.",
      "Perform the assigned functions of the establishment.",
      "Explain the learning gained from this experience.",
    ],

    courseOutline: [
      { title: "Culinary Shift 1", hours: 30},
      { title: "Culinary Shift 2", hours: 30},
      { title: "Culinary Shift 3", hours: 30},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {
        name: "Culinary Artistry", 
        price: 20.0,
        isbn: "9780471287858",
        note: ""
      },
      {
        name: "Professional Baking 8th Edition", 
        price: 90.0,
        isbn: "9781119744993",
        note: ""
      },
      {
        name: "Culinary Math 4th ed", 
        price: 35.0,
        isbn: "9781118972724",
        note: ""
      },
      {
        name: "On Cooking 6th ed", 
        price: 147.0,
        isbn: "9780134441900",
        note: ""
      },
    ],
    
    courseTools: [
      {},
    ],

    courseCertifications: [
      {},
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
      "30 Hrs Externship",
      "30 Hrs Externship",
      "30 Hrs Externship",
      "End of Course Survey",
    ]
  }
]

export default TECA1920;