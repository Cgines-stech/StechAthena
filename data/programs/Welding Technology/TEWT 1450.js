// TEWT 1450

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEWT1450 = [
  {
    id: 95013,
    programId: 1,
    courseNumber: "TEWT 1450",
    courseName: "Flux Cored Arc Welding Gas Shielded: AWS Certification Preparation",
    courseCredits: 1,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 220.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "In this course, students will use the knowledge gained in previous courses to pass an AWS welder qualification. Instructors will guide students through the intricacies of the AWS D1.1 welder qualification requirements, emphasizing the practical application of welding principles.",

    courseObjectives: [
      "Analyze a Welding Procedure Specification by reading and interpreting its contents.",
      "Explain the visual acceptance requirements outlined in the AWS D1.1 code.",
      "Execute welds within the defined parameters stated in the welding procedure specification (WPS).",
      "Complete the necessary steps to successfully pass the FCAW-G AWS test according to the AWS D1.1 code.",
    ],

    courseOutline: [
      { title: "AWS Qualification Preparation", hours: 10},
      { title: "FCAW- G Out of Position Bend Test", hours: 10},
      { title: "FCAW- S Out of Position Bend Test", hours: 10},
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
      {
         name: "Welder Performace Qualification 3G FCAW",
         price: 0.0,
         note: ""
      },
      {
         name: "Welder Performace Qualification 4G FCAW",
         price: 0.0,
         note: ""
      },
      {
         name: "Welder Performace Qualification 3G FCAW-G",
         price: 0.0,
         note: ""
      },
      {
         name: "Welder Performace Qualification 4G FCAW-G",
         price: 0.0,
         note: ""
      },
      {
         name: "Welder Performace Qualification 3G SMAW",
         price: 0.0,
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
      {},
    ],

    course_Policies: [
      {}
    ],

    courseAssignmentsandAsssessments: [
      "Welding Procedure Specification",
      "Bend Test Rules",
      "Lab Time",
      "3G Root & Face Bends",
      "4G Root & Face Bends",
      "Lab Time",
      "3G Root & Face Bends",
      "4G Root & Face Bends",
      "Lab Time",
      "Work Ethic Assessment",
      "End of Course Survey",
    ]
  }
]

export default TEWT1450;