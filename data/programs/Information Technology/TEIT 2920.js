// TEIT 2920

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEIT2920 = [
  {
    id: 70009,
    programId: 1,
    courseNumber: "TEIT 2920",
    courseName: "Special Projects II",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 0.00,
    instructionalType: "LAB",
    isElective: true,
    includeInProgramTotals: false,

    courseDescription:
      "Special Projects II provides students with a unique or advanced skill development identified as a need in industry. Students will select their chosen topic from a previous  course subject and draft a project proposal. After the project is completed, the student and faculty member will review the success of the project compared to the proposal.  (Requires advisor approval).",

    courseObjectives: [
      "Apply decision-making, critical-thinking, troubleshooting, and problem-solving skills.",
      "Create a draft proposal for a project focusing on networking, cybersecurity, or operating systems.",
      "Develop a project outline that defines the purpose, scope, and potential challenges they may face. Present the outline to faculty for approval.",
      "Demonstrate project management skills as they complete their project and work with the instructor to evaluate its success according to their purpose, scope, and outline.",
    ],

    courseOutline: [
      { title: "Draft Proposal and Outline", hours: 15},
      { title: "Project Outline Presentation", hours: 15},
      { title: "Student Project Implementation", hours: 15},
      { title: "Project Evaluation", hours: 15},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {},
    ],
    
    courseTools: [
      {}
    ],

    courseCertifications: [
      {},
    ],

    otherAssociatedCosts: [
      {},
    ],

    courseClassroomHours: [
      {}
    ],

    instructorContactInformation: [
      {}
    ],

    course_Policies: [
      {}
    ],

    courseAssignmentsandAsssessments: [
      "Course Introduction and Standards",
      "Meet Your Instruction Team",
      "Rules of the Lab",
      "CS Code of Conduct Policy",
      "Submitting Assignments in Canvas",
      "Taking a Screenshot",
      "Orientation",
      "Orientation Acknowledgement",
      "Syllabus Agreement",
      "Project Scope and Purpose",
      "Executive Summary",
      "Identifying Industry Need and Applicability",
      "Instructor Review 1",
      "Student Acknowledgement Statement Module 1",
      "Checkpoint Meeting Module 1",
      "Instructor Review 2",
      "Student Acknowledgement Statement Module 2",
      "Checkpoint Meeting Module 2.",
      "Student Acknowledgement Statement Module 3",
      "Checkpoint Meeting Module 3",
      "Peer Evaluation",
      "End of Course Survey",
      "End of Course Student Acknowledgement Statement",
      "Course Completion Checkpoint Meeting",
    ]
  }
]

export default TEIT2920;