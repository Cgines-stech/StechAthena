// TEAM 1080

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEAM1080 = [
  {
    id: 20008,
    programId: 2,
    courseNumber: "TEAM 1080",
    courseName: "Applied System Diagnostics",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 10.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Applied System Diagnostics course covers the essentials of system diagnostics, the essence of what a technician does day to day. This course is designed to simulate  real world troubleshooting scenarios. Students apply troubleshooting methodology by using all of the skills that they have learned so far in the program. Students are  expected to properly diagnose, repair, and document their work on a variety of systems and challenges.",

    courseObjectives: [
      "Demonstrate a working knowledge of safety practices and procedures.",
      "Troubleshoot an entire system using pre-defined schematics.",
      "Complete standard technician documentation.",
      "Use troubleshooting instrumentation within multiple systems.",
    ],

    courseOutline: [
      "Introduction to Applied Systems Diagnostics",
      "Efficiency and Production",
      "General Maintenance Processes",
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
        "Signing into Canvas.pdf",
        "Applied Systems Diagnostics Hands On Skills (Labs)",
        "Introduction to Applied System Diagnostics",
        "Efficiency & Production",
        "General Maintenance Processes",
        "End Of Course Survey",
        "Work Ethic Assessment",
    ]
  }
]

export default TEAM1080;