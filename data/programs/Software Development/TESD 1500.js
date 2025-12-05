// TESD 1500

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TESD1500 = [
  {
    id: 90004,
    programId: 1,
    courseNumber: "TESD 1500",
    courseName: "Database Development",
    courseCredits: 4,
    statewideAlignment: "Aligned",
    courseClockHours: 120,
    courseTuition: 380.00,
    courseFee: 0.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "Database Development provides students a fundamental introduction to database concepts and query languages used in database management systems. Students will design and implement simple databases, and utilize queries to retrieve, store, and update data in these databases.",

    courseObjectives: [
      "Recognize core database concepts.",
      "Describe database objects: data types, views and stored procedures.",
      "Utilize basic SQL to interact with databases.",
      "Explain data storage concepts: normalization; primary, foreign, and composite keys; and indexes.",
      "Use basic information assurance and database security concepts.",
    ],

    courseOutline: [
      { title: "Introduction to PHP", hours: 15},
      { title: "Data and Arrays", hours: 15},
      { title: "Strings and Functions", hours: 15},
      { title: "PHP Objects and Exceptions", hours: 15},
      { title: "Designing a Database", hours: 15},
      { title: "Creating a Database", hours: 15},
      { title: "Working with MYSQL", hours: 15},
      { title: "MYSQL and PHP", hours: 15},
    ],

    courseBooks: [
      {
        name: "PHP and MySQL Web Development, 5th Edition (Lifetime access)", 
        price: 61.0,
        isbn: "9780133038637",
        note: "Access Code"
      },
    ],

    syllabiBooks: [
      {
        name: "PHP and MySQL Web Development, 5th Edition (Lifetime access)", 
        price: 61.0,
        isbn: "9780133038637",
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
      "Remind App",
      "Submitting Assignments in Canvas",
      "Taking a Screenshot",
      "Writing Standards",
      "Orientation",
      "Syllabus Agreement",
      "UsingMAMP",
      "Chapter 1 Reading and Example",
      "Starting your own Website",
      "Checkpoint Meeting Module 1",
      "Student Acknowledgement Statement Module 1",
      "Chapter 2 Reading and Example",
      "Working on your own Website",
      "Chapter ::i Keaaing an Arrays on your own Website",
      "Checkpoint Meeting Module 2",
      "Student Acknowledgement Statement Module 2",
      "Chapter 4 Reading and Example",
      "Adding a Customer Feedback page",
      "Chapter 5 Reading and Example",
      "Using f unctions on your own Website",
      "Checkpoint Meeting Module 3",
      "Student Acknowledgement Statement Module 3",
      "Chapter 6 Reading and Example",
      "Using a class and objects for pages",
      "Chapter 7 Reading and Example",
      "Exception Handling on your own Website",
      "Checkpoint Meeting Module 4",
      "Student Acknowledgement Statement Module 4",
      "Chapter 8 Reading",
      "Planning out your database",
      "Checkpoint Meeting Module 5",
      "Student Acknowledgement Statement Module 5",
      "Using phpMyAdmin",
      "Chapter 9 Reading and Example",
      "Creating your own database",
      "Checkpoint Meeting Module 6",
      "Student Acknowledgement Statement Module 6",
      "Chapter 10 Reading and Example",
      "Editing your own database",
      "Checkpoint Meeting Module 7",
      "Student Acknowledgement Statement Module 7",
      "Chapter 11 Reading and Example",
      "Incorporating MYSQL with PHP",
      "End of Course Survey",
      "Course Completion Checkpoint Meeting",
      "End of Course Student Acknowledgement Statement",
    ]
  }
]

export default TESD1500;