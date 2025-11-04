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
      {},
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
          startDate: "01-05-2026",
          endDate: "04-30-2026",
          Monday: "6:00 PM - 9:00 PM",
          Tuesday: "",
          Wednesday: "",
          Thursday: "6:00 PM - 9:00 PM",
          Friday: "",
          Saturday: "",
        }
    ],

    instructorContactInformation: [
        { name: "Luke Mitchell",        email: "lmitchell@stech.edu",       title: "Instructor" },
    ],

    course_Policies: [
        {}
    ],

    courseAssignmentsandAsssessments: [
      
    ]
  }
]

export default TEEL1320;