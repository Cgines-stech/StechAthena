// TEAM 1030

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEAM1030 = [
  {
    id: 20006,
    programId: 2,
    courseNumber: "TEAM 1030",
    courseName: "Hydraulics",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 45.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Hydraulics course prepares students with the fundamentals needed to work with hydraulic systems. Hydraulic systems are used in a variety of industries where extra  force may be required. Competencies include safety, maintenance, operation, installation, component identification, displacement principles, troubleshooting, analysis of  performance and efficiency, and design of hydraulic systems.",

    courseObjectives: [
      "Demonstrate a working knowledge of safety practices and procedures of hydraulic systems.",
      "Operate, install, maintain hydraulic systems, tools, and devices.",
      "Read, utilize, and design hydraulic system schematics.",
      "Analyze applications and design of hydraulic systems.",
      "Apply systems diagnostics and troubleshooting of hydraulic circuits.",
    ],

    courseOutline: [
      "Fluid Power Systems: Safety, Tools, and Devices",
      "Hydraulic Power System Principles and Applications",
      "Hydraulic Systems Circuit Design and Diagnostics",
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
      {}
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
        "Signing into Canvas_.pdf",
        "Hydraulics Hands On Skills (Labs) Download",
        "Hydraulics Hands On Skills (Labs)",
        "Hydraulics Power Systems",
        "Basic Hydraulics Circuits",
        "Principles of Hydraulic Pressure & Flow",
        "Hydraulic Speed Control Circuits",
        "End of Course Survey",
        "Work Ethic Assessment",
    ]
  }
]

export default TEAM1030;