// TEWT 1212

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEWT1212 = [
  {
    id: 95011,
    programId: 1,
    courseNumber: "TEWT 1212",
    courseName: "Gas Tungsten Arc Welding (GTAW) II",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 220.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This course expands student competency in hands-on uses and practical application of GTAW using non ferrous metals. Electrode classifications, preparation, and tip geometries are discussed. Students learn  appropriate parameter selection for welding procedure requirements as necessary for GTAW proficiency.",

    courseObjectives: [
      "Describe the advantages and limitations of SMAW.",
      "Select proper electrode classifications for their appropriate applications.",
      "Select proper welding current for specified electrode classification and diameter.",
      "Perform 3F and 3G welds with SMAW.",
      "Perform 4F and 4G welds with SMAW.",
    ],

    courseOutline: [
      { title: "Fillets Aluminum", hours: 10},
      { title: "Grooves Aluminum", hours: 15},
      { title: "Understanding Different AL filler rods and AC wave lengths", hours: 5},
      { title: "Fillets Stainless Steel", hours: 10},
      { title: "Grooves Stainless Steel", hours: 20},
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
      "4G Square Groove Butt Joint Root E6010",
      "Cover passes E7018 4G",
      "Lab Time",
      "Work Ethic Assessment",
      "End of Course Survey",
    ]
  }
]

export default TEWT1212;