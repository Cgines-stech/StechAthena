// TEES 1010

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEES1010 = [
  {
    id: 21001,
    programId: 1,
    courseNumber: "TEES 1010",
    courseName: "Foundations",
    courseCredits: 1,
    statewideAlignment: "Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 80.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This course prepares students to enter the world of skin care, and natural nail care, by teaching the  required skills for success in a competitive industry.",

    courseObjectives: [
      "Demonstrate communication skills and professional behavior.",
      "Develop the core skills of working in or building a spa business.",
    ],

    courseOutline: [
      { title: "Orientation", hours: 5},
      { title: "Soft Skills", hours: 15},
      { title: "Career Communications", hours: 10},
    ],

    courseBooks: [
      {
        name: "Basic Textbook (Fundamental and Foundations Textbook Bundle)", 
        price: 210.0,
        isbn: "9780357263792",
        note: ""
      },
      {
        name: "Basic Work Book (Fundamental and Foundations Workbook)", 
        price: 175.0,
        isbn: "9780357482841",
        note: ""
      },
    ],

    syllabiBooks: [
      {
        name: "Basic Textbook (Fundamental and Foundations Textbook Bundle)", 
        price: 210.0,
        isbn: "9780357263792",
        note: ""
      },
      {
        name: "Basic Work Book (Fundamental and Foundations Workbook)", 
        price: 175.0,
        isbn: "9780357482841",
        note: ""
      },
    ],
    
    courseTools: [
      {}
    ],

    courseCertifications: [
      {},
    ],

    otherAssociatedCosts: [
      {
        name: "Written state licensure exam", 
        price: 105.0, 
        note: " Paid to PROV" 
      },
      {
        name: "Practical state licensure exam", 
        price: 105.0, 
        note: " Paid to PROV" 
      },
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
      "Southwest Tech Master Esthetician Handbook 2025.pdf",
      "Program Orientation",
      "A Promise to Myself Agreement",
      "Foundations Chapter 1: Life Skills Reading and Workbook",
      "Personal !Mission Statement",
      "Foundations Chapter 2: Professional Image Reading and",
      "Workbook",
      "Design Your Estie",
      "Foundations Chapter 3: Communicating for Success Reading",
      "and Workbook",
      "Client Consult Form.pdf",
      "Client Consultation Scenarios",
      "Esthetics Chapter 1: Career Opportunities Reading and",
      "Workbook",
      "Foundations Chapter 10: The Beauty Business Reading and",
      "Workbook",
      "Vision Board",
      "Foundations End-of-Course Test",
    ]
  }
]

export default TEES1010;