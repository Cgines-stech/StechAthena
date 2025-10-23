// TEAM 1510

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEAM1510 = [
  {
    id: 20011,
    programId: 2,
    courseNumber: "TEAM 1510",
    courseName: "Process Control Components and Systems",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 25.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "In this course, students are introduced to a wide variety of commonly used process control systems, controllers, Pumps, Valves, and Compressors. This is to include the  diagnostics, tear down, repair, and rebuild of commonly used pump types and compressors. Students will learn about various types of valves, controllers, and their  application, diagnostics, and repair procedures.",

    courseObjectives: [
      "Identify and diagnose control systems, components, and circuits.",
      "Identify, use, diagnose, and repair commonly used pumps and compressors.",
      "Design, use, control, and program advanced process controllers and systems.",
    ],

    courseOutline: [
      "Introduction to Process Control Systems and Components",
      "Controllers and Measurements",
      "Systems Analysis and Measurements",
      "Pumps and Compressor Tear Down and Rebuild",
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
        "Signing into Canvas.pdf",
        "Process Control & Instrumentation Hands On Skills (Labs)",
        "Intro to Process Control Systems",
        "Instrument Tags-2",
        "Piping & Instrumentation Diagrams",
        "Loop Controllers",
        "Final Control Elements",
        "Level Measurements",
        "Liquid Level Control",
        "Methods Of Automatic Control",
        "Basic Flow Measurement & Control",
        "Control Loop Performance",
        "Pump Tear Down & Rebuild",
        "Compressor Tear Down & Rebuild",
        "End of Course Survey",
        "Work Ethic Assessment",
    ]
  }
]

export default TEAM1510;