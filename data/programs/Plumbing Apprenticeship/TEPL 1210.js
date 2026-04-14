// TEPL 1210

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEPL1210 = [
  {
    id: 22003,
    programId: 1,
    courseNumber: "TEPL 1210",
    courseName: "Plumbing Apprentice IIA",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 65.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Plumbing IIA course introduces the fundamentals of plumbing theory for the apprentice plumbers and covers the International Plumbing Code (IPC), related math, and craft skills.",

    courseObjectives: [
      "Describe water supply and distribution, sanitary drainage, indirect/special waste, vents, traps, interceptors and separators, along with other basic fundamental plumbing components.",
      "Identify the many different fixtures designed for residential and small commercial buildings.",
      "Apply correct principles for designing Drainage, Waste, and Vent (DWV) and water supply systems that will provide long and satisfactory service.",
      "Describe how to determine the size of water supply piping.",
      "Define how to support and test both DWV and water supply systems.",
      "Explain R317-4 onsite wastewater systems.",
      "Fabricate several piping projects in a lab situation.",
    ],

    courseOutline: [
      { title: "Year IIA", hours: 90},
    ],

    courseBooks: [
      {
        name: "Mathematics for Plumbers and Pipefitters", 
        price: 150.0,
        isbn: "9781111642600",
        note: "Cengage Unlimited Yearly Subscription. Also used in TEPL 1220"
      },
    ],

    syllabiBooks: [
      {
        name: "Mathematics for Plumbers and Pipefitters", 
        price: 150.0,
        isbn: "9781111642600",
        note: "Cengage Unlimited Yearly Subscription. Also used in TEPL 1220"
      },
      {
        name: "Modern Plumbing eBook Bundle w/2yr access code", 
        price: 175.0,
        isbn: "9781637768303",
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

export default TEPL1210;