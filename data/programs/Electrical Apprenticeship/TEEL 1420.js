// TEEL 1420

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEEL1420 = [
  {
    id: 60008,
    programId: 1,
    courseNumber: "TEEL 1420",
    courseName: "Electrician Apprentice IVB",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 50.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Electrician Apprentice IVB course, students will review all concepts from the previous years of electrical apprenticeship education. This course prepares individuals for the Utah State Journeyman qualifying examinations. Upon completion, students will demonstrate journeyman-level understanding of the electrical field as a whole.",

    courseObjectives: [
      "Apply knowledge of National Electrical Code (NEC) to pass a comprehensive review",
      "Apply knowledge of electrical theory to pass a comprehensive review",
      "Apply knowledge of safety to pass a comprehensive review",
    ],

    courseOutline: [
      { title: "Year IVB", hours: 90},
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
          startDate: "01-06-2027",
          endDate: "05-03-2027",
          Monday: "6:00 PM - 9:00 PM",
          Tuesday: "",
          Wednesday: "6:00 PM - 9:00 PM",
          Thursday: "",
          Friday: "",
          Saturday: "",
        }
    ],

    instructorContactInformation: [
        { name: "Wade Esplin", email: "wesplin@stech.edu", title: "" },
    ],

    course_Policies: [
        {}
    ],

    courseAssignmentsandAsssessments: [
      
    ]
  }
]

export default TEEL1420;