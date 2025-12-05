// TESU 2910

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const TESU2910 = [
  {
    id: 19009,
    programId: 1,
    courseNumber: "TESU 2910",
    courseName: "Surgical Technology Clinical Externship II",
    courseCredits: 4,
    statewideAlignment: "Aligned",
    courseClockHours: 180,
    courseTuition: 380.00,
    courseFee: 0.00,
    instructionalType: "SUP",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "The Surgical Technology Clinical Externship II course will extend the educational experience in the surgical field under the supervision of experienced medical professionals in a clinical setting.",

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
      { title: "Surgical Technology Clinical Externship V", hours: 45},
      { title: "Surgical Technology Clinical Externship VI", hours: 45},
      { title: "Surgical Technology Clinical Externship VII", hours: 45},
      { title: "Surgical Technology Clinical Externship VIII", hours: 45},
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
      {}
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
      {
        startDate: "07/20/2026",
        endDate: "10/30/2026",
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
          "A clinical evaluation document must be submitted for each clinical day to count towards your overall hours and grades. Clinical evaluation documents will be graded according to how much of the document is completed and that the information is accurate. Students must maintain 80% in this course."
        ]  
      },
      {
        type: "gradeScale",
        title: GS?.title || "Grading Scale",
         description: GS?.description || "",
        scale: GS?.scale || []   // expecting 12 items with { letter, range }
      },
      {
        title: "General Course Policies",
        content: [
          "Course Policies: Student must adhere to the Program Safety, Performance Standards, and code of conduct outlined in the Surgical Technology Policies and Procedures. Student must wear royal blue embroidered scrubs and close-toed shoes and adhere to facility policies and standards.",
          "Students must complete all required hours and surgical cases to be eligible for the certification exam. Students must complete all of their clinical hours in a timely manner. Each student is required to complete approximately 16 hours of clinicals per week. If you are going to be absent, communication with your instructor will be required to help you set up time to make up clinical hours. It is your responsibility to ask for more clinical days if you do not have enough hours. Make-up days will be provided towards the end of the course. If clinical hours are not completed before the end date, you may be dismissed from the program. You may use cell phones at your own discretion. We highly recommend that you avoid taking your cell phone with you into the operating room.",
          "You may be required to stand for a long amount of hours without a break. You may need to lift heavy items such as instrument pans or transferring a patient.",
        ]  
      },
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "TESU 2910 Syllabi",
      "Student Clinical Paperwork.pdf",
      "Clinical Information for Student s.pdf",
      "Clinical Schedule 2025.pdf",
      "Cedar City Clinical Sheet.pdf",
      "St.George Regional Clinical Sheet.pdf",
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week S",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
      "Makeup Days",
      "Critical Competency for Certification",
      "Clinical Preparation Sheets",
      "End of Course Survey",
    ]
  }
]

export default TESU2910;