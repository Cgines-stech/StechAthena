// PN 1031

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const PN1031 = [
  {
    id: 80008,
    programId: 1,
    courseNumber: "PN 1031",
    courseName: "Introductory Mental Health Nursing",
    courseCredits: 1,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 20.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      'Introductory Mental Health Nursing provides an introduction to mental health nursing which will require you to examine human dynamics and adaptive/maladaptive  responses to internal and external stressors. While in this course you will be provided a summary of foundational psychological theory, an overview of current  psychotherapeutic treatment modalities, and common mental health disorders. The professional standards of QSEN provide the context for this course to direct learning and  provide meaningful purpose as you prepare to care compassionately for this vulnerable population. Upon completion of this course you will be able to identify the  professional role of LPNs in providing compassionate care for those with selected psychiatric disorders.',

    courseObjectives: [
      "Examine the legal, ethical, and historical aspects of mental health nursing (EPSLO # 1, 2, 3, 4, 5).",
      "Define the essential components of the nurse-client relationship in mental health nursing (EPSLO # 1, 2, 3, 4, 5).",
      "Explain the nursing process in the care of the client with mental health alterations (EPSLO # 1, 2, 3, 4, 5).",
      "Discuss screening tools for mental health alterations (EPSLO # 1, 2, 3, 4, 5).",
      "Define characteristics of various mental health alterations (EPSLO # 1, 2, 3, 4, 5).",
      "Relate the aspects of National Patient Safety Goals (NPSG) to the mental health client (EPSLO # 1, 2, 3, 4, 5).",
      "Identify mental health concerns on a life continuum, including children, adolescents, and adult populations (EPSLO # 1, 2, 3, 4, 5).",
      "Explain the dynamics of anger, violence, and crisis as it applies to mental health (EPSLO # 1, 2, 3, 4, 5).",
    ],

    courseOutline: [
      { title: "Introduction to Mental Health and Mental Illness", hours: 3},
      { title: "Mental Health Care", hours: 3},
      { title: "Fundamental Nursing Roles in Mental Health Nursing", hours: 3},
      { title: "Specific Psychiatric Disorders", hours: 3},
      { title: "Age-Specific Disorder and Issues", hours: 3},
      { title: "Introductory Mental Health Nursing Final", hours: 3},
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
      {
        startDate: "10-10-2025",
        endDate: "12-12-2025",

        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",

        Friday: "9:00 AM - 1:00 PM",

        Saturday: "",
      },
      {
        startDate: "03-06-2026",
        endDate: "05-08-2026",

        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",

        Friday: "9:00 AM - 1:00 PM",
        
        Saturday: "",
      },
    ],

    instructorContactInformation: [
      { 
        name: "Preston Dye",
        title: "Instructor",
        email: "pdye@stech.edu",
        phone: "",
        office: "",
        instructorNote: ``},
    ],

    course_Policies: [
      {},
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "Syllabus Agreement",
      "Class Rubrics",
      "Course Introduction",
      "APA Template",
      "Sign up for Prep U",
      "Mental Health Agenda Spring 2024.docx",
      "Participation",
      "Objectives - Day 1",
      "Reading - Day 1",
      "Ticket to Class",
      "Ticket to Class - Day 1",
      "Lecture Materials",
      "Chapter 1 Powerpoint",
      "Chapter 2 Powerpoint",
      "Chapter 3 Powerpoint",
      "Weekly Assignments",
      "Why Psych",
      "Participation",
      "Objectives - Day 2",
      "Reading - Day 2",
      "Ticket to Class",
      "Ticket to Class Day 2",
      "Lecture Materials",
      "Chapter 4 Powerpoint",
      "Chapter 5 Powerpoint",
      "Chapter 6 Powerpoint",
      "Weekly Assignments",
      "Reading Guide Worksheet CH 1-6",
      "Tests/Quizzes",
      "Test 1-6- Requires Respondus LockDown Browser",
      "Test 1 Stuldy Guide",
      "Participation",
      "Objectives - Day 3",
      "Reading - Day 3",
      "Ticket to ·Class",
      "Ticket to Class - Day 3",
      "Lecture Materials",
      "Chapter 7 Powerpoint",
      "Chapter 8 Powerpoint",
      "Weekly Assignments",
      "Reading Guide Day 3",
      "Effective Communication Reflection",
      "Communication Case Studies",
      "Communication Case Studies Answers",
      "Tests/Quizzes",
      "Test 7 and 8- Requires Respondus LockDown Browser",
      "Test 2 Stl!ldy Guide",
      "Particioation",
      "Objectives- Day 4",
      "Reading - Day 4",
      "Objectives- Day 5",
      "Reading - Day 5",
      "Objectives- Day 6",
      "Reading - Day 6",
      "Ticket to Class",
      "Ticket to Class - Day 4",
      "Ticket to Class - Day 5",
      "Ticket to Class - Day 6",
      "Lecture Materials",
      "Chapter 9 Powerpoint",
      "Chapter 10 Powerpoint",
      "Chapter 11 Powerpoint",
      "Chapter 12 Powerpoint",
      "Chapter 13 Powerpoint",
      "Chapter 14 Powerpoint",
      "Chapter 15 Powerpoint",
      "Chapter 16 l'owerpoint",
      "Chapter 17 Powerpoint",
      "Weekly Assignments",
      "Reading Guide Part 1",
      "Reading Guide Part 2",
      "Drug Cards Week 4-6",
      "Case Studies",
      "Tests/Quizzes",
      "Study Guide Module 4 Test Part 1",
      "Study Guide Module 4 Test Part 2",
      "Test 9-13- Requires Respondus LockDown Browser",
      "Test CH 1l4-17- Requires Respondus LockDown Browser",
      "Participation",
      "Objectives - Day 7",
      "Reading - Day 7",
      "Ticket to Class",
      "Ticket to Class - Day 7",
      "Lecture Materials",
      "Chapter 18 Powerpoint",
      "Chapter 19 Powerpoint",
      "Weekly Assignments",
      "Prepare for all Finals",
      "Test/Quiz",
      "Chapter 18 and 19 Quiz",
      "18 and 19 Study Guide",
      "Participation",
      "Objectives - Day 8",
      "Ticket to ·Class",
      "Ticket to Class - Day 8",
      "Weekly Assignments",
      "End of Course Feedback Submission",
      "Student Feedback",
      "End of Course Survey",
    ]
  }
]

export default PN1031;