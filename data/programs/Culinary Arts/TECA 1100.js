// TECA 1100

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1100 = [
  {
    id: 50004,
    programId: 1,
    courseNumber: "TECA 1100",
    courseName: "Culinary I",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 150.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Culinary I course introduces students to knife skills, and the tools and common equipment used in the kitchen. Students practice knife skills and classical cuts. The course provides instruction and practice for mise en place and organizing a kitchen, as well preparing different vegetables, grains, and starches. Basic herbs, spices, seasonings, and cooking techniques are also covered.",

    courseObjectives: [
      "Identify tools and equipment used in a professional kitchen and demonstrate proper handling of these items to include safety, sanitation, and storage.",
      "Demonstrate knife proficiency to achieve quality results when producing classical knife cuts used in various food preparation and cooking.",
      "Identify, describe, and utilize herbs, spices, and seasonings.",
      "Explain Mise en Place and demonstrate a combination of organizational skills, preparedness, and timing when it comes to seasonings and flavors when preparing and cooking food.",
      "Evaluate and analyze the preparation of a variety of vegetables, legumes, grains, and starches using a variety of cooking methods.",
    ],

    courseOutline: [
      { title: "Equipment Idetification", hours: 20},
      { title: "Understanding Mise en Place", hours: 10},
      { title: "Introduction to Knives", hours: 10},
      { title: "Introduction to Knife Skills", hours: 20},
      { title: "Egg Cookery", hours: 10},
      { title: "Introduction to Breakfast Cooking", hours: 20},
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
      "Chapter 5 Reading and Reflection",
      "Small Wares Identification",
      "Large Equipment Identification",
      "Practical Test",
      "Chapter 5 Quiz",
      "What is Mise en Place?",
      "Practical Assessment - Station Set-up",
      "Introduction to Knives",
      "Vocabulary - Knives",
      "Identifying Knives",
      "Chapter 6 Reading and Reflection",
      "Vocabulary - Knife Skills",
      "Skill Proficiency - Knife Skills",
      "Chapter 6 Quiz",
      "Chapter 21 Reading - Eggs",
      "Skill Proficiency - Cooking Eggs",
      "Chapter 21 Reading and Reflection - Breakfast",
      "Cooking Breakfast",
      "Chapter 21 Quiz",
      "End of Course Survey",
    ]
  }
]

export default TECA1100;