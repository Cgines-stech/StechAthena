// TEPL 1410

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEPL1410 = [
  {
    id: 22007,
    programId: 1,
    courseNumber: "TEPL 1410",
    courseName: "Plumbing Apprentice IVA",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 65.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Plumbing IVA course reviews the International Plumbing Code (IPC), International Fuel Gas Code and International Mechanical Code, math, and other laws in preparation for taking the journeyman state test.",

    courseObjectives: [
      "Define all chapters of the International Plumbing Code.",
      "Apply mathematics related to plumbing, angles, rolling offsets and pipe lengths.",
      "Explain storm drainage and commercial/industrial application for sizing roof drains.",
      "Explain International Mechanical Code for general, combustion air, boilers, and hydronics.",
      "Discuss Utah Amendments to the Code.",
      "Identify National Fire Protection Association (NFPA) 13D residential fire sprinklers.",
      "Explain R317-4 onsite wastewater.",
      "Fabricate several piping projects in a lab situation.",
    ],

    courseOutline: [
      { title: "Year IVA", hours: 90},
    ],

    courseBooks: [
      {
        name: "ICC International Mechanical Code 2021", 
        price: 126.0,
        isbn: "Item #: 3300S21",
        note: ""
      },
      {
        name: "ICC International Mechanical Code 2021 Study Companion", 
        price: 75.0,
        isbn: "Item #: 4317S21",
        note: ""
      },
    ],

    syllabiBooks: [
      {
        name: "ICC International Mechanical Code 2021", 
        price: 126.0,
        isbn: "Item #: 3300S21",
        note: ""
      },
      {
        name: "ICC International Mechanical Code 2021 Study Companion", 
        price: 75.0,
        isbn: "Item #: 4317S21",
        note: ""
      },
      {
        name: "International Fuel Gas Code 2021", 
        price: 107.0,
        isbn: "9781609839666",
        note: ""
      },
      {
        name: "International Fuel Gas Code 2021 Study Companion", 
        price: 83.0,
        isbn: "9781955052320",
        note: ""
      },
      {
        name: "International Plumbing Code 2021", 
        price: 114.0,
        isbn: "9781609839628",
        note: ""
      },
      {
        name: "International Plumbing Code 2021 Study Companion", 
        price: 84.0,
        isbn: "9781955052283",
        note: ""
      },
    ],
    
    courseTools: [
      {}
    ],

    courseCertifications: [
      {},
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
      {
        termLabel: "",
        startDate: "08-25-2026",
        endDate: "12-08-2026",
        Monday: "",
        Tuesday: "6:00 PM - 9:00 PM",
        Wednesday: "6:00 PM - 9:00 PM",
        Thursday: "",
        Friday: "",
        Saturday: "",
      },
    ],

    instructorContactInformation: [
      {},
    ],

    course_Policies: [
      {}
    ],

    courseAssignmentsandAsssessments: [

    ]
  }
]

export default TEPL1410;