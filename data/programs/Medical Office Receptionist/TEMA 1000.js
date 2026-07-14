// TEMA 1000

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEMA1000 = [
  {
    id: 15001,
    programId: 1,
    courseNumber: "TEMA 1000",
    courseName: "Introduction to Medical Office Receptionist",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 0.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This course delves into the critical roles and responsibilities of a medical office receptionist within the healthcare team. By emphasizing professionalism, law & ethics, and effective communication, students are prepared to integrate seamlessly into healthcare settings and maintain the highest professionalism and communication standards.",

    courseObjectives: [
      "Describe the structure and functions of the healthcare delivery team and the receptionist's role within it.",
      "Demonstrate a deep sense of professionalism, emphasizing punctuality, appearance, and behavior suitable for healthcare environments.",
      "Identify the legal and ethical responsibilities inherent in a medical receptionist role, focusing on patient rights and data protection.",
      "Demonstrate strong communication skills tailored to patient interactions, intra-team dialogues, and external communications.",
    ],

    courseOutline: [
      { title: "Orientation", hours: 2},
      { title: "Medical Receptionist and Healthcare Team", hours: 10},
      { title: "Professionalism", hours: 8},
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
      {},
    ],

    courseCertifications: [
      {},
    ],

    otherAssociatedCosts: [
      {
         name: "Digital Device (Chromebook)",
         price: 302.5,
         note: "Chromebook or comparable device - Available at STECH Bookstore, can be purchased elsewhere"
      },
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
      "Orientation Quiz",
      "Policies and Orientation",
      "Syllabus and Course Agreement ",
      "Remind Sign Up ",
      "Course Timeline ",
      "Check point meeting- Module 1 ",
      "Why do you want to become a Medical Office Receptionist? ",
      "Medical Office Receptionist",
      "Healthcare Delivery Systems ",
      "Interdisciplinary Team & Medical Specialties Worksheet ",
      "Chapter 01 Check Your Understanding 1: Work Environment, and Professional Organizations ",
      "Chapter 01 Check Your Understanding 2: The Health Care Team and the Impact of Government on Health Care ",
      "Chapter 01 Review Questions: The Health Care Team, and Medical Environment ",
      "Chapter 01 Application Activity: Health Care Roles and Responsibilities ",
      "Chapter 01 Critical Thinking: Serving as a Patient Navigator ",
      "Chapter 01 Quiz: Health Care Team and Medical Environment ",
      "Chapter 01 - Health Care Team, and Medical Environment- Requires Respondus LockDown Browser + Webcam",
      "Check point meeting- Module 2 ",
      "Chapter 02 Review Questions: Professionalism ",
      "Chapter 02 Check Your Understanding 1: Professional Behavior ",
      "Chapter 02 Check Your Understanding 2: Continuing Education ",
      "Chapter 02 Application Activity: Professionalism ",
      "Chapter 02 Critical Thinking (with Video): Professionalism",
      "Chapter 02 Quiz: Professionalism ",
      "Chapter 02 - Professionalism- Requires Respondus LockDown Browser  + Webcam",
      "Check point meeting- Module 3 ",
      "Case Study: Chapter 01 The Big Business of Health Care and You ",
      "Quiz: Chapter 01 The Big Business of Health Care and You ",
      "The Big Business of Health Care and You Exam- Requires Respondus LockDown Browser  + Webcam",
      "Poll: A Workplace Law to Know Chapter 02: Laws and Regulations You Will Encounter ",
      "Laws and Regulations You Will Encounter Worksheet ",
      "Case Study: Chapter 02: Laws and Regulations You Will Encounter ",
      "Laws and Regulations You Will Encounter Writing Assignment ",
      "Poll: What Can You Do? Chapter 01 The Big Business of Health Care and You ",
      "Quiz: Chapter 02: Laws and Regulations You Will Encounter ",
      "The Big Business of Health Care and You Worksheet ",
      "Laws and Regulations You Will Encounter Exam- Requires Respondus LockDown Browser  + Webcam",
      "Poll: A Threat of Litigation Chapter 03: From the Constitution to the Courtroom ",
      "The Big Business of Health Care and You Writing Assignment ",
      "From the Constitution to the Courtroom Worksheet ",
      "Case Study: Chapter 03: From the Constitution to the Courtroom ",
      "From the Constitution to the Courtroom Writing Assignment ",
      "Quiz: Chapter 03: From the Constitution to the Courtroom ",
      "From the Constitution to the Courtroom Exam- Requires Respondus LockDown Browser  + Webcam",
      "Poll: A Medication Diversion Chapter 04: Criminal Acts and Intentional Torts ",
      "Criminal Acts and Intentional Torts Worksheet ",
      "Case Study: Chapter 04: Criminal Acts and Intentional Torts ",
      "Criminal Acts and Intentional Torts Writing Assignment ",
      "Quiz: Chapter 04: Criminal Acts and Intentional Torts ",
      "Criminal Acts and Intentional Torts Exam- Requires Respondus LockDown Browser  + Webcam",
      "Poll: First Impressions Chapter 05: What Makes a Contract ",
      "What Makes a Contract Worksheet ",
      "Case Study: Chapter 05: What Makes a Contract ",
      "What Makes a Contract Writing Assignment ",
      "Quiz: Chapter 05: What Makes a Contract ",
      "What Makes a Contract Exam- Requires Respondus LockDown Browser  + Webcam",
      "Poll: Informed Consent 06: Medical Malpractice and Other Lawsuits ",
      "Medical Malpractice and Other Lawsuits Worksheet ",
      "Case Study: Chapter 06: Medical Malpractice and Other Lawsuits ",
      "Medical Malpractice and Other Lawsuits Writing Assignment ",
      "Quiz: Chapter 06: Medical Malpractice and Other Lawsuits ",
      "Medical Malpractice and Other Lawsuits Exam- Requires Respondus LockDown Browser  + Webcam",
      "Poll: The Health Record Chapter 07: The Health Record ",
      "The Health Record Worksheet ",
      "Case Study: Chapter 07: The Health Record ",
      "The Health Record Writing Assignment ",
      "Quiz: Chapter 07: The Health Record ",
      "The Health Record Exam- Requires Respondus LockDown Browser  + Webcam",
      "Poll: Recognizing Ethical Dilemmas Chapter 08: Introduction to Ethics ",
      "Introduction to Ethics Worksheet ",
      "Case Study: Chapter 08: Introduction to Ethics ",
      "Poll: Patients and Privacy Chapter 09: Laws and Ethics of Patient Confidentiality ",
      "Laws and Ethics of Patient Confidentiality Worksheet ",
      "Case Study: Chapter 09: Laws and Ethics of Patient Confidentiality ",
      "Quiz: Chapter 08: Introduction to Ethics ",
      "Case Study: Chapter 10: Professional Ethics and the Living ",
      "Professional Ethics and the Living Worksheet ",
      "Poll: The Ethics in Practice Chapter 10: Professional Ethics and the Living ",
      "Introduction to Ethics Writing Assignment ",
      "Laws and Ethics of Patient Confidentiality Exam- Requires Respondus LockDown Browser  + Webcam",
      "Introduction to Ethics Exam- Requires Respondus LockDown Browser  + Webcam",
      "Professional Ethics and the Living Writing Assignment ",
      "Laws and Ethics of Patient Confidentiality Writing Assignment ",
      "Quiz: Chapter 09: Laws and Ethics of Patient Confidentiality ",
      "Quiz: Chapter 10: Professional Ethics and the Living ",
      "Professional Ethics and the Living Exam- Requires Respondus LockDown Browser  + Webcam",
      "Poll: Ethical Issues Surrounding Embryos Chapter 11: Reproductive Issues and Early Life ",
      "Reproductive Issues and Early Life Worksheet ",
      "Case Study: Chapter 11: Reproductive Issues and Early Life ",
      "Death and Dying Writing Assignment ",
      "Quiz: Chapter 12: Death and Dying ",
      "Death and Dying Exam- Requires Respondus LockDown Browser  + Webcam",
      "Reproductive Issues and Early Life Writing Assignment ",
      "Quiz: Chapter 11: Reproductive Issues and Early Life ",
      "Reproductive Issues and Early Life Exam- Requires Respondus LockDown Browser  + Webcam",
      "Poll: Ethics of Death Chapter 12: Death and Dying ",
      "Death and Dying Worksheet ",
      "Case Study: Chapter 12: Death and Dying ",
      "Check point meeting- Module 4",
      "Chapter 04 Check Your Understanding 1: Applying Communication ",
      "Chapter 04 Check Your Understanding 2: Fundamentals of Psychology and Defense Mechanisms ",
      "Chapter 04 Review Questions: Applying Communication Skills ",
      "Chapter 04 Application Activity: Professional Communication ",
      "Chapter 04 Critical Thinking (with Video): Effective Communication ",
      "Helping Hands Article ",
      "Language and Culture Video ",
      "Communication Process Video ",
      "Chapter 04 Quiz: Applying Communication Skills ",
      "Chapter 04 - Applying Communication Skills- Requires Respondus LockDown Browser  + Webcam",
      "Check point meeting- Module 5",
    ]
  }
]

export default TEMA1000;