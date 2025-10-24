// TEAM 2210

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEAM2210 = [
  {
    id: 20010,
    programId: 2,
    courseNumber: "TEAM 2210",
    courseName: "Fabrication and Repair",
    courseCredits: 3,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 140.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "In this course, students are introduced to proper fabrication and repair techniques of different types of metal, plastic, and other materials, using a variety of machine tools.  Topics will also include, technical drawings, tolerances, manufacturing fundamentals, tooling selections, and precision measurement practices. Throughout this course  students will also perform repairs and replacement of components on commonly used machine tools related to industry.",

    courseObjectives: [
      "Explain, interpret, and design technical drawings using known and unknown specifications.",
      "Diagnose and troubleshoot commonly used machine tools.",
      "Understand and apply both basic and advanced uses, and manipulation of commonly used precision measuring instruments",
      "to determine if components and parts are within specifications and tolerances.",
      "Apply competencies to design, construct, and assess a fabrication project to prescribed specifications.",
    ],

    courseOutline: [
      "Introduction to Mechanical Fabrication, Print Reading, Tooling, and Applications",
      "Turret Head Mills and Lathe Operations",
      "Final Fabrication Project",
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
        "Fabrication & Repair Hands On Skills (Labs)",
        "Introduction to Power Fabrication Tools",
        "Safety & Operations Information",
        "Introduction to Manual Lathe Machines",
        "Introduction to Turning Operations & Processes",
        "Introduction to Manual Milling Machines",
        "Introduction to Milling Operations & Processes",
        "Final Fabrication Project",
        "End of Course Survey",
        "Work Ethic Assessment",
    ]
  }
]

export default TEAM2210;