// TESU 2900

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const TESU2900 = [
  {
    id: 19008,
    programId: 1,
    courseNumber: "TESU 2900",
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
      {
        name: "Cengage Unlimited Subscription", 
        price: 150.0,
        isbn: "",
        note: "Cengage Unlimited Subscription 1 year"
      },
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
        title: "",
        content: [
          "Course Grading: A clinical evaluation document must be submitted for each clinical day to count towards your overall hours and grades. Clinical evaluation documents will be graded according to how much of the document is completed and that the information is accurate. Students must maintain 80% in this course."
        ]  
      },
      {
        type: "gradeScale",
        title: GS?.title || "",
         description: GS?.description || "",
        scale: GS?.scale || []   // expecting 12 items with { letter, range }
      },
      {
        title: "",
        content: [
          "Course Policies: Student must adhere to the Program Safety, Performance Standards, and code of conduct outlined in the Surgical Technology Policies and Procedures. Student must wear royal blue embroidered scrubs and close-toed shoes and adhere to facility policies and standards.",
          "Students must complete all required hours and surgical cases to be eligible for the certification exam. Students must complete all of their clinical hours in a timely manner. Each student is required to complete approximately 16 hours of clinicals per week. If you are going to be absent, communication with your instructor will be required to help you set up time to make up clinical hours. It is your responsibility to ask for more clinical days if you do not have enough hours. Make-up days will be provided towards the end of the course. If clinical hours are not completed before the end date, you may be dismissed from the program. You may use cell phones at your own discretion. We highly recommend that you avoid taking your cell phone with you into the operating room.",
          "You may be required to stand for a long amount of hours without a break. You may need to lift heavy items such as instrument pans or transferring a patient.",
        ]  
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
      "Experience Essay ",
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

export default TESU2900;