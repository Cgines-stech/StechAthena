// TEUA 1301

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const TEUA1301 = [
  {
    id: 92005,
    programId: 1,
    courseNumber: "TEUA 1301",
    courseName: "Unmanned Aircraft Systems Introduction to Multirotor",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 275.00,
    courseFee: 0.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "Students learn the basics of small Unmanned Aircraft Systems (sUAS) multirotor design and construction, which includes building a multirotor from a kit, programming a flight controller, and tuning motors appropriately. Students will document and conduct test flights with their drones.",

    courseObjectives: [
      "Explain the documentation process and how it applies to industry standards.",
      "Identify sUAS components.",
      "Use industry best practices in documentation, tool and equipment logs, supply upkeep, and communication processes.",
      "Create and design a multi-rotor build complete with appropriate documentation.",
    ],

    courseOutline: [
      { title: "Course Introduction", hours: 9},
      { title: "Quadcopter Theory & Beginning the Build", hours: 9},
      { title: "Physical Construction Complete", hours: 9},
      { title: "Electronic (Soldering) Construction Complete", hours: 9},
      { title: "Software Configuration Complete", hours: 9},
      { title: "Maiden/Test Flight!", hours: 9},
      { title: "Flight Based Initial Setup", hours: 9},
      { title: "PID Tuning & Advanced Flight Modes", hours: 9},
      { title: "Checklists and Final", hours: 9},
    ],

    courseBooks: [
      {}
    ],

    syllabiBooks: [
      {
        name: "Cengage Unlimited Subscription 1 year", 
        price: 150.0,
        isbn: "Cengage",
        note: "Cengage Unlimited Subscription 1 year"
      }
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
        {},
    ],

    instructorContactInformation: [
        {}
    ],

    course_Policies: [
        {}
    ],

    courseAssignmentsandAsssessments: [
      "Syllabus Quiz",
      "Agreement Form",
      "TRUST Certificate Upload",
      "Windows Computers",
      "Progress Check (PC) 1- Hardware ID",
      "Daily Task Documentation",
      "Aircraft Registration",
      "Progress Check (PC) 2 - Frame Complete",
      "Flight Controller USB Test",
      "Flight Simulators (PicaSim) - Intro - Quadcopters",
      "Electronics Soldered",
      "PC3 - Aircraft Electrical Check/Smoke Test",
      "Flight Simulators (PicaSim) - Quadcopter Challenge #1",
      "PC4 - Components Mounted/Secured",
      "PCS - Ardupilot Configured",
      "Log Analysis",
      "PC6 - Control Check & Test Flight",
      "PC 6.5 Vibration Levels Check & Aircraft Airworthiness Sign-off",
      "PC7 • Altitude Hold Flight Mode",
      "Land Mode Configuration",
      "Loiter/GPS/LAND Flight Modes?",
      "Fi ltering",
      "PCS - Autotune",
      "Reflection on Good/Bad Documentation",
      "Orientation Test",
      "IDEA Survey Extra Credit",
    ]
  }
]

export default TEUA1301;