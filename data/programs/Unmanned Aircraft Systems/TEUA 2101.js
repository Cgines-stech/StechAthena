// TEUA 2101

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const TEUA2101 = [
  {
    id: 92007,
    programId: 1,
    courseNumber: "TEUA 2101",
    courseName: "Unmanned Aircraft Systems Flight Patterns and Maneuvers",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 275.00,
    courseFee: 0.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "In this course, students develop their flying skills with manual flight in both fixed-wing and multirotor drones. Emphasis is placed on logging additional flying hours through traffic patterns, maneuvers, and practice search and rescue flight paths.",

    courseObjectives: [
      "Comfortably maneuver a variety of drones and a variety of flight modes.",
      "Fly a fixed-wing drone manually and log those hours.",
      "Explain maintenance techniques and checklists for multirotor and fixed-wing type drones.",
    ],

    courseOutline: [
      { title: "Fixed-Wing Basics and Introduction", hours: 12},
      { title: "Manual Flight and Checklists", hours: 12},
      { title: "Traffic Patterns and Maintenance", hours: 12},
      { title: "Fixed-Wing Pattern Practice", hours: 12},
      { title: "Multirotor Pattern Skills and Checklists", hours: 12},
      { title: "SAR & Maintenance", hours: 12},
      { title: "Final Patterns", hours: 12},
      { title: "Autonomous Platforms", hours: 12},
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
      "Module 1: Fixed·Wing Basics",
      "Syllabus Quiz",
      "AMA Safety Guide.pelf",
      "Int Flight lab Final Rubric.pelf",
      "UAS 2100 In Brief.pptx",
      "Module 2: Manual Flight and Checklists",
      "Checklist Types Overview",
      "Terminology",
      "Fixed·Wing Checklists",
      "Multiroto r Checklists",
      "Getting Your Aeroscout",
      "Fixed·Wing logged Flight 1",
      "Multirotor logged Flight 1",
      "Checklists.pptx",
      "Module 3: Traffic Patterns and Maintenance",
      "Flight and Traffic Patterns Overview",
      "Fixed·Wing Design and Components Diagram",
      "Maintenance Response",
      "Module 4: Fixed·wing Pattern Practice",
      "Fixed-Wing logged Flight 2",
      "Fixed-Wing Terminology, basic safety, and controls",
      "Module 5: Multirotor Pattern Skil ls and Checklists",
      "Fixed·Wing Midterm",
      "Multirotor Midterm",
      "Multirotor logged Flight 2",
      "Multiroto rln Flight Checklist",
      "Module 6: SAR and Maintenance",
      "Maintenance Documentation",
      "Module 7: Final Patterns",
      "Multirotor logged Flight Final",
      "Fixed·Wing logged Flight Final",
      "Fixed·Wing Final",
      "Multirotor Final",
      "Module 8: Autonomous Platforms",
      "Autonomous Flight lntro.pptx",
      "Autonomous Flight Discussion and Participation",
      "Extra Credit",
      "IDEA Survey Screen Shot",
    ]
  }
]

export default TEUA2101;