// TEPL 1110

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEPL1110 = [
  {
    id: 22001,
    programId: 1,
    courseNumber: "TEPL 1110",
    courseName: "Plumbing Apprentice IA",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 570.00,
    courseFee: 225.00,
    instructionalType: "LEL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "",

    courseObjectives: [
      "",
    ],

    courseOutline: [
      { title: "Foundations", hours: 25},
    ],

    courseBooks: [
      {
        name: "Emergency Care and Transportation of the Sick and Injured Advantage Package Twelfth Edition", 
        price: 340.0,
        isbn: "9781284243758",
        note: ""
      },
    ],

    syllabiBooks: [
      {
        name: "Emergency Care and Transportation of the Sick and Injured Advantage Package Twelfth Edition", 
        price: 340.0,
        isbn: "9781284243758",
        note: ""
      },
    ],
    
    courseTools: [
      { name: "BP cuff/stethoscope", price: 33.0, note: "Available in Stech Bookstore" },
      { name: "Shears", price: 16.5, note: "Available in Stech Bookstore" },
      { name: "Pen light", price: 4.5, note: "Available in Stech Bookstore" },
      { name: "EMT Pants", price: 30.0, note: "Purchased on your own" },
      { name: "EMT Boots", price: 30.0, note: "Purchased on your own" },
      { name: "Watch", price: 10.0, note: "Purchased on your own" }
    ],

    courseCertifications: [
      {
        name: "EMT License/Processing Fees", 
        price: 110.25, 
        note: " Paid to Office of Emergency Medical Services" 
      },
    ],

    otherAssociatedCosts: [
      {
        name: "EMT Written Fees", 
        price: 98.0, 
        note: "Paid to National Registry" 
      }
    ],

    courseClassroomHours: [
      {
        startDate: "09-02-2025",
        endDate: "12-16-2025",
        Monday: "",
        Tuesday: "6:00 PM - 9:00 PM",
        Wednesday: "6:00 PM - 9:00 PM",
        Thursday: "",
        Friday: "",
        Saturday: "",
      }
    ],

    instructorContactInformation: [
      {}
    ],

    course_Policies: [
      {}
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
    ]
  }
]

export default TEPL1110;