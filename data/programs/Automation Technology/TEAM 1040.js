// TEAM 1040

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEAM1040 = [
  {
    id: 20002,
    programId: 2,
    courseNumber: "TEAM 1040",
    courseName: "Industrial Mechanics",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 45.00,
    instructionalType: "LEL",

    courseDescription:
      "The Industrial Mechanics course is designed to introduce students to the world of mechanical drive systems and their characteristics. Students can demonstrate competency  in the following: couplers, component identification, system related calculations, alignment, the effects of wear and vibration, component failure detection and prevention.",

    courseObjectives: [
      "Demonstrate a working knowledge of safety practices and procedures.",
      "Maintain, calibrate, and repair power transmission systems.",
      "Maintain, calibrate, analyze, and repair mechanical drives (v-belt, chain, gear drive).",
      "Use and apply vibration and alignment measurement instrumentation and techniques.",
      "Troubleshoot mechanical drive components and systems."
    ],

    courseOutline: [
      "Mechanical Drive System Safety, Tools, and Applications, and Measurements",
      "Introduction to Power Transmission Systems",
      "Introduction to V-Belt and Chain Drives",
      "Introduction to Mechanical Drives (Spur Gear Drive)"
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
        "Signing into Canvas_.pdf",
        "Lab Packet Instructions.pptx",
        "Amatrol Tutorial.pptx",
        "How To Login to Amatrol Elearning",
        "Introduction to Mechanical Drive Systems",
        "Key Fasteners",
        "Power Transmission Systems",
        "Introduction to V-Belt Drives",
        "Introduction to Chain Drives",
        "Spur Gear Drive Systems",
        "Multiple Shaft Drive Systems",
        "Industrial Mechanics Hands On Skills (Labs)",
        "End of Course Survey",
        "Work Ethic Assessment"
    ]
  }
]

export default TEAM1040;