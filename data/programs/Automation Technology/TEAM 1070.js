// TEAM 1070

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEAM1070 = [
  {
    id: 20005,
    programId: 2,
    courseNumber: "TEAM 1070",
    courseName: "Programmable Logic Controllers",
    courseCredits: 4,
    statewideAlignment: "Aligned",
    courseClockHours: 120,
    courseTuition: 380.00,
    courseFee: 40.00,
    instructionalType: "LEL",

    courseDescription:
      "The Programmable Logic Controllers course teaches students to interface with programmable logic controllers (PLCs). Programmable logic controllers are the brains of all  modern automation technology systems. In this course students develop a working knowledge and skill set in the following competencies: ladder logic, programming  standards, hardware selection, various inputs and outputs, communication, troubleshooting, setup and installation.",

    courseObjectives: [
      "Demonstrate a working knowledge of safety practices and procedures.",
      "Operate, install, maintain, and program programmable logic controller systems.",
      "Demonstrate a working knowledge of ladder logic programming.",
      "Apply motor control logic within a programmable logic controller system.",
      "Apply timers and event sequencing within a programmable logic controller system.",
      "Configure inputs and outputs for various applications.",
      "Apply systems diagnostics and troubleshooting of programmable logic control circuit",
    ],

    courseOutline: [
      "Introduction to Programmable Controller Operations and Setup",
      "PLC Programming and Applications",
      "PLC Motor Controls",
      "PLC Timers and Event Sequencing",
      "Analog Inputs and Outputs",
    ],

    courseBooks: [
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
        "Amatrol Tutorial.pptx",
        "Lab Packet Instructions.pptx",
        "Signing into Canvas_.pdf",
        "How To Login to Amatrol Elearning",
        "Programmable Logic Controllers Hands On Skills (Labs)",
        "Introduction To Programmable Logic Controllers (PLC)",
        "Basic Panelview Plus Terminal Operations",
        "PLC Program Operations",
        "PLC Programming",
        "PLC Motor Control",
        "PLC Timer & Counter Instructions",
        "Event Sequencing",
        "Program Control Instructions",
        "Math & Data Move Instructions",
        "Panelview Plus Applications Editing",
        "Panelview Plus Applications Editing 2",
        "Analog Inputs",
        "Analog Outputs",
        "Variable Output Applications",
        "End of Course Survey",
        "Work Ethic Assessment",
    ]
  }
]

export default TEAM1070;