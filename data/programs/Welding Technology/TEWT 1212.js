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
    courseFee: 225.00,
    instructionalType: "LAB",
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
      {
        name: "Cengage Unlimited Subscription", 
        price: 150.0,
        isbn: "Syllabus",
        note: "Cengage Unlimited Subscription"
      },
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
      "1F Fillet Welds",
      "1G Grove Welds",
      "Lab Time",
      "Aluminum & Stainless Steel",
      "Lab Time",
      "2F Fillet",
      "2G Fillet",
      "Lab Time",
      "Aluminum & Stainless Steel",
      "Lab Time",
      "Work Ethic Assessment",
      "End of Course Survey",
    ]
  }
]

export default TEWT1212;