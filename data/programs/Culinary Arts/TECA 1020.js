// TECA 1020

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1020 = [
  {
    id: 50003,
    programId: 1,
    courseNumber: "TECA 1020",
    courseName: "Culinary Math",
    courseCredits: 1,
    statewideAlignment: "Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 80.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Culinary Math course teaches students the basics of math as it relates to the culinary field. In this course, students learn how to cost recipes and develop yield formulas, as well as practice fraction skills. Through lectures, demonstrations, and in-class problem solving, students practice a variety of math principles such as fractions, decimals, and baker percentages needed for success in the culinary industry.",

    courseObjectives: [
      "Perform basic math functions to include fractions, weights, and measurements.",
      "Calculate the correct cost of a recipe, including the overall cost, individual cost, and menu sales price.",
      "Determine selling price based on calculated food costs using current technology.",
      "Modify recipes using a yield formula to increase and decrease quantities.",
      "Generate an overall food-cost percentage by examining inventory/ordering.",
    ],

    courseOutline: [
      { title: "Culinary Math Basics", hours: 10},
      { title: "Recipes and Yield Percentages", hours: 10},
      { title: "Recipe Conversions and Food Costing", hours: 10},
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
      "Read Ch. 1 in Culinary Math book",
      "Chapter 1 Review",
      "Read Ch. 7 in the Culinary Math book",
      "Chapter 7 Review",
      "Read Ch. 14 in the Culinary Math book",
      "Chapter 14 Review",
      "End of Course Survey",
    ]
  }
]

export default TECA1020;