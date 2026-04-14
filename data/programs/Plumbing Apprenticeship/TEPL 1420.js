// TEPL 1420

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEPL1420 = [
  {
    id: 22008,
    programId: 1,
    courseNumber: "TEPL 1420",
    courseName: "Plumbing Apprentice IVB",
    courseCredits: 3,
    statewideAlignment: "Aligned",
    courseClockHours: 90,
    courseTuition: 285.00,
    courseFee: 65.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Plumbing IVB course assists the apprentices in passing the state test and provides a foundation for success as a journeyman plumber. A variety of modules are available for the student to work from, with a focus on what each individual student needs in order to prepare for the test.",

    courseObjectives: [
      "Review International Plumbing Code (IPC) chapters.",
      "Apply mathematics for plumbers and pipefitters.",
      "Use International Fuel Gas Code for gas pipe installation and sizing.",
      "Define traps and commercial applications.",
      "Explain storm drainage and commercial/industrial applications.",
      "Identify boilers, water heaters, and pressure vessels.",
      "Perform applied trade formulas using different equations.",
      "Calculate heat loss vs. radiator size.",
      "Determine radiation sizing for total heat loss of a room.",
      "Use Journeyman skills such as takeoff lists, leadership skills, communication, and basic business skills.",
      "Fabricate several piping projects in a lab situation.",
    ],

    courseOutline: [
      { title: "Year IVB", hours: 90},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {
        name: "International Fuel Gas Code 2021", 
        price: 107.0,
        isbn: "9781609839666",
        note: ""
      },
      {
        name: "International Fuel Gas Code 2021 Study Companion", 
        price: 83.0,
        isbn: "9781955052320",
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
      "Week 1",
      "Hybrid Assignments",
      "Week 2",
      "Work Information",
      "Math Assignment: How Well Do I Know My Stuff?",
      "Requirements for the Plumber Journeyman Test",
      "Math: Hydraulics Review",
      "48 Math Review",
      "Hybrid Assignments",
      "Flash Cards-2",
      "Math Review Quiz",
      "Read IFGC Chapter 4: Gas Piping Installations Sections 401 - 406 including the Tables",
      "IFGC (401-406) SS 4",
      "Week 3",
      "Hybrid Assignment",
      "Week 4",
      "IFGC Pipe Sizing Worksheet 1",
      "IFGC Pipe Sizing Worksheet 2",
      "Read IFGC Chapter 4: Gas Piping Installations Sections 407 - 416",
      "IFGC Ch. 4 (407·416) SS 5",
      "Hybrid Assignments",
      "Week 5",
      "Read Chapter 10 IMC Boilers, Water Heaters and Pressure Vessels in the IMC code book",
      "IMC Chapter 10 Study Session 11",
      "Read Chapter 12: Hydronic Piping in the IMC Code Book",
      "IMC Chapter 12 Study Session 13",
      "Hybrid Assignments",
      "Week 6",
      "Math: Rolling Offsets",
      "Math: PVC Labs #1·5",
      "Math: PVC Labs #6·10",
      "Hybrid Assignments",
      "Read Modern Plumbing Chapter 29",
      "Watch",
      "Week 7",
      "NFPA 13D Chagters 1 to 3",
      "NFPA 13D Chapters 4 to 6",
      "NFPA 130 Chapter 7",
      "NFPA 13D Chapter 8 Part 1",
      "NFPA 13D Chapter 8 Part 2",
      "NFPA 13D Chapter 9",
      "NFPA 130 Chapters 10 to 12",
      "Hybrid Assignments",
      "Week 8",
      "Review IPC Chapter 7: Sanitary Drainage",
      "dd IPC ss 9 Quiz - Sanitary Drainage I",
      "dd IPC 55 10 Quiz - Sanitary Drainage II",
      "Review IPC Chapter 8: Indirect/Special waste",
      "dd IPC SS 11 Quiz - Indirect/Special Waste",
      "Hybrid Assignments",
      "Review Chapter 9 Vents in I PC",
      "dd IPC SS 12 Quiz - Vents I",
      "dd IPC 5513 Quiz· Vents II",
      "Review IPC Chapter 11: Storm Drainage and Chapter 12: Special Piping and Storage Systems",
      "dd IPC SS 15 Quiz - Storm Drainage, Special Piping and Storage Systems, Nonpotable Water Systems and Subsurface l andscape Irrigation Systems",
      "Study Resources",
      "IPC 11 Roof Drain Sizing.pptx",
      "Week 9",
      "Hybrid Assignments",
      "Review IPC Chapter 6: Water Supply and Distribution",
      "dd IPC SS 7 Quiz - Water Supply and Distribution I",
      "dd IPC SS 8 Quiz - Water Supply and Distribution II",
      "Review IPC Chapter 10: Traps, Interceptors, and Separators",
      "dd IPC SS 14 Quiz - Traps, Interceptor and Separators",
      "Week 10",
      "Hybrid Assignments - Make up Days",
      "Week11",
      "Hybrid Assignments",
      "Review IPC Chapter 3: General Regulations",
      "Week 12",
      "dd IPC SS 2 Quiz - General Regulations I",
      "dd IPC S5 3 Quiz - General Regulations II",
      "Review IPC Chapter 4: Fixtures, Faucets and Fixture Fittings",
      "dd IPC 55 4 Quiz - Fixtures, Faucets and Fixture Fittings I",
      "dd IPL SS 5 Quiz - rixtures, r aucets and fixture f ittings ii",
      "Hybrid Assignments",
      "Review IPC Chapter 5: Water Heaters",
      "IPC SS 6 • Water Heaters",
      "On Campus Skills Pass-off",
      "Week 13",
      "Lab Activity: PVC Project# 3 Using 1 and 3/4 PVC Pipe and Fittings",
      "Lab Activity: PVC Project #9 Rolling Offset Using 1 and 3/4 PVC Pipe and Fittings",
      "Lab Activity: PVC Project #2 Using 1 and 3/4 PVC Pipe and Fittings",
      "Hybrid Assignments",
      "Final Competency Exam Review",
      "Final Exam Review",
      "Week 14",
      "On Campus Skills Pass-off",
      "Final Competency Exam",
      "Week 15",
      "On Campus Skills Pass-off",
      "Competency Exam Retake",
    ]
  }
]

export default TEPL1420;