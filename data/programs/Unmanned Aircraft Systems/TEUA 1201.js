// TEUA 1201

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const TEUA1201 = [
  {
    id: 92004,
    programId: 1,
    courseNumber: "TEUA 1201",
    courseName: "Unmanned Aircraft Systems Introduction to Fixed-Wings",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 275.00,
    courseFee: 0.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "Students learn the basics of small Unmanned Aircraft Systems (sUAS) fixed-wing design and construction to include flight characteristics of new or modified builds. They build, program, fly, and modify their own fixed-wing drone.",

    courseObjectives: [
      "Build fixed-wing drones using appropriate construction and design methods, flight principles, and programming techniques.",
      "Demonstrate use of proper tools and components for fixed-wing construction and repair.",
    ],

    courseOutline: [
      { title: "Introduction to Fixed-Wing Drones 2 Weeks", hours: 15},
      { title: "Introduction to Systems and Components 2 Weeks", hours: 15},
      { title: "Introduction to Building Fixed-Wing Drones 4 Weeks", hours: 15},
      { title: "Introduction to Fixed-Wing Repair 2 Weeks", hours: 15},
      { title: "Introduction to Fixed-Wing Modification 3 Weeks", hours: 15},
      { title: "UAS Fixed-Wing Reflection 1 Week", hours: 15},
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
        "Overview: Course Introduction",
        "1.2 Course Introduction and Lab Check",
        "1.3 Syllabus Quiz",
        "Intro to Fixed-Wing Drones",
        "2.1 Tools Survey",
        "2.2 Forces of Flight Outline",
        "2.3 Control Surfaces Quiz",
        "2.4 Simulator Log Reflection 1",
        "Intro to Systems and Components",
        "Fixed•Wing Build Project",
        "3.1 Build Choice Survey",
        "3.2 Components Quiz",
        "3.3 Tips and Techniques",
        "3.4 Simulator Log Reflection 2",
        "3.5 Progress Check Systems and Components",
        "Intro to Building",
        "4.1 Progress Check Fuselage",
        "4.2 Progress Check Wing",
        "4.3 Progress Check Components",
        "4.4 Progress Check Transmitter Programming",
        "Mid-Semester Survey",
        "Intro to Repair ing Fixed-Wing Drones",
        "5.1 Simulator Log Reflection 3",
        "5.2 Maiden Flight Checklist Survey",
        "5.3 Field Tools Checklist",
        "5.4 Progress Check Flights",
        "5.5 Repair Quiz",
        "Introduction to Fixed-wing Design Modification",
        "6.1 Final Project Plan",
        "6.2 Progress Check Modification",
        "6.3 Progress Check Modification Flight",
        "Course Reflection",
        "IDEA Survey Extra Credit",
        "Course Reflection",
        "EXTRA CREDIT! You Tube TX Video",
    ]
  }
]

export default TEUA1201;