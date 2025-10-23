// TEAM 2005

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEAM2005 = [
  {
    id: 20009,
    programId: 2,
    courseNumber: "TEAM 2005",
    courseName: "Programmable Logic Controllers II",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 95.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "In this course, students are introduced to advanced programming techniques of Programmable Logic Controllers such as process control, data acquisition, computer controlled processes, variable speed drives, and networking. Topics include various software packages not included in the introductory course with hands-on labs and other  advanced topics as needed to meet employer needs.",

    courseObjectives: [
      "Identify and describe the basics of HMI programming.",
      "Identify and apply Programmable Automation Controller principles and practices.",
      "Apply advanced topics of Programmable Logic Controllers in a lab setting.",
      "Explain advanced hardware and software principles as they apply to Programmable Logic Controllers.",
      "Program advanced Programmable Logic Controllers on various software packages to meet employer needs.",
    ],

    courseOutline: [
      "Introduction to Advanced Programmable Logic Controller Programing, Operations & Setup",
      "Automation Operations and Applications",
      "Pick and Placing Operations",
      "Indexing and Sorting Operations",
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
        "Programmable Logic Controllers II Hands On Skills (Labs)",
        "PLC Operations",
        "Basic PLC Programming",
        "PLC Motor Controls",
        "PLC Timer & Counter Instructions",
        "Pick & Place Feeding",
        "PLC Event Sequencing",
        "Indexing",
        "Sorting & Parts Storage",
        "End of Course Survey",
        "Work Ethic Assessment",
    ]
  }
]

export default TEAM2005;