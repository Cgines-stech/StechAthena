// TESU 1010

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TESU1010 = [
  {
    id: 19001,
    programId: 1,
    courseNumber: "TESU 1010",
    courseName: "Introduction to Surgical Technology",
    courseCredits: 3,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 300.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Introduction to Surgical Technology course will introduce students to the surgical technology profession and will develop the fundamental concepts and principles necessary to successfully participate as a member of the surgical team.",

    courseObjectives: [
      "Analyze relevant medical terminology",
      "Describe the development of the Surgical Technology profession",
      "Analyze operating room environment, and identify commonly used equipment and instrumentation",
      "Evaluate Preoperative, Intraoperative, and Postoperative case preparation",
      "Assess surgical consents and patient identification",
      "Explain healthcare organization and describe team member roles and communication",
      "Discuss medical law and ethics, surgical conscience, and surgical documentation",
      "Identify and demonstrate the use of surgical attire throughout the perioperative setting",
    ],

    courseOutline: [
      { title: "Introduction to Surgical Technology and Medical Terminology", hours: 28},
      { title: "Legal Concepts, Ethical Issues, and the Surgical Patient", hours: 28},
      { title: "Patient Populations and Physical and Environment Safety Standards", hours: 28},
      { title: "Final Exam", hours: 6},
    ],

    courseBooks: [
      {
        name: "Cengage Unlimited Subscription", 
        price: 150.0,
        isbn: "Syllabus",
        note: "Cengage Unlimited Subscription 1 year"
      },
    ],

    syllabiBooks: [
      {
        name: "Cengage Unlimited Subscription", 
        price: 150.0,
        isbn: "",
        note: "Cengage Unlimited Subscription 1 year"
      },
    ],
    
    courseTools: [
      { name: "Digital Device (Chromebook)", price: 302.5, note: " Chromebook or comparable device - Available at STECH Bookstore, can be purchased elsewhere" },
      { name: "Scrubs", price: 100.0, note: " 1 Set of Embroidered Scrubs, 1 Embroidered Jacket" },
    ],

    courseCertifications: [
      {},
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
      {
        termLabel: "",
        startDate: "03/03/2026",
        endDate: "04/29/2026",
        Monday: "8:00 AM - 11:00 AM",
        Tuesday: "8:00 AM - 11:00 AM",
        Wednesday: "8:00 AM - 11:00 AM",
        Thursday: "8:00 AM - 11:00 AM",
        Friday: "",
        Saturday: "",
      }
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
      "Surgical Technology Policies & Orientation",
      "TESU 1010 Syllabi - UPDATE",
      "Chapter 1 Medical Terminology",
      "Textbook Reading",
      "Read Chapter 1 Introduction to Medical Terminology",
      "Chapter 1 Videos",
      "Assignments",
      "Check Your Understanding 1.1 Word Part Mastery",
      "Check Your Understanding 1.1 Vocabulary",
      "Check Your Understanding 1.1 Building Terms",
      "Check Your Understanding 1.2 Word Part Mastery",
      "Check Your Understanding 1.2 Building Terms",
      "Chapter 1 Surgical Technology",
      "Textbook Reading",
      "Chapter 01 Read It: Introduction to Surgical Technology",
      "Chapter01 Videos: Introduction to Surgical Technology",
      "Assignments",
      "Chapter01 Opening Case Study: Introduction to Surgical Technology",
      "Chapter01 Closing Case Study: Introduction to Surgical Technology",
      "Chapter 01 Fill in the Blank Exercise 01",
      "Chapter 01 Fill in the Blank Exercise 02",
      "Chapter 01 Short Answer Exercise",
      "Chapter 01 Review: Introduction to Surgical Technology",
      "Study",
      "Chapter 01 PowerPoints: Introduction to Surgical Technology",
      "Chapter 01 Flashcards: Introduction to Surgical Technology",
      "Chapter 01 Questions for Further Study: Introduction to Surgical Technology",
      "Chapter 01 Matching Exercise 1.01",
      "Chapter 01 Matching Exercise 1.02",
      "Chapter 01 Select the Con'ect Answer Exercise 1.03",
      "Chapter 01 Fill in the Blank Exercise 1.04",
      "Chapter 12 Surgical Technology",
      "watch It The Non-Sterile Role of a Surgical Technologist",
      "watch It Introduction to Surgical Scrub",
      "Watch It Before Performing the Surgical Scrub",
      "Watch It Pre-Surgical Hand Wash",
      "Watch It Turning the Gown",
      "Watch It Gloving",
      "Watch It Skin Flora",
      "In Class Lectures",
      "Chapter 1 Medical Terminok>gy PowerPoint",
      "Chapter 1 Surgical Technology PowerPoint",
      "Chapter 12 Surgical Technology PowerPoint",
      "In Class Assignments",
      "In Class Medical Terminology Assignment",
      "In Class Surgical History Assignment",
      "Quizzes",
      "Medical Terminology Jeopardy",
      "Medical Terminology Quiz• Requires Respondus lockDown Browser",
      "Surgical Technology Jeopardy",
      "Module 1 Quiz• Requires Respondus LockDown Browser",
      "Chapter 3 Surgical Technology",
      "Textbook Reading",
      "Chapter 03 Read It: The Surgical Patient",
      "Assignments",
      "Chapter 03 Opening Case Study: The Surgical Patient",
      "Chapter 03 Closing Case Study: The Surgical Patient",
      "Chapter 03 Multiple choice Exercise",
      "Chapter 03 Select the CorTect Answer 02",
      "Chapter 03 Short Answer Exercise",
      "Chapter 03 Review: The Surgical Patient",
      "Study",
      "Chapter 03 PowerPoints: The Surgical Patient",
      "Chapter 03 Flashcards: The Surgical Patient",
      "Chapter 03 Questions for Further Study: The Surgical Patient",
      "Chapter03 Matching Exercise 3.01",
      "Chapter 03 Matching Exercise 3.02",
      "Chapter 03 Select the Co1Tect Answer Exercise 3.03",
      "Chapter 03 Fill in the Blank Exercise 3.04",
      "Chapter 2 Surgical Technology",
      "Textbook Reading",
      "Chapter 2 Read It: Legal Concepts, Risk Management, and Ethical Issues",
      "Chapter 2 Videos: Legal Concepts, Risk Management, and Ethical Issues",
      "Assignments",
      "Chapter 2 Opening Case Study: Legal Concepts, Risk Management. and Ethical Issues",
      "Chapter 2 Closing Case Study: Legal Concepts, Risk Management, and Ethical Issues",
      "Chapter 2 Short Answer Exercise",
      "Chapter 2 Review: l egal Concepts, Risk Management, and Ethical Issues",
      "Study",
      "Chapter 2 PowerPoints: Legal Concepts, Risk Management, and Ethical Issues",
      "Chapter 2 Flashcards: Legal Concepts, Risk Management, and Ethical Issues",
      "Chapter 2 Questions for Further Study: Legal Concepts, Risk Management, and Ethical Issues",
      "Chapter 2 Matching Exercise 2.01",
      "Chapter 2 Matching Exercise 2.02",
      "Chapter 2 Select the Correct Answer Exercise 2.03",
      "Chapter 2 Fill in the Blank Exercise 2.04",
      "In Class Assignments",
      "Religion/G.Jlture Comparison In Class assignment",
      "Ethical Issues In Class Assignment",
      "In Class lectures",
      "Chapter 3 Surgical Technology PowerPoint Pages 39•49",
      "Chapter 2 Surgical Technology PowerPoint",
      "Quizzes",
      "Instrument Pop Quiz Weeks 1-5",
      "TESU 1010 module 2 review",
      "Module 2 Quiz· Requires Respondus LockDown Browser",
      "Chapter 4 Surgical Technology",
      "Textbook Reading",
      "Chapter 04 Read It: Physical Environment and Safety Standards",
      "Assignments",
      "Chapter 04 Opening Case Study: Physical Environment and Safety Standards",
      "Chapter 04 Closing Case Study: Physical Environment and Safety Standards",
      "Chapter 04 Labeling Exercise",
      "Chapter 04 Review: Physical Environment and Safety Standards",
      "Study",
      "Chapter 04 PowerPoints: Physical Environment and Safety Standards",
      "Chapter 04 Flashcards: Physical Environment and Safety Standards",
      "Chapter 04 Questions for Further Study: Physical Environment and Safety Standards",
      "Chapter 04 Matching Exercise 4.01",
      "Chapter 04 Matching Exercise 4.02",
      "Chapter 04 Select the Correct Answer Exercise 4.03",
      "Chapter04 Fill in the Blank Exercise 4.04",
      "In Class Assignments",
      "Sharps Safety In Oass Assignment",
      "Hospital/ Facility Codes",
      "Special Population Presentation",
      "In Class lectures",
      "Chapter4 Surgical Technology PowerPoint",
      "Chapter 3 Surgical Technology PowerPoint Pages 49-65",
      "Quizzes",
      "Instrument Quiz Weeks 1-7",
      "Module 3 Quiz• Requires Respondus LockDown Browser",
      "Final Exam- Requires Respondus LockOown Browser",
      "Exam Prep Part 1",
      "Exam Prep Part 2",
      "End of Course Survey",
    ]
  }
]

export default TESU1010;