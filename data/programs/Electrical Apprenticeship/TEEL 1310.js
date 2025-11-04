// TEEL 1310

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEEL1310 = [
  {
    id: 60005,
    programId: 1,
    courseNumber: "TEEL 1310",
    courseName: "Electrician Apprentice IIIA",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 50.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Electrician Apprentice IIIA course discusses the roles of bonding and grounding in electrical systems per National Electrical Code (NEC) requirements. In this course, students will be shown the different parts, functions, and calculations for grounding and bonding. Students will explore the rules that apply to different electrical related boundaries set up by the National Fire Protection Agency (NFPA).",

    courseObjectives: [
      "Describe the NEC requirements regarding grounding and bonding",
      "Calculate sizes of grounding and bonding conductors",
      "Explain the various conductors and properties of grounding and bonding contained in an electrical system",
      "Explain NFPA rules to limit approach, restricted approach, and arc flash boundaries",
    ],

    courseOutline: [
      { title: "Year IIIA", hours: 90},
    ],

    courseBooks: [
      {
        name: "Electrical Grounding and Bonding 7th Edition", 
        price: 150.0,
        isbn: "9780357766835",
        note: "Cengage Unlimited yearly fee"
      },
      {
        name: "Understand Motor Controls 4th Edition", 
        price: 0.0,
        isbn: "9781337798761",
        note: "Included with Cengage Unlimited"
      },
      {
        name: "Understanding the NEC Vol. 2", 
        price: 60.0,
        isbn: "9781950431786",
        note: ""
      },
      {
        name: "Electrical Wiring Commercial 18th edition", 
        price: 0.0,
        isbn: "9780357767108",
        note: "Included with Cengage Unlimited"
      },
    ],

    syllabiBooks: [
      {
        name: "Electrical Grounding and Bonding 7th Edition", 
        price: 150.0,
        isbn: "9780357766835",
        note: "Cengage Unlimited yearly fee"
      },
      {
        name: "Understand Motor Controls 4th Edition", 
        price: 0.0,
        isbn: "9781337798761",
        note: "Included with Cengage Unlimited"
      },
      {
        name: "Understanding the NEC Vol. 2", 
        price: 60.0,
        isbn: "9781950431786",
        note: ""
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
        { name: "Luke Mitchell",        email: "lmitchell@stech.edu",       title: "Instructor" },
    ],

    course_Policies: [
        {}
    ],

    courseAssignmentsandAsssessments: [
      
    ]
  }
]

export default TEEL1310;