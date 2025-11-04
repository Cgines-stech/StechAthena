// TEES 2010

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TEES2010 = [
  {
    id: 21007,
    programId: 1,
    courseNumber: "TEES 2010",
    courseName: "Master Theory I",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 190.00,
    courseFee: 0.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Master Theory I course covers advanced procedures in skin care including the advanced structure and composition of the skin and how to maintain healthy skin. Students demonstrate and explain theory  and practical application procedures associated with the advanced needs of the skin.",

    courseObjectives: [
      "Identify factors that influence aging of the skin.",
      "Recognize which skin disorders can be treated in the spa and which disorders should be referred to a physician.",
      "Practice the fundamental skills in advanced services.",
      "Review safety guidelines, effective communication, professionalism, state licensing requirements, and career opportunities within the industry.",
      "Demonstrate and explain advanced theory, practical application, and procedures associated with advanced skin care.",
      "Demonstrate and learn practical applications while working on course related content.",
      "Demonstrate competency through assignments, testing, and practical application.",
    ],

    courseOutline: [
      { title: "Professionalism & Business", hours: 10},
      { title: "Skin Sciences I", hours: 20},
      { title: "General Sciences", hours: 30},
    ],

    courseBooks: [
      {
        name: "Master Textbook (Advanced Esthetics Textbook)", 
        price: 210.0,
        isbn: "9780357873069",
        note: ""
      },
      {
        name: "Master Workbook (Advanced Esthetics Workbook)", 
        price: 135.0,
        isbn: "9798214049571",
        note: ""
      },
    ],

    syllabiBooks: [
      {
        name: "Master Textbook (Advanced Esthetics Textbook)", 
        price: 210.0,
        isbn: "9780357873069",
        note: ""
      },
      {
        name: "Master Workbook (Advanced Esthetics Workbook)", 
        price: 135.0,
        isbn: "9798214049571",
        note: ""
      },
    ],
    
    courseTools: [
      { name: "Hydrinity Kit", price: 159.0, note: "" },
      { name: "Hydrafacial Kit", price: 390.0, note: "" },
    ],

    courseCertifications: [
      {},
    ],

    otherAssociatedCosts: [
      {},
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

    ]
  }
]

export default TEES2010;