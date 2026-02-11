// TEPL 1320

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEPL1320 = [
  {
    id: 22006,
    programId: 1,
    courseNumber: "TEPL 1320",
    courseName: "Plumbing Apprentice IIIB",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 65.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Plumbing IIIB course introduces the fundamental Plumbing theory for the Apprentice Plumbers and covers the International Plumbing Code (IPC), International Fuel Gas Code and International Mechanical Code, along with related math and craft skills.",

    courseObjectives: [
      "Calculate size of fuel piping and fuel-gas piping.",
      "Describe vents and commercial/industrial application.",
      "Describe indirect/special waste and commercial/industrial application.",
      "Calculate size of water supply and distribution review and commercial/industrial applications.",
      "Identify special piping and storage systems.",
      "Explain Utah Amendments and R617-4.",
      "Fabricate several piping projects in a lab situation.",
      "Calculate sizing of various water and drain piping systems.",
    ],

    courseOutline: [
      { title: "Year IIIB", hours: 90},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {
        name: "Mathematics for Plumbers and Pipefitters", 
        price: 187.0,
        isbn: "9781111642600",
        note: "Used in all courses"
      },
      {
        name: "International Fuel Gas Code 2021", 
        price: 107.0,
        isbn: "9781609839666",
        note: "Used in all courses"
      },
      {
        name: "International Fuel Gas Code 2021 Study Companion", 
        price: 83.0,
        isbn: "9781955052320",
        note: "Used in all courses"
      },
      {
        name: "International Plumbing Code 2021", 
        price: 114.0,
        isbn: "9781609839628",
        note: "Used in all courses"
      },
      {
        name: "International Plumbing Code 2021 Study Companion", 
        price: 84.0,
        isbn: "9781955052283",
        note: "Used in all courses"
      },
      {
        name: "Modern Plumbing Textbook", 
        price: 126.0,
        isbn: "9781619608634",
        note: "Used in all courses"
      },
      {
        name: "Modern Plumbing Lab Workbook", 
        price: 45.0,
        isbn: "9781645646709",
        note: "Used in all courses"
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
        startDate: "01-05-2027",
        endDate: "04-21-2027",
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

export default TEPL1320;