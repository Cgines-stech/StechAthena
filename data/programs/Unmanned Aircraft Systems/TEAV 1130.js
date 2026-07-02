// TEAV 1130

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const TEAV1130 = [
  {
    id: 92001,
    programId: 1,
    courseNumber: "TEAV 1130",
    courseName: "Flight Principles",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 275.00,
    courseFee: 0.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This course provides an introduction to the fundamentals of flight theory and the physics that govern flight. It covers the operation of aircraft control systems essential to flight and teaches the techniques for ground handling and servicing of aircraft.",

    courseObjectives: [
      "Explain Fundamental Flight Theory and Physics, including the aerodynamics and physics that govern how aircraft fly and operate.",
      "Identify Aircraft Control System Operations, including the essential systems crucial for flight, and explain how each component functions and interacts within the system.",
      "Demonstrate Ground Handling and Servicing Techniques by performing practical skills related to safe and efficient operations.",
    ],

    courseOutline: [
      { title: "The Four Forces Of Flight", hours: 15},
      { title: "Newton’s Laws and Flight", hours: 15},
      { title: "Bernoulli’s Principle and Airfoil", hours: 15},
      { title: "Thrust, Propulsion, and Drone Motors", hours: 15},
      { title: "Stability, Control, and Flight Modes", hours: 15},
      { title: "Real-World Applications and Mission Planning", hours: 15}
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
          termLabel: "A Days",
          startDate: "08-08-2026",
          endDate: "12-12-2026",
          Monday: "7:50 AM - 10:20 AM or 12:10 PM - 2:45 PM",
          Tuesday: "7:50 AM - 10:20 AM or 12:10 PM - 2:45 PM",
          Wednesday: "7:50 AM - 10:20 AM or 12:10 PM - 2:45 PM",
          Thursday: "7:50 AM - 10:20 AM or 12:10 PM - 2:45 PM",
          Friday: "7:50 AM - 10:20 AM or 12:10 PM - 2:45 PM",
          Saturday: "",
        },
        {
          termLabel: "B Days",
          startDate: "01-26-2027",
          endDate: "05-13-2027",
          Monday: "7:50 AM - 10:20 AM or 12:10 PM - 2:45 PM",
          Tuesday: "7:50 AM - 10:20 AM or 12:10 PM - 2:45 PM",
          Wednesday: "7:50 AM - 10:20 AM or 12:10 PM - 2:45 PM",
          Thursday: "7:50 AM - 10:20 AM or 12:10 PM - 2:45 PM",
          Friday: "7:50 AM - 10:20 AM or 12:10 PM - 2:45 PM",
          Saturday: "",
        },
    ],

    instructorContactInformation: [
        {}
    ],

    course_Policies: [
        {}
    ],

    courseAssignmentsandAsssessments: [
        "Orientation",
        "Student Teacher Orone Physics_ Newton's Third Law and Bernoulli's Principle (1).pptx",
        "NASA's Four Forces of Flight Video",
        "The Four Forces Of Flight",
        "Four Forces of Flight quiz",
        "Newton's Laws Video",
        "Newton's Laws",
        "Newton's Laws Quiz",
        "Thrust, KV, ESC, and Propeller pitch",
        "Thrust and Motors",
        "Thrust and Motors Quiz",
        "Drone Flight Modes",
        "Stability, Control, and Flight Modes",
        "Stability and Modes Quiz",
        "Mission Planning 101",
        "Mission Planning",
        "Mission Planning Quiz",
        "Final Mission Planning Project",
        "Flight Principles Exam"
    ]
  }
]

export default TEAV1130;