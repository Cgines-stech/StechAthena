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
      {
        name: "eTextbook: Pharmaceutical Calculations for Pharmacy Technicians: A Worktext, 3rd ed.", 
        price: 150.0,
        isbn: "9780357766019",
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
      "eBook: Pharmaceutical Calculations for Pharmacy Technicians",
      "Pharmacy Calculations - Reprint Corrections",
      "Appendix A - Stop & Review",
      "Appendix B - Test Your Knowldge",
      "Appendix C - Case Studies",
      "Weekly Check iIn LINK",
      "How to Pronounce the Drugs - Youtube",
      "Fill In: Course Timeline",
      "Activity: Professional Development (Goals)",
      "LAB: 1ST Time - Daily Prescriptions",
      "LAB: Daily Prescriptions (TEPT 1522)",
      "SIGN UP: American Heart Association BLS Class",
      "READ: Chapter 1",
      "PowerPoint: Chapter 1",
      "Practice Exam: Chapter 1",
      "Review: Chapter 1",
      "Exam: Chapter 1",
      "If Needed - Test Corrections: Chapter 1",
      "If Needed - Remediation Exam: Chapter 1",
      "Read: Chapter 2",
      "PowerPoint: Chapter 2",
      "Practice Exam: Chapter 2",
      "Review: Chapter 2",
      "Exam: Chapter 2",
      "If Needed - Test Corrections: Chapter 2",
      "If Needed - Remediation Exam: Chapter 2",
      "Read: Chapter 3",
      "PowerPoint: Chapter 3",
      "Practice Exam: Chapter 3",
      "Review: Chapter 3",
      "Exam: Chapter 3",
      "If Needed - Test Corrections: Chapter 3",
      "If Needed - Remediation Exam: Chapter 3",
      "Read: Chapter 4",
      "PowerPoint: Chapter 4",
      "Practice Exam: Chapter 4",
      "Practice Drug Quiz: Nervous System (Part 3)",
      "Drug Flashcards: Nervous System (Part 3)",
      "Review: Chapter 4",
      "Exam: Chapter 4",
      "If Needed - Test Corrections: Chapter 4",
      "If Needed - Remediation Exam: Chapter 4",
      "Read: Chapter 5",
      "PowerPoint: Chapter 5",
      "Practice Exam: Chapter 5",
      "Review: Chapter 5",
      "Exam: Chapter 5",
      "If Needed - Test Corrections: Chapter 5",
      "If Needed - Remediation Exam: Chapter 5",
      "Drug Quiz: Nervous System (Part3)",
      "Quiz Corrections: Nervous System (Part 3)",
      "Remediation Quiz (1): Nervous System (Part 3)",
      "SIGN ME: Completed Module 1 - Tept 1522",
      "READ: Chapter 6",
      "PowerPoint: Chapter 8",
      "Practice Exam: Chapter 6",
      "Practice Drug Quiz: Musculoskeletal System (Part 2)",
      "Drug Flashcards: Musculoskeletal System (Part 2)",
      "Review: Chapter 6",
      "Exam: Chapter 6",
      "If Needed - Test Corrections: Chapter 6",
      "If Needed - Remediation Exam : Chapter 6",
      "READ: Chapter 7",
      "PowerPoint: Chapter7",
      "Practice Exam: Chapter 7",
      "Review: Chapter 7",
      "Exam: Chapter 7",
      "If Needed - Test Corrections: Chapter 7",
      "If Needed -  Remediation Exam: Chapter 7",
      "PowerPoint: Chapter 8",
      "Practice Exam: Chapter 8",
      "Review: Chapter 8",
      "Exam: Chapter 8",
      "If Needed - Test Corrections: Chapter 8",
      "If Needed - Remediation Exam: Chapter 8",
      "READ: Chapter 9",
      "PowerPoint: Chapter 9",
      "Practice Exam: Chapter 9",
      "Review: Chapter 9",
      "Drug Quiz: Musculoskeletal System (Part 2)",
      "If Needed - Quiz Corrections: Musculoskeletal System (Part 2)",
      "If Needed - Remediation Quiz (1): Musculoskeletal System (Part 2)",
      "Exam: Chapter 9",
      "If Needed - Test Corrections: Chapter 9",
      "If Needed - Remediation Exam: Chapter 9",
      "SIGN ME: Completed Module 2 - TEPT 1522",
      "LAB: Practice Drawing Up Oral Syringes",
      "LAB: Learn to Draw Up IV Syringes",
      "READ: Chapter 11",
      "PowerPoint: Chapter 11",
      "Practice Exam: Chapter 11",
      "Review: Chapter 11",
      "Exam: Chapter 11",
      "If Needed - Test Corrections: Chapter 11",
      "If Needed - Remediation Exam: Chapter 11",
      "READ: Chapter 12",
      "PowerPoint: Chapter 12",
      "Practice Exam: Chapter 12",
      "Review: Chapter 12",
      "Exam: Chapter 12",
      "If Needed - Test Corrections: Chapter 12",
      "If Needed - Remediation Exam: Chapter 12",
      "READ: Chapter 13",
      "PowerPoint: Chapter 13",
      "Practice Exam: Chapter 13",
      "Activity: Professional Development (Report)",
      "Review: Chapter 13",
      "Exam: Chapter 13",
      "If Needed - Test Corrections: Chapter 13",
      "If Needed - Remediation Exam: Chapter 13",
      "READ: Chapter 16",
      "PowerPoint: Chapter 16",
      "Practice Exam: Chapter 16",
      "Review: Chapter 16",
      "Exam: Chapter 16",
      "If Needed - Test Corrections: Chapter 16",
      "If Needed - Remediation Exam: Chapter 16",
      "SIGN ME: Completed Module 3 - TEPT 1522",
      "End of Course Survey",
    ]
  }
]

export default TEPT1522;