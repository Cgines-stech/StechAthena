// TEUA 1021

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const TEUA1021 = [
  {
    id: 92003,
    programId: 1,
    courseNumber: "TEUA 1021",
    courseName: "Unmanned Aircraft Systems Part 107 Test",
    courseCredits: 1,
    statewideAlignment: "Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 0.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This is the FAA Certification Class in which students submit their Part 107 exam sheet and recurrent training certificate.",

    courseObjectives: [
      "Complete the FAA Part 107 Certification test.",
      "Verify completion of the FAA Part 107 Certification test by uploading their score sheet."
    ],

    courseOutline: [
      { title: "Module 1", hours: 30},
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
        "Upload your TRUST Certificate",
        "Upload your Recurrent Training",
        "Upload your Part 107 Cert",
        "Part 107 Scholarship",
        "Stech Drone Program Scenario Quiz",
        "Course Reflection"
    ]
  }
]

export default TEUA1021;