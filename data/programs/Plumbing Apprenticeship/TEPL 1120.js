// TEPL 1120

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEPL1120 = [
  {
    id: 22002,
    programId: 1,
    courseNumber: "TEPL 1120",
    courseName: "Plumbing Apprentice IB",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 65.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Plumbing IB course introduces the fundamentals of plumbing theory for the apprentice plumbers and will cover the International Plumbing Code, related math, and craft skills.",

    courseObjectives: [
      "Identify fixtures, faucets and fixture fittings, water heaters, traps, interceptors and separators.",
      "Develop basic skills needed to read drawings and produce piping sketches.",
      "Apply mathematics related to plumbing and angles.",
      "Implement the process of making watertight joints using heat and various filler metals.",
      "Define machine and hand excavating with emphasis on safety.",
      "Explain various types of pipe and fittings used in residential and light commercial plumbing systems.",
      "Fabricate several piping projects in a lab situation",
    ],

    courseOutline: [
      { title: "Year IB", hours: 90},
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

export default TEPL1120;