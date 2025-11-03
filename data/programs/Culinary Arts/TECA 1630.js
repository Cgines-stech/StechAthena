// TECA 1630

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TECA1630 = [
  {
    id: 50014,
    programId: 1,
    courseNumber: "TECA 1630",
    courseName: "Custom Baking Service",
    courseCredits: 1,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 150.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Custom baking course teaches students to use their baking skills in fulfill a custom order. Students learn best practices for time and food management along with service techniques. They also learn accurate item pricing for baked goods and effective customer communication and interactions.",

    courseObjectives: [
      "Discuss food costing.",
      "Plan and time baked goods for an event or customer.",
      "Practice taking customer orders and confirming and complete service.",
    ],

    courseOutline: [
      { title: "Advanced Creams and Custards", hours: 15},
      { title: "Working with Chocolate and Caramel", hours: 15},
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
      "Chapter 18 Reading and Reflection",
      "Advanced Creams",
      "Making Baked Custards",
      "Making Mousse",
      "Chapter 22 Reading and Reflection - Chocolate",
      "Key Terms",
      "Ganache Ratios",
      "Making Ganache Truffles",
      "Making Caramel",
      "Cake from start to finish. Write Stech Culinary on top",
      "Apple Gallette",
      "Pate Choux, make and fill 4 cream puffs and 4 eclairs",
      "Make a decorative bread from Professional Baking Book",
      "End of Course Survey",
    ]
  }
]

export default TECA1630;