// PN 1090

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const PN1090 = [
  {
    id: 80011,
    programId: 1,
    courseNumber: "PN 1090",
    courseName: "Career Readiness",
    courseCredits: 1,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 299.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      'The Career Readiness for Practical Nursing course is designed to equip students with the essential skills and knowledge necessary for a successful transition into the workforce as practical nursing professionals. This comprehensive course emphasizes the development of critical thinking abilities, effective test-taking strategies specifically tailored for the NCLEX examination, and comprehensive preparation for career-focused interviews within the nursing field.',

    courseObjectives: [
      "Analyze critical thinking abilities by examining complex nursing questions and applying evidence-based reasoning to solve clinical problems",
      "Explain effective test-taking strategies explicitly tailored for the NCLEX examination",
      "Engage in career-focused interviews within the nursing field, including resume writing, interview etiquette, professional communication, and showcasing relevant experience and qualifications",
    ],

    courseOutline: [
      { title: "NCLEX Test Taking Strategies", hours: 10},
      { title: "Critical Thinking Application", hours: 10},
      { title: "Resume and Interview Skills", hours: 10},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {},
    ],
    
    courseTools: [
      {},
    ],

    courseCertifications: [
      {},
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
      {
        termLabel: "Fall",
        startDate: "11-11-2025",
        endDate: "12-09-2025",
        Monday: "",
        Tuesday: "9:00 AM - 3:00 PM",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
      },
      {
        termLabel: "Spring",
        startDate: "03-31-2026",
        endDate: "05-05-2026",
        Monday: "",
        Tuesday: "9:00 AM - 3:00 PM",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
      },
    ],

    instructorContactInformation: [
      { 
        name: "Kylee McBride",
        title: "Instructor",
        email: "kmcbride@stech.edu",
        phone: "",
        office: "",
        instructorNote: ``
      },
    ],

    course_Policies: [
      {},
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "PN 1090 Career Readiness Agenda",
      "PN 1090 Career Readiness",
      "NCLEX Test Taking Strategies",
      "Passpoint Test",
      "UWorld Self Assessment 1",
      "UWorld Self Assessment 2",
      "Participation Day 1",
      "Participation Day 2",
      "Uworld Assignment 1",
      "Health Policy paper",
      "Participation Day 3",
      "Participation Day 4",
      "EPSLO Exam",
      "Interview Questions and Answers",
      "Resume",
      "Mock Interview Day",
      "Participation Day 5",
      "Uworld Assignment 6",
      "Linkedln Profile",
      "NCLEX Information- How to Sign up",
      "Question Collection_EPSLO Review 20255",
      "End of Course Survey",
    ]
  }
]

export default PN1090;