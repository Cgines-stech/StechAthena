// TECA 1800

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1800 = [
  {
    id: 50010,
    programId: 1,
    courseNumber: "TECA 1800",
    courseName: "Job Seeking Skills",
    courseCredits: 1,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 80.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "Job Seeking Skills explores how to prepare and successfully apply to potential career opportunities. During this course, you will be presented with essential job-seeking skills needed to find gainful employment.",

    courseObjectives: [
      "Create a professional resume, cover letter and reference sheet.",
      "Utilize online tools successfully to create an e-portfolio.",
      "Expand and develop networking skills.",
      "Utilize online resources effectively to find job openings.",
      "Demonstrate the ability to fill out job applications in a professional manner.",
      "Perform successfully in a job interview.",
      "Demonstrate appropriate follow-up procedures.",
    ],

    courseOutline: [
      { title: "Writing a Professional Resume", hours: 10},
      { title: "Methods of Job Searching", hours: 10},
      { title: "Interviewing Skills", hours: 10},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {
        name: "Culinary Artistry", 
        price: 20.0,
        isbn: "9780471287858",
        note: ""
      },
      {
        name: "Professional Baking 8th Edition", 
        price: 90.0,
        isbn: "9781119744993",
        note: ""
      },
      {
        name: "Culinary Math 4th ed", 
        price: 35.0,
        isbn: "9781118972724",
        note: ""
      },
      {
        name: "On Cooking 6th ed", 
        price: 147.0,
        isbn: "9780134441900",
        note: ""
      },
    ],
    
    courseTools: [
      {},
    ],

    courseCertifications: [
      {},
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
        {}
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "How to Create a Resume",
      "Write your Resume",
      "How to Job Search",
      "Job Searching",
      "Interviewing Skills",
      "Interviewing",
      "End of Course Survey",
    ]
  }
]

export default TECA1800;