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
      {}
    ],

    instructorContactInformation: [
      {}
    ],

    course_Policies: [
      {}
    ],

    courseAssignmentsandAsssessments: [
      "WEEKLY CHECK IN LINK",
      "eTextbook: Advanced Pharmacy Practice",
      "Flashcards: General Pharmacy Terminology",
      "Flashcards: Pharmacy Abbreviations",
      "Flashcards: Drug Names and Classifications",
      "Flashcards: Look-Alike and Sound-Alike Drugs",
      "Flashcards: Pharmacy Law",
      "Flashcards: Indications",
      "Flashcards: Vitamins and Minerals",
      "Flashcards: Disease Processes",
      "Flashcards: Pharmacy Calculations",
      "Appendix B: Top Drugs by Prescri ptions Dispensed (2012)",
      "Appendix C: Common Look-alike and Sound-alike Drugs",
      "Appendix D: Classifications of Drug Schedules in the United",
      "States and Canada",
      "Appendix E: Drug Dosage Calculations",
      "Appendix F: Immunizations",
      "Appendix G: Specific Antidotes",
      "Appendix H: Reporting of Medical Errors",
      "Appendix I: Drug/Food Interactions",
      "Appendix J: Drugs That Should Not Be Crushed",
      "Appendix K: Drug Identification Guide",
      "Sterile Compounding & Institutional! Skills List",
      "IVRoomSOPs",
      "Stay on Track - Course Timeline",
      "Daily Prescriptions forTEPT 1110",
      "Chapter 11: Hospital Pharmacy",
      "CH 11 - Hospital Pharmacy PPTX",
      "Chapter 11 Practice Exam",
      "Activity #1",
      "Chapter 11 Final Exam- Requires Respondus LockDown",
      "Browser",
      "Chapter 15: Aseptic Technique and Sterile Compounding",
      "Ch 15 - Aseptic Technique & Steri le Compunding.pptx",
      "Chapter 15 Practice Exam",
      "IV Compounding Demo",
      "Garbing According to USP Chapter <797> Standards - Lab 39",
      "Aseptic Hand Washing - Lab 40",
      "Hood Cleaning- Lab 41",
      "Chapter 15 Final Exam- Requires Respondus LockDown",
      "Browser",
      "Chapter 19: Drug Actions and Interactions",
      "CH 19 - Drug Actions and Interactions PPTX",
      "Chapter 19 Learning Lab 1: Drug Forms and",
      "Pharmacokinetics (ONLYTRYTWICE)",
      "Chapter 19 Practice Exam",
      "Activity#2",
      "Chapter 19 Final Exam- Requires Respondus LockDown",
      "Browser",
      "Complete Module 1-TEPT 1110",
      "PASS OFF - NonSterile Compounding Skills",
      "How to Pronounce t he Drugs - Youliube",
      "Chapter 27: Therapeutic Drugs for the Digestive System",
      "CH 27 - Drugs for Digestive System.pptx",
      "Drugs 12 - Digestive System",
      "Chapter 27 Learning Lab 1: Gastrointestinal Drugs (ONLY",
      "TRY TWICE)",
      "Chapter 27 Practice Exam",
      "Drugs 12 QUIZ - Digestive System- Requires Respondus",
      "LockDown Browser",
      "Chapter 27 Final Exam- Requires Respondus LockDown",
      "Browser",
      "Chapter 28: Therapeutic Drugs for the Reproductive System",
      "CH 28 - Drugs for Reproductive System.pptx",
      "Drugs 13 - Reproductive System",
      "Chapter 28 Practice Exam",
      "Drugs 13 QUIZ - Reproductive System- Requires Respondus",
      "LockDown Browser",
      "Chapter 28 Final Exam- Requires Respondus LockDown",
      "Browser",
      "Chapter 29: Therapeutic Drugs for the Eyes, Ears, and Nose",
      "CH 29 - Drugs for Eye, Ears, and INose.pptx",
      "Drugs 14 - Eyes, Ears, & Nose",
      "Chapter 29 Practice Exam",
      "Activity #3",
      "Drugs 14 QUIZ - Eyes, Ears, & Nose- Requires Respondus",
      "LockDown Browser",
      "Chapter 29 Final Exam- Requires Respondus LockDown",
      "Browser",
      "Chapter 30: Therapeutic Drugs for the lntegumentary System",
      "CH 30 - Drugs for lntegumentary System.pptx",
      "Drugs 15 - lntegumentary System",
      "Chapter 30 Learning Lab 1: Skin Medications",
      "Chapter 30 Practice Exam",
      "Drugs 15 QUIZ - lntegumentary System- Requires Respondus",
      "LockDown Browser",
      "Chapter 30 Final Exam- Requires Respondus LockDown",
      "Browser",
      "Complete Module - 2 TEPT 1110",
      "Purple Book Labs",
      "Filling a 24-Hour Medication Cart - Lab:21",
      "Charging and Refilling a Crash Cart - Lab 25",
      "Medication Therapy Management - Lab 29",
      "Medication Reconciliation - Lab 31",
      "STECH Created Labs",
      "Parata Max & Professionalism at Township",
      "CabRx - 1.1 Inventory Report",
      "CabRx - 1.1 Questions (OPEN BOOK)",
      "CabRx - 1.3 CII Report",
      "CabRx - 1.3 Questions (OPEN BOOK)",
      "CabRx - 1.6 Empty Pockets Report",
      "CabRx - 1.6 Questions (OPEN BOOK)",
      "CabRx - 1.8 Discrepancies Report & Out Dates",
      "CabRx - 1.8 Questions (OPEN BOOK)",
      "CabRx - 1.9 Assign and Load",
      "LAB: Lollipops",
      "LAB: Cream",
      "LAB: Capsules",
      "LAB: Unit Dose Packager",
      "LAB: Preparing Syringes Using a Repeater Pump",
      "End of Course Conversation",
      "Complete Module 3-TEPT 1110",
      "End of Course Survey",
    ]
  }
]

export default TEPT1110;