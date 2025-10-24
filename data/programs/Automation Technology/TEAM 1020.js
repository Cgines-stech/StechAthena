// TEAM 1020

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEAM1020 = [
  {
    id: 20007,
    programId: 2,
    courseNumber: "TEAM 1020",
    courseName: "Pneumatics",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 25.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Pneumatics course prepares students with the fundamentals needed to work with pneumatic systems. Pneumatic systems are used in a variety of industries where  cleaner, faster, and more cost-effective work needs to be done. Competencies include safety, maintenance, operation, installation, component identification, principles of  pressure and flow, air logic, troubleshooting, analysis of performance and efficiency, and design of pneumatic systems.",

    courseObjectives: [
      "Demonstrate a working knowledge of safety practices and procedures of pneumatic systems.",
      "Operate, install, and maintain pneumatic systems, tools, and devices.",
      "Read, utilize, and design pneumatic systems schematics.",
      "Analyze applications and design pneumatic systems.",
      "Apply systems diagnostics and troubleshooting of pneumatic circuits.",
    ],

    courseOutline: [
      "Fluid Power Systems: Safety, Tools, and Devices",
      "Pneumatic Power System Principles and Applications",
      "Pneumatic Systems Circuit Design and Diagnostics",
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
        "Signing into Canvas_.pdf",
        "Pneumatics Hands On Skills (Labs) Download",
        "Pneumatics Hands On Skills (Labs)",
        "Pneumatic Power Systems",
        "Basic Pneumatic Circuits",
        "Principles of Pneumatic Pressure & Flow",
        "Pneumatic Speed Control Circuits",
        "Advanced Theory & Reference Materials",
        "End of Course Survey",
        "Work Ethic Assessment",
    ]
  }
]

export default TEAM1020;