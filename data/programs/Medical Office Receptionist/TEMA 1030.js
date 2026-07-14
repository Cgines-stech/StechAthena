// TEMA 1030

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEMA1030 = [
  {
    id: 15005,
    programId: 1,
    courseNumber: "TEMA 1030",
    courseName: "Medical Office II",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 0.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Medical Office II course introduces students to the management of all aspects of medical office finances. Instruction includes diagnostic and procedural coding for  insurance billing. Students will track claims reimbursement, process patient statements, and review fee collection processes.",

    courseObjectives: [
      "Describe how to use procedural, diagnostic, and HCPCS coding required for insurance paperwork.",
      "Demonstrate professionalism in handling patient accounts and medical records.",
      "Describe banking and accounting procedures as related to the ambulatory care setting.",
      "Define healthcare insurance types, utilization, and guidelines.",
    ],

    courseOutline: [
      { title: "Health Insurance", hours: 10},
      { title: "Procedural and Diagnostic Coding", hours: 10},
      { title: "Patient Accounts and Billing", hours: 20},
      { title: "Banking and Accounting Procedures", hours: 20},
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
      "Welcome ",
      "Syllabus and Course Agreement ",
      "Course Timeline ",
      "Chapter 24 Check Your Understanding 1: Basic Health Insurance Concepts and Eligibility ",
      "Chapter 24 Check Your Understanding 2: Types of Health Insurance Plans and Management ",
      "Chapter 24 Critical Thinking (with Video): Verifying Insurance Information ",
      "Insurance Card Worksheet ",
      "Preauthorization Request Form Activity ",
      "Chapter 24 MOSS 4.0 Assessment: Submitting a Preauthorization Form (Torres) ",
      "Chapter 24 Virtual Skills: Verifying Insurance Coverage and Eligibility for Services ",
      "Chapter 24 Virtual Skills Quiz: Verifying Insurance Coverage and Eligibility for Services ",
      "Chapter 24 Review Questions: Health Insurance ",
      "Chapter 24 Quiz: Health Insurance ",
      "Chapter 24 - Health Insurance- Requires Respondus LockDown Browser ",
      "Check point meeting- Module 1",
      "Chapter 25 Check Your Understanding 1: Procedural Coding Concepts ",
      "Chapter 25 Check Your Understanding 2: Diagnostic Coding Concepts ",
      "Chapter 25 Application Activity: Procedural and Diagnostic Coding ",
      "Chapter 25 Critical Thinking: Coding Consultation Services ",
      "Chapter 25 Review Questions: Procedural and Diagnostic Coding ",
      "Chapter 25 Quiz: Procedural and Diagnostic Coding ",
      "Chapter 25 - Procedural and Diagnostic Coding- Requires Respondus LockDown Browser  + Webcam",
      "Check point meeting- Module 2 ",
      "Chapter 26 Check Your Understanding 1: Patient Accounts Concepts ",
      "Chapter 26 Check Your Understanding 2: Patient Fees ",
      "Chapter 26 Review Questions: Patient Accounts ",
      "Chapter 26 Critical Thinking: Discussing a Patient's Billing Record and Payment ",
      "Chapter 26 Quiz: Patient Accounts ",
      "Chapter 26 Virtual Skills: Assisting Patients in Navigating Billing Issues and Concerns ",
      "Chapter 26 Virtual Skills Quiz: Assisting Patients in Navigating Billing Issues and Concerns ",
      "Chapter 26 MOSS 4.0 Assessment: Preparing the Encounter Form (Acuna)",
      "Chapter 26 MOSS 4.0 Assessment: Preparing the Encounter Form (Blomquist) ",
      "Chapter 26 MOSS 4.0 Assessment: Preparing the Encounter Form (Fransson) ",
      "Chapter 26 MOSS 4.0 Assessment: Preparing the Encounter Form (Lorenzo) ",
      "Chapter 26 MOSS 4.0 Assessment: Preparing the Encounter Form (Patel) ",
      "Chapter 26 MOSS 4.0 Assessment: Preparing the Encounter Form (Weinert) ",
      "Chapter 26 MOSS 4.0 Assessment: Preparing the Encounter Form (Johnsson) ",
      "Chapter 26 MOSS 4.0 Assessment: Preparing the Encounter Form (Alvarez) ",
      "Chapter 26 MOSS 4.0 Assessment: ADVANCED Preparing the Encounter Form (Lindgren) ",
      "Chapter 26 MOSS 4.0 Assessment: ADVANCED Preparing the Encounter Form (Wolf) ",
      "Chapter 26 MOSS 4.0 Assessment: Running a Journal/Daysheet ",
      "Chapter 26 - Patient Accounts- Requires Respondus LockDown Browser  + Webcam",
      "Chapter 27 Check Your Understanding 1: Preparing Insurance Claims",
      "Chapter 27 Check Your Understanding 2: Posting Insurance Payments ",
      "Chapter 27 Review Questions: Preparing Insurance Claims and Posting Insurance Payments",
      "Chapter 27 Application Activity: Preparing Insurance Claims and Posting Insurance Payments ",
      "Chapter 27 Critical Thinking: Improving the Claim Submission Process ",
      "Chapter 27 Quiz: Preparing Insurance Claims and Posting Insurance Payments ",
      "Chapter 27 MOSS 4.0 Assessment: Generating Paper (CMS-1500) Claims (FlexiHealth PPO) ",
      "Chapter 27 MOSS 4.0 Assessment: Batching and Billing Electronic Claims (CareONE BC/BS) ",
      "Chapter 27 MOSS 4.0 Assessment: Batching and Billing Electronic Claims (Signal HMO) ",
      "Chapter 27 MOSS 4.0 Assessment: Posting an Insurance Payment to One Patient Account Using a Remittance Advice (Medicare) ",
      "Chapter 27 MOSS 4.0 Assessment: Posting Insurance Payments to Multiple Patient Accounts Using a Remittance Advice (Medicare) ",
      "Chapter 27 MOSS 4.0 Assessment: Posting Insurance Payments to Multiple Patient Accounts Using a Remittance Advice (FlexiHealth PPO) ",
      "Chapter 27 MOSS 4.0 Assessment: Posting Insurance Payments to Multiple Patient Accounts Using an Electronic Remittance Advice (Signal HMO)",
      "Chapter 27 MOSS 4.0 Assessment: ADVANCED Posting Insurance Payments to Multiple Patient Accounts Using a Remittance Advice (Twin Peaks Medicare Advantage)",
      "Chapter 27 MOSS 4.0 Assessment: ADVANCED Posting Insurance Payments to Multiple Patient Accounts Using a Remittance Advice (CareONE BC/BS) ",
      "Chapter 27 MOSS 4.0 Assessment: Posting a Deductible from a Remittance Advice (Tate) ",
      "Chapter 27 MOSS 4.0 Assessment: Posting a Non-Covered Service from an Explanation of Benefits (Bishop) ",
      "Chapter 27 MOSS 4.0 Assessment: Posting a Denial from an Explanation of Benefits (Shulman) ",
      "Chapter 27 MOSS 4.0 Assessment: Billing a Secondary Insurance after Medicare Pays ",
      "Chapter 27 MOSS 4.0 Assessment: Billing Medicare as a Secondary Payer (MSP) ",
      "Chapter 27 MOSS 4.0 Assessment: Posting Secondary Insurance Payments to Multiple Patient Accounts Using a Remittance Advice (Century SeniorGap) ",
      "Chapter 27 - Preparing Insurance Claims and Posting Insurance Payments- Requires Respondus LockDown Browser  + Webcam",
      "Chapter 28 Check Your Understanding 1: Billing and Payment Posting )",
      "Chapter 28 Check Your Understanding 2: Collections and Compliance ",
      "Chapter 28 Review Questions: Patient Billing, Posting Patient Payments, and Collecting Fees ",
      "Chapter 28 Application Activity: Posting Charges and Payments and Collecting Fees ",
      "Chapter 28 Critical Thinking: Collections ",
      "Chapter 28 Quiz: Patient Billing, Posting Patient Payments, and Collecting Fees ",
      "Chapter 28 MOSS 4.0 Assessment: Batch Invoicing to Patients with Balances Due ",
      "Chapter 28 MOSS 4.0 Assessment: Posting a Co-Payment (Lindgren) ",
      "Chapter 28 MOSS 4.0 Assessment: Posting a Co-Payment (Bachmayer) ",
      "Chapter 28 MOSS 4.0 Assessment: Posting a Co-Payment (Johnsson) ",
      "Chapter 28 MOSS 4.0 Assessment: Posting a Co-Payment (Acuna) ",
      "Chapter 28 MOSS 4.0 Assessment: ADVANCED Posting a Co-Payment (Lorenzo) ",
      "Chapter 28 MOSS 4.0 Assessment: Posting an Adjustment for a Non-Sufficient Funds Check (NSF) (Bachmayer) ",
      "Chapter 28 MOSS 4.0 Assessment: Processing a Credit Balance (Jackson) ",
      "Chapter 28 MOSS 4.0 Assessment: Following up on a Denial (Chawla) ",
      "Chapter 28 MOSS 4.0 Assessment: Tracking Pending Payments by Running an Insurance Aging Report ",
      "Chapter 28 MOSS 4.0 Assessment: Generating a Collection Letter (30 or More Days Overdue) ",
      "Chapter 28 MOSS 4.0 Assessment: Generating a Collection Letter (60 or More Days Overdue) ",
      "Chapter 28 MOSS 4.0 Assessment: ADVANCED Generating a Collection Letter (90 or More Days Overdue) ",
      "Chapter 28 MOSS 4.0 Assessment: Creating a Custom Collection Letter ",
      "Chapter 28 - Patient Billing, Posting Patient Payments, and Collecting Fees- Requires Respondus LockDown Browser  + Webcam",
      "Check point meeting- Module 3",
      "Chapter 29 Check Your Understanding 1: Banking Basics ",
      "Chapter 29 Check Your Understanding 2: Checks, Bank Deposits, and Reconciliation ",
      "Prepare a Check Activity ",
      "Prepare a Deposit Slip Activity ",
      "Chapter 29 Application Activity: Banking Procedures ",
      "Chapter 29 Critical Thinking: Handling Currency ",
      "Chapter 29 Review Questions: Banking Procedures ",
      "Chapter 29 Quiz: Banking Procedures ",
      "Chapter 29 - Banking Procedures- Requires Respondus LockDown Browser",
      "Chapter 30 Check Your Understanding 1: Accounts Payable ",
      "Chapter 30 Check Your Understanding 2: Accounting Procedures ",
      "Chapter 30 Application Activity: Accounts Payable and Accounting Procedures ",
      "Establish and Maintain a Petty Cash Fund Activity ",
      "Chapter 30 Critical Thinking: A/R Ratio ",
      "Chapter 30 Review Questions: Accounts Payable and Accounting Procedures ",
      "Chapter 30 Quiz: Accounts Payable and Accounting Procedures ",
      "Chapter 30 - Accounts Payable and Accounting Procedures- Requires Respondus LockDown Browser  + Webcam",
      "Check point meeting- Module 4 ",
    ]
  }
]

export default TEMA1030;