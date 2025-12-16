// TECA 1830

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1830 = [
  {
    id: 50015,
    programId: 1,
    courseNumber: "TECA 1830",
    courseName: "ServeSafe Food Managers Course",
    courseCredits: 1,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 80.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The ServSafe Food Managers Certification course expands on the students’ basic food safety knowledge and standards. Students will go into more details on safe food handling, time and temperature abuse, food borne illnesses, various sanitizers and their application, allergens, cross-contact, proper kitchen flow, pest management, facilities, and equipment management. The purpose of this training is to prepare students for supervisory positions that require a Food Managers Certification.",

    courseObjectives: [
      "Identify the symptoms and associated foods that can cause the Big Six food borne illnesses.",
      "Demonstrate the proper procedures for identifying intentional food contamination that can cause illness or harm to the",
      "public.",
      "Plan and compose an Active Managerial System for one of the steps in the Flow of Food.",
      "Demonstrate the usage of SDS, OSHA, and other safety materials.",
      "Pass National ServSafe Certification standards and exam.",
    ],

    courseOutline: [
      { title: "ServSafe Study Guide and Course Work", hours: 20},
      { title: "Pratice Exam and Final Testing", hours: 10},
    ],

    courseBooks: [
      {
        name: "ServSafe Manager Book, 8th ed", 
        price: 105.0,
        isbn: "9780866127400",
        note: ""
      },
    ],

    syllabiBooks: [
      {
        name: "ServSafe Manager Book, 8th ed", 
        price: 105.0,
        isbn: "9780866127400",
        note: ""
      },
    ],
    
    courseTools: [
      {},
    ],

    courseCertifications: [
      {
        name: "ServSafe Food Manager", 
        price: 160.00, 
        note: "" 
      },
    ],

    otherAssociatedCosts: [
      {}
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
      "Orientation",
      "ServSafe Study Guide and Course Work",
      "ServSafe Practice Test and Final",
      "End of Course Survey",
    ]
  }
]

export default TECA1830;