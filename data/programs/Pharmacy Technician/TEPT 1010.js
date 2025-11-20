// TEPT 1010

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEPT1010 = [
  {
    id: 17001,
    programId: 1,
    courseNumber: "TEPT 1010",
    courseName: "Introduction to Pharmacy",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 76.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This course serves as an introduction to the pharmacy technician profession, pharmacy technician roles, and the different types of pharmacies within the healthcare delivery  system. Students are introduced to state and federal pharmacy practice laws, and the pharmacists' patient care process. Students learn the concepts of pharmacology,  medications, and calculations needed to ensure patient safety.",

    courseObjectives: [
      "Compare and contrast the pharmacy technician’s role, pharmacist’s role, and other occupations in the healthcare environment.",
      "Describe and apply state and federal laws pertaining to pharmacy practice.",
      "Recognize and apply the pharmacists' patient care process.",
      "Relate the basic history of pharmacy to today's pharmacy practice.",
      "Demonstrate the technicians' role in the medication use process.",
    ],

    courseOutline: [
      { title: "Pharmacy as a Profession", hours: 30},
      { title: "Introduction to Pharmacology", hours: 30},
      { title: "Introduction to Pharmacy Labs", hours: 30},
    ],

    courseBooks: [
      {
        name: "Cengage Unlimited Subscription", 
        price: 150.0,
        isbn: "Syllabus",
        note: "Cengage Unlimited Subscription"
      },
      {
        name: "SFI Prescription Drug Flashcards", 
        price: 72.0,
        isbn: "188057988X",
        note: ""
      },
    ],

    syllabiBooks: [
      {
        name: "Cengage Unlimited Subscription", 
        price: 150.0,
        isbn: "Syllabus",
        note: "Cengage Unlimited Subscription"
      },
      {
        name: "SFI Prescription Drug Flashcards", 
        price: 72.0,
        isbn: "188057988X",
        note: ""
      },
    ],
    
    courseTools: [
      { name: "Chrome Book", price: 302.5, note: "Optional" },
    ],

    courseCertifications: [
      {
        name: "Utah Trainee Pharmacy Technician License", 
        price: 65.00, 
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
      "WEEKLY CHECK IN LINK",
      "Available Scholarships",
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
      "Orientation",
      "Orientation Acknowledgement",
      "Join Remind @ g293h8f",
      "Stay on Track - Course Timeline",
      "Student Requirements DUE at the E!nd ofTEPT 1100",
      "Wellness Promotion & Disease Prevention Project (Big",
      "Options)",
      "Wellness Promotion & Disease Prevention Project (Small",
      "Options)",
      "Chapter 1: History of Pharmacy",
      "CH 1 - The History of Pharmacy.pptx",
      "Chapter 1 Practice Exam",
      "Activity - Pharmacy Games",
      "Chapter 1 Final Exam",
      "Chapter 2: The Foundation of Pharmaceutical Care",
      "CH 2 - Foundation of Pharmaceuitical Care.pptx",
      "Activity - Pharmacy Technician Requirements",
      "Chapter 2 Practice Exam",
      "Coaching Assignments Overview",
      "Wellness Wheel & Goal Setting",
      "Chapter 2 Final Exam",
      "Chapter 3: Pharmacy Law, Ethics, and Regulatory Agencies",
      "CH 3 - Pharmacy Law.pptx",
      "Chapter 3 Learning Lab: Reporting Theft of a Controlled",
      "Substance",
      "Chapter 3 Learning Lab: Destruction of a Controlled",
      "Substance (ONLYTRYTWICE)",
      "Chapter 3 Practice Exam",
      "Activity - Patient Privacy & HI PPA",
      "Chapter 3 Final Exam",
      "Chapter 4: Communication with Patients and Customers",
      "CH 4 - Communication with Patients and CustomersUntitled",
      "presentation.pptx",
      "Chapter 4 Practice Exam",
      "Activity - Natural Drug Sources",
      "Chapter 4 Final Exam",
      "Chapter 5: Pharmaceutical Information and References",
      "CH 5 - Sources of Drug lnformation.pptx",
      "Chapter 5 Practice Exam",
      "Virtual Pharmacy: Storage of Medication (ONLYTRYTWICE)",
      "Chapter 5 Final Exam",
      "Complete Module 1 - TEPT 1010",
      "How to Pronounce the Drugs - Youliube",
      "Chapter 6: Prescriptions and Processing",
      "CH 6 • Prescriptions and Processing.pptx",
      "Chapter 6 Learning Lab 1: Verification of a DEA Number",
      "(ONLYTRYTWICE)",
      "Chapter 6 Practie Exam",
      "Chapter 6 Learning Lab 2: Dispensing a Controlled",
      "Substance (ONLY TRY TWICE)",
      "Activity - Prescription Label Design",
      "Chapter 6 Final Exam",
      "Chapter 20: Therapeutic Drugs for the Nervous System",
      "CH 20 Drugs for the Nervous Sys.tem.pptx",
      "Drugs 1 - Nervous System pt1",
      "Chapter 20 Practce Exam",
      "Drugs 1 QUIZ - Nervous System pt1· Requires Respondus",
      "LockDown Browser",
      "Chapter 20 Final Exam",
      "Chapter 21: Therapeutic Drugs for the Musculoskeletal",
      "System",
      "CH 21 - Drugs for the Musculoskeletal System.pptx",
      "Drugs 4 - Musculoskeletal System pt1",
      "Chapter 21 Practice Exam",
      "Drugs 4 QUIZ - Musculosketal System pt1· Requires",
      "Respondus LockDown Browser",
      "Chapter 21 Final Exam",
      "CH 22 - Drugs for the Endocrine System.pptx",
      "Chapter 22 Practice Exam",
      "Drugs 6 - Endocrine System",
      "Drugs 6 QUIZ - Endocrine System- Requires Respondus",
      "LoclkDown Browser",
      "Chapter 22 Learning Lab 1: Endocrine System Drugs",
      "(ONLYTRYTWICE)",
      "Chapter 22 Final Exam",
      "Chapter 23: Therapeutic Drugs for the Cardiovascular",
      "System",
      "CH 23 - Drugs for the Cardiovascular System .pptx",
      "Drugs 7 - Cardiovascular System pt1",
      "Chapter 23 Learning Lab 1: Cardiovascular Drugs (Only Try",
      "liwice)",
      "Chapter 23 Learning Lab 2: Cardiovascular Drugs (Only Try",
      "liwice)",
      "Chapter 23 Practice Exam",
      "Drugs 7 QUIZ - Cardiovascular System pt1- Requires",
      "Respondus LockDown Browser",
      "Chapter 23 Final Exam",
      "Complete Module 2 - TEPT 1010",
      "Retail & Non Sterile Compounding Skills",
      "Lab User & Patient Agreement",
      "Chapter 8: Measurement Systems",
      "CH 8 - Measurement Systems.pptx",
      "Drugs 8 - Cardiovascular System pt2",
      "Chapter 8 Learning Lab: The Metric System and Drug Dose",
      "Calculations (ONLY TRY TWICE)",
      "Chapter 8 Practice Exam",
      "Activity - Medication Pictionary & Sig Code Review",
      "Drugs 8 QUIZ - Cardiovascular System pt2- Requires",
      "Respondus LockDown Browser",
      "Chapter 8 Final Exam",
      "Eyecon at Cedar Drug Video Quiz",
      "Senior Heath Insurance Program Video Quiz",
      "STECH Made Labs",
      "LAB: Equipment Safety",
      "LAB: Counting Pills",
      "LAB: Bubble Pack",
      "LAB: Alphabetizing Medications",
      "Projecit - Medication Package Inserts (PEER REVIEW",
      "REQUIRED)",
      "Projecit - Off Label Use, Biosimilar s, or lnvestigational Drugs",
      "(PEER REVIEW REQUIRED)",
      "Projecit - Hazardous Drugs & Safety Data Sheets (PEER",
      "REVIEW)",
      "Projecit - Counseling: Over the Counter Drugs (PEER",
      "REVIEW)",
      "Labs from the Purple Lab Book",
      "Lao 1 l..necK Your unaerstanamg - upen tsooK ~uiz",
      "Lab 1 Make Connections - Open Book Quiz",
      "Using Reference Materials in Pharmacy Practice - Lab 1 -",
      "Poster",
      "Lab 2 - Open Book Quiz",
      "Lab 2 - Scenarios",
      "Practicing Professionalism in the Pharmacy - Lab 2",
      "Scheduling",
      "Customer Service and Point of Sale - Lab 3",
      "LAB 4: Pseudoephedrine Logbook - Quiz",
      "LAB 5: Validating DEA Numbers - Quiz",
      "Managing Pharmacy Inventory - Lab 6",
      "Reviewing Signa Codes and Creating Patient Instructions -",
      "Lab 8 - Open Book Quiz",
      "Completion Certificate & Exit Survey",
      "Goal Settiing Experience Reflection Paper",
      "End of Course Conversation",
      "Complete Module 3 - TEPT 1010",
      "End of Course Survey",
    ]
  }
]

export default TEPT1010;