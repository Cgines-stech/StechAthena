// TECA 1210

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1210 = [
  {
    id: 50007,
    programId: 1,
    courseNumber: "TECA 1210",
    courseName: "World Cuisine",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 200.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This World Cuisine course teaches students about the vast array of ingredients and flavors found Throughout the world. Demonstrations on some regional and international dishes are given by the instructor. Using the same cooking principles that students have learned, they are able to cook with different herbs and spices from around the country to create some regional dishes.",

    courseObjectives: [
      "Demonstrate a variety of cooking methods using specific ingredients from a certain region.",
      "Examine different regions and gain a basic knowledge of the history of the cuisine.",
      "Construct dishes using regional and international flavors.",
      "Explain how geography and culture affect the regional cuisine.",
      "Build visually appealing and balanced plates from specific regions from around the country and the world.",
    ],

    courseOutline: [
      { title: "American Cuisine", hours: 20},
      { title: "Europian Cuisine", hours: 20},
      { title: "Asian Cuisine", hours: 20},
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
      "American Regional",
      "American Regional Cooking Practical",
      "European Cuisine",
      "European Cooking Practical",
      "Asian Cuisine",
      "Asian Cooking Practical",
      "End of Course Survey",
    ]
  }
]

export default TECA1210;