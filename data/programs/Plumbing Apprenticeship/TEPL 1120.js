// TEPL 1120

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEPL1120 = [
  {
    id: 22002,
    programId: 1,
    courseNumber: "TEPL 1120",
    courseName: "Plumbing Apprentice IB",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 65.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Plumbing IB course introduces the fundamentals of plumbing theory for the apprentice plumbers and will cover the International Plumbing Code, related math, and craft skills.",

    courseObjectives: [
      "Identify fixtures, faucets and fixture fittings, water heaters, traps, interceptors and separators.",
      "Develop basic skills needed to read drawings and produce piping sketches.",
      "Apply mathematics related to plumbing and angles.",
      "Implement the process of making watertight joints using heat and various filler metals.",
      "Define machine and hand excavating with emphasis on safety.",
      "Explain various types of pipe and fittings used in residential and light commercial plumbing systems.",
      "Fabricate several piping projects in a lab situation",
    ],

    courseOutline: [
      { title: "Year IB", hours: 90},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {
        name: "Mathematics for Plumbers and Pipefitters", 
        price: 150.0,
        isbn: "9781111642600",
        note: "Cengage Unlimited Yearly Subscription. Also used in TEPL 1120"
      },
      {
        name: "Modern Plumbing eBook Bundle w/2yr access code", 
        price: 175.0,
        isbn: "9781637768303",
        note: ""
      },
      {
        name: "International Plumbing Code 2021", 
        price: 114.0,
        isbn: "9781609839628",
        note: ""
      },
      {
        name: "International Plumbing Code 2021 Study Companion", 
        price: 84.0,
        isbn: "9781955052283",
        note: ""
      },
    ],
    
    courseTools: [
      {}
    ],

    courseCertifications: [
      {},
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
      {
        termLabel: "",
        startDate: "01-05-2027",
        endDate: "04-21-2027",
        Monday: "",
        Tuesday: "6:00 PM - 9:00 PM",
        Wednesday: "6:00 PM - 9:00 PM",
        Thursday: "",
        Friday: "",
        Saturday: "",
      },
    ],

    instructorContactInformation: [
      {},
    ],

    course_Policies: [
      {}
    ],

    courseAssignmentsandAsssessments: [
      "How do I submit an assignment online?",
      "How do I take a quiz?",
      "How do I view my grades?",
      "How can I use Canvas on my mobile device?",
      "Hybrid Assignments",
      "Work Information",
      "Read Chapter 11: Soldering, Brazing, and Welding in the Modem Plumbing textbook",
      "Chapter11 Know and Understand",
      "Chapter 11 Lab Workbook Assignment",
      "Discussion Board: Modem Plumbing Chapter 11- Soldering. Brazing and Welding",
      "Read Chapter 12: Excavating",
      "Chapter 12 Know and Understand",
      "Chapter 12 Lab Workbook Assignment",
      "DISCUSSION: Class Roll",
      "Study Resources",
      "How to Braze Copper Pipe",
      "chtt_soldering_brazing_welding.pptx",
      "ch12_presentation_excavating.pptx",
      "Hybrid Assignments",
      "Read MOPL Chapter 13: Water Supply Systems",
      "Chapter 13 Know and Understand",
      "Chapter 13 Lab Workbook Assignment",
      "Read MOPL Chapter 14: Water Treatment",
      "Chapter 14 Know and Understand",
      "Chapter 14 Lab Workbook Assignment",
      "Discussion Board: Modem Plumbing Chapter 14 Water treatment",
      "Study Resources",
      "ch13 _presentation_ water design_systems.ppbc",
      "Water Cycle",
      "Private Well",
      "Ch14_presentation_water_treatmenlppbc",
      "Choosing a Water Filter Video",
      "Water Softener Systems Video",
      "Hybrid Assignments",
      "Quiz: MP Chapters 13 & 14",
      "DISCUSSION: Excavating",
      "Read Chapter 15 Plumbing Fixtures in Modern Plumbing textbook",
      "Chapter 15 Know and Understand",
      "View as Student",
      "Collapse All View Progress Ill",
      "Chapter 15 Lab Workbook",
      "Chapter 15 Fixture Activity",
      "Discussion Board: Modem Plumbing Chapter 15 ( Plumbing Fixtures)",
      "Study Resources",
      "ch15_plumbing_flxtures.pptx",
      "Hybrid Assignments",
      "Read IPC Chapter 4: FIXTURES, FAUCETS, AND FIXTURE FITTINGS",
      "IPC 55 4 - Fixtures, Faucets and Fixture Fittings I",
      "IPC 55 5 Quiz - fixtures, Faucets and Fixture Fittings II",
      "DISCUSSION: Toilets",
      "Fixture Report",
      "Read MP Chapter 16: Piping Materials and Fittings",
      "Chapter 16 Know and Understand Assignment",
      "Chapter 16 Lab Workbook Assignment",
      "Study Resources",
      "Plumbing Fittings.pdf",
      "ch16_Piping Materials and Fittings.pptx",
      "Hybrid Assignments",
      "Read Chapter 6: IPC Code Book: water supply and distribution IPC Code book",
      "IPC SS 7 Quiz-Water Supply and Distribution I ( sections 601 - 605 )",
      "IPC SS 8 Quiz - Water Supply and Distribution II ( sections 606 - 613)",
      "DISCUSSION: Class Roll",
      "Read Chapter 17: Valves and Meters in the Modern Plumbing textbook",
      "Chapter 17 Know and Understand Assignment",
      "Chapter 17 Lab Workbook Assignment",
      "Study Resources",
      "Water supply systems.pptx",
      "ch17 Valves and Meters.pptx",
      "Hybrid Assignments",
      "Unit 8 Allowance for Threaded Fittings",
      "Unit 10Allowances for Copper Fittings",
      "Unit 12 Allowance for Plastic Fittings",
      "I' Math: Units 8, 10, 12",
      "Unit 15 Equal Spacing",
      "Unit 16 Angles in Plumbing",
      "I' Math: Units 15·16",
      "Unit 18 Solving with 45° Constants",
      "Unit 19 45° Diagonal and Pipe l ength",
      ",f' Math: Units 18-19",
      "Unit 20 Three-Pipe Diagrams with a 45° Offset",
      ",f' Math: Unit 20",
      "Conversion Review",
      "Area, Volume Review",
      "Math Review",
      "Plumbing 1 Math Review Quiz",
      "Study Resources",
      "Data Table 5·7.pdf",
      "Hybrid Assignments",
      "MP Chapter 15, 16, 17",
      "Read MOPL Chapter 18: Water Heaters",
      "MP Chapter 18 Lab Workbook",
      "MP Chapter 18 Know and Understand",
      "Read IPC Chapter 5 - Water Heaters",
      "IPC SS 6 Quiz - Water Heaters",
      "DISCUSSION: Water Heaters",
      "Hybrid Assignments",
      "Read Chapter 7: IPC Code Book Sanitary Drainage",
      "IPC Chapter 7 SS 9 Quiz - Sanitary Drainage I ( sections 701 - 707 )",
      "IPC Chapter 7 SS 10 Quiz - Sanitary Drainage II { sections 708 - 718)",
      "Read Chapter 8: IPC Code Book Indirect/Special Waste",
      "IPC Chapter 8 Worksheet - Indirect/Special Waste",
      "Hybrid Assignments",
      "Read IPC Code Chapter 10 Traps, Interceptors and Separators",
      "IPC Chapter 10 • Traps, Interceptor and Separators",
      "Read IPC Chapter 11 & 12 Storm Drainage & Special piping and Storage Systems",
      "Read IPC Chapters 13-14, Non potable Water Systems & Subsurface Graywater Soil Absorption Systems",
      "IPC Ch 11-14 Quiz - Storm Drainage, Special Piping and Storage Systems, Non potable Water Systems and Subsurface landscape Irrigation Systems",
      "Hybrid Assignments - Make up Days",
      "Hybrid Assignments",
      "Unit 11 Plastic Pipe",
      "Math Unit 11 Quiz",
      "Unit 13 Welded Steel Pipe",
      "Math Unit 13 Quiz",
      "Unit 14 Allowing for Welded Fittings",
      "Math Unit 14 Quiz",
      "Unit 17 Offset, Diagonal, Rise, and Run",
      "Math Unit 17 Quiz",
      "Hybrid Assignments",
      "Unit 22 45° Offsets with a Wye Fitting",
      "Math Unit 22 Quiz",
      "Unit 23 Wye and Tee--Wye Assemblies",
      "Math Unit 23 Quiz",
      "Unit 24 The 0. 707 Constant in 45° Pipe Assemblies",
      "Math Unit 24 Quiz",
      "Hybrid Assignments",
      "Final Competency Exam Review",
      "On Campus Pass-off",
      "Final Competency Exam",
      "On Campus Pass-off",
      "Competency test retake",
    ]
  }
]

export default TEPL1120;