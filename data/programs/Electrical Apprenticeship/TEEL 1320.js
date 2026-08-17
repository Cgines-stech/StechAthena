// TEEL 1320

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEEL1320 = [
  {
    id: 60006,
    programId: 1,
    courseNumber: "TEEL 1320",
    courseName: "Electrician Apprentice IIIB",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 50.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Electrician Apprentice IIIB course explores basic and complex electrical motor control systems and their respective fundamental concepts, diagrams, and applications. Students will examine the wiring and protecting of motors and motor circuits per National Electrical Code (NEC) requirements.",

    courseObjectives: [
      "Identify electrical symbols and diagrams pertaining to motors and motor control circuits",
      "Demonstrate how to wire a control circuit based on a diagram",
      "Identify various control devices",
      "Explain application of various control devices.",
      "Apply proper safety protocols around motor controls",
    ],

    courseOutline: [
      { title: "Year IIIB", hours: 90},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {
        name: "NFPA 70: NEC National Electrical Code 2026", 
        price: 186.0,
        isbn: "9781455932207",
        note: ""
      },
      {
        name: "NEC 2026 Colored Fast Tabs", 
        price: 22.0,
        isbn: "9781622707249",
        note: ""
      },
      {
        name: "Ugly's Electrical References, 2026 Edition", 
        price: 22.0,
        isbn: "9781284315752",
        note: ""
      },
      {
        name: "Electrical Grounding and Bonding 7th Edition", 
        price: 150.0,
        isbn: "9780357766835",
        note: "Cengage Unlimited yearly fee"
      },
      {
        name: "Understanding Motor Controls, 5th ed.", 
        price: 0.0,
        isbn: "9798214114132",
        note: "Included with Cengage Unlimited"
      },
      {
        name: "Electrical Wiring Commercial 18th edition", 
        price: 0.0,
        isbn: "9780357767108",
        note: "Included with Cengage Unlimited"
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
          startDate: "01-07-2027",
          endDate: "05-03-2027",
          Monday: "6:00 PM - 9:00 PM",
          Tuesday: "",
          Wednesday: "",
          Thursday: "6:00 PM - 9:00 PM",
          Friday: "",
          Saturday: "",
        }
    ],

    instructorContactInformation: [
        { name: "Cody Post", email: "cpost@stech.edu", title: "" },
    ],

    course_Policies: [
        {}
    ],

    courseAssignmentsandAsssessments: [
      "TEEL 1320 Midterm",
      "TEEL 1320 Final Exam",
    ]
  }
]

export default TEEL1320;