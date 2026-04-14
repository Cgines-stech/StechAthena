// TEPL 1310

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEPL1310 = [
  {
    id: 22005,
    programId: 1,
    courseNumber: "TEPL 1310",
    courseName: "Plumbing Apprentice IIIA",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 65.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Plumbing IIIA course continues to explore the fundamentals of plumbing theory for the apprentice plumbers and covers the International Plumbing Code (IPC), International Fuel Gas Code (IFGC) and International Mechanical Code (IMC), along with related math and craft skills.",

    courseObjectives: [
      "Identify materials detrimental to sewer systems.",
      "Determine protection of pipes and plumbing system components.",
      "Explain washroom and toilet room requirements.",
      "Describe specialty plumbing fixtures.",
      "Determine proper water heater, vents, and combustion air installation requirements as per the International Mechanical Code (IMC) and the International Fuel Gas Code (IFGC).",
      "Calculate combustion air, chimneys, and vent sizes.",
      "Determine volume of Rectangular Solids, Cylinders.",
      "Identify NPFA 13D residential fire sprinklers.",
      "Fabricate several piping projects in a lab situation.",
    ],

    courseOutline: [
      { title: "Year IIIA", hours: 90},
    ],

    courseBooks: [
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
    ],

    syllabiBooks: [
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

export default TEPL1310;