// TEPH 1010

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEPH1010 = [
  {
    id: 18001,
    programId: 1,
    courseNumber: "TEPH 1010",
    courseName: "Phlebotomy I",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 200.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "In Phlebotomy I, students learn about the past and present of phlebotomy practices, infection control, equipment, safety, the circulatory system, medical terminology, anatomy and physiology, preanalytical consideration, venipuncture, straights venipuncture, butterfly venipuncture, special collections, patient identification, and other relevant skills.",

    courseObjectives: [
      "Identify laboratory, OSHA, hazardous material, blood borne pathogen exposures, warning symbols, infection control, and patient safety rules.",
      "Identify and use laboratory equipment and computer systems.",
      "Demonstrate use of basic terminology for the healthcare setting, understand and utilize correct order of draw, and explain the basics of human anatomy and physiology related to venipuncture.",
      "Draw blood correctly and safely from a patient by properly using equipment and supplies necessary while identifying and adjusting for any challenges associated with the venipuncture.",
    ],

    courseOutline: [
      { title: "Introduction to Phlebotomy", hours: 10},
      { title: "Infection Control", hours: 10},
      { title: "Saftey Guidelines", hours: 10},
      { title: "Anatomy and Physiology", hours: 10},
      { title: "Phlebotomy Equipment", hours: 10},
      { title: "Phlebotomy Technique", hours: 10},
    ],

    courseBooks: [
      {
        name: "Cengage Unlimited Subscription", 
        price: 150.0,
        isbn: "Syllabus",
        note: ""
      },
    ],

    syllabiBooks: [
      {
        name: "Cengage Unlimited Subscription", 
        price: 150.0,
        isbn: "Syllabus",
        note: ""
      },
    ],
    
    courseTools: [
      {}
    ],

    courseCertifications: [
      {
        name: "BLS", 
        price: 45.0, 
        note: "" 
      },
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
      "NAACILS Competencies",
      "Chapter 1 Introduction",
      "Ch. 1: Exercise 1 Matching/Identification",
      "Ch. 1: Exercise 2 Areas of Nursing and Type of Care",
      "Ch. 1: Exercise 3 Abbreviations and Certifications of",
      "Laboratory Staff",
      "Ch. 1: Exercise 4 Abbreviations and Certifications of",
      "Regulatory Agencies",
      "Chapter 1 Worksheet",
      "Chapter 1 Review Questions",
      "Chapter 01-lnt roduction to Phleboitomy",
      "NAACILS Competencies",
      "Chapter 2 Introduction",
      "Ch. 2: Exercise 1 Fill in the Blanks: Chain of Infection",
      "Ch. 2: Exercise 2 Fill in the Blanks: Transmission of Infection",
      "Skill - Hand Washing for Medical Asepsis, Gloves and PPE",
      "Videos",
      "Skill Reflection 1 - Hand Washing for Medical Asepsis",
      "Skill Reflection 1 - Remove Nonsterile Gloves",
      "Skill Reflection 1 - Personal Protectiive Equipment (PPE)",
      "Skill Reflection 2 - Hand Washing for Medical Asepsis",
      "Skill Reflection 2 - Remove Nonsterile Gloves",
      "Skill Reflection 2 - Personal Protectiive Equipment (PPE)",
      "Skill Reflection 3 - Hand Washing for Medical Asepsis",
      "Skill Reflection 3 - Remove Nonsterile Gloves",
      "Skill Reflection 3 - Personal Protectiive Equipment (PPE)",
      "Hand Washing for Medical Asepsis Skill Pass-off",
      "Remove Nonsterile Gloves Skill Pass-off",
      "Personal Protective Equipment (PPE) Skill Pass-off",
      "Ch. 2: Fill in t he Blanks: Medical Asepsis Handwashing",
      "Procedure Competency",
      "Assessment (Procedure 2-1)",
      "Ch. 2: Exercise 4 Fill in the Blanks: Removing Contaminated",
      "Gloves Procedure",
      "Competency Assessment (Procedure 2-2)",
      "Ch. 2: Exercise 6 Labeling",
      "Ch. 2: Exercise 7 Ordering/Blood Collection in an Isolation",
      "Room (Procedure 2-4)",
      "Chapter 2 Key Terms Review",
      "Flashcards",
      "Chapter 2 Exercise 1.08",
      "Chapter 2 Exercise 1.09",
      "Chapter 2 Exercise 1.10 Multiple Choice",
      "Chapter 2 Worksheet",
      "Chapter 2 Review Questions",
      "Flashcards",
      "Chapter 02-Safety in Phlebotomy",
      "Check point meeting- Module 1",
      "NAACILS Competencies",
      "Chapter Int roduction",
      "Reading",
      "Chapter 3 Worksheet",
      "Chapter 3 Key Terms Review",
      "Chapter 3 Review Questions",
      "Chapter 03-Basic Human Anatomy and Physiology",
      "Flashcards",
      "NAACILS Competencies",
      "Chapter Int roduction",
      "Reading",
      "Chapter 4 Worksheet",
      "Blood: Crash Course Videos",
      "Blood Typing",
      "Ch. 4: Exercise 1 Fill in the Blanks: White Blood Cells, Red",
      "Blood Cells, and Platelets",
      "Ch. 4: Exercise 4 Ordering/Sorting",
      "Ch. 4: Exercise 5 Matching/Identification",
      "Chapter 4 Review Questions",
      "Chapter 04-Anatomy and Physiology of t he Circulatory",
      "System",
      "Check point meeting- Module 2",
      "NAACILS Competencies",
      "Chapter Introduction",
      "Reading",
      "Chapter 5 Worksheet",
      "Ch. 5: Exercise 1 Fill in the Blanks",
      "Ch. 5: Exercise 2 Ordering",
      "Ch. 5: Exercise 3 Matching",
      "Ch. 5: Exercise 4 Fill in the Blanks",
      "Ch. 5: Exercise 5 Requisition Exercise",
      "Chapter 5 Review Questions",
      "Flashcards",
      "Chapter OS-Phlebotomy Equipment",
      "NAACILS Competencies",
      "Chapter Introduction",
      "Reading",
      "CPR Trairning",
      "Chapter 6 Worksheet",
      "Ch. 6: Exercise 2 Ordering",
      "Ch. 6: Exercise 4 Fill in t he Blanks",
      "Ch. 6: Exercise 5 Fill in t he Blanks",
      "Patient Identification Worksheet",
      "Chapter 6 Key Terms Review",
      "Ch. 6: Exercise 6.07 Fill in the Blanks",
      "Ch. 6: Exercise 6.08 Fill in the Blanks",
      "Ch. 6: Exercise 6.09 Multiple Choice",
      "Order of Draw Video",
      "Skill - Venipuncture Video",
      "Skill Reflection - Draw 1 - Obtain Venous Blood with a",
      "Vacuum Tube",
      "Skill Reflection - Draw 7 - Obtain Venous Blood with a",
      "Vacuum Tube",
      "Skill Reflection - Draw 16 - Obtain Venous Blood with a",
      "Vacuum Tube with Tube Change",
      "Skill Reflection - Draw 21 - Obtain Venous Blood with t he",
      "Butterfly Needle Method",
      "Skill Reflection - Draw 30 - Obtain Venous Blood with t he",
      "Butterfly Needle Method",
      "Ch. 6: Fill in the Blanks: Ventipuncture by Evacuated Tube",
      "Method Procedure",
      "Competency Assessment",
      "Ch. 6: Ventipuncture by Butterfly Collection System Using",
      "Evacuated Tube Method",
      "Procedure Competency Assessment",
      "Arterial Blood Gas Worksheet",
      "Ch. 6: Exercise 6 Requisition Exercise",
      "Flashcards",
      "Chapter 6 Review Questions",
      "Chapter 06-Phlebotomy Technique",
      "Skills List",
      "Check point meeting Module 3",
    ]
  }
]

export default TEPH1010;