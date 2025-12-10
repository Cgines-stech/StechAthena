// TEWT 1112

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEWT1112 = [
  {
    id: 95007,
    programId: 1,
    courseNumber: "TEWT 1112",
    courseName: "Shielded Metal Arc Welding (SMAW) II",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 225.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This course expands students’ competency in hands-on uses and practical application of SMAW. Students learn to reason through appropriate electrode diameters, classifications, and appropriate current  levels necessary to achieve proficiency in SMAW.",

    courseObjectives: [
      "Describe the advantages and limitations of SMAW.",
      "Select proper electrode classifications for their appropriate applications.",
      "Select proper welding current for specified electrode classification and diameter.",
      "Perform 3F and 3G welds with SMAW.",
      "Perform 4F and 4G welds with SMAW.",
    ],

    courseOutline: [
      { title: "Fillet Welds- Vertical", hours: 15},
      { title: "Groove Welds- Vertical", hours: 15},
      { title: "Fillets Welds- Overhead", hours: 15},
      { title: "Groove Welds- Overhead", hours: 15},
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
      {}
    ],

    instructorContactInformation: [
      {},
    ],

    course_Policies: [
      {}
    ],

    courseAssignmentsandAsssessments: [
      "Lap Joint 3F Vertical Up E6010",
      "Tee Joint 3F Vertical Up E6010",
      "Lab Time",
      "3G Square Groove Butt Joint Root E,6010",
      "Cover Passes E7018 3G",
      "Lab Time",
      "Lap Joint 4F E6010",
      "Tee joints 4F E6010",
      "Lab Time",
      "4G Square Groove Butt Joint Root E,6010",
      "Cover passes E7018 4G",
      "Lab Time",
      "Work Ethic Assessment",
      "End of Course Survey",
    ]
  }
]

export default TEWT1112;