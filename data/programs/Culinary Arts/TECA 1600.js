// TECA 1600

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1600 = [
  {
    id: 50013,
    programId: 1,
    courseNumber: "TECA 1600",
    courseName: "Pastas and Grains",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 150.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Baking II course expands the students’ knowledge and skills and prepares them to work in a retail or industrial bakery. Students practice creating a variety of baked and dessert goods. Advanced bakery techniques are shared and practiced.",

    courseObjectives: [
      "Construct pies with appropriate crust and filling while being able to differentiate the filling methods.",
      "Produce puff and blitz pastry dough using proper roll-in and fold-in techniques.",
      "Cook sugar syrup to the seven different stages, avoiding crystallization.",
      "Produce pastry cream and baked custard.",
      "Examine the differences between a baked pudding and starch-thickened pudding.",
    ],

    courseOutline: [
      { title: "Laminated Doughs and Pate Choux", hours: 20},
      { title: "Making Pastries", hours: 20},
      { title: "Pastry Creams and Dessert Sauces", hours: 20},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {
        name: "Culinary Artistry", 
        price: 25.0,
        isbn: "9780471287858",
        note: ""
      },
      {
        name: "Professional Baking 8th Edition", 
        price: 109.0,
        isbn: "9781119744993",
        note: ""
      },
      {
        name: "Culinary Math 5th ed", 
        price: 43.0,
        isbn: "9781394265862",
        note: ""
      },
      {
        name: "On Cooking 6th ed", 
        price: 165.0,
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
      "Chapter 12 Reading and Reflection - Pastry Basics",
      "Making Pate a Choux",
      "Making Laminated Dough",
      "Making Croissants",
      "Chapter 18 Reading and Reflection",
      "Making Vanilla Sauce, Pastry Cream & Lemon Curd",
      "Making Assorted Pastries",
      "End of Course Survey",
    ]
  }
]

export default TECA1600;