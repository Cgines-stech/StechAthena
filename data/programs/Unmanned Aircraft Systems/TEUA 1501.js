// TEUA 1501

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const TEUA1501 = [
  {
    id: 92006,
    programId: 1,
    courseNumber: "TEUA 1501",
    courseName: "Introduction to Unmanned Aircraft Systems Maintenance and Components",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 275.00,
    courseFee: 0.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "Students will be introduced to various tools and techniques for sUAS and UAS maintenance. Throughout the course, students utilize maintenance records and equipment logs. Students will also gain factual knowledge of sUAS components, checklists, tools, tuning techniques, and building techniques.",

    courseObjectives: [
      "Explain drone components and use cases.",
      "Apply documentation styles to maintenance and equipment logs.",
      "Use proper tools and techniques for given scenarios.",
      "Identify industry tools and techniques related to the maintenance of sUAS.",
    ],

    courseOutline: [
      { title: "Introduction to Tools", hours: 12},
      { title: "Introduction to Building Techniques", hours: 18},
      { title: "Introduction to Drone Basics and Systems", hours: 18},
      { title: "UAS Regulation and Documentation", hours: 12},
      { title: "Introduction to Flight Controller Basics and Aircraft Setup", hours: 12},
      { title: "Introduction to Tuning and Flight Testing", hours: 12},
      { title: "Checklists and Final", hours: 6},
    ],

    courseBooks: [
      {}
    ],

    syllabiBooks: [
      {
        name: "Cengage Unlimited Subscription", 
        price: 150.0,
        isbn: "",
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
      "Introduction to Tools Overview",
      "1.1 Syllabus Quiz",
      "1.2 Safety Commitment",
      "1.3 Tools Quiz",
      "1.4 Tools Diagram",
      "1.5 Hardware ID",
      "1.6 Progress Check: In Person Lab Visit",
      "Introduction to Building Techniques",
      "2.1 Foamboard Building Techniques Briefing",
      "2.2 Progress Check: In-Person Working with Foamboard",
      "2.3 Soldering Safety Briefing",
      "2.4 Soldering Techniques",
      "2.5 Ground Systems Quiz",
      "2.6 Aircraft Systems Quiz",
      "2.7 Progress Check: In Person Soldering",
      "Introduction to Drone Basics and Systems",
      "3.1 Wing & Tail Types",
      "3.2 Batteries",
      "3.3 Battery Briefing",
      "3.4 Battery Math",
      "3.5 Servos",
      "3.6 ESCs",
      "3.7 Brushless Motors",
      "3.8 Components Diagram",
      "Progress Check Coming Up",
      "3.9 Progress Check: In-Person Components Exam",
      "UAS Regulations and Documentation",
      "4.1 Regulations",
      "4.2 TRUST Certificate Upload",
      "4.3 Remote ID Plan",
      "FAA Routine Drone Maintenance Checklist.pdf",
      "Civil Air Patrol UAS Maintenance.pdf",
      "DIV Drone Build Example",
      "Guide to Building a Drone Example",
      "4.4 Progress Check: Chuck Glider Build and Documentation",
      "Introduction to Flight Controller Basics and Aircraft Setup",
      "5.1 Assembly & Integration",
      "5.2 ESC Calibration Comparison Chart",
      "5.3 Setup Presentation",
      "5.4 Flight Modes",
      "5.5 Motors and Powertrain",
      "5.6 Flight Controller Failsafe",
      "Introduction to Tuning and Flight Testing",
      "6.1 Multi rotor Configurations",
      "Pl D Loop Basics",
      "Pl D Loop Controller",
      "PID Loop Full",
      "6.2 PID Loops and Tuning Quiz",
      "6.3 Test Flight Safety Plan",
      "Build You Quad and Prep for Test Flights",
      "6.4 Progress Check MakeUp",
      "6.5 Quad Flight(s) and Reflection",
      "Checklists and Final",
      "7.11 of 5 Checklists",
      "7.2 IDEA Survey Extra Credit",
    ]
  }
]

export default TEUA1501;