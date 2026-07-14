// TEMA 1065

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEMA1065 = [
  {
    id: 14004,
    programId: 1,
    courseNumber: "TEMA 1065",
    courseName: "Clinical Procedures Lab",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 135.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Clinical Procedures Lab course is an introduction to working in an ambulatory outpatient clinic setting, understanding the role of a medical assistant and patient care. The  content of this course will focus on the skills of infection control, medical asepsis, taking patient histories, performing patient assessments including vital signs, and preparing for and  assisting the provider with examinations.",

    courseObjectives: [
      "Demonstrate how to protect yourself and patients from infections, communicable diseases, and transmissions in the healthcare setting per federal, state, and local health laws, regulations, and recommendations.",
      "Professionally obtain a patient's health information and different aspects of the chief medical complaint.",
      "Accurately obtain, measure, and record vital signs.",
      "Demonstrate the medical assistant’s skills in preparing and assisting in the physical exam.",
    ],

    courseOutline: [
      { title: "Infection Control and Medical Asepsis", hours: 20},
      { title: "Medical History and Patient Screening", hours: 10},
      { title: "Vital Signs", hours: 20},
      { title: "Patient Exams", hours: 10},
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
      "Skill - Hand Washing for Medical Asepsis , Gloves and PPE Videos ",
      "Skill Reflection 1 - Personal Protective Equipment (PPE) ",
      "Skill Reflection 2 - Personal Protective Equipment (PPE)",
      "Skill Reflection 3 - Personal Protective Equipment (PPE) ",
      "Personal Protective Equipment (PPE) Skill Pass-Off ",
      "Skill - Sanitize Instruments, Wrap Items, and Perform Autoclave Sterilization Videos ",
      "Skill Reflection 1 - Sanitize Instruments ",
      "Skill Reflection 1 - Wrap Items for Autoclaving ",
      "Skill Reflection 1 - Perform Autoclave Sterilization ",
      "Skill Reflection 2 - Sanitize Instruments",
      "Skill Reflection 2 - Perform Autoclave Sterilization ",
      "Skill Reflection 2 - Wrap Items for Autoclaving ",
      "Skill Reflection 3 - Sanitize Instruments ",
      "Skill Reflection 3 - Wrap Items for Autoclaving ",
      "Skill Reflection 3 - Perform Autoclave Sterilization ",
      "Sanitize Instruments, Wrap Items, and Perform Autoclave Sterilization Skills Pass-Off ",
      "Check point meeting- Module 1 ",
      "Skill - Perform Patient Screening Video",
      "Skill Reflection 1 - Perform Patient Screening ",
      "Skill Reflection 2 - Perform Patient Screening ",
      "Skill Reflection 3- Perform Patient Screening ",
      "Perform Patient Screening Skills-Off ",
      "Skill - Obtain Patient Health History Video ",
      "Skill Reflection 1 - Obtain Patient Health History ",
      "Skill Reflection 2- Obtain Patient Health History ",
      "Skill Reflection 3 - Obtain Patient Health History ",
      "Obtain Patient Health History Skills Pass-Off ",
      "Skill - Participate in a Telehealth Interaction with a Patient Video ",
      "Skill Reflection 1 - Participate in a Telehealth Interaction with a Patient ",
      "Skill Reflection 2 - Participate in a Telehealth Interaction with a Patient ",
      "Skill Reflection 3 - Participate in a Telehealth Interaction with a Patient ",
      "Participate in a Telehealth Interaction with a Patient Skill Pass-Off ",
      "Check point meeting- Module 2 ",
      "Skill - Vital Signs Videos ",
      "Skill Reflection 1 - Measure Height and Weight ",
      "Skill Reflection 2- Measure Height and Weight ",
      "Skill Reflection 3- Measure Height and Weight ",
      "Skill Reflection 1 - Oral Temperature with an Electronic Thermometer ",
      "Skill Reflection 2 - Oral Temperature with an Electronic Thermometer ",
      "Skill Reflection 3 - Oral Temperature with an Electronic Thermometer ",
      "Skill Reflection 1 - Axillary Temperature ",
      "Skill Reflection 2- Axillary Temperature ",
      "Skill Reflection 3- Axillary Temperature ",
      "Skill Reflection 1 - Tympanic Temperature ",
      "Skill Reflection 2- Tympanic Temperature ",
      "Skill Reflection 3- Tympanic Temperature ",
      "Skill Reflection 1 - Temporal Artery Temperature",
      "Skill Reflection 2- Temporal Artery Temperature ",
      "Skill Reflection 3- Temporal Artery Temperature ",
      "Skill Reflection 1 - Measure Radial Pulse and Respirations ",
      "Skill Reflection 2- Measure Radial Pulse and Respirations ",
      "Skill Reflection 3- Measure Radial Pulse and Respirations ",
      "Skill Reflection 1 - Measure Blood Pressure ",
      "Skill Reflection 5 - Measure Blood Pressure ",
      "Skill Reflection 10 - Measure Blood Pressure ",
      "Skill Reflection 1 - Measure Apical Pulse ",
      "Skill Reflection 2 - Measure Apical Pulse ",
      "Skill Reflection 3- Measure Apical Pulse",
      "Vital Signs Pass-Off ",
      "Check point meeting- Module 3 ",
      "Skill - Prepare and Maintain Exam Areas Video",
      "Skill Reflection 1 - Prepare and Maintain Exam Areas ",
      "Skill Reflection 2 - Prepare and Maintain Exam Areas ",
      "Skill Reflection 3- Prepare and Maintain Exam Areas ",
      "Prepare and Maintain Exam Areas Skill Pass-Off ",
      "Skill - Transfer Patient from Wheelchair Video ",
      "Skill Reflection 1 - Transfer Patient from Wheelchair ",
      "Skill Reflection 2 - Transfer Patient from Wheelchair ",
      "Skill Reflection 3 - Transfer Patient from Wheelchair ",
      "Transfer Patient from Wheelchair Skill Pass-Off ",
      "Skill - Positioning Patient for Exam ",
      "Skill Reflection 1 - Positioning Patient for Exam ",
      "Skill Reflection 2 - Positioning Patient for Exam ",
      "Skill Reflection 3- Positioning Patient for Exam ",
      "Positioning Patient for Exam Skill Pass-Off ",
      "Check point meeting- Module 4 ",
    ]
  }
]

export default TEMA1065;