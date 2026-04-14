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
    courseTuition: 285.00,
    courseFee: 65.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Plumbing IA course explores the secure and highly demanded profession of plumbing. The primary emphases include: the understanding and interpretation of the International Plumbing Code (IPC), blueprint reading, materials and requirements, practical mathematics required in plumbing, and other subject areas that are essential to the trade which are more conducive to the classroom setting than a work environment.",

    courseObjectives: [
      "Practice safety and the proper use of tools and leveling instruments.",
      "Define hydraulics and pneumatics.",
      "Interpret building and plumbing codes.",
      "Apply basic mathematics toward measurements, angles, slopes, and other plumbing related problems.",
      "Fabricate plumbing projects in a lab setting.",
    ],

    courseOutline: [
      { title: "Year IA", hours: 90},
    ],

    courseBooks: [
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
        startDate: "08-25-2026",
        endDate: "12-08-2026",
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
      "On Campus",
      "Orientation",
      "Orientation Acknowledgement",
      "Hybrid Assignments",
      "Course Read and Review: Chapter 1 Safety Reading and Know and Understand Questions",
      "Discussion 1: Safety",
      "Workbook: Chapter 1 Lab Workbook",
      "Modern Plumbing Chapter 1 Quiz",
      "Read and Review: Chapter 2 Plumbing Tools Reading and Know and Understand Questions",
      "Discussion 2: Plumbing Tools",
      "Workbook: Chapter 2 Lab Workbook",
      "Modern Plumbing Chapter 2 Quiz",
      "Study Resources",
      "Chapter 1 PowerPoint",
      "Chapter 2 PowerPoint",
      "Hybrid Assignments",
      "Read and Review: Chapter 3 Plumbing Career Opportunities Know and Understand Questions",
      "Discussion 3: Career Opportunities",
      "Worl<book: Chapter 3 Lab Workbook",
      "Modern Plumbing Chapter 3 Quiz",
      "Read and Review Chapter 4 History of Plumbing Know and Understand Questions",
      "Discussion 4: History of Plumbing",
      "Workbook: Chapter 4 Lab Wotkbook",
      "Modern Plumbing Chapter4 Quiz",
      "Study Resources",
      "Chapter 3 PowerPoint",
      "Chapter4 PowerPoint",
      "Hybrid Assignments",
      "Read and Review: Chapter 5 Leveling Instruments Know and Understand Questions",
      "Discussion 5: Chapter 5",
      "Worl<book: Chapter 5 Lab Workbook",
      "Modern Plumbing Chapter 5 Quiz",
      "Read and Review: Chapter 7 Hydraulics and Pneumatics Know and Understand Questions",
      "Discussion 6: Hydraulics and Pneumatics",
      "Worl<book: Chapter 7 Lab Workbook",
      "Modern Plumbing Chapter 7 Quiz",
      "Study Resources",
      "Chapter 5 PowerPoint",
      "Surveying Video 1",
      "Surveying Video 2",
      "Surveying Video 3",
      "Surveying Video 4",
      "Surveying Video 5",
      "Chapter 7 PowerPoint",
      "Hybrid Assignments",
      "Read and Review: Chapter 8 Print Reading and Sketching Know and Understand Questions",
      "Discussion 7: Identification of Plumbing Symbols",
      "Workbook: Chapter 8 Lab Workbook",
      "Modern Plumbing Chapter 8 Quiz",
      "Read and Review: Chapter 9 Green Construction Know and Understand Questions",
      "Discussion 8: What is Green Construction?",
      "Workbook: Chapter 9 Lab Workbook",
      "Modern Plumbing Chapter 9 Quiz",
      "Study Resources",
      "Chapter 8 PowerPoint",
      "Chapter 9 PowerPoint",
      "Hybrid Assignments",
      "Read and Review: Chapter 10 Building and Plumbing Codes Know and Understand Questions",
      "Discussion 9: Importance of Building Codes as They Apply to the Plumbing Industry",
      "Worl<book: Chapter 10 Lab Workbook",
      "Modern Plumbing Chapter 10 Quiz",
      "Understanding International Plumbing Code: Chapter 1 - Scope and Administration",
      "Understanding International Plumbing Code: Drainage Pipe Sizing",
      "Discussion 10: Building Code Part 1 and 2 videos",
      "Study Resources",
      "Chapter 10 PowerPoint",
      "Hybrid Assignments",
      "Read lntemational Plumbing Code Chapter 1: Scope and Administration",
      "IPC SS 1 - Scope and Administration",
      "Discussion 10: Chapter 1 Scope and Administration",
      "Read lntemational Plumbing Code Chapter 2: Definitions",
      "Discussion 11: Definitions?",
      "On Campus Pass-off",
      "Lab Activity Week 6: Copper Solder Project",
      "lab Activity Week 6: PVC project",
      "Hybrid Assignments",
      "Read lntemational Plumbing Code Chapter 3: General Regulations",
      "Discussion 13: Online Oass Feb 21st",
      "301-306 Video",
      "301-306 Video Quiz",
      "IPC ss 3· General Regulations I",
      "Discussion: Chapter 3 International Plumbing Code",
      "Study Session 2: Article 301-307 from the International Plumbing Code",
      "Study Resources",
      "Hybrid Assignments",
      "CLASS DISCUSSION BDARD, WORK DN MISSING WORK AND OTHER ASSIGNMENTS",
      "Study Session: Article 308-314 from the International Plumbing Code",
      "307-316 Video",
      "IPC 307-316 Video Quiz",
      "IPC 55 3 - General Regulations II",
      "Read and Review Chapter 6 Mathematics for Plumbers Know and Understand Questions",
      "Discussion: What math topics are you most concemed about?",
      "Workbook: Chapter 6 Lab Workbook",
      "Modern Plumbing Chapter 6 Quiz",
      "On Campus Pass-off",
      "Instructor Demonstration: Soldering Demonstration",
      "Study Resources",
      "Chapter 6 PowerPoint",
      "Hybrid Assignments",
      "Read Mathematics for Plumbers and Pipefitters Unit 1: Basic Rules of Math.",
      "MPPUnit1",
      "Read Mathematics for Plumbers and Pipefitters Unit 2: Formulas",
      "Unit2a",
      "MPPUnit2",
      "Class Discussion: Define the Kinds of Measurements Used and Review of Mathematical Symbols",
      "Class Discussion: Define the Use of Symbols",
      "Class Discussion: Relate Geometry to Pumbing",
      "Class Discussion: Review Math Procedures and Precedence",
      "CLASS DISCUSSION, Math",
      "On Campus Pass-off",
      "Study Resources",
      "Hybrid Assignments",
      "Math: Unit 47-48",
      "MPPUnit3",
      "Unit4a",
      "Read Mathematics for Plumbers and Pipefitters Unit 5: Review of Angle Measure",
      "Read Mathematics for Plumbers and Pipefitters Unit 6: Conversion of length Measures",
      "Math: Unit6",
      "Pressure Formula",
      "Class Discussion: Determine How to Find the Square Root of a Number",
      "Class Discussion: Define an Angle",
      "Class Discussion: Using Square Roots to Solve Right Triangle Problems",
      "Class Discussion: Use of Proper Measurements for Each Task",
      "Class Discussion: Alternate and Corresponding Angles",
      "Class Discussion: Convert Between Different Dimensional Standards",
      "On Campus Pass-off",
      "Study Resources",
      "Hybrid Assignments",
      "CLASS DISCUSSION BOARD",
      "Class activity: Field trip to central davis sewer district plant located at 2200 South Sunset Drive, Kaysville at 6PM",
      "Grade, Drop, Run",
      "Math Review",
      "Math Review Quiz",
      "On Campus Pass-off I Study Resources",
      "Hybrid Assignments",
      "dd IPC SS 4 Quiz - Fixtures, Faucets and Fixture Fittings I",
      "CLASS DISCUSSION BOARD",
      "dd IPC SS S Quiz• Fixtures, Faucets and Fixture Fittings II",
      "On Campus Pass-off I Study Resources",
      "Hybrid Assignments",
      "R317-4 Onsite Wastewater System Worksheet",
      "Competency Test Review",
      "On Campus Pass-off I Study Resources",
      "Hybrid Assignments",
      "Class Discussion: Comp Test Review in Class,",
      "On Campus Pass-off",
      "Plumbing 1A Competency Test {1A Final Exam)",
      "Study Resources",
      "Hybrid Assignments",
      "On Campus Pass-off I Competency Test Retake",
      "Study Resources",
      "End of Course Survey",
    ]
  }
]

export default TEPL1110;