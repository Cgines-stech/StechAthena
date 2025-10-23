// TEAM 1050

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEAM1050 = [
  {
    id: 20003,
    programId: 2,
    courseNumber: "TEAM 1050",
    courseName: "Electrical Systems",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 30.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Electrical Systems course teaches students to troubleshoot most electrical circuits they encounter in everyday life. Our world runs on electrical power and is fundamental  to all work being done in automation. Students in this course gain relevant working knowledge in both AC &amp; DC electrical systems. Competencies include basic electrical  circuit design, analysis, troubleshooting, instrumentation, schematic and component identification, physics of electricity and applicable math.",

    courseObjectives: [
      "Demonstrate a working knowledge of safety practices and procedures of basic electrical systems.",
      "Operate, install, maintain electrical systems, tools and devices.",
      "Read, utilize, and design electrical systems schematics.",
      "Apply principles and applications of electrical AC and DC systems.",
      "Apply systems diagnostics and troubleshooting of electrical circuits."
    ],

    courseOutline: [
      "Electrical Safety, Tools, Meters, and Components",
      "AC/DC Electrical Systems and Intro to Ohm's Law",
      "Circuits Design and Analysis"
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
        "Electrical Systems Hands On Skills (Labs)",
        "Basic Electrical Circuits",
        "Electrical Measurements",
        "Circuit Analysis",
        "Inductance & Capacitance",
        "Combination Circuits",
        "Transformers",
        "End of Course Survey",
        "Work Ethic Assessment",
    ]
  }
]

export default TEAM1050;