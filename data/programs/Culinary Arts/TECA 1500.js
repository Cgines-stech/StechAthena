// TECA 1500

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1500 = [
  {
    id: 50009,
    programId: 1,
    courseNumber: "TECA 1500",
    courseName: "Baking I",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 140.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Baking I course teaches students basic bakery principles that are fundamental for success in any food industry career. The course outlines the basic ingredients and mixing methods that make up the majority of baked goods. Learn to create pie doughs and basic pastries. Mixing techniques along with the appropriate types of crusts to be used with their subsequent fillings are demonstrated. The correct equipment and baking procedures. This course also teaches basic quick breads, muffins, and cake mixing methods.",

    courseObjectives: [
      "Identify baking ingredients and explain their basic function in the formulation of baking and pastry recipes.",
      "Identify and demonstrate different mixing methods used in baking.",
      "Demonstrate proper use of baking scale and measuring of wet and dry ingredients.",
      "Identify and prepare various types of quick breads and yeast breads.",
      "Identify and prepare various pies and cookies.",
      "Prepare a variety of cakes utilizing the various mixing methods and finish each cake with a variety of icings or toppings.",
    ],

    courseOutline: [
      { title: "Introduction to Bread Making", hours: 30},
      { title: "Making Cookies", hours: 15},
      { title: "Making Cakes", hours: 15},
      { title: "Introduction to Pie Making", hours: 20},
      { title: "Working with Sugar and Merangues", hours: 10},
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
      "Intro to Bread Making",
      "Lean Yeast Doughs",
      "Reading and Reflection",
      "Making Enriched Doughs",
      "Intro to Cookie Baking",
      "Making Cookies",
      "Basic Cakes",
      "Baking Cakes",
      "Buttercreams / Whipped Creams",
      "Introduction to Pies",
      "Making Pie Dough and Pies",
      "Information on Sugar",
      "Key Terms - Sugar",
      "Cooking Sugar",
      "Making Meringues",
      "End of Course Survey",
    ]
  }
]

export default TECA1500;