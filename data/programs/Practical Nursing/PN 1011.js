// PN 1011

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const PN1011 = [
  {
    id: 80001,
    programId: 1,
    courseNumber: "PN 1011",
    courseName: "Contemporary Nursing",
    courseCredits: 1,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 20.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "Contemporary Nursing assists the student to integrate prior knowledge and utilize more advanced principles while outlining a basic introduction to the nursing profession.  Throughout the course you will explore the complexities of the health care system in the United States and the role of nurses in providing safe, efficient, and effective care.  You will identify the standards and guidelines of QSEN, the steps of the nursing process and discuss the National guidelines for patient safety, ethical and legal issues of  nursing and the associated responsibilities for nurses. You will analyze the Utah Nurse Practice Act as it affects the functions of the Licensed Practical Nurse and the role of a  student Nurse in preparation for professional practice of LPN. By the end of this course, you will be able to utilize effective communication skills, demonstrate how to work  as a member of a team, verbalize how to confront challenges and complexities in the workplace, and be able to investigate how to move forward into leadership roles.",

    courseObjectives: [
      "Identify the complexities of the health care system of the United States and the role of the nurse within this system (EPSLO # 1, 2, 3, 4, 5).",
      "Describe the ACEN guidelines and standards (EPSLO # 1, 2, 3, 4, 5).",
      "Identify the steps in the nursing process (EPSLO # 1, 2, 3, 4, 5).",
      "Explain the Utah Nurse Practice Act as it applies to the function of the Licensed Practical Nurse (LPN) (EPSLO # 1, 2, 3, 4, 5).",
      "Identify the National Patient Safety Goals (NPSG) as outlined by The Joint Commission (EPSLO # 1, 2, 3, 4, 5).",
      "Summarize ethical and legal responsibilities of the nurse (EPSLO # 1, 2, 3, 4, 5).",
      "Explain the role of a student nurse in preparation for professional practice as an LPN (EPSLO # 1, 2, 3, 4, 5).",
    ],

    courseOutline: [
      { title: "Orientation/Professional Standards of Nursing", hours: 4},
      { title: "Getting Started", hours: 4},
      { title: "Understanding Your Profession", hours: 4},
      { title: "Theory, Culture and Diversity", hours: 4},
      { title: "Preparing for Successful Practice", hours: 4},
      { title: "Moving Forward", hours: 4},
      { title: "Professionalism", hours: 4},
      { title: "Contemporary Nursing Final", hours: 2},
    ],

    courseBooks: [
      {
        name: "Lippincott course Point for Nursing Concepts-LPN/LVN", 
        price: 600.0,
        isbn: "9781496362995",
        note: "Course Text Books and Multple Learning resources are bundled in this product"
      },
      {
        name: "Docucare", 
        price: 105.0,
        isbn: "9781451185171",
        note: "This learning resource will be used in all courses throughout both semesters"
      },
    ],

    syllabiBooks: [
      {
        name: "Lippincott course Point for Nursing Concepts-LPN/LVN", 
        price: 600.0,
        isbn: "9781496362995",
        note: "Course Text Books and Multple Learning resources are bundled in this product"
      },
      {
        name: "Docucare", 
        price: 105.0,
        isbn: "9781451185171",
        note: "This learning resource will be used in all courses throughout both semesters"
      },
    ],
    
    courseTools: [
      { name: "Chrome Book", price: 302.5, note: "Chromebook or similar device", optional: true },
      { name: "Stethoscope/BP Cuff Combo Kit", price: 33.0, note: "" },
      { name: "Shears", price: 16.5, note: "" },
      { name: "Pen light", price: 4.5, note: "" },
      { name: "Hemostat", price: 8.5, note: "" },
    ],

    courseCertifications: [
      {},
    ],

    otherAssociatedCosts: [
      {
        name: "NCLEX-PN", 
        price: 200.0, 
        note: "Payable to Pearson Vue" 
      }
    ],

    courseClassroomHours: [
      {
        startDate: "08-15-2025",
        endDate: "10-03-2025",
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "9:00 AM - 1:00 PM",
        Saturday: "",
      },
      {
        startDate: "01-09-2026",
        endDate: "02-27-2026",
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "9:00 AM - 1:00 PM",
        Saturday: "",
      },
    ],

    instructorContactInformation: [
      { 
        name: "Preston Dye",   
        title: "",        
        email: "pdye@stech.edu",
        phone: "",
        office: "",
        instructorNote: ``, 
      },
    ],

    course_Policies: [
      {}
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "Orientation Acknowledgement",
      "Syllabus Agreement",
      "Course Introduction",
      "APA Template",
      "Day1",
      "Participation",
      "Objectives - Day 1",
      "Reading - Day 1",
      "Weekly Assignments",
      "Priorities Schedule",
      "Discussion 1: Student Government",
      "Discussion 2: Class Pledge",
      "Class Pledge Submission",
      "Lecture Materials",
      "Chapter 1 Powerpoint",
      "Chapter 2 Powerpoint",
      "Resources",
      "Learning Style Assessment",
      "Cornell Notes",
      "Study Tips: Tactile Learners",
      "Note Taking Skills: All Learning Styles",
      "History of Nightingale Pledge",
      "Day2",
      "Participation",
      "Objectives - Day 2",
      "Reading - Day 2",
      "Ticket to ·Class",
      "Ticket to Class; Effective Communication",
      "Weekly Assignments",
      "Reflective Paper",
      "ACEN Poster Project",
      "Lecture Materials",
      "Chapter 3 Powerpoint",
      "Chapter 4 Powerpoint",
      "Chapter 5 Powerpoint",
      "Day3",
      "Participation",
      "Objectives: Day 3",
      "Reading - Day 3",
      "Ticket to ·Class",
      "Ticket to Class - Day 3",
      "Weekly Assignments",
      "LPN Licensing and Career Assignment",
      "Types of Healt hcare Facilities Assignment",
      "Lecture Materials",
      "Chapter 6 Powerpoint",
      "Chapter 7 Powerpoint",
      "Tests/Quizzes",
      "Test 1- Requires Respondus LockDown Browser",
      "Day4",
      "Participation",
      "Objectives: Day 4",
      "Reading - Day 4",
      "Ticket to ·Class",
      "Ticket to Class- Day 4",
      "Weekly Assignments",
      "Miss Evers' Boys",
      "Tuskegee Study Reflection Paper",
      "Lecture Materials",
      "Chapter 8",
      "Chapter 9",
      "Tests/Quizzes",
      "Test2",
      "Participation",
      "Objectives: Day 5",
      "Reading - Day 5",
      "Ticket to ·Class",
      "Ticket to Class - Day 5",
      "Weekly Assignments",
      "Safety and De-escalation Assignment",
      "Final Group Presentation Instructions",
      "Lecture Materials",
      "Chapter 10 Powerpoint",
      "Chapter11 Powerpoint",
      "Day6",
      "Participation",
      "Objectives - Day 6",
      "Reading - Day 6",
      "WeeKly Assignments",
      "The Importance of NPSGs- Reflection Paper",
      "Lecture Materials",
      "Chapter 12 Powerpoint",
      "Chapter 13 Powerpoint",
      "Tests/Quizzes",
      "Test 3- Requires Respondus LockDown Browser",
      "Day7",
      "Participation",
      "Objectives: Day 7",
      "Reading - Day 7",
      "Ticket to ·Class",
      "Ticket to Class Day 7",
      "Weekly Assignments",
      "Final Group Presentation Cultural Competency and Bias",
      "Question submission for group presentations",
      "Lecture Materials",
      "Chapter 14 Powerpoint",
      "Chapter 15 Powerpoint",
      "Chapter 16 Powerpoint",
      "Tests/Quizzes",
      "Unit 4 Test",
      "Day8",
      "Participation",
      "Objectives - Day 8",
      "Ticket to ·Class",
      "Class Presentation Participation",
      "Weekly Assignments",
      "Cultural Bias Reflection Paper and Discussion",
      "Final Reflection",
      "End of Course Survey",
    ]
  }
]

export default PN1011;