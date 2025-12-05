// TESU 2910

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const TESU2910 = [
  {
    id: 19008,
    programId: 1,
    courseNumber: "TESU 2910",
    courseName: "Surgical Technology Clinical Externship I",
    courseCredits: 4,
    statewideAlignment: "Aligned",
    courseClockHours: 180,
    courseTuition: 380.00,
    courseFee: 0.00,
    instructionalType: "SUP",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Surgical Technology Clinical Externship I course will extend the educational experience in the surgical field under the supervision of experienced medical professionals in a clinical setting.",

    courseObjectives: [
      "Practice decontamination standards and procedures for both sterile and non-sterile instrumentation and equipment",
      "Demonstrate spatial relations within a surgical field",
      "Implement infection control procedures, hazard communication, and health and safety procedures",
      "Demonstrate skills for scrubbing, gowning, gloving, and draping",
      "Integrate employability skills",
      "Assist with patient care",
      "Facilitate case preparation",
    ],

    courseOutline: [
      { title: "Surgical Technology Clinical Externship I", hours: 45},
      { title: "Surgical Technology Clinical Externship II", hours: 45},
      { title: "Surgical Technology Clinical Externship III", hours: 45},
      { title: "Surgical Technology Clinical Externship IV", hours: 45},
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
      {
         name: "NCCT TS-C Exam",
         price: 199.0,
         note: ""
      }
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
      {
        startDate: "05/01/2026",
        endDate: "07/17/2026",
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
      }
    ],

    instructorContactInformation: [
      {}
    ],

    course_Policies: [
      {
        title: "Course Grading",
        content: [
          "A clinical evaluation document must be submitted for each clinical day to count towards your overall hours and grades. Clinical evaluation documents will be graded according to how much of the document is completed and that the information is accurate. Students must maintain 80% in this course.",
        ]  
      },
      {
        type: "gradeScale",
        title: GS?.title || "Grading Scale",
         description: GS?.description || "",
        scale: GS?.scale || []   // expecting 12 items with { letter, range }
      },
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "TESU 2900 Syllabi",
      "Student Clinical Paperwork.pdf",
      "Clinical Information for Students.pdf",
      "Clinical Schedule 2025.pdf",
      "Cedar City Clinical Sheet.pdf",
      "St.George Regional Clinical Sheet.pdf",
      "Week 1/2",
      "Week 3",
      "Week 4",
      "Week S",
      "Week 6",
      "Week 7",
      "Experience Essay",
      "Week 8",
      "Week 9",
      "Week 10",
      "Week 11",
      "Week 12",
      "Week 13",
      "Makeup Days",
      "Clinical Preparation Sheets",
      "Clinical Experience Essay",
      "End of Course Survey",
    ]
  }
]

export default TESU2910;