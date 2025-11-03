// TECA 1110

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1110 = [
  {
    id: 50005,
    programId: 1,
    courseNumber: "TECA 1110",
    courseName: "Culinary Techniques",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 150.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Culinary Techniques course teaches the essential techniques used in the professional kitchen. Students practice breaking down, preparing, and cooking poultry as well as fish. Fabrication methods for beef, lamb, and game are also taught.",

    courseObjectives: [
      "Execute proper poultry fabrication.",
      "Identify a variety of poultry and how they are used.",
      "Demonstrate cooking poultry using a variety of cooking methods.",
      "Identify and prepare a variety of fish, shellfish, and crustaceans.",
      "Identify and explain various fabrication methods for beef, lamb, pork, and game as available.",
    ],

    courseOutline: [
      { title: "Introduction to Cooking Methods", hours: 10},
      { title: "Dry Heat Method - Grilling & Broiling", hours: 20},
      { title: "Dryheat Method - Saute & Pan Fry", hours: 20},
      { title: "Dry Heat Method - Deep Frying & Roasting", hours: 20},
      { title: "Moist Heat Method - Poaching & Simmer", hours: 10},
      { title: "Moist Heat Method - Steaming", hours: 10},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {},
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
      "Reading and Refection - Principles of Cooking",
      "Basic Cooking Methods - Skills Proficiency",
      "Principles of Cooking: Broiling & Grilling",
      "Broiling and Grilling Practical",
      "Principles of Cooking: Saute and Pan-Fry",
      "Saute and Pan-Fry Practical",
      "Principles of Cooking: Deep-Fry andl Roast",
      "Deep-Fry and Roast Practical",
      "Principles of Cooking: Poach and Sinn mer",
      "Poach and Simmer Practical",
      "Principles of Cooking: Steam and Braise",
      "Steam and Braise Practical",
      "Chapter 10 Quiz",
      "End of Course Survey",
    ]
  }
]

export default TECA1110;