// TEMA 1050

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEMA1050 = [
  {
    id: 14011,
    programId: 1,
    courseNumber: "TEMA 1050",
    courseName: "Pharmacology",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 86.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Pharmacology course familiarizes the student with pharmaceuticals. Instruction includes commonly prescribed medications, trade and generic names, mode of action,  side effects, and usual doses. Concepts covered include the proper administration of oral, injectable, and non-injectable medications. There will be a review of the math  skills required to perform medical math conversions and dosage calculations.",

    courseObjectives: [
      "Demonstrate calculation of basic mathematical concepts and units of measurement as related to the ambulatory care setting.",
      "Describe commonly prescribed medications uses, names, classifications, and risks.",
      "List and explain the rights of medication administration.",
      "Identify and interpret common medication abbreviations.",
      "Demonstrate the proper handling and administration of prescriptions and medications.",
    ],

    courseOutline: [
      { title: "Pharmacology Fundamentals", hours: 10},
      { title: "Measurement Systems and Dosage Calculations", hours: 20},
      { title: "Administering Oral and Noninjectable Medications", hours: 25},
      { title: "Administering Injections and Immunizations", hours: 35},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {
        name: "Medical Assisting: Administrative & Clinical Competencies, 10th ed.", 
        price: 150.0,
        isbn: "9798214113586",
        note: "Cengage Unlimited Subscription 1 year                        					"
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
      {}
    ],

    instructorContactInformation: [
      {}
    ],

    course_Policies: [
      {}
    ],

    courseAssignmentsandAsssessments: [
      "Welcome",
      "Syllabus and Course Agreement ",
      "Course Timeline ",
      "Chapter 49 Check Your Understanding 1: Drug Categories, Classifications, Names, and Forms ",
      "Chapter 49 Check Your Understanding 2: Prescriptions, Storage, and Compliance ",
      "Chapter 49 Application Activity: Pharmacology Fundamentals ",
      "Chapter 49 MOSS 4.0 Assessment: Preparing an Electronic Prescription (Bachmayer) ",
      "Chapter 49 MOSS 4.0 Assessment: Preparing an Electronic Prescription (Egger) ",
      "Chapter 49 MOSS 4.0 Assessment: Preparing Electronic Prescriptions (Lorenzo) ",
      "Skill - Prepare a Prescription and Call in to Pharmacy Examples ",
      "Skill Reflection 1 - Prepare a Prescription and Call in to Pharmacy ",
      "Skill Reflection 2 - Prepare a Prescription and Call in to Pharmacy ",
      "Skill Reflection 3 - Prepare a Prescription and Call in to Pharmacy ",
      "Prepare a Prescription and Call in to Pharmacy Pass-off ",
      "Chapter 49 MOSS 4.0 Assessment: ADVANCED Preparing an Electronic Prescription (Berger) ",
      "Chapter 49 MOSS 4.0 Assessment: Printing a Prescription (Fransson) ",
      "Chapter 49 MOSS 4.0 Assessment: ADVANCED Printing a Prescription (Wolf)",
      "Chapter 49 Critical Thinking: Handling Medications ",
      "Over the Counter Medications Worksheet ",
      "Chapter 49 Review Questions: Pharmacology Fundamentals",
      "Chapter 49 Quiz: Pharmacology Fundamentals",
      "Chapter 49 - Pharmacology Fundamentals- Requires Respondus LockDown Browser ",
      "Drug Cards 1-25 ",
      "Check point meeting- Module 1",
      "Chapter 50 Check Your Understanding 1: Systems of Measurement and Basic Math ",
      "Chapter 50 Check Your Understanding 2: Dosage Calculations",
      "Calculate Proper Dosages of Medication for Administration Worksheet",
      "Chapter 50 Application Activity: Measurement Systems, Basic Mathematics, and Dosage Calculations ",
      "Chapter 50 Critical Thinking (with Video): The Metric System and Conversions",
      "Chapter 50 Review Questions: Measurement Systems, Basic Mathematics, and Dosage Calculations ",
      "Chapter 50 Quiz: Measurement Systems, Basic Mathematics, and Dosage Calculations ",
      "Chapter 50 - Measurement Systems, Basic Mathematics, and Dosage Calculations- Requires Respondus LockDown Browser ",
      "Drug Cards 26-50 ",
      "Check point meeting- Module 2 ",
      "Chapter 51 Check Your Understanding 1: Medication Documentation ",
      "Chapter 51 Check Your Understanding 2: Medication Administration ",
      "Chapter 51 MOSS 4.0 Assessment: Administering Oral Medications (Ramirez) ",
      "Skill - Prepare and Administer Oral Medication Video",
      "Skill Reflection 1 - Prepare and Administer Oral Medication ",
      "Skill Reflection 2 - Prepare and Administer Oral Medication ",
      "Skill Reflection 3 - Prepare and Administer Oral Medication ",
      "Prepare and Administer Oral Medication Skill Pass-Off ",
      "Chapter 51 Application Activity: Administering Medications ",
      "Skill - Administer Eyedrops and Instill Drops in the Ears Videos ",
      "Skill Reflection 1 - Administer Eyedrops",
      "Skill Reflection 2 - Administer Eyedrops ",
      "Skill Reflection 3 - Administer Eyedrops ",
      "Administer Eyedrops Skills Pass-Off ",
      "Skill Reflection 1 - Instill Drops in the Ears ",
      "Skill Reflection 2 - Instill Drops in the Ears ",
      "Skill Reflection 3- Instill Drops in the Ears ",
      "Instill Drops in the Ears Skill Pass-Off ",
      "Chapter 51 Critical Thinking: Medication Accuracy and Documentation ",
      "Chapter 51 Review Questions: Administering Oral and Noninjectable Medications ",
      "Chapter 51 Quiz: Administering Oral and Noninjectable Medications ",
      "Chapter 51 - Administering Oral and Noninjectable Medications- Requires Respondus LockDown Browser ",
      "Drug Cards 51-75 ",
      "Check point meeting- Module 3 ",
      "Chapter 52 Check Your Understanding 1: Administering Injections ",
      "Chapter 52 Check Your Understanding 2: Immunizations ",
      "Chapter 52 Virtual Skills: Administering Injections ",
      "Chapter 52 Virtual Skills Quiz: Administering Injections ",
      "Skill - Preparing to Administer Injections Videos ",
      "Skill Reflection 1 - Withdraw Medication from an Ampule ",
      "Skill Reflection 1 - Prepare Medication from a Multi- or Single-Dose Vial ",
      "Skill Reflection 1 - Mix Two Medications in One Syringe ",
      "Skill Reflection 1 - Reconstitute a Powder Medication ",
      "Skill Reflection 2 - Withdraw Medication from an Ampule ",
      "Skill Reflection 2 - Prepare Medication from a Multi- or Single-Dose Vial ",
      "Skill Reflection 2 - Reconstitute a Powder Medication ",
      "Skill Reflection 2 - Mix Two Medications in One Syringe ",
      "Skill Reflection 3 - Withdraw Medication from an Ampule ",
      "Skill Reflection 3 - Reconstitute a Powder Medication ",
      "Skill Reflection 3 - Prepare Medication from a Multi- or Single-Dose Vial ",
      "Skill Reflection 3 - Mix Two Medications in One Syringe ",
      "Withdraw Medication from an Ampule Skill Pass-Off ",
      "Prepare Medication from a Multi- or Single-Dose Vial Skill Pass-Off ",
      "Reconstitute a Powder Medication Skill Pass-Off ",
      "Mix Two Medications in One Syringe Skill Pass-Off ",
      "Chapter 52 MOSS 4.0 Assessment: Administering Parenteral Medications (Willaism) ",
      "Chapter 52 Critical Thinking (with Video): Intramuscular and Z-Track Injections ",
      "Skill - Practice Injection Angles",
      "Schedule Your Final Scenario ",
      "Skill - Injections and Immunizations Videos ",
      "Skill Reflection 1 - Administer an Intradermal Injection ",
      "Skill Reflection 2 - Administer an Intradermal Injection ",
      "Skill Reflection 3 - Administer an Intradermal Injection ",
      "Skill Reflection 1 - Administer a Subcutaneous Injection ",
      "Skill Reflection 2- Administer a Subcutaneous Injection ",
      "Skill Reflection 3 - Administer a Subcutaneous Injection ",
      "Skill Reflection 1 - Administer an Intramuscular Deltoid Injection ",
      "Skill Reflection 2 - Administer an Intramuscular Deltoid Injection ",
      "Skill Reflection 3 - Administer an Intramuscular Deltoid Injection",
      "Skill Reflection 1 - Administer an Intramuscular Gluteal Injection",
      "Skill Reflection 2 - Administer an Intramuscular Gluteal Injection",
      "Skill Reflection 3- Administer an Intramuscular Gluteal Injection ",
      "Skill Reflection 1 - Administer an Intramuscular Ventrogluteal Injection",
      "Skill Reflection 1 - Administer an Intramuscular Injection by Z-Track Method ",
      "Skill Reflection 2 - Administer an Intramuscular Injection by Z-Track Method ",
      "Skill Reflection 3 - Administer an Intramuscular Injection by Z-Track Method ",
      "Case Studies for Adult Immunizations ",
      "Chapter 52 Review Questions: Administering Injections and Immunizations ",
      "Chapter 52 Quiz: Administering Injections and Immunizations ",
      "Drug Cards 76-100 ",
      "Chapter 52 - Administering Injections and Immunizations- Requires Respondus LockDown Browser ",
      "Check point meeting- Module 4 ",
      "Professionalism Evaluation ",
      "Skills List ",
      "Final Scenario ",
    ]
  }
]

export default TEMA1050;