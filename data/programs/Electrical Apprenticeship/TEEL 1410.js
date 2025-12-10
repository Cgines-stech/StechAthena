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
      {
        name: "2023 Electrical Exam Preparation", 
        price: 71.0,
        isbn: "9781950431717",
        note: ""
      },
      {
        name: "Understanding the NEC Vol. 1", 
        price: 69.0,
        isbn: "9781950431779",
        note: ""
      },
    ],

    syllabiBooks: [
      {
        name: "2023 Electrical Exam Preparation", 
        price: 71.0,
        isbn: "9781950431717",
        note: ""
      },
      {
        name: "Understanding the NEC Vol. 1", 
        price: 69.0,
        isbn: "9781950431779",
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
          startDate: "08-18-2025",
          endDate: "12-08-2025",
          Monday: "6:00 PM - 9:00 PM",
          Tuesday: "",
          Wednesday: "",
          Thursday: "6:00 PM - 9:00 PM",
          Friday: "",
          Saturday: "",
        }
    ],

    instructorContactInformation: [
        { name: "Wade Esplin",        email: "wesplin@stech.edu",       title: "Instructor" },
    ],

    course_Policies: [
        {}
    ],

    courseAssignmentsandAsssessments: [
      
    ]
  }
]

export default TEEL1410;