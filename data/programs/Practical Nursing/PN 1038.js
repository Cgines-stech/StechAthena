// PN 1038

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const PN1038 = [
  {
    id: 80005,
    programId: 1,
    courseNumber: "PN 1038",
    courseName: "Skills and Simulation Lab I",
    courseCredits: 3,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 386.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      'Practical Nursing Skills and Simulation Lab I is designed to enhance your academic learning of nursing intervention concepts by helping nursing students gain an  understanding of their role in patient safety and utilize the opportunities to apply the knowledge, skill, and attitudes learned in the didactic courses through simulated  scenarios. With emphasis on the valuable opportunity of practicing skills on adult-sized “clients", this student-centric learning model allows “hands on” practice time with  sophisticated learning technology that emulates the medical environment. Throughout this course, you will traverse the bridge between classroom learning and real-world  nursing practice. By the end of this course you will have applied some of the most commonly performed fundamental skills within a simulated medical setting.',

    courseObjectives: [
      "Demonstrate basic clinical competence through performance of fundamental nursing skills (EPSLO # 1, 2, 3, 4, 5).",
      "Apply the aspects of NPSG to client care (EPSLO # 1, 2, 3, 4, 5).",
      "Utilize proper body mechanics while caring for the inactive client (EPSLO # 1, 2, 3, 4, 5).",
      'Identify use of "the Six Rights" when simulating medication administration (EPSLO # 1, 2, 3, 4, 5).',
      "Organize client information to successfully complete SBAR communication (EPSLO # 1, 2, 3, 4, 5).",
      "Apply fundamental nursing skills to client care in emergent situations (EPSLO # 1, 2, 3, 4, 5).",
      "Identify AACN Essentials while simulating care for clients (EPSLO # 1, 2, 3, 4, 5).",
      "Utilize the Nursing Process while simulating care for the terminally ill client (EPSLO # 1, 2, 3, 4, 5).",
      "Make use of electronic medical record technology to document client care (EPSLO # 1, 2, 3, 4, 5).",
    ],

    courseOutline: [
      { title: "Orientation, Aseptic Technique, Infection Control, and Personal Protective Equipment", hours: 9},
      { title: "Vital Signs, and Physical Assessment", hours: 9},
      { title: "Assisting the Inactive Client", hours: 9},
      { title: "Medication Administration", hours: 9},
      { title: "Special Examinations and Tests", hours: 9},
      { title: "Assisting with Basic Needs", hours: 9},
      { title: "Promoting Elimination", hours: 9},
      { title: "The Surgical Client", hours: 9},
      { title: "Intervening in Emergency Situations, and Intravenous Therapy", hours: 9},
      { title: "Caring for the Terminally Ill Client", hours: 9},
    ],

    courseBooks: [
      {
        name: "vSim for Medical Surgical", 
        price: 75.0,
        isbn: "9781469857312",
        note: ""
      },
      {
        name: "Simulation Learning System for LPN", 
        price: 120.0,
        isbn: "9781455700127",
        note: ""
      },
      {
        name: "Lippincott Skills ", 
        price: 140.0,
        isbn: "9781975182519",
        note: ""
      },
    ],

    syllabiBooks: [
      {
        name: "Docucare, Lippincott", 
        isbn: "9781451185171",
      },
      {
        name: "NCLEX-Passpoint", 
        isbn: "9781496309327",
      },
      {
        name: "Lippincott Skills ", 
        isbn: "9781975182519",
      },
      {
        name: "Fundamental Nursing Skills and Concepts", 
        isbn: "9781975141769",
      },
      {
        name: "VSIM for Nursing Fundamentals", 
        isbn: "9781975192464",
      },
      {
        name: "VSIM for Nursing Pharmacology", 
        isbn: "9781975198121",
      },
      {
        name: "Henke's Med-Math: Dosage Calculation, Preparation & Administration", 
        isbn: "9781975106522",
      },
      {
        name: "Lippincott Skills ", 
        isbn: "9781975182519",
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
      {
        termLabel: "Fall",
        startDate: "08-13-2025",
        endDate: "11-12-2025",
        Monday: "",
        Tuesday: "",
        Wednesday: "9:00 AM - 3:30 PM",
        Thursday: "",
        Friday: "",
        Saturday: "",
      },
      {
        termLabel: "Spring",
        startDate: "01-07-2026",
        endDate: "04-15-2026",
        Monday: "",
        Tuesday: "",
        Wednesday: "9:00 AM - 3:30 PM",
        Thursday: "",
        Friday: "",
        Saturday: "",
      },
    ],

    instructorContactInformation: [
      { 
        name: "Kylee McBride",
        title: "",
        email: "kmcbride@stech.edu",
        phone: "",
        office: "",
        instructorNote: ``},
    ],

    course_Policies: [
      {
        title: "Course Policies",
        content: [
          "<strong>Instructor Information and Course Requirements:</strong> The instructor will be available for more individualized questions during class breaks and by appointment. Students are expected to arrive on time to class ready to learn, having completed pre-class assignments and the required reading.",
          "<strong>Grading:</strong> A cumulative average 80% or better is expected on all course requirements. Evaluation methods will include: Tickets to class (10%), Tests and quizzes (40%), Assignments (25%), and Class participation/professional behavior (25%). If a student's grade falls below 80%, an Academic Intervention Plan will be initiated, requiring remediation for successful course completion. A cumulative test average of 80% is required to pass the course.",
          "<strong>Remediation:</strong> Remediation, if available, must be requested within 24 hours of the original assignment/test completion.",
          "<strong>Artificial Intelligence:</strong> The use of generative AI (ChatGPT etc.) is not banned for this course. AI may be used as a tool to assist with the generation of ideas, but it may not be used to replace student work and is not an approved source for cited information",
          "<strong>Attendance:</strong> It is expected students will attend all scheduled classes. In the event of an absence, the student is responsible for content discussed in class. Habitual tardiness or absences will be handled on a case by case basis.",
          "<strong>Cell Phone / Electronics:</strong> See Practical Nursing Orientation Guide.",
          "<strong>Industry Environment:</strong> The environment is a classroom setting with varied methods of instruction. Group projects and presentations are part of the curriculum. Laptop computers are required to access the electronic library and a host of other learning modalities. The majority of the time spent in the classroom will be sitting, with scheduled breaks as the lesson plan allows.",
        ]  
      },
      {
        title: "Attendance: Didactic Class",
        content: [
          "The didactic curriculum will be covered over two semesters. Students who are not in class will be unable to learn and miss needed information; therefore, attendance is mandatory. If an absence is unavoidable, the student must notify the instructor prior to the absence when possible. An absence is defined as more than 15 minutes of missed class time, regardless of whether missed time occurs at the beginning, middle, or end of a scheduled class. Following the second absence, each subsequent absence will result in a 5% reduction in the student's overall theory grade. Breaks will be provided at specified intervals throughout the class sessions to attend to personal needs. Mobile phones and other electronic devices must remain in silent mode throughout the duration of the class. Please do not disrupt the class by receiving calls, being paged, or leaving inappropriately. Excessive text messaging/social media during class will not be tolerated. Use of the technologies, as mentioned above, during class will result in students being asked to leave for the remainder of the class with an absence recorded on their attendance record. Should any specific issues arise, students should discuss them with the instructor.",
        ]  
      },
      {
        title: "Punctuality: Didactic Class",
        content: [
          "Arriving late, leaving early, or frequently exiting the classroom during class disrupts the instructor and classmates. In order to mirror professional workplace standards, punctuality will be tracked. Tardiness is defined as missing 1 to 14 minutes of class time after the class has started. The determination of tardiness will be made at the discretion of the faculty.",
          "Habitual tardiness in the didactic setting will prompt the implementation of an academic intervention plan, which will be structured according to the following scale:",
          "• 2 tardies/course = verbal warning, each subsequent tardy will result in a 2% reduction in the student's overall theory grade.",
          "• 3 tardies/course = academic intervention plan and a 2% deduction to their overall grade ",
          "• 5 tardies/course = dismissal from program",
          "Students who are late or absent on the day of a practical exam will be required to complete their exam within 24-hours, or when an instructor is available. If a practical exam is not passed on the first attempt, a remediation assignment must be completed prior to completing a remedial practical exam. The remedial practical exam must be completed within 7 days of the original exam date. Any remedial exam completed after the initial 7 day window will incur a 5% deduction per day for up to 7 days, after which no remediation will be available. ",
        ]  
      },
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "Skills & Simulation I Agenda Fall 2025",
      "Nursing StudentPolicy & Orientation Guide.pdf",
      "Introduction and CPR",
      "Week 1 Participation",
      "Healthcare Experience",
      "CPR Card",
      "Scavenger Hunt Orientation",
      "Syllabus Agreement",
      "Care Plans",
      "Week 2 Participation",
      "Nursing Care Plan Video",
      "Nursing Care Plan",
      "Ticket to class Day 1",
      "DocuCare Scavenger Hunt",
      "Edith Jacobsen Docucare",
      "Edith Jacobsen VSIM",
      "Communication & infection Control",
      "Week 3 Participation",
      "Ticket to Class Day 2",
      "Medical Abbreviations Worksheet",
      "Abbreviations Quiz- Requires Respondus LockDown Browser",
      "Using Personal Protective Equipment (PPE) _ CDC.pdf",
      "Donning PPE",
      "Doffing PPE Example 1",
      "Doffing Example 2",
      "Creating a Sterile Field",
      "Adding Items to a Sterile Field",
      "Sterile Gloves",
      "SBAR.pptx",
      "Head to Toe Assessment.docx.pdf",
      "N95 Fit Test Card",
      "Physical Assessment & Safety INFECTION CONTROL PASS",
      "OFF DAY",
      "Week 4 Participation",
      "Ticket to Class Day 3",
      "Interactive Case Studies: Asepsis & Vital Signs",
      "Medical Positions",
      "Case Study 14: Comfort",
      "Head-to-Toe Assessment",
      "Head to lioe Documentation",
      "Physical Assessment & Safety",
      "Ticket to Class Day 4",
      "Week 5 Participation",
      "Vital Signs Log",
      "Case Study 14: Impaired Tissue Integrity and Pain",
      "Case Study 14: Acute Pain, Conceptual Debriefing & Case",
      "Reflection, Quiz",
      "Station Verification 1/15/23",
      "Assisting with Basic Needs PASS OFF: Opening/Closing, Vital",
      "Signs, HeadtoToe Assessments",
      "Week 6 Participation",
      "Ticket to Class Week 5",
      "Ticket to Class Week 6",
      "CPM Machine",
      "Assisting the Inactive Client",
      "Week 7 Participation",
      "Case Study: Confusion, Dementia, & Loss of Independence",
      "Case Study Chapter 14 #1",
      "Ticket to Class Week 7",
      "Head to lioe Practice Assessment",
      "The Surgical Client, Promoting Elimination",
      "Week 8 Participation",
      "Inserting a Nasogastric Tube",
      "Foley Catheter- Female",
      "Ticket to Class: Week 8",
      "Foley Catheter- Male",
      "Case Study #2 & Compare Quiz",
      "Medication Administration",
      "Week 9 Participation",
      "Drug dose calculation worksheet",
      "Christopher Parrish VSIM",
      "Ticket to Class Week 9",
      "IV I PASS OFF: NG & Foley",
      "Week 10 Participation",
      "IVTherapy Powerpoints",
      "IV Set Up",
      "Veins for IV Use",
      "IV Video Assignment",
      "IVVideos",
      "Chapter 35 Assignment",
      "Mastery Quiz Chapter 35",
      "Chapter 6 proficiency test",
      "I have completed the IV course and am ready to test",
      "IVTest- Requires Respondus LockDown Browser",
      "IV II",
      "Week 11 Participation",
      "IV PASS OFF DAY",
      "Week 12 Participation",
      "Lab Final Simulation PASS POINT FINAL EXAM",
      "Week 13 Participation",
      "IV Pass Off #1",
      "IV Pass Off #2- Blood Draw",
      "Chapter 13 Case #2",
      "Week 14 Participation",
      "Sterile Wound Dressing Change Pass Off",
      "Sterile Dressing rubric.docx",
      "Test Taking Strategies",
      "Week 15 Participation",
      "Braden Scale Assignment",
      "Fall Risk Assessment Assignment",
      "Seizure P,recautions",
      "Skills Checklist Assignment Upload",
      "Drug Dose Self Test 3",
      "Chapter 11, Case Study 1: Weight Loss and Constipation",
      "Skills Lab Checklist",
      "Skills Final- Rubric Upload",
      "Skills final Narrative Charting",
      "PassPoint Remediation",
      "Medical Terminology_ Chapter 1.pp1tx",
      "Medical Terminology Flashcards.pdf",
      "ATI Vital Signs",
      "Personal !Hygiene",
      "ATI -Transferring and Moving Patients",
      "ATI - Restraints",
      "ATI - Range of Motion",
      "ATI Specimen Testing",
      "Physical Assessment Head-to-Toe",
      "Written Guide to Foley Catheter Insertion",
      "ATI - Sterile Field",
      "ATI - Foley Catheter",
      "Written Guidelines on Giving Enemas",
      "How to Give a Soap Suds Enema",
      "Ory Dressing Change (non-sterile)",
      "Dressing Change with Irrigation and Sterile Packing",
      "Written Guide for Nasogastric Insertion",
      "Insertion of an NG Tube",
      "Gas.tric Decompression",
      "Care and Maintenance of an NG Tube",
      "Removing an NG Tube",
      "EKG Lead Placement",
      "Quvi & PureWick Videos",
      "Practice Video",
      "UBtech Standard Format.docx",
      "Evaluation",
    ]
  }
]

export default PN1038;