// TECA 1240

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1240 = [
  {
    id: 50012,
    programId: 1,
    courseNumber: "TECA 1240",
    courseName: "Pastas and Grains",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 100.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Pastas and Grains course teaches students about different types of starches including pasta and grains. Students learn the proper techniques in creating pasta dough and shaping for the desired finished product. Several methods of potato preparation are demonstrated. Rice/grain cooking methods are explained and demonstrated to the students.",

    courseObjectives: [
      "Prepare pasta dough and identify different shapes and uses of pasta.",
      "Identify grains and cook them using a variety of methods.",
      "Identify different types of rice and demonstrate a variety of methods to cook rice.",
      "Describe the role of starches and their place on a balanced plate.",
      "Identify different beans and legumes.",
    ],

    courseOutline: [
      { title: "Introduction to Pastas", hours: 10},
      { title: "Pasta Making", hours: 10},
      { title: "Introduction to Grains and Legumes", hours: 10},
      { title: "Cooking Grains", hours: 20},
      { title: "Cooking Legumes", hours: 10},
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
      "Chapter 23: Reading and Reflection",
      "Learning about Pasta",
      "Making and Cooking Pasta",
      "Making and Cooking Dumplings",
      "Learning about Legumes",
      "Learning about Grains",
      "Cooking Rice",
      "Cooking Corn",
      "Cooking Other Grains",
      "Cooking Legumes",
      "End of Course Survey",
    ]
  }
]

export default TECA1240;