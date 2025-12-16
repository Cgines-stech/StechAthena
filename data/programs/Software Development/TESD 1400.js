// TESD 1400

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TESD1400 = [
  {
    id: 90001,
    programId: 1,
    courseNumber: "TESD 1400",
    courseName: "Computer Programming",
    courseCredits: 4,
    statewideAlignment: "Aligned",
    courseClockHours: 120,
    courseTuition: 380.00,
    courseFee: 0.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "In Computer Programming, students will use critical thinking, and problem-solving skills as they practice basic programming constructs including: selection, repetition, classes and methods, string processing, and array structures. Students will be introduced to version control on their code projects.",

    courseObjectives: [
      "Describe object-oriented programming.",
      "Practice using procedures, methods and functions.",
      "Create and use classes.",
      "Apply structured programming techniques.",
      "Utilize Version Control.",
    ],

    courseOutline: [
      { title: "Programming Logic", hours: 4},
      { title: "Introduction to Programming", hours: 11},
      { title: "Selections", hours: 15},
      { title: "Selection Structures and APIs", hours: 15},
      { title: "Repetition Structures and Strings", hours: 15},
      { title: "Methods", hours: 15},
      { title: "Single and Multidimensional Arrays", hours: 15},
      { title: "Version Control Management", hours: 15},
      { title: "Final Project", hours: 15},
    ],

    courseBooks: [
      {
        name: "Introduction to Java Programming: Comprehensive Version, 11th Ed (Lifetime access)", 
        price: 105.0,
        isbn: "9780134700144",
        note: "Access Code"
      },
    ],

    syllabiBooks: [
      {
        name: "Introduction to Java Programming: Comprehensive Version, 11th Ed (Lifetime access)", 
        price: 105.0,
        isbn: "9780134700144",
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
      "Learn about Eye Strain",
      "Remind App",
      "Submitting Assignments in Canvas",
      "Taking a Screenshot",
      "Writing Standards",
      "Orientation",
      "Orientation Review",
      "Syllabus Agreement",
      "Course References",
      "Student Data Files",
      "Check Exercises",
      "Reading: Introduction",
      "Truth Table Introduction",
      "Logical Operators Worksheet",
      "Catching Errors Worksheet",
      "Checkpoint Meeting Module 1",
      "Student Acknowledgement Statement Module 1",
      "Book Videos",
      "Chapter 1 - Reading Day",
      "Skills Check 1",
      "Chapter 2 - Reading Day",
      "ScannerExample.java",
      "Skills Check 2",
      "Exercise 2-11",
      "Exercise 2-13",
      "Module 2 Exam",
      "Checkpoint Meeting Module 2",
      "Student Acknowledgement Statement Module 2",
      "Module 3 Introduction and Competencies",
      "Chapter 3 - Reading Day",
      "Exercise 3-12: Planning",
      "Exercise 3-14: Planning",
      "Exercise 3-17: Planning",
      "Exercise 3-21: Planning",
      "Skills Check 3",
      "Skills Check 4",
      "Exercise 3-14: Implementation",
      "Exercise 3-17: Implementation",
      "Exercise 3-21: Implementation",
      "Module 3 Exam",
      "Checkpoint Meeting Module 3",
      "Student Acknowledgement Statement Module 3",
      "Module 4 Introduction and Competencies",
      "Chapter 4 - Reading Day",
      "Skills Check 5",
      "Exercise 4-8: Planning",
      "Exercise 4-10: Planning",
      "Exercise 4-22: Planning",
      "Exercise 4-5: Implementation",
      "Skills Check 6",
      "Exercise 4-10: Implementation",
      "Module 4 Exam",
      "Checkpoint Meeting Module 4",
      "Student Acknowledgement Statement Module 4",
      "Module 5 Introduction and Competencies",
      "Chapter 5 - Reading Day",
      "Exercise 5-1: Planning",
      "Skills Check 7",
      "Exercise 5-11: Planning",
      "Exercise 5-30: Planning",
      "Skills Check 8",
      "Exercise 5-3: Implementation",
      "Exercise 5-11: Implementation",
      "Exercise 5-30: Implementation",
      "Module 5 Exam",
      "Checkpoint Meeting Module 5",
      "Student Acknowledgement Statement Module 5",
      "Module 6 Introduction and Competencies",
      "Chapter 6 - Reading Day",
      "Exercise 6-3: Planning",
      "Skills Check 9",
      "Exercise 6-37: Planning",
      "Skills Check 10",
      "Exercise 6-3: Implementation",
      "Exercise 6-17: Implementation",
      "Exercise 6-37: Implementation",
      "Module 6 Exam",
      "Checkpoint Meeting Module 6",
      "Student Acknowledgement Statement Module 6",
      "Module 7 Introduction and Competencies",
      "Chapter 7 - Reading Day",
      "Exercise 7-9",
      "Skills Check 11",
      "Exercise 7-23",
      "Chapter 8 - Reading Day",
      "Skills Check 12",
      "Exercise 8-9",
      "Exercise 8-37",
      "Module 7 Exam",
      "Checkpoint Meeting Module 7",
      "Student Acknowledgement Statement Module 7",
      "Module 8 Introduction and Competencies",
      "Online Book",
      "Online Reading",
      "Video Tutorials",
      "Appendix B Reading",
      "OSX Command Line Cheatsheet",
      "Windows Command Line Cheatslheet",
      "Exercise B-1",
      "Reading 1",
      "Exercise 1-1",
      "Chapter 1 Reading: Continued",
      "Exercise 1-2",
      "Exercise 1-3",
      "Reading 2",
      "Exercise 2-1",
      "Chapter 2 Reading: Continued",
      "Exercise 2·2",
      "Reading 3",
      "Chapter 3 Writeup",
      "Creating a GitHub Account",
      "VIDEO: Git Review and GitHub Intro",
      "Int roduction to GitHub",
      "Mastering Markdown",
      "Communicating Using Markdowrn",
      "VIDEO: GitHub Desktop",
      "Exercise 3-1",
      "Exercise 3-2",
      "Exercise 3-3",
      "Checkpoint Meeting Module 8",
      "Student Acknowledgement Statement Module 8",
      "Module 9 Introduction and Competencies",
      "Final Project: Proposal",
      "Final Project: Pitch",
      "Final Project: Code",
      "End of Course Survey",
      "Course Completion Checkpoint Meeting",
      "End of Course Student Acknowledgement Statement",
    ]
  }
]

export default TESD1400;