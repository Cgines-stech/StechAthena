// TEAM 1640

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEAM1640 = [
  {
    id: 20012,
    programId: 2,
    courseNumber: "TEAM 1640",
    courseName: "Electrical Systems II",
    courseCredits: 1,
    statewideAlignment: "Aligned",
    courseClockHours: 30,
    courseTuition: 190.00,
    courseFee: 25.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "In this course, students will study and master the wiring and use of real-world components such as a 3-phase motor, pushbuttons, switches, valves, and the use of  a 24VDC control power supply. Students will use these components to study electrical control system wiring, pneumatic control circuit wiring, conductors, disconnects, and  overcurrent protection and related applications. The combination of industrial components, and comprehensive curriculum will reinforce electrical wiring concepts and skills  to build up the students’ confidence and competence.",

    courseObjectives: [
      "Install control wiring in an electrical panel to control and manipulate commonly used components and motors.",
      "Understand, identify, and calculate the proper wire size, materials, and insulation required for different circuits, applications, and panel requirements.",
      "Install, wire, and monitor different types of control components and sensors. Including but not limited to contacts, momentary push buttons, limit switches solenoids, and pressure switches.",
    ],

    courseOutline: [
      "Intro to Electrical Control Wiring, Print Reading, Tools, and Components",
      "Electrical Panel Wiring and Systems Diagnostics",
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
        "Advanced Electrical Systems Labs",
        "Introduction to Electrical Control Wiring",
        "Wiring Electrical Panels",
        "Pneumatics Control Circuit Wiring",
        "End of Course Survey",
        "Work Ethic Assessment",
    ]
  }
]

export default TEAM1640;