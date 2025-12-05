// TESD 1100

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TESD1100 = [
  {
    id: 90003,
    programId: 1,
    courseNumber: "TESD 1100",
    courseName: "Client-Side Web Development",
    courseCredits: 4,
    statewideAlignment: "Aligned",
    courseClockHours: 120,
    courseTuition: 380.00,
    courseFee: 0.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "Client-Side Web Development provides experience developing websites using current standards and technologies. Students will be exposed to modern scripting and the Document Object Model (DOM) of web pages. Students will create functional websites, making them interactive and dynamic.",

    courseObjectives: [
      "Implement common HTML tags in a functional coding format to create a Web site using current standards and technologies.",
      "Demonstrate the ability to upload and publish a web page on a web server.",
      "Investigate web scripting and the HTML DOM / Manipulate the DOM using web scripts.",
      "Use web hosting service to deploy a website.",
      "Explore best practices in modern responsive website design.",
    ],

    courseOutline: [
      { title: "Introduction to HTML", hours: 15},
      { title: "Introduction to CSS", hours: 15},
      { title: "Page Layouts", hours: 15},
      { title: "CSS and Graphics", hours: 15},
      { title: "Mobile Websites and Tables", hours: 15},
      { title: "Web Forms and Multimedia", hours: 15},
      { title: "Advanced Javascript", hours: 15},
      { title: "Final Project", hours: 15},
    ],

    courseBooks: [
      {
        name: "New Perspectives on HTML 5 and CSS: Comprehensive Version, 8th Ed (Lifetime Access)", 
        price: 110.0,
        isbn: "9780357107270",
        note: "Access Code"
      },
    ],

    syllabiBooks: [
      {
        name: "New Perspectives on HTML 5 and CSS: Comprehensive Version, 8th Ed (Lifetime Access)", 
        price: 110.0,
        isbn: "9780357107270",
        note: "Access Code"
      },
    ],
    
    courseTools: [
      {}
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
      "Course Introduction and Standards",
      "Meet Your Instruction Team",
      "Rules of the Lab",
      "CS Code of Conduct Policy",
      "Submitting Assignments in Canvas",
      "Taking a Screenshot",
      "Programming Standards",
      "GitHub Standards",
      "Writing Standards",
      "Exam Standards",
      "Orientation",
      "Syllabus Agreement",
      "Module 1 Introduction and Competencies",
      "Chapter 1 Reading and Tutorial",
      "Coding Challenge 1-1",
      "Coding Challenge 1-2",
      "Debug Challenge 1-1",
      "Case Problem 1-1",
      "Chapter 1 Exam",
      "Checkpoint Meeting Module 1",
      "Student Acknowledgement Statement Module 1",
      "Module 2 Introduction and Competencies",
      "Chapter 2 Reading and Tutorial",
      "Coding Challenge 2-1",
      "Coding Challenge 2-2",
      "Debug Challenge 2-1",
      "Case Problem 2-1",
      "Chapter 2 Exam",
      "Checkpoint Meeting Module 2",
      "Student Acknowledgement Statement Module 2",
      "Module 3 Introduction and Competencies",
      "Chapter 3 Reading and Tutorial",
      "Coding Challenge 3-1",
      "Coding Challenge 3-2",
      "Debug Challenge 3-1",
      "Case Problem 3-1",
      "Chapter 3 Exam",
      "Checkpoint Meeting Module 3",
      "Student Acknowledgement Statement Module 3",
      "Module 4 Introduction and Competencies",
      "Chapter 4 Reading and Tutorial",
      "Coding Challenge 4-1",
      "Coding Challenge 4-2",
      "Debug Challenge 4-1",
      "Case Problem 4-1",
      "Chapter 4 Exam",
      "Checkpoint Meeting Module 4",
      "Student Acknowledgement Statement Module 4",
      "Module 5 Introduction and Competencies",
      "Chapter 5 Reading and Tutorial",
      "Coding Challenge 5-1",
      "Debug Challenge 5-1",
      "Chapter 5 Exam",
      "Chapter 6 Reading and Tutorial",
      "Coding Challenge 6-2",
      "Case Problem 6-1",
      "Chapter 6 Exam",
      "Checkpoint Meeting Module 5",
      "Student Acknowledgement Statement Module 5",
      "Module 6 Introduction and Competencies",
      "Chapter 7 Reading and Tutorial",
      "Coding Challenge 7-1",
      "Debug Challenge 7-1",
      "Chapter 7 Exam",
      "Chapter 8 Reading and Tutorial",
      "Coding Challenge 8-2",
      "Case Problem 8-1",
      "Chapter 8 Exam",
      "Checkpoint Meeting Module 6",
      "Student Acknowledgement Statement Module 6",
      "Module 7 Introduction and Competencies",
      "Chapter 9 Reading and Tutorial",
      "Coding Challenge 9-1",
      "Debug Challenge 9-1",
      "Chapter 9 Exam",
      "Chapter 10 Reading and Tutorial",
      "Coding Challenge 10-2",
      "Case Problem 10-1",
      "Chapter 10 Exam",
      "Checkpoint Meeting Module 7",
      "Student Acknowledgement Statement Module 7",
      "Module 8 Introduction and Competencies",
      "Final Project: Proposal",
      "Final Project: Pitch",
      "Final Project: Code",
      "End of Course Survey",
      "Course Completion Checkpoint Meeting",
      "End of Course Student Acknowledgement Statement",
    ]
  }
]

export default TESD1100;