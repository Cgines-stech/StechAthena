// TEWT 1312

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEWT1312 = [
  {
    id: 95008,
    programId: 1,
    courseNumber: "TEWT 1312",
    courseName: "Gas Metal Arc Welding (GMAW) II",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 175.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This course expands students’ competency in the practical application of GMAW. Shielding gas composition, selection, and appropriate flow rates are discussed. Students learn appropriate parameter selection as necessary for GMAW proficiency. The pulsed-spray (GMAW-P) metal transfer mode will be introduced.",

    courseObjectives: [
      "Describe the advantages and limitations of GMAW.",
      "Select proper equipment and parameters given welding procedure requirements.",
      "Describe shielding gas flow rates, composition, and selection.",
      "Perform 3F, 3G, 4F, and 4G welds with GMAW-S.",
      "Perform fillets and groove joints with GMAW-P.",
    ],

    courseOutline: [
      { title: "Fillets GMAW-S Vertical", hours: 10},
      { title: "Grooves GMAW-S Vertical", hours: 10},
      { title: "Fillets GMAW-S Overhead", hours: 10},
      { title: "Grooves GMAW-S Overhead", hours: 10},
      { title: "Pulse Spray Fillets", hours: 10},
      { title: "Bend Test", hours: 10},
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
      "Lap Joint 3F",
      "T Joint 3F",
      "Lab Time",
      "Butt Joint 3G",
      "Lab Time",
      "Lap Joint 4F",
      "T Joint4F",
      "Lab Time",
      "Butt Joint 4G",
      "Lab Time",
      "Pulse Spray Theory",
      "Setting and Metal",
      "Surfacing Beads",
      "Lap Joints 2F",
      "T-Joint 2F",
      "Lap Joints 3 F",
      "T-Joint 3F",
      "Lap Joints 4F",
      "T-Joint4F",
      "Lab Time",
      "Butt Joint 3G",
      "Butt Joint 4G",
      "Lab Time",
      "Work Ethic Assessment",
      "End of Course Survey",
    ]
  }
]

export default TEWT1312;