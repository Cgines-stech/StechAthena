// TECA 1000

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1000 = [
  {
    id: 50001,
    programId: 1,
    courseNumber: "TECA 1000",
    courseName: "Sanitation and Safety",
    courseCredits: 1,
    statewideAlignment: "Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 55.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Sanitation and Safety course introduces students to the importance of food safety and sanitation in the kitchen. Students learn how to recognize and prevent hazards that can cause food-borne illnesses. It covers how to store and handle food and equipment, including the use of sanitizers and prevention of cross contamination. The course introduces regulations related to food safety and sanitation.",

    courseObjectives: [
      "Identify microorganisms related to food spoilage and food-borne illnesses; describe their requirements and methods for growing.",
      "Demonstrate acceptable procedures when preparing potentially hazardous foods, including time/temperature principles.",
      "Demonstrate good personal hygiene and health habits.",
      "Identify the Hazard Analysis Critical Control Points (HAACP) during all food handling processes as a method for minimizing the risk of food-borne illness.",
      "Define appropriate responses to kitchen injuries.",
    ],

    courseOutline: [
      { title: "Serve Safe Food Handlers Certificate", hours: 15},
      { title: "Southwest Tech Kitchen Safety", hours: 15},
    ],

    courseBooks: [
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
      { name: "Uniform/Knife roll", price: 240.0, note: "" },
      { name: "Insta Read Thermopen", price: 60.0, note: "" },
    ],

    courseCertifications: [
      {
        name: "ServSafe Food Handler", 
        price: 25.00, 
        note: "" 
      },
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
      "ServSafe Online Food Handlers Course",
      "Kitchen Safety Rules",
      "Equipment Safety",
      "End of Course Survey",
    ]
  }
]

export default TECA1000;