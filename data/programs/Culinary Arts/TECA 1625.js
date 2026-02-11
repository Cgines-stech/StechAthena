// TECA 1625

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1625 = [
  {
    id: 50016,
    programId: 1,
    courseNumber: "TECA 1625",
    courseName: "Artisan Breads",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 150.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This hands-on course introduces students to the fundamental techniques and craft of artisan breadmaking. Through guided practice, participants will learn to create a variety of traditional doughs—each highlighting unique fermentation methods, mixing styles, and flavor profiles. The course covers the production of straight doughs for classic everyday breads, versatile pizza dough with optimal texture and structure, and naturally leavened sourdough featuring wild yeast fermentation. Students will also explore pre-ferments such as biga to develop depth of flavor and improved dough strength. Additional instruction includes shaping, proofing, and baking authentic focaccia with its signature airy crumb and olive oil–rich crust. By the end of the course, students will understand the science behind yeast activity, gluten development, and fermentation, and will be able to produce a range of artisan loaves with professional quality and consistency. This course is ideal for culinary students, baking enthusiasts, and anyone eager to elevate their breadmaking skills.",

    courseObjectives: [
      "Explain the foundational principles of artisan breadmaking, including flour types, ingredient functions, and fermentation concepts.",
      "Summarize key ideas from Flour, Water, Salt, Yeast that relate to producing high-quality artisan breads.",
      "Apply the eight fundamental steps of artisan bread production to create a variety of basic doughs.",
      "Produce classic breads using proper mixing, fermentation, shaping, and baking techniques.",
      "Differentiate among various levain methods (sourdough, poolish, and biga) and prepare each type to develop structure and flavor.",
      "Demonstrate effective dough-handling skills to mix, knead, ferment, shape, proof, and bake artisan breads with consistency.",
      "Create pizza dough and focaccia utilizing appropriate mixing, hydration, fermentation, and ingredient incorporation techniques.",
      "Evaluate dough readiness, fermentation stages, and final bake quality to improve flavor, texture, and overall product outcomes.",
    ],

    courseOutline: [
      { title: "Principles of Artisan Bread", hours: 10},
      { title: "Basic Breads", hours: 20},
      { title: "Levain Breads", hours: 15},
      { title: "Pizza Dough and Focaccia", hours: 15},
    ],

    courseBooks: [
      {
        name: "Flour, Water, Salt, Yeast", 
        price: 15.0,
        isbn: "9780866127400",
        note: ""
      },
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
      {
        name: "Flour, Water, Salt, Yeast", 
        price: 15.0,
        isbn: "9780866127400",
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
      {}
    ]
  }
]

export default TECA1625;