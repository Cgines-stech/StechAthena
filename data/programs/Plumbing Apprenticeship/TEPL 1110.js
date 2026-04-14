// TEPL 1110

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEPL1110 = [
  {
    id: 22001,
    programId: 1,
    courseNumber: "TEPL 1110",
    courseName: "Plumbing Apprentice IA",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 65.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Plumbing IA course explores the secure and highly demanded profession of plumbing. The primary emphases include: the understanding and interpretation of the International Plumbing Code (IPC), blueprint reading, materials and requirements, practical mathematics required in plumbing, and other subject areas that are essential to the trade which are more conducive to the classroom setting than a work environment.",

    courseObjectives: [
      "Practice safety and the proper use of tools and leveling instruments.",
      "Define hydraulics and pneumatics.",
      "Interpret building and plumbing codes.",
      "Apply basic mathematics toward measurements, angles, slopes, and other plumbing related problems.",
      "Fabricate plumbing projects in a lab setting.",
    ],

    courseOutline: [
      { title: "Year IA", hours: 90},
    ],

    courseBooks: [
      {
        name: "Mathematics for Plumbers and Pipefitters", 
        price: 150.0,
        isbn: "9781111642600",
        note: "Cengage Unlimited Yearly Subscription. Also used in TEPL 1120"
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

    syllabiBooks: [
      {
        name: "Mathematics for Plumbers and Pipefitters", 
        price: 150.0,
        isbn: "9781111642600",
        note: "Cengage Unlimited Yearly Subscription. Also used in TEPL 1120"
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

export default TEPL1110;