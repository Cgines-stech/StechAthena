// TEWT 1004

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEWT1004 = [
  {
    id: 95003,
    programId: 1,
    courseNumber: "TEWT 1004",
    courseName: "Advanced Thermal Cutting and Brazing",
    courseCredits: 1,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 105.00,
    instructionalType: "LAB",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This course continues with oxygen and fuel gas (oxy fuel) cutting and brazing systems as well as Carbon Arc Cutting and Plasma Arc Cutting systems, specifically safety. Students will continue to practice oxy fuel cutting.",

    courseObjectives: [
      "Perform safety inspection of equipment and accessories and proper set up and shut down techniques.",
      "Utilize charts to identify proper tip selection and gas working pressures.",
      "Demonstrate carburizing, neutral, and oxidizing flames.",
      "Identify the basic components, safety concerns, and properly set up Carbon Arc Cutting (CAC).",
      "Identify the basic components, safety concerns, and properly set up Plasma Arc Cutting (PAC).",
    ],

    courseOutline: [
      { title: "Oxy-Fuel Set Up Walk Through", hours: 5},
      { title: "Oxy-Fuel Brazing", hours: 5},
      { title: "Plasma Cutting", hours: 10},
      { title: "Carbon Arc Cutting", hours: 10},
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
      { name: "Welding Jacket", price: 132.0, note: "" },
      { name: "Welding Chaps", price: 72.0, note: "" },
      { name: "Welding Hat", price: 17.0, note: "" },
      { name: "Welding Wire Brush", price: 7.0, note: "" },
      { name: "Welding Chipping Hammer", price: 21.0, note: "" },
      { name: "Welding Helmet", price: 135.0, note: "" },
      { name: "Welding Pliers", price: 14.0, note: "" },
      { name: "Welding Welpers", price: 19.0, note: "" },
      { name: "Welding Goggles", price: 20.0, note: "" },
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
      "Orientation",
      "Welcome to Oxy- Fuel: Safety First",
      "READ Chapter 31: Oxyacetylene Welding",
      "Shop PPE",
      "READ Chapter 32: Brazing, Braze· Welding, and Soldering",
      "Intro to Brazing",
      "Fuel Gases",
      "Pad of Beads",
      "Lap Joints",
      "Lab time",
      "Shop PPE PAC",
      "Plasma Cutting: Mild Steel",
      "Cutting Mild Steel",
      "Plasma Cutting: Aluminum",
      "Cutting Aluminum",
      "Plasma Cutting: Stainless Steel",
      "Cutting Stainless Steel",
      "READ Chapter 08: Plasma Arc Cutting",
      "STUDY IT: Chapter 08: Review Tools and Homework",
      "Questions",
      "Lab time",
      "Carbon Arc Cutting: Gouging of Groove Welds",
      "Shop PPE CAC",
      "Gouging Grooves",
      "Carbon Arc Cutting: Gouging of Fillet Welds",
      "Gouging Fillets",
      "READ Chapter 09: Related Cutting Processes",
      "STUDY IT: Chapter 09: Review Tools and Homework",
      "Questions",
      "Lab time",
      "Work Ethic Assessment",
      "End of Course Survey",
    ]
  }
]

export default TEWT1004;