// TEAM 1060

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEAM1060 = [
  {
    id: 20004,
    programId: 2,
    courseNumber: "TEAM 1060",
    courseName: "Motor Controls",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 45.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Motor Controls course prepares students with a working knowledge and understanding of real-world motor control operations. Students who complete this course are  able to proficiently set up and design motor control circuits utilizing schematics. Students in this course identify components and utilize instrumentation to troubleshoot and  maintain systems.",

    courseObjectives: [
      "Demonstrate a working knowledge of safety practices and procedures.",
      "Operate, install, maintain, and design motor control circuits.",
      "Demonstrate a working knowledge of commonly used components, devices, and tools.",
      "Demonstrate a working knowledge of various control systems.",
      "Apply systems diagnostics and troubleshooting of motor control circuits",
    ],

    courseOutline: [
      "Introduction to Electric Motor Controls and Schematic Design",
      "Electric Motor Control Component, Devices, and Applications",
      "Manual and Automatic Motor Controls",
      "Systems Diagnostics and Troubleshooting",
      "Variable Frequency Drives",
    ],

    courseBooks: [
      {}
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
        {}
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
        "Amatrol Tutorial.pptx",
        "Lab Packet Instructions.pptx",
        "Signing into Canvas.pdf",
        "Motor Controls Hands On Skills (Labs)",
        "Introduction to Electrical Motor Control",
        "Manual Motor Control & Overload Protection",
        "Transformers-2",
        "Control Ladder Logic-2",
        "Control Relays & Motor Starters-2",
        "Introduction to Troubleshooting",
        "Systems Troubleshooting",
        "Reversing Motor Controls",
        "Automatic Input Devices",
        "Basic Timer Control: On-Delay & Off-Delay",
        "Introduction to VFD",
        "VFD Speed & Torque Controls",
        "VFD Acceleration, Deceleration & Braking",
        "VFD Fault Diagnostics & Troubleshooting",
        "End of Course Survey",
        "Work Ethic Assessment",
    ]
  }
]

export default TEAM1060;