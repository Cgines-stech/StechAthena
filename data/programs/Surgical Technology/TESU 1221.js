// TESU 1221

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const TESU1221 = [
  {
    id: 19010,
    programId: 1,
    courseNumber: "TESU 1221",
    courseName: "Surgical Technology Seminar",
    courseCredits: 1,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 0.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Surgical Technology Seminar course will discuss factors associated with making career decisions that can enhance a surgical technologist’s professional growth and success. This course will also review competencies learned throughout the program in order to sit for the national certification exam.",

    courseObjectives: [
      "Review for the national certifying exam",
      "Prepare students for employment",
    ],

    courseOutline: [
      { title: "Preparation for Employment", hours: 30},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {
        name: "Cengage Unlimited Subscription", 
        price: 150.0,
        isbn: "",
        note: "Cengage Unlimited Subscription 1 year"
      },
    ],
    
    courseTools: [
      {},
    ],

    courseCertifications: [
      {
         name: "BLS",
         price: 45.0,
         note: ""
      }
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
      {
        termLabel: "",
        startDate: "11/16/2026",
        endDate: "11/20/2026",
        Monday: "8:00 AM - 3:00 PM",
        Tuesday: "8:00 AM - 3:00 PM",
        Wednesday: "8:00 AM - 3:00 PM",
        Thursday: "8:00 AM - 3:00 PM",
        Friday: "8:00 AM - 10:00 AM",
        Saturday: "",
      }
    ],

    instructorContactInformation: [
      {}
    ],

    course_Policies: [
      {},
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "TESU 1221 Syllabi",
      "Surgical Technology Seminar",
      "Section 1: Introduction to Surgical Technology",
      "Chapter 1: Orientation to Surgical Technology",
      "Read",
      "Orientation to Surgical Technology",
      "Resume",
      "What makes a good scrub tech?",
      "End of Course Survey",
    ]
  }
]

export default TESU1221;