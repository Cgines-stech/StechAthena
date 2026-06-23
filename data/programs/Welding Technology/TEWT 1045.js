// TEWT 1045

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEWT1045 = [
  {
    id: 95002,
    programId: 1,
    courseNumber: "TEWT 1045",
    courseName: "Inspection, Metallurgy, and Blueprints",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 60.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This course will introduce students to welding symbols and blueprints that welding professionals use. Discussing different welding processes and materials that can be welded. Basic AWS standards and types of nondestructive testing (NDT) and destructive testing will be covered.",

    courseObjectives: [
      "Discuss codes, standards, and types of nondestructive and destructive testing.",
      "Identify and interpret basic AWS standardized welding symbols, blueprints, and bill of materials.",
      "Identify parts of a joint, parts of a weld, and how they correspond with blueprints.",
      "Identify and state various stresses a weld can be subjected to.",
      "Explain welder qualifications, certification, and welding procedure specifications (WPS).",
    ],

    courseOutline: [
      { title: "Weld Symbols and Welding Symbols", hours: 10},
      { title: "Print Reading", hours: 10},
      { title: "Codes, Standards and Welding Procedure Specification", hours: 10},
      { title: "Destructive and Non-destructive Testing", hours: 10},
      { title: "Welding Metallurgy", hours: 10},
      { title: "Weldability of Metals and Electrodes", hours: 10},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {
        name: "Welding: Principles and Applications, 9th ed.", 
        price: 150.0,
        isbn: "9780357377659",
        note: "Cengage Unlimited Subscription"
      }
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
      "Work Place Practices- Importance of Blueprints",
      "READ Chapter 22: Welding Joint Design and Welding",
      "Symbols",
      "Chapter 22: Review Questions",
      "Grooves and Fillet Welds",
      "Weld Plate Work Sheet Joints and Welding Positions",
      "Types of Welds- Website to Read",
      "Checkpoint Meeting Module 2",
      "READ Chapter 24: Welding Codes and Standards",
      "Chapter 24: Review Questions",
      "Welding Procedure Specification",
      "Checkpoint Meeting Module 3",
      "READ Chapter 25: Testing and Inspection",
      "Chapter 25: Review Questions",
      "Welding Defects",
      "Weld Discontinuities",
      "Weld Plate Work Sheet Identifying Discontinuities",
      "Checkpoint Meeting Module 4",
      "READ Chapter 25: Testing and Inspection",
      "Chapter 25: Review Questions",
      "Ultrasound Testing",
      "V-WACGauge",
      "Fillet Weld Gauge",
      "Misc tools",
      "Weld Plate Work Sheet Using Inspection Tools",
      "Checkpoint Meeting Module 5",
      "Weld Sequencing",
      "Checkpoint Meeting Module 6",
      "READ Chapter 26: Welding Metallurgy",
      "Chapter 26: Review Questions",
      "Steel Metallurgy - Principles of Metallurgy",
      "Engineering Materials - Principles of Metallurgy",
      "Real Engineering: The History of Iron and Steel",
      "Steel",
      "American Steel",
      "READ Chapter 27: Weldability of Metals",
      "Chapter 27: Review Questions",
      "The Difference Between Copper, Brass and Bronze",
      "Copper, Brass & Bronze alloys explai ned",
      "Metal- Modern Marvels",
      "The Four Types of Steel- Metal Supermarkets",
      "Stainless Steel Grades Explained",
      "Stainless Forgotten History: A Revolution in Steel",
      "Heavy Metals- Modern Marvels",
      "Aluminum - The Material That Changed The World",
      "How Stuff Works - Aluminum",
      "Aluminium Alloys Explained",
      "Aluminum- Modern Marvels",
      "Cold Rolled VS Hot Rolled",
      "Checkpoint Meeting Module 8",
      "READ Chapter 28: Filler Metal Selection",
      "Chapter 28: Review Questions",
      "Choosing the Right SMAW Electrode",
      "5 Common Types Of Welding Filler Rods",
      "How to Read Welding Symbols: Part 1 - Fillet Welds",
      "Symbols for Welding",
      "Blueprint Reading For Welders and Fitters",
      "End of Course Survey",
      "Work Ethic Assessment",
    ]
  }
]

export default TEWT1045;