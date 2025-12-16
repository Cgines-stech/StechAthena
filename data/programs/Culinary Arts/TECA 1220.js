// TECA 1220

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1220 = [
  {
    id: 50011,
    programId: 1,
    courseNumber: "TECA 1220",
    courseName: "Flavor Essentials",
    courseCredits: 1,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 80.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Flavor Essentials course teaches students the importance of working with flavors and seasonings. Students learn about sustainability and when different fruits and vegetables are in season to best utilize their flavor. Students work on plating, advanced flavor, and seasoning.",

    courseObjectives: [
      "Combine flavor and seasoning profiles.",
      "Demonstrate the ability of working with seasonal fruits and vegetables.",
      "Determine proper use of fresh herbs and spices.",
      "Demonstrate proper plating.",
    ],

    courseOutline: [
      { title: "Taste and Flavor - Understanding the Difference", hours: 10},
      { title: "Combining Tastes", hours: 10},
      { title: "Flavor Profiling and Food Pairing", hours: 10},
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
        {}
    ],

    course_Policies: [
        {}
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "Culinary Artistry Reading",
      "Understanding How Taste and Flavor Differ",
      "Proper Seasoning Technique: Use of Acid in Cooking",
      "Comparirng Tastes",
      "Flavor Profiling and Food Pairing",
      "Complete a Balanced Plate",
      "End of Course Survey",
    ]
  }
]

export default TECA1220;