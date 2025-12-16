// TEIT 1800

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEIT1800 = [
  {
    id: 70010,
    programId: 1,
    courseNumber: "TEIT 1800",
    courseName: "Certification Test Prep I",
    courseCredits: 1,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 0.00,
    instructionalType: "LAB",
    isElective: true,
    includeInProgramTotals: true,

    courseDescription:
      "Certification Test Prep 1 provides instruction in preparation for industry exams. Students will access additional testing materials and resources for their exam preparation.  Students will review the exam outline, objectives, grading scale, requirements, and recommendations for the specified industry exam.",

    courseObjectives: [
      "Identify areas for improvement of certification learning objectives.",
      "Demonstrate competency by passing practice tests.",
      "Demonstrate proficiency in test-taking strategies.",
      "Schedule and take the certification exam.",
    ],

    courseOutline: [
      { title: "Hardware, Software, Security and Operating Systems Practice Exams", hours: 15},
      { title: "Schedule and Take CompTIA A+ Exams", hours: 15},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {},
    ],
    
    courseTools: [
      {}
    ],

    courseCertifications: [
      {
        name: "220-1101 & 220-1102", 
        price: 240.0, 
        note: "" 
      },
    ],

    otherAssociatedCosts: [
      {},
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
      "Course Introduction and Standards",
      "Meet Your Instruction Team",
      "Rules of the Lab",
      "CS Code of Conduct Policy",
      "Submitting Assignments in Canvas",
      "Taking a Screenshot",
      "Orientation",
      "Syllabus Agreement",
      "Read Me First! Exam Orientation, Vouchers, Exam Objectives and Practice Questions",
      "B.1 - Prepare for CompTIAA+ Core 1 (220-1101) Certification",
      "B.1.3 - How to take the CompTIAA+ 220-1101 (Core 1) Exam",
      "B.1.4 - A+ 220-1101 (Core 1) Exam FAQs",
      "B.1.5 - Hints and Tips for taking the A+ 220-1101 (Core 1) Exam",
      "B.2.1 - CompTIAA+ 220-1101 (Core 1) Domain 1: Mobile Devices",
      "B.2 - CompTIAA+ Core 1 (220-1101) Domain Review (20 Questions)",
      "B.2.2 - CompTIAA+ 220-1101 (Core 1) Domain 2: Networking",
      "B.2.3 - CompTIAA+ 220-1101 (Core 1) Domain 3: Hardware",
      "B.2.4 - Comp TIA A+ 220-1101 (Core 1) Domain 4: Virtualization and Cloud Computing",
      "B.2.5 - CompTIAA+ 220-1101 (Core 1) Domain 5: Hardware and Network Troubleshooting",
      "B.3 - CompTIAA+ Core 1 (220-1101) Domain Review (All Questions)",
      "B.3.1- CompTIAA+ 220-1101 (Core 1) Domain 1: Mobile Devices",
      "B.3.2 - CompTIAA+ 220-1101 (Core 1) Domain 2: Networking",
      "B.3.3 - CompTIAA+ 220-1101 (Core 1) Domain 3: Hardware",
      "B.3.4 - Comp TIA A+ 220-1101 (Core 1) Domain 4: Virtualization and Cloud Computing",
      "B.3.5 - CompTIAA+ 220-1101 (Core 1) Domain 5: Hardware and Network Troubleshooting",
      "B.4 - CompTIAA+ Core 1 (220-1101) Certification Practice Exam",
      "Preparing for TestOut Certification",
      "CompTIA 220-1101 Certification Exam",
      "Gmetrix Exam 1",
      "Checkpoint Meeting Module 1",
      "Student Acknowledgement Statement Module 1",
      "B.1.1- CompTIAA+ 220-1101 (Core 1) Exam Objectives",
      "CompTIA 220-1002 Certification Exam",
      "End of Course Survey",
      "Course Completion Checkpoint Meeting",
      "End of Course Student Acknowledgement Statement",
      "C.1- Prepare for CompTIAA+ Core 2 (220-1102) Certification",
      "C.2 - CompTIAA+ Core 2 (220-1102) Domain Review (20 Questions)",
      "C.2.1 - CompTIAA+ 220-1102 (Core 2) Domain 1: Operating Systems",
      "C.2.2 - CompTIAA+ 220-1102 (Core 2) Domain 2: Security",
      "C.2.3 - CompTIAA+ 220-1102 (Core 2) Domain 3: Software Troubleshooting",
      "C.2.4 - CompTIAA+ 220-1102 (Core 2) Domain 4: Operational Procedures",
      "C.3 - CompTIAA+ Core 2 (220-1102) Domain Review (All Questions)",
      "C.3.1 - CompTIAA+ 220-1102 (Core 2) Domain 1: Operating Systems",
      "C.3.2 - CompTIAA+ 220-1102 (Core 2) Domain 2: Security",
      "C.3.3 - CompTIAA+ 220-1102 (Core 2) Domain 3: Software Troubleshooting",
      "C.3.4 - CompTIAA+ 220-1102 (Core 2) Domain 4: Operational Procedures",
      "C.4 - CompTIAA+ Core 2 (220-1102) Certification Practice Exam",
    ]
  }
]

export default TEIT1800;