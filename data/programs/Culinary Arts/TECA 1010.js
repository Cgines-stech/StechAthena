// TECA 1010

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1010 = [
  {
    id: 50002,
    programId: 1,
    courseNumber: "TECA 1010",
    courseName: "Introduction to Culinary Arts",
    courseCredits: 1,
    statewideAlignment: "Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 80.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Introduction to Culinary Arts course explores the careers available in the food service industry. Students learn how to identify, prepare, and combine ingredients for a well-balanced diet, as well as learn about nutrients and dietary substitutions for food allergies. Through hands-on activities, students practice the basic techniques used in cooking, with an emphasis on presentation. Students who complete this course will have a comprehensive understanding of the fundamentals behind a successful culinary career.",

    courseObjectives: [
      "Explain the hospitality industry’s philosophy and its role in providing customer service.",
      "Examine professional career opportunities in the hospitality and foodservice industry.",
      "Explain the primary characteristics, functions, and major food sources for major nutrients.",
      "Identify common food allergies and identify appropriate substitutions.",
      "Examine the importance of sustainable practices in a foodservice operation.",
    ],

    courseOutline: [
      { title: "Introduction to the Profession", hours: 10},
      { title: "Career Opportunities", hours: 10},
      { title: "Food Ethics and Social Responsibility", hours: 10},
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
      "Orientation Acknowledgement",
      "Chapter 1 Reading and Reflection",
      "Career Research",
      "Animals for Food / Animal Cruelty",
      "Food Poverty / Food Security",
      "End of Course Survey",
    ]
  }
]

export default TECA1010;