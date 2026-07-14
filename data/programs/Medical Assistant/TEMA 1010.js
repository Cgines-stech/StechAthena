// TEMA 1010

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEMA1010 = [
  {
    id: 14001,
    programId: 1,
    courseNumber: "TEMA 1010",
    courseName: "Introduction to Medical Assisting",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 50.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Introduction to Medical Assisting course provides an overview of healthcare professions and their roles in the healthcare environment. Students will be guided through  legal concepts and ethical issues in the healthcare setting which will compare and contrast moral issues, professional, and personal ethics. The foundational principles of  professional and effective interpersonal communication techniques will be discussed.",

    courseObjectives: [
      "Describe allied health professionals, their various scopes of practice, and their roles as a member in the healthcare industry.",
      "Apply legal and ethical standards in healthcare.",
      "Demonstrate workplace professionalism and communication.",
    ],

    courseOutline: [
      { title: "Medical Assistant and Health Care Team", hours: 10},
      { title: "Professionalism", hours: 10},
      { title: "Legal and Ethical Issues", hours: 30},
      { title: "Communication Skills", hours: 10},
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
        name: "Medical Assisting: Administrative & Clinical Competencies, 10th ed.", 
        price: 150.0,
        isbn: "9798214113586",
        note: "Cengage Unlimited Subscription 1 year                        					"
      },
    ],
    
    courseTools: [
      { name: "1 Set of Embroidered Scrubs, 1 Embroidered Jacket", price: 150.00, note: " Provided in class. Do not purchase separately.", optional: false },
    ],

    courseCertifications: [
      {},
    ],

    otherAssociatedCosts: [
      {
        name: "Digital Device (Chromebook)", 
        price: 302.5, 
        note: "Chromebook or comparable device - Available at STECH Bookstore, can be purchased elsewhere" 
      }
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
      "Orientation Acknowledgement",
      "Syllabus and Course Agreement",
      "Remind Sign Up",
      "Course Timeline",
      "Post-enrollment Requirements",
      "Why do you want to become a Medical Assistant?",
      "Medical Assistant Certifications",
      "Medical Assistant Scope of Practice",
      "Role of a Medical Assistant",
      "Healthcare Delivery Systems",
      "Interdisciplinary Team & Medical Specialties Worksheet",
      "Chapter 01 Check Your Understanding 1: The MA, Work Environment, and Professional Organizations",
      "Chapter 01 Check Your Understanding 2: The Health Care Team and the Impact of Government on Health Care",
      "Chapter 01 Review Questions: The Medical Assistant, Health Care Team, and Medical Environment",
      "Chapter 01 Application Activity: Health Care Roles and Responsibilities",
      "Chapter 01 Critical Thinking: Serving as a Patient Navigator",
      "Chapter 01 Quiz: The Medical Assistant, Health Care Team and Medical Environment",
      "Chapter 01 - The Medical Assistant, Health Care Team, and Medical Environment- Requires Respondus LockDown Browser",
      "Check point meeting- Module 1",
      "Chapter 02 Review Questions: Professionalism",
      "Chapter 02 Check Your Understanding 1: Professional Behavior",
      "Chapter 02 Check Your Understanding 2: Continuing Education",
      "Chapter 02 Application Activity: Professionalism",
      "Chapter 02 Critical Thinking (with Video): Professionalism",
      "Chapter 02 Quiz: Professionalism",
      "Chapter 02 - Professionalism- Requires Respondus LockDown Browser",
      "Scrubs",
      "Check point meeting- Module 2",
      "Case Study: Chapter 01 The Big Business of Health Care and You",
      "Quiz: Chapter 01 The Big Business of Health Care and You",
      "The Big Business of Health Care and You Exam- Requires Respondus LockDown Browser",
      "Poll: A Workplace Law to Know Chapter 02: Laws and Regulations You Will Encounter",
      "Laws and Regulations You Will Encounter Worksheet",
      "Case Study: Chapter 02: Laws and Regulations You Will Encounter",
      "Laws and Regulations You Will Encounter Writing Assignment",
      "Poll: What Can You Do? Chapter 01 The Big Business of Health Care and You",
      "Quiz: Chapter 02: Laws and Regulations You Will Encounter",
      "The Big Business of Health Care and You Worksheet",
      "Laws and Regulations You Will Encounter Exam- Requires Respondus LockDown Browser",
      "Poll: A Threat of Litigation Chapter 03: From the Constitution to the Courtroom",
      "The Big Business of Health Care and You Writing Assignment",
      "From the Constitution to the Courtroom Worksheet",
      "Case Study: Chapter 03: From the Constitution to the Courtroom",
      "From the Constitution to the Courtroom Writing Assignment",
      "Quiz: Chapter 03: From the Constitution to the Courtroom",
      "From the Constitution to the Courtroom Exam- Requires Respondus LockDown Browser",
      "Poll: A Medication Diversion Chapter 04: Criminal Acts and Intentional Torts",
      "Criminal Acts and Intentional Torts Worksheet",
      "Case Study: Chapter 04: Criminal Acts and Intentional Torts",
      "Criminal Acts and Intentional Torts Writing Assignment",
      "Quiz: Chapter 04: Criminal Acts and Intentional Torts",
      "Criminal Acts and Intentional Torts Exam- Requires Respondus LockDown Browser",
      "Poll: First Impressions Chapter 05: What Makes a Contract",
      "What Makes a Contract Worksheet",
      "Case Study: Chapter 05: What Makes a Contract",
      "What Makes a Contract Writing Assignment",
      "Quiz: Chapter 05: What Makes a Contract",
      "What Makes a Contract Exam- Requires Respondus LockDown Browser",
      "Poll: Informed Consent 06: Medical Malpractice and Other Lawsuits",
      "Medical Malpractice and Other Lawsuits Worksheet",
      "Case Study: Chapter 06: Medical Malpractice and Other Lawsuits",
      "Medical Malpractice and Other Lawsuits Writing Assignment",
      "Quiz: Chapter 06: Medical Malpractice and Other Lawsuits",
      "Medical Malpractice and Other Lawsuits Exam- Requires Respondus LockDown Browser",
      "Poll: The Health Record Chapter 07: The Health Record",
      "The Health Record Worksheet",
      "Case Study: Chapter 07: The Health Record",
      "The Health Record Writing Assignment",
      "Quiz: Chapter 07: The Health Record",
      "The Health Record Exam- Requires Respondus LockDown Browser",
      "Poll: Recognizing Ethical Dilemmas Chapter 08: Introduction to Ethics",
      "Introduction to Ethics Worksheet",
      "Case Study: Chapter 08: Introduction to Ethics",
      "Poll: Patients and Privacy Chapter 09: Laws and Ethics of Patient Confidentiality",
      "Laws and Ethics of Patient Confidentiality Worksheet",
      "Case Study: Chapter 09: Laws and Ethics of Patient Confidentiality",
      "Quiz: Chapter 08: Introduction to Ethics",
      "Case Study: Chapter 10: Professional Ethics and the Living",
      "Professional Ethics and the Living Worksheet",
      "Poll: The Ethics in Practice Chapter 10: Professional Ethics and the Living",
      "Introduction to Ethics Writing Assignment",
      "Laws and Ethics of Patient Confidentiality Exam- Requires Respondus LockDown Browser",
      "Introduction to Ethics Exam- Requires Respondus LockDown Browser",
      "Professional Ethics and the Living Writing Assignment",
      "Laws and Ethics of Patient Confidentiality Writing Assignment",
      "Quiz: Chapter 09: Laws and Ethics of Patient Confidentiality",
      "Quiz: Chapter 10: Professional Ethics and the Living",
      "Professional Ethics and the Living Exam- Requires Respondus LockDown Browser",
      "Poll: Ethical Issues Surrounding Embryos Chapter 11: Reproductive Issues and Early Life",
      "Reproductive Issues and Early Life Worksheet",
      "Case Study: Chapter 11: Reproductive Issues and Early Life",
      "Death and Dying Writing Assignment",
      "Quiz: Chapter 12: Death and Dying",
      "Death and Dying Exam- Requires Respondus LockDown Browser",
      "Reproductive Issues and Early Life Writing Assignment",
      "Quiz: Chapter 11: Reproductive Issues and Early Life",
      "Reproductive Issues and Early Life Exam- Requires Respondus LockDown Browser",
      "Poll: Ethics of Death Chapter 12: Death and Dying",
      "Death and Dying Worksheet",
      "Case Study: Chapter 12: Death and Dying",
      "Check point meeting- Module 3",
      "Chapter 04 Check Your Understanding 1: Applying Communication",
      "Chapter 04 Check Your Understanding 2: Fundamentals of Psychology and Defense Mechanisms",
      "Chapter 04 Review Questions: Applying Communication Skills",
      "Chapter 04 Application Activity: Professional Communication",
      "Chapter 04 Critical Thinking (with Video): Effective Communication",
      "Helping Hands Article",
      "Language and Culture Video",
      "Communication Process Video",
      "Chapter 04 Quiz: Applying Communication Skills",
      "Chapter 04 - Applying Communication Skills- Requires Respondus LockDown Browser",
      "Check point meeting- Module 4",
    ]
  }
]

export default TEMA1010;