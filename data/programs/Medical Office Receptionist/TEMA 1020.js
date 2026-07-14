// TEMA 1020

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEMA1020 = [
  {
    id: 15004,
    programId: 1,
    courseNumber: "TEMA 1020",
    courseName: "Medical Office I",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 0.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Medical Office I course introduces administrative and general duties in a medical office. These duties include appointment scheduling, records management, electronic  health records use and management, written communications, health insurance, office equipment and management, as well as telephone procedures. This course will  provide hands-on practice of administrative skills and competency-based examinations.",

    courseObjectives: [
      "Demonstrate professionalism and responsibilities of the medical assistant through written, verbal, and electronic communication.",
      "Describe the administrative functions of a medical office.",
      "Demonstrate correct documentation in a medical record.",
      "Define types of information contained in a patient's medical record.",
    ],

    courseOutline: [
      { title: "Telephone and Written Communications", hours: 20},
      { title: "Office Environment", hours: 10},
      { title: "Scheduling Appointments", hours: 20},
      { title: "Medical Record and Documentation", hours: 10},
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
      "Chapter 19 Check Your Understanding 1: Proper Telephone Techniques ",
      "Chapter 19 Check Your Understanding 2: Prescription Refills and Difficult Callers ",
      "Chapter 19 Virtual Skills: Handling Incoming and Outgoing Calls",
      "Chapter 19 Virtual Skills Quiz: Handling Incoming and Outgoing Calls ",
      "Skill - Phone Calls Video ",
      "Skill Reflection 1 - Demonstrate Professional Telephone Techniques ",
      "Skill Reflection 1 - Document Telephone Messages Accurately",
      "Skill Reflection 1 - Telephone a Patient with Test Results ",
      "Skill Reflection 2 - Demonstrate Professional Telephone Techniques",
      "Skill Reflection 2- Document Telephone Messages Accurately ",
      "Skill Reflection 2 - Telephone a Patient with Test Results ",
      "Skill Reflection 3 - Demonstrate Professional Telephone Techniques ",
      "Skill Reflection 3- Document Telephone Messages Accurately ",
      "Skill Reflection 3- Telephone a Patient with Test Results ",
      "Demonstrate Professional Telephone Techniques Skill Pass-Off ",
      "Telephone a Patient with Test Results Skill Pass-Off ",
      "Document Telephone Messages Accurately Skill Pass-Off ",
      "Chapter 19 Critical Thinking (with Video): Telephone Skills ",
      "Develop a Current List of Community Resources Related to Patients' Health Care Needs ",
      "Chapter 19 Review Questions: Telephone Communications ",
      "Chapter 19 Quiz: Telephone Communications ",
      "Chapter 19 - Telephone Communications- Requires Respondus LockDown Browser  + Webcam",
      "Chapter 20 Check Your Understanding 2: Writing Skills and Professional Correspondence ",
      "Chapter 20 Check Your Understanding 2: Managing Mail and Facility Correspondence ",
      "Chapter 20 Review Questions: Written Communications ",
      "Chapter 20 Application Activity: Written Communications ",
      "Skill - Compose Professional Correspondence Utilizing Electronic Technology Video ",
      "Skill Reflection 1 - Compose Professional Correspondence Utilizing Electronic Technology ",
      "Skill Reflection 2 - Compose Professional Correspondence Utilizing Electronic Technology ",
      "Skill Reflection 3 - Compose Professional Correspondence Utilizing Electronic Technology ",
      "Compose Professional Correspondence Utilizing Electronic Technology Pass-off ",
      "Chapter 20 Critical Thinking: Consultation Requests ",
      "Chapter 20 Quiz: Written Communications ",
      "Chapter 20 - Written Communications- Requires Respondus LockDown Browser  + Webcam",
      "Business worksheet ",
      "Check point meeting- Module 1 ",
      "Chapter 21 Check Your Understanding 1: Opening and Closing the Office ",
      "Chapter 21 Check Your Understanding 2: Computers, Ergonomics, and Maintenance ",
      "Chapter 21 MOSS 4.0 Assessment: Logging In, Changing Your Password, and Logging Out ",
      "Perform an Inventory of Equipment and Supplies with Documentation ",
      "Chapter 21 Application Activity: The Office Environment ",
      "Chapter 21 Critical Thinking: Inventory Management ",
      "Use Proper Ergonomics ",
      "Perform Routine Maintenance of Administrative or Clinical Equipment ",
      "Chapter 21 Review Questions: The Office Environment ",
      "Chapter 21 Quiz: The Office Environment ",
      "Chapter 21 - The Office Environment, Computers, and Equipment- Requires Respondus LockDown Browser  + Webcam",
      "Check point meeting- Module 2 ",
      "Patient Registration Video ",
      "Chapter 22 Check Your Understanding 1: Scheduling Appointments ",
      "Chapter 22 Check Your Understanding 2: Receiving Patients ",
      "Chapter 22 Application Activity: Scheduling Appointment and Receiving Patients ",
      "Chapter 22 MOSS 4.0 Assessment: Entering New Patient Demographics (Alvarez) ",
      "Chapter 22 MOSS 4.0 Assessment: Entering New Patient Demographics (Bachmayer) ",
      "Chapter 22 MOSS 4.0 Assessment: Entering New Patient Demographics (Lindgren) ",
      "Chapter 22 MOSS 4.0 Assessment: Entering New Patient Demographics (Johnsson) ",
      "Chapter 22 MOSS 4.0 Assessment: Updating Established Patient Demographics (Blomquist) ",
      "Chapter 22 MOSS 4.0 Assessment: Updating Established Patient Demographics (Costa) ",
      "Chapter 22 MOSS 4.0 Assessment: Generating an Appointment Reference Sheet ",
      "Manage the Appointment Schedule Using Established Priorities ",
      "Chapter 22 MOSS 4.0 Assessment: Scheduling a New Patient Appointment (Alvarez) ",
      "Chapter 22 MOSS 4.0 Assessment: Scheduling a New Patient for Evaluation with In-Office Testing (Lorenzo) ",
      "Chapter 22 MOSS 4.0 Assessment: Scheduling a New Patient for Specialized Care (Weinert)",
      "Skill Reflection 1 - Schedule a Patient Procedure ",
      "Skill Reflection 2 - Schedule a Patient Procedure",
      "Skill Reflection 3 - Schedule a Patient Procedure",
      "Schedule a Patient Procedure Pass-off ",
      "Chapter 22 MOSS 4.0 Assessment: Scheduling a New Patient Consultation Appointment (Acuna) ",
      "Chapter 22 MOSS 4.0 Assessment: Scheduling an Established Patient for an Annual Physical Exam (Patel) ",
      "Chapter 22 MOSS 4.0 Assessment: Scheduling an Established Patient for a New Problem (Wolf) ",
      "Chapter 22 MOSS 4.0 Assessment: Scheduling an Established Patient with an Acute Problem (Berger) ",
      "Chapter 22 MOSS 4.0 Assessment: Scheduling Recurring Appointments for an Established Patient (Egger) ",
      "Chapter 22 MOSS 4.0 Assessment: Creating a Referral (Wolf) ",
      "Chapter 22 MOSS 4.0 Assessment: Sending Clinic Messages and Creating a Referral (Patel) ",
      "Chapter 22 MOSS 4.0 Assessment: Scheduling a Work-in Patient ",
      "Chapter 22 MOSS 4.0 Assessment: Scheduling a Walk-in Patient",
      "Chapter 22 MOSS 4.0 Assessment: Rescheduling a Patient Appointment ",
      "Chapter 22 MOSS 4.0 Assessment: Canceling a Patient Appointment",
      "Skill - Apply HIPAA Rules in Regard to Patient Privacy and Release of Information When Scheduling a Patient Procedure Video ",
      "Skill Reflection 1 - Apply HIPAA Rules in Regard to Patient Privacy and Release of Information When Scheduling a Patient Procedure ",
      "Skill Reflection 2 - Apply HIPAA Rules in Regard to Patient Privacy and Release of Information When Scheduling a Patient Procedure ",
      "Skill Reflection 3 - Apply HIPAA Rules in Regard to Patient Privacy and Release of Information When Scheduling a Patient Procedure ",
      "Apply HIPAA Rules in Regard to Patient Privacy and Release of Information When Scheduling a Patient Procedure Pass-off ",
      "Chapter 22 MOSS 4.0 Assessment: Checking in a New Patient (Alvarez) ",
      "Chapter 22 MOSS 4.0 Assessment: Checking in a New Patient (Acuna) ",
      "Chapter 22 MOSS 4.0 Assessment: Checking in a New Patient (Bachmayer) ",
      "Chapter 22 MOSS 4.0 Assessment: Checking in a New Patient (Johnsson) ",
      "Chapter 22 MOSS 4.0 Assessment: Checking in a New Patient (Lindgren) ",
      "Chapter 22 MOSS 4.0 Assessment: Checking in an Established Patient (Wolf) ",
      "Chapter 22 MOSS 4.0 Assessment: Checking in an Established Patient (Patel) ",
      "Chapter 22 MOSS 4.0 Assessment: Checking in an Established Patient (Costa) ",
      "Chapter 22 MOSS 4.0 Assessment: Checking in an Established Patient (Blomquist) ",
      "Chapter 22 MOSS 4.0 Assessment: ADVANCED Checking in a New Patient (Lorenzo) ",
      "Skill - Explain General Office Policies to the Patient ",
      "Skill Reflection 1 - Explain General Office Policies to the Patient ",
      "Skill Reflection 2 - Explain General Office Policies to the Patient ",
      "Skill Reflection 3 - Explain General Office Policies to the Patient ",
      "Explain General Office Policies to the Patient Pass-off ",
      "Chapter 22 Critical Thinking: New versus Established Patient Appointments ",
      "Chapter 22 Review Questions: Scheduling Appointments and Receiving Patients ",
      "Chapter 22 Quiz: Scheduling Appointments and Receiving Patients ",
      "Chapter 22 - Scheduling Appointments and Receiving Patients- Requires Respondus LockDown Browser  + Webcam",
      "Skills List ",
      "Check point meeting- Module 3 ",
      "Chapter 23 Check Your Understanding 1: The Medical Record ",
      "Chapter 23 Check Your Understanding 2: Record Filing ",
      "Release of Patient Information Form ",
      "Chapter 23 Application Activity: Medical Records",
      "Chapter 23 MOSS 4.0 Assessment: Tracking Merit-Based Incentive Payment System (MIPS) Measures ",
      "Chapter 23 MOSS 4.0 Assessment: Gathering Documents and Results for a Patient Appointment (Acuna)",
      "Chapter 23 MOSS 4.0 Assessment: Gathering Documents and Results for a Patient Appointment (Bachmayer) ",
      "Chapter 23 MOSS 4.0 Assessment: Gathering Documents and Results for a Patient Appointment (Lorenzo) (",
      "Chapter 23 MOSS 4.0 Assessment: Documenting a Clinical Encounter (Weinert) ",
      "Chapter 23 MOSS 4.0 Assessment: Documenting a Patient's Progress (Weinert) ",
      "Chapter 23 MOSS 4.0 Assessment: Documenting a Patient's Progress (Wolf) ",
      "Chapter 23 MOSS 4.0 Assessment: Releasing Medical Information ",
      "Perform Compliance Reporting Based on Public Health Statutes ",
      "Numeric and Alphabetic Filing Systems ",
      "Chapter 23 Critical Thinking: Documentation Standards ",
      "Chapter 23 Review Questions: The Medical Record, Documentation, and Filing ",
      "Chapter 23 Quiz: The Medical Record, Documentation, and Filing ",
      "Chapter 23 - The Medical Record, Documentation, and Filing- Requires Respondus LockDown Browser  + Webcam",
      "Check point meeting- Module 4 ",
    ]
  }
]

export default TEMA1020;