// TEEL 1410

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEEL1410 = [
  {
    id: 60007,
    programId: 1,
    courseNumber: "TEEL 1410",
    courseName: "Electrician Apprentice IVA",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 50.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Electrician Apprentice IVA course explores the basic skills necessary for becoming crew leader and managing electrical hazards. In this course, students will be instructed in special occupancies, special equipment, special conditions and communication systems and their respective National Electrical Code (NEC) requirements.",

    courseObjectives: [
      "Demonstrate the application of the National Electrical Code (NEC) Chapters 5-8",
      "Demonstrate how to navigate the National Electrical Code (NEC) Chapters 5-8",
      "Explain the costs related to safety",
      "Perform a hazard / risk assessment",
      "Explain Utah licensing requirements and rules",
    ],

    courseOutline: [
      { title: "Year IVA", hours: 90},
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
          startDate: "08-24-2026",
          endDate: "12-14-2026",
          Monday: "6:00 PM - 9:00 PM",
          Tuesday: "",
          Wednesday: "6:00 PM - 9:00 PM",
          Thursday: "",
          Friday: "",
          Saturday: "",
        }
    ],

    instructorContactInformation: [
        { name: "Brandon Jonsson", email: "bjonsson@stech.edu", title: "" },
    ],

    course_Policies: [
        {}
    ],

    courseAssignmentsandAsssessments: [
      "Attendance Percentage",
      "Mid Term Exam",
      "Final Exam",
      "Final Exam Extra Credit",
    ]
  }
]

export default TEEL1410;