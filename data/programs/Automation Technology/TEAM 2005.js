// TEAM 2005

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEAM2005 = [
  {
    id: 20009,
    programId: 2,
    courseNumber: "TEAM 2005",
    courseName: "Programmable Logic Controllers II",
    courseCredits: 3,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 95.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "In this course, students are introduced to advanced programming techniques of Programmable Logic Controllers such as process control, data acquisition, computer controlled processes, variable speed drives, and networking. Topics include various software packages not included in the introductory course with hands-on labs and other  advanced topics as needed to meet employer needs.",

    courseObjectives: [
      "Identify and describe the basics of HMI programming.",
      "Identify and apply Programmable Automation Controller principles and practices.",
      "Apply advanced topics of Programmable Logic Controllers in a lab setting.",
      "Explain advanced hardware and software principles as they apply to Programmable Logic Controllers.",
      "Program advanced Programmable Logic Controllers on various software packages to meet employer needs.",
    ],

    courseOutline: [
      { title: "Introduction to Advanced Programmable Logic Controller Programing, Operations & Setup", hours: 30 },
      { title: "Automation Operations and Applications", hours: 30 },
      { title: "Pick and Placing Operations", hours: 15 },
      { title: "Indexing and Sorting Operations", hours: 15 },
    ],

    courseBooks: [
      {}
    ],

    syllabiBooks: [
      {}
    ],
    
    courseTools: [
      {}
    ],

    courseCertifications: [
      {}
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
        {},
    ],

    courseAssignmentsandAsssessments: [
        "Orientation",
        "Amatrol Tutorial.pptx",
        "Lab Packet Instructions.pptx",
        "Signing into Canvas.pdf",
        "Programmable Logic Controllers II Hands On Skills (Labs)",
        "PLC Operations",
        "Basic PLC Programming",
        "PLC Motor Controls",
        "PLC Timer & Counter Instructions",
        "Pick & Place Feeding",
        "PLC Event Sequencing",
        "Indexing",
        "Sorting & Parts Storage",
        "End of Course Survey",
        "Work Ethic Assessment",
    ]
  }
]

export default TEAM2005;