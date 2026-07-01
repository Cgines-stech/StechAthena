// TEPT 1110

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEPT1110 = [
  {
    id: 17004,
    programId: 1,
    courseNumber: "TEPT 1110",
    courseName: "Institutional Pharmacy Practice",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 160.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This course teaches the skills necessary for working in institutional pharmacy settings. Students will utilize hands-on skill simulations of institutional pharmacy responsibilities  including sterile compounding and aseptic technique, hazardous drug management, unit dosing and dispensing, patient safety, and communication with hospital staff.",

    courseObjectives: [
      "Practice and adhere to effective infection control procedures.",
      "Prepare compounded sterile preparations per applicable, current United States Pharmacopeia chapters.",
      "Demonstrate knowledge of anatomy, physiology and pharmacology, and terminology relevant to the pharmacy technician’s role.",
      "Perform essential duties and functions of a pharmacy technician in an institutional setting.",
      "Describe the different methods of drug delivery and administration within institutional settings.",
      "Practice patient safety and communication with hospital staff.",
    ],

    courseOutline: [
      { title: "Institutional Pharmacy Practice", hours: 30},
      { title: "Institutional Pharmacy Pharmacology", hours: 30},
      { title: "Institutional Pharmacy Labs", hours: 30},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {
        name: "The Pharmacy Technician: A Comprehensive Approach, 5th ed.", 
        price: 150.0,
        isbn: "9798214113739",
        note: "Cengage Unlimited Subscription"
      }
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
      "Weekly Check In LINK",
      "Lab Scheduling LINK",
      "Hybrid Zoom LINK",
      "Pronounce Activites",
      "Appedices",
      "Student Test Prep User Guide for Learners",
      "Student Test Prep",
      "FILL IN: Course Timeline",
      "LAB: Daily Prescriptions (TEPT 1110)",
      "READ: Chapter 11",
      "PowerPoint: Chapter 11",
      "Study Flashcards: Chapter 11",
      "Practice Exam: Chapter11",
      "Review: Chapter 11",
      "Activity: Know Your Inventory",
      "Exam: Chapter 11",
      "If Needed - Test Corrections: Chapter 11",
      "If Needed - Remediation Exam - Chapter 11",
      "READ: Chapter 13",
      "PowerPoint: Chapter 13",
      "Study Flashcards: Chapter 13",
      "Practice Exam: Chapter 13",
      "Review: Chapter 13",
      "Activity: Play a Pharmacy Game",
      "Exam: Chapter 13",
      "If Needed - Test Corrections: Chapter 13",
      "If Needed - Remediation Exam: Chapter 13",
      "READ: Chapter 15",
      "PowerPoint: Chapter 15",
      "Study Flashcards: Chapter 15",
      "Practice Exam: Chapter 15",
      "Review: Chapter 15",
      "LAB: Garbing According to USP Chapter <797> Standards",
      "LAB: Aseptic Hand Washing",
      "LAB: Cleaning the Hood",
      "Exam: Chapter 15- Requires Respondus LockDown Browser",
      "If Needed - Test Corrections: Chapter 15",
      "If Needed - Remediation Exam: Chapter 15",
      "READ: Chapter 19",
      "PowerPoint: Chapter 19",
      "Study Flashcards: Chapter 19",
      "Practice Exam: Chapter 19",
      "Review: Chapter 19",
      "Activity: Professional Development (Goals)",
      "Exam: Chapter 19",
      "If Needed - Test Corrections: Chapter 19",
      "If Needed - Remediation Exam: Chapter 19",
      "Complete Module 1 - TEPT 1110",
      "READ: Chapter 20",
      "PowerPoint: Chapter 20",
      "Study Flashcards: Chapter 20",
      "Practice Exam: Chapter 20",
      "Review: Chapter 20",
      "Filling a 24-Hour Medication Cart - Lab:21",
      "Activity: Drug Interactions",
      "Exam: Chapter 20",
      "If Needed - Test Corrections: Chapter 20",
      "If Needed - Remediation Exam: Chapter 20",
      "READ: Chapter 21",
      "PowerPoint: Chapter 21",
      "Study Flashcards: Chapter 21",
      "Practice Exam: Chapter 21",
      "Review: Chapter 21",
      "Charging and Refilling a Crash Cart - Lab 25",
      "Video Quiz: Parata Max & Professionalism at Township",
      "Exam: Chapter 21",
      "If Needed - Test Corrections: Chapter 21",
      "If Needed - Remediation Exam: Chapter 21",
      "READ: Chapter 22",
      "PowerPoint: Chapter 22",
      "Study Flashcards: Chapter 22",
      "Practice Exam: Chapter 22",
      "Review: Chapter 22",
      "Exam: Chapter 22",
      "If Needed - Test Corrections: Chapter 22",
      "If Needed - Remediation Exam: Chapter 22",
      "READ: Chapter 23",
      "PowerPoint: Chapter 23",
      "Study Flashcards: Chapter 23",
      "Practice Exam: Chapter 23",
      "Review: Chapter 23",
      "Medication Therapy Management - Lab 29 ",
      "Medication Reconciliation - Lab 31 ",
      "Exam: Chapter 23",
      "If Needed - Test Correction: Chapter 23",
      "If Needed - Remediation Exam: Chapter 23",
      "READ: Chapter 24",
      "PowerPoint: Chapter 24",
      "Study Flashcards: Chapter 24",
      "Practice Exam: Chapter 24",
      "Review: Chapter 24",
      "Exam: Chapter 24",
      "If Needed - Test Corrections: Chapter 24",
      "If Needed - Remediation Exam: Chapter 24",
      "Complete Module 2 - TEPT 1110",
      "READ: Chapter 35",
      "PowerPoint: Chapter 35",
      "Study Flashcards: Chapter 35",
      "Practice Exam: Chapter 35",
      "Review: Chapter 35",
      "LAB: Unit Dose Packager",
      "LOOK UP: Continuing Education Programs",
      "Drug Flashcards: For the Ears. Eyes, and Nose",
      "Drug Flashcards Quiz: For the Ears. Eyes, and Nose",
      "If Needed - Quiz Corrections: Ears, Eyes, and Nose",
      "If Needed -  Remediation Quiz: Ears, Eyes, and Nose",
      "Exam: Chapter 35",
      "If Needed - Quiz Corrections: Ears, Eyes, and Nose",
      "If Needed -  Remediation Quiz - Ears, Eyes, and Nose",
      "READ: Chapter 36",
      "PowerPoint: Chapter 36",
      "Study Flashcards: Chapter 36",
      "Practice Exam: Chapter 36",
      "Practice Drug Cards Quiz - Integumentary System",
      "Review: Chapter 36",
      "LAB: Preparing Syringes Using a Repeater Pump",
      "Drug Flashcards: Integumentary System",
      "Drugs Flashcards Quiz - Integumentary System",
      "If Needed - Quiz Corrections: Integumentary System",
      "If Needed -  Remediation Quiz: Integumentary System",
      "Exam: Chapter 36",
      "If Needed -  Test Corrections: Chapter 36",
      "If Needed -  Remediation Exam: Chapter 36",
      "CabRx - 1.1 Inventory Report",
      "CabRx - 1.1 Questions (OPEN BOOK)",
      "CabRx - 1.3 CII Report",
      "CabRx - 1.3 Questions (OPEN BOOK)",
      "CabRx - 1.6 Empty Pockets Report",
      "CabRx - 1.6 Questions (OPEN BOOK)",
      "CabRx - 1.8 Discrepancies Report & Out Dates",
      "CabRx - 1.8 Questions (OPEN BOOK)",
      "CabRx - 1.9 Assign & Load",
      "PASS OFF - NonSterile Compounding Skills",
      "End of Course Conversation",
      "Complete Module 3 - TEPT 1110",
      "End of Course Survey",
    ]
  }
]

export default TEPT1110;