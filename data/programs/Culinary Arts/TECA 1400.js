// TECA 1400

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1400 = [
  {
    id: 50008,
    programId: 1,
    courseNumber: "TECA 1400",
    courseName: "Garde Manger - Cold Kitchen",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 120.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Garde Manger-Cold Kitchen course teaches the fundamentals of the cold kitchen. Students gain an understanding of the pantry, sandwich and salad preparation and other common dishes found under Garde Manager skills.",

    courseObjectives: [
      "Identify and prepare a variety of salads.",
      "Identify and prepare a variety of dressings and emulsions.",
      "Identify and prepare an assortment of hot and cold sandwiches.",
      "Explain the importance of food preservation techniques.",
      "Demonstrate proficiency using knives and other tools to achieve professional quality results working with vegetables, fruits, garnishes, and other decorative and edible purposes.",
      "Discuss the flow of goods in a foodservice operation including ordering, receiving, and storing.",
      "Define, describe, and explain the importance of a par system.",
      "Define FIFO and explain how it is used to effectively maintain proper storage procedures.",
    ],

    courseOutline: [
      { title: "Introduction to Cold Food", hours: 10},
      { title: "Making Dressings", hours: 10},
      { title: "Making Green Salads", hours: 10},
      { title: "Making Bound Salads", hours: 20},
      { title: "Sandwiches and Hors D'oeuvres", hours: 20},
      { title: "Making Cured Meats", hours: 20},
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
      "Basics of Cold Food",
      "Chapter 25, 27, 28, 29 - Reading and Reflection",
      "Types of Dressings",
      "Making Dressing and Mayonnaise",
      "Making Green Salads",
      "Making Bound Salads",
      "Sandwiches",
      "Hors d'Oeuvres",
      "Cured Meats",
      "Making Cured Meat",
      "Making Cured Fish",
      "End of Course Survey",
    ]
  }
]

export default TECA1400;