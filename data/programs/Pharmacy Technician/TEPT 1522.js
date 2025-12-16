// TEPT 1522

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEPT1522 = [
  {
    id: 17002,
    programId: 1,
    courseNumber: "TEPT 1522",
    courseName: "Pharmacy Calculations",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 40.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This course builds upon basic mathematic skills to include the application of mathematics in the pharmacy setting. This course will cover calculations for medication dosing and day supplies in both community and institutional pharmacies. Common business and inventory calculations used in the pharmacy will also be included in this course.",

    courseObjectives: [
      "Apply mathematics to calculations most often used in the pharmacy setting.",
      "Describe common household and metric conversions.",
      "Calculate correct dosages and days supply for medications.",
      "Explain key concepts such as time, temperature, volume, and weight.",
      "Perform advanced calculations for compounded drug products and sterile preparations.",
    ],

    courseOutline: [
      { title: "Standard Pharmacy Calculations", hours: 20},
      { title: "Advanced Pharmacy Calculations", hours: 20},
      { title: "Pharmacy Calculations Labs", hours: 20},
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
      "eBook: Pharmaceutical Calculations for Pharmacy",
      "Technicians: A Worktext",
      "Math Tips",
      "Stay on Track -Course Timeline",
      "How to Pronounce the Drugs - Youliube",
      "LAB: Prescription Filling",
      "Daily Prescriptions forTEPT 1520",
      "CPR/BLS Sign Up",
      "Professional Interactions",
      "Ch 1: Fundamentals of Math",
      "Ch 1 PowerPoint.pptx",
      "CH 1 Stop & Review #1",
      "CH 1 Stop & Review #2",
      "CH 1 Critical Thinking",
      "CH 1 Practice Exam",
      "CH 1 Exam- Requires Respondus LockDown Browser",
      "Drugs 2 NEW - Nervous System pt2",
      "Ch 2: Fractions and Decimals",
      "Ch 2 PowerPoint.pptx",
      "CH 2 Stop & Review #1",
      "CH 2 Stop & Review #2",
      "CH 2 Stop & Review #3",
      "CH 2 Practice Exam",
      "CH 2 Exam- Requires Respondus LockDown Browser",
      "Ch 3: Ratios, Proportions, and Percents",
      "Ch 3 PowerPoint.pptx",
      "CH 3 Stop & Review #1",
      "CH 3 Stop & Review #2",
      "CH 3 Stop & Review #3",
      "CH 3 Practice Exam",
      "CH 3 Exam- Requires Respondus LockDown Browser",
      "Ch 4: Celsius and Fahrenheit Temperature Conversions",
      "Ch 4 PowerPoint.pptx",
      "CH 4 Stop & Review #1",
      "CH 4 Practice Exam",
      "CH 4 Exam- Requires Respondus LockDown Browser",
      "Ch 5: Ratio and Proportion (Method #1)",
      "Ch 5 PowerPoint.pptx",
      "CH 5 Stop & Review #2",
      "CH 5 Test Your Knowledge",
      "CH 5 Practice Exam",
      "CH 5 Exam- Requires Respondus LockDown Browser",
      "Ch 6: Dimensional Analysis (Method #2)",
      "CH 6 PowerPoint.pptx",
      "CH 6 Stop & Review #1",
      "CH 6 Test Your Knowledge",
      "CH 6 Practice Exam",
      "CH 6 Exam- Requires Respondus LockDown Browser",
      "Drugs 2 NEW QUIZ - Nervous System pt2- Requires",
      "Respondus LockDown Browser",
      "Ch 7: Formula (Method #3)",
      "CH 7 PowerPoint.pptx",
      "CH 7 Stop & Review #1",
      "CH 7 Practice Exam",
      "CH 7 Exam- Requires Respondus LockDown Browser",
      "Completed Module 1 - TEPT 1520",
      "Ch 8: Interpretation of Prescriptions and Drug Labels",
      "Ch 8 PowerPoint.pptx",
      "CH 8 Stop & Review #1",
      "CH 8 Stop & Review #2",
      "CH 8 Stop & Review #3",
      "CH 8 Your Test Knowledge",
      "CH 8 Practice Exam",
      "CH 8 Exam- Requires Respondus LockDown Browser",
      "Drugs 3 NEW - Nervous System pt3",
      "Ch 9: Percentage of Error due to Equipment",
      "WATCH ME - Ch 9 Examples with Eliza",
      "Ch 9 PowerPoint.pptx",
      "CH 9 Stop & Review #1",
      "CH 9 Your Test Knowledge",
      "CH 9 Practice Exam",
      "CH 9 Exam- Requires Respondus LockDown Browser",
      "Ch 10: Dilutions and Solutions",
      "WATCH ME - Ch 10 & 11 Examples with Eliza",
      "Ch 10 PowerPoint.pptx",
      "CH 10 Stop & Review #1",
      "CH 10 Stop & Review #2",
      "CH 10 Test Your Knowledge",
      "CH 10 Practice Exam",
      "CH 10 Exam- Requires Respondus LockDown Browser",
      "Ch 11: Concentrations",
      "Ch 11 PowerPoint.pptx",
      "CH 11 Stop & Review #1",
      "CH 11 Stop & Review #2",
      "CH 11 Test Your Knowledge",
      "CH 11 Practice Exam",
      "CH 11 Exam",
      "Drugs 3 NEW QUIZ - Nervous System pt3- Requires",
      "Respondus LockDown Browser",
      "Completed Module 2 - TEPT 1520",
      "Ch 12: Oral Medication Labels and Dosage Calculation",
      "Ch 12 PowerPoint.pptx",
      "CH 12 Stop & Review #1",
      "CH 12 Stop & Review #2",
      "CH 12 Test Your Knowledge",
      "LAB: Oral Syringes",
      "CH 12 Practice Exam",
      "CH 12 Exam- Requires Respondus LockDown Browser",
      "Ch 13: Reconstitution of Powdered !Drugs",
      "Ch 13 PowerPoint.pptx",
      "CH 13 Stop & Review #1",
      "CH 13 Practice Exam",
      "CH 13 Exam",
      "Ch 14: Parenteral Medication Labels and Dosage Calculation",
      "Ch 14 PowerPoint.pptx",
      "CH 14 Stop & Review #1",
      "CH 14 Test Your Knowledge",
      "LAB: IV Syringes",
      "CH 14 Practice Exam",
      "CH 14 Exam- Requires Respondus LockDown Browser",
      "Ch 17: Business Math",
      "Ch 17 PowerPoint.pptx",
      "CH 17 Test Your Knowledge",
      "CH 17 Practice Exam",
      "CH 17 Exam- Requires Respondus LockDown Browser",
      "Drugs 5 NEW - Musculoskeletal Syst em pt2",
      "End of Course Conversation",
      "End of Course Survey",
    ]
  }
]

export default TEPT1522;