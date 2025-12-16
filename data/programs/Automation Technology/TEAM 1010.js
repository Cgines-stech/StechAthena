// TEAM 1010

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEAM1010 = [
  {
    id: 20001,
    programId: 2,
    courseNumber: "TEAM 1010",
    courseName: "Essential Skills & Safety",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 45.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Essential Skills and Safety course teaches the basic concepts and terminology used in automation technology. Students gain proficiency through applying concepts of  fasteners, measurement equipment, tolerances, and hand and power tool operations. The course covers safety and workplace skills as well as school and shop specific  operations, standards, and procedures.",

    courseObjectives: [
      "Demonstrate a working knowledge of general safety practices and procedures.",
      "Demonstrate a working knowledge of hand, power, and measurement tools.",
      "Demonstrate a working knowledge of hardware and fasteners.",
      "Apply working knowledge of workplace skills.",
      "Review school specific orientation, standards, and procedures."
    ],

    courseOutline: [
      { title: "Industrial Safety Equipment, Practices, and Applications", hours: 30 },
      { title: "Precision Measurement Equipment, Practices, and Applications", hours: 30 },
      { title: "Essential Skills", hours: 30 },
    ],

    courseBooks: [
      {
        name:
          "Cengage Unlimited Subscription",
        price: 150.0,
        isbn: "Syllabus",
        note: "Cengage Unlimited Subscription"
      }
    ],

    syllabiBooks: [
      {}
    ],
    
    courseTools: [
      {}
    ],

    courseCertifications: [
      {}
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
        {},
    ],

    courseAssignmentsandAsssessments: [
        "Orientation",
        "Orientation Acknowledgement",
        "Amatrol Tutorial.pptx",
        "Lab Packet Instructions.pptx",
        "Signing into Canvas_.pdf",
        "Chapter 1: Safety",
        "Chapter 1: Quiz",
        "Reading",
        "2.1 Unit Review",
        "2.1 Homework Assignment",
        "Personal Protective Equipment (PPE)",
        "Basic Tool Safety",
        "Electrical Safety Basics",
        "Lockout/Tagout (Slides)",
        "Safety Hands On Skills (Labs)",
        "How to Read Dial Calipers",
        "How to Identify Thread Pitch & Size",
        "How to Read Micrometers",
        "How to Read Rulers or Tape Measures",
        "How to Read Vernier Caliper",
        "How to Read Protractors",
        "How to Read Dial Indicators",
        "How to Read a Test Indicator",
        "Multi Tool Measurement Hands On Skill (Lab)",
        "Instructions! Start Here",
        "Essential Skill Hands on Skills (Labs)",
        "End of Course Survey",
        "Work Ethic Assessment",
        "Cengage Unlimited Contractual Agreement 12 months",
        "Cengage Unlimited Multi-term 12 months Instant Access"
    ]
  }
]

export default TEAM1010;