// TESU 1022

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TESU1022 = [
  {
    id: 19002,
    programId: 1,
    courseNumber: "TESU 1022",
    courseName: "Microbiology and Infection Control",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 200.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "In the Microbiology and Infection Control course students will learn microbiology and the relationship to the practice of sterile technique, infection control, and aseptic principles in the operative setting.",

    courseObjectives: [
      "Correlate infection control in relation to microbiology, the diseases they cause, and procedures used to treat infections",
      "Analyze anatomy and physiology of microorganisms and the immune system",
      "Summarize disinfection and decontamination practices",
      "Identify biopsychosocial needs of the patient and the process of death and dying",
      "Discuss the history and pioneers of microbiology",
    ],

    courseOutline: [
      { title: "The Lymphatic and Immune Systems", hours: 18},
      { title: "The Endocrine System", hours: 18},
      { title: "Diagnostic Procedures and Preventing Perioperative Disease", hours: 18},
      { title: "Final Exam", hours: 6},
    ],

    courseBooks: [
      {},
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
        termLabel: "",
        startDate: "03/03/2026",
        endDate: "03/26/2026",
        Monday: "11:00 AM - 3:00 PM",
        Tuesday: "11:00 AM - 3:00 PM",
        Wednesday: "11:00 AM - 3:00 PM",
        Thursday: "11:00 AM - 3:00 PM",
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
      "TESU 1022 Syllabi- UPDATE",
      "Chapter 15 Anatomy/Physiology",
      "Textbook Reading",
      "Chapter 15 Read It: The Lymphatic and Immune Systems",
      "Assignments",
      "Chapter 15 Check Your Understanding: The Lymphatic Circulatory System",
      "15.1 Labeling: Vessels and Organs of the Lymphatic System",
      "Study",
      "Chapter 15 Summary Outline: The Lymphatic Circulatory System",
      "Chapter 15 Flashcards: The Lymphatic Circulatory System",
      "Chapter 15 PowerPoint: The Lymphatic Circulatory System",
      "Chapter 7 Medical Terminology",
      "Textbook Reading",
      "Read Chapter 7 The Lymphatic and Immune Systems",
      "Assignments",
      "Check Your Understanding 7.1 Word Part Mastery",
      "Check Your Understanding 7.1 Building Terms",
      "Check Your Understanding 7.1 Structures and Functions",
      "Check Your Understanding 7.2 Word Part Mastery",
      "Check Your Understanding 7.2 Building Terms",
      "Check Your Understanding 7.3 Word Part Mastery",
      "Check Your Understanding 7.3 Building Terms",
      "Study",
      "Chapter 7 Flashcards",
      "Chapter 7 Lecture Notes",
      "Chapter 7 Memory Game",
      "In Class Assignments",
      "Lymphatic System Assignment",
      "In Class lectures",
      "Chapter 15 Lymphatic System PowerPoint",
      "Chapter 7 Medical Terminology PowerPoint",
      "Quizzes",
      "TESU 1022 Module 1",
      "Module 1 Quiz· Requires Respondus LockDown Browser",
      "Chapter 12 Anatomy/Physiology",
      "Textbook Reading",
      "Chapter 12 Read It: The Endocrine System",
      "Assignments",
      "12.2 Labeling: Endocrine Organ",
      "12.3 Labeling: Posterior View of the Thyroid and Parathyroid",
      "12.5 Labeling: Pancreas",
      "Chapter 12 Practice It: The Endocrine System",
      "Study",
      "Chapter 12 Summary Outline: The Endocrine System",
      "Chapter 12 Flashcards: The Endocrine System",
      "Chapter 12 PowerPoint: The Endocrine System",
      "Chapter 14 Medical Terminology",
      "Textbook Reading",
      "Read Chapter 14 The Endocrine System",
      "Assignments",
      "Check Your Understanding 14.1 Word Part Mastery",
      "Check Your Understanding 14.1 Building Terms",
      "14.1 Image Labeling",
      "Check Your Understanding 14.2 Word Part Mastery",
      "Check Your Understanding 14.2 Building Terms",
      "Check Your Understanding 14.3 Building Terms",
      "Check Your Understanding 14.3 Vocabulary",
      "Study",
      "Chapter 14 Flashcards",
      "Chapter 14 lecture Notes",
      "Chapter 14 Memory Game",
      "In Class Assignments",
      "In Class lectures",
      "Chapter 12 Anatomy/ Physiology PowerPoint",
      "Chapter 14 Medical Terminology PowerPoint",
      "Quizzes",
      "Module 2 Quiz- Requires Respondus LockDown Browser",
      "Chapter 6 Surgical Technology",
      "Textbook Reading",
      "Chapter06 Read It: Principles of Microbiology",
      "Assignments",
      "Chapter 06 Opening Case Study: Principles of Microbiology",
      "Chapter 06 True or False Exercise",
      "Study",
      "Chapter 06 PowerPoints: Principles of Microbiology",
      "Chapter 06 Flashcards: Principles of Microbiology",
      "Chapter 06 Questions for Further Study: Principles of Microbiology",
      "Chapter 06 Matching Exercise 6.01",
      "Chapter06 Matching Exercise 6.02",
      "Chapter 06 Select the Co1Tect Answer 6.03",
      "Chapter06 Fill in the Blank 6.04",
      "Textbook Reading",
      "Chapter 07 Read It: Surgical Asepsis and Sterility: Best Practices and Techniques",
      "Chapter 07 Videos: Surgical Asepsis and Sterility: Best Practices and Techniques",
      "Assignments",
      "Chapter 07 Opening Case Study: Surgical Asepsis and Sterility: Best Practices and Techniques",
      "Chapter 07 Part II Case Study: Surgical Asepsis and Sterility: Best Practices and Techniques",
      "Chapter 07 Part I ll Case Study: Surgical Asepsis and Sterility: Best Practices and Techniques",
      "Chapter 07 Part IV Case Study: Surgical Asepsis and Sterility: Best Practices and Techniques",
      "Chapter 07 Closing Case Study: Surgical Asepsis and Sterility: Best Practices and Techniques",
      "Chapter 07 True or False Exercise",
      "Chapter 07 Short Answer Exercise",
      "Chapter 07 Review: Surgical Asepsis and Sterility: Best Practices and Techniques",
      "Study",
      "Chapter 07 PowerPoints: Surgical Asepsis and Sterility: Best Practices and Techniques",
      "Chapter 07 Flashcards: Surgical Asepsis and Sterility: Best Practices and Techniques",
      "Chapter 07 Questions for Further Study: Surgical Asepsis and Sterility: Best Practices and Techniques",
      "Chapter 07 Matching Exercise 7 .01",
      "Chapter 07 Select the Co1Tect Answer 7 .02",
      "Chapter 07 Fill in the Blank 7.03",
      "Chapter 07 Fill in the Blank 7.04",
      "Chapter 14 Surgical Technology",
      "Textbook Reading",
      "Chapter 14 Read It: Diagnostic Procedures",
      "Assignments",
      "Chapter 14 Opening Case Study: Diagnostic Procedures",
      "Chapter 14 Closing Case Study: Diagnostic Procedures",
      "Chapter 14 Ordering Exercise",
      "Chapter 14 Review: Diagnostic Procedures",
      "Study",
      "Chapter 14 PowerPoints: Diagnostic Procedures",
      "Chapter 14 Flashcards: Diagnostic Procedures",
      "Chapter 14 Questions for Further Study: Diagnostic Procedures",
      "Chapter 14 Matching Exercise 14.01",
      "Chapter 14 Matching Exercise 14.02",
      "Chapter 14 Matching Exercise 14.03",
      "Chapter 14 Matching Exercise 14.04",
      "In Class Assignments",
      "SSI Essay",
      "In Class lectures",
      "Chapter 6/7 Surgical Technology PowerPoint",
      "Chapter 14 Surgical Technology PowerPoint",
      "Quizzes",
      "Module 3 Quiz• Requires Respondus lockOown Browser",
      "Final Exam- Requires Respondus LockDown Browser",
      "1022 Jeopardy",
      "End of Course Survey",
    ]
  }
]

export default TESU1022;