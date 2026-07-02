// TEAV 1011

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const TEAV1011 = [
  {
    id: 92002,
    programId: 1,
    courseNumber: "TEAV 1011",
    courseName: "Unmanned Aircraft Systems Remote Pilot",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 275.00,
    courseFee: 0.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This course covers the rapidly expanding technology of small Unmanned Aircraft Systems (sUAS) and the legalities of flying drones. Topics include aviation safety, rules and regulations, Federal Aviation Administration (FAA) commercial certification preparation, and a flight lab component.",

    courseObjectives: [
      "Discuss the rapidly expanding Unmanned Aircraft System (UAS) industry and prepare to enter this competitive market.",
      "Describe the current regulations outlined in FAA Part 107.",
      "Demonstrate proficiency related to the concepts and required information essential to pass the FAA ground exam and register as Remote Pilot Operators.",
      "Demonstrate basic flight skills.",
    ],

    courseOutline: [
      { title: "Course and UAS Introduction 2 Weeks", hours: 9},
      { title: "Realflight Sim", hours: 9},
      { title: "Weather and Drones 2 Weeks", hours: 9},
      { title: "Airspace and Sectionals 2 Weeks", hours: 9},
      { title: "Rules and Regulations 2 Weeks", hours: 9},
      { title: "Airport Operations and Radio Communications and Midterm 1 Week", hours: 9},
      { title: "Drone Maintenance and Emergencies 1 Week", hours: 9},
      { title: "Aeronautical Decision Making, Crew Resource Management, and Physiology 1 Week", hours: 9},
      { title: "Load Factors & Performance 1 Week", hours: 9},
      { title: "The Part 107 Test and Finals", hours: 9},
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
        {},
    ],

    instructorContactInformation: [
        {}
    ],

    course_Policies: [
        {}
    ],

    courseAssignmentsandAsssessments: [
        "Orientation",
        "Orientation Acknowledgement",
        "Overview: Course and UAS Introduction",
        "Module 1: Flight Labs",
        "1.1 Syllabus Quiz",
        "1.2 Introduction Briefing!",
        "1.3 TRUST Certificate",
        "RealFlight+Simulator+Lesson+l.pdf",
        "ReaIFlight+Simulator+Lesson+2.pdf",
        "ReaIFlight+Simulator+Lesson+3.pdf",
        "ReaIFlight+Simulator+Lesson+4.pdf",
        "ReaIFlight+Simulator+Lesson+5.pdf",
        "2.0 Overview: Weather & Drones",
        "2.1 Weather Quiz",
        "2.2 King School Practice Test",
        "2.3 Weather Scenario",
        "Ground School Lab",
        "Research Paper Heads-Up (Nothing is due)",
        "3.0 Overview: Airspace & Sectionals",
        "3.3 Airspace/ Sectional Scenario",
        "3.1 Airspace Quiz",
        "3.2 King School Test Prep Assignment 1",
        "4.0 Overview: Rules & Regulations",
        "Module 4 : Midterm Tips",
        "Fixed-Wing Lab",
        "4.1 CFR Part 107 Quiz",
        "4.2 King Schools Test Prep Assignment 2",
        "4.3 Rules/ Regulations Breiflng!",
        "5.0 Overview: Airport Operations and Radio Communications",
        "Midterm Exam",
        "5.1 Airport Ops & Radio Comms Quiz",
        "5.2 Airport Ops & Radio Comms Briefing!",
        "Quadcopter Lab",
        "Airport Construction Assignment (Extra Credit}",
        "6.0 Overview: Drone Maintenance & Emergencies",
        "6.1 Drone Maintenance & Emergencies Quiz",
        "6.2 King School Test Prep Assignment 4",
        "7.0 Overview: ADM, CRM, & Physiology",
        "UAS 1010 Research Paper",
        "7.1 ADM/CRM Quiz",
        "7.2 King School Test Prep Assignment 5",
        "Autonomous Flight Lab",
        "8.0 Overview: Load Factors & Performance",
        "8.1 load Factors & Performance Quiz",
        "8.2 King School Test Prep Assignment 6",
        "9.0 Overview: The Part 107 Test and Finals",
        "9.1 Recurrent Training Certification",
        "Flight log Book",
        "UAS Final Exam",
        "Final Flight Test",
        "Course Reflection",
        "FAA Exam Free Practice",
        "Practice Exam 1",
        "Practice Exam 2",
    ]
  }
]

export default TEAV1011;