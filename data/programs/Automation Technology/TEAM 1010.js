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
    instructionalType: "LEL",
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
      "Industrial Safety Equipment, Practices, and Applications",
      "Precision Measurement Equipment, Practices, and Applications",
      "Essential Skills"
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
        {
          startDate: "",
          endDate: "",
          Monday: ["8:00 AM - 11:00 AM", "3:00 PM - 6:00 PM"],
          Tuesday: ["8:00 AM - 11:00 AM", "3:00 PM - 6:00 PM"],
          Wednesday: ["8:00 AM - 11:00 AM", "3:00 PM - 6:00 PM"],
          Thursday: ["8:00 AM - 11:00 AM", "3:00 PM - 6:00 PM"],
          Friday: ["8:00 AM - 11:00 AM", "1:00 PM - 4:00 PM"],
          Saturday: "",
        }
    ],

    instructorContactInformation: [
        "Cody Post — cpost@stech.edu",
        "Tyson Schurtz — tschurtz@stech.edu",
        "Naomi Cook — ncook@stech.edu"
    ],

    course_Policies: [
        {
            title: "Course Grading",
            content: [
            "Students must achieve 80% (B-) or higher to pass graded work. Incomplete assignments must be redone to meet the required standards. Guidelines, rules, and expectations for completing assignments are provided in each course.",
            "High School Power School Grades: Quarter student grades will be determined by student progress percentage. Faculty will use the higher percentage of either 1) quarter progress, or 2) cumulative progress for the current training plan year."
            ]
            
        },
        gradeScale,
        {
            content2: [
            "Course Policies: In alignment with industry standards, students shall not be permitted to use cell phones in the lab area, except when researching information pertinent to coursework. Safety Glasses must be worn in the lab. No Loose Clothing when operating Equipment, No Shorts, flip flops, or sandals. Possession or use of controlled substances or their imitations in the lab, which can impair judgment or emergency response, is a severe safety violation. This disregard for safety may result in immediate withdrawal from the program. No one may work in the lab with any substance, legal or otherwise, that may impair them in any way."
            ]
            
        },
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