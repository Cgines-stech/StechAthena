// TEPN 2970

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const TEPN2970 = [
  {
    id: 80017,
    programId: 1,
    courseNumber: "TEPN 2970",
    courseName: "Clinical Learning I",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 90,
    courseTuition: 190.00,
    courseFee: 20.00,
    instructionalType: "WBL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "Clinical Learning I provides safe off-campus practice-learning environments where students will transfer and apply the knowledge, skills, and behaviors acquired in the classroom and skills lab. With supervision and prompting, students will begin providing care for adults with commonly occurring problems as well as with the elderly. With a focus on health assessment and wellness, students will begin applying the fundamental skills and concepts of nursing. The professional standards of AACN provide the context for this course to guide student learning and provide meaningful purpose.",

    courseObjectives: [
      "Demonstrate basic communication and collaboration skills when involving clients in developing nursing care plans.",
      "Demonstrate basic nursing skills while providing safe client care.",
      "Utilize basic techniques of effective and efficient communication with clients, families, and team members.",
      "Demonstrate use of evidence-based practice in providing care to assigned clients.",
      "Explain quality improvement activities clinical sites have developed for nursing staff.",
      "Show basic use of informatics to gather data in assessment of clients.",
      "Make use of the nursing process to develop a nursing care plan.",
    ],

    courseOutline: [
      { title: "Orientation", hours: 5},
      { title: "Patient-centered Care", hours: 12},
      { title: "Safety", hours: 12},
      { title: "Teamwork and Collaboration", hours: 12},
      { title: "Evidence-based Practice", hours: 12},
      { title: "Quality Improvement", hours: 12},
      { title: "Informatics", hours: 12},
      { title: "Staff Communication", hours: 12},
      { title: "Course Evaluation", hours: 1},
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
      {},
    ],

    otherAssociatedCosts: [
      {}
    ],

    courseClassroomHours: [
      {
        termLabel: "Fall",
        startDate: "10-26-2026",
        endDate: "12-11-2026",
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
      },
      {
        termLabel: "Spring",
        startDate: "03-23-2027",
        endDate: "05-14-2027",
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
      },
    ],

    instructorContactInformation: [
      { 
        name: "Patricia Weller",
        title: "",
        email: "pweller@stech.edu",
        phone: "",
        office: "",
        instructorNote: ``},
    ],

    course_Policies: [
      {
        title: "Course Policies",
        content: [
          "<strong>Instructor Information and Course Requirements:</strong> Professionalism, client confidentiality, and eagerness to learn are key aspects for success in this course. A positive professional attitude is essential. Students are expected to protect the health information of the clients they observe or to whom they provide care. Client situations are to be discussed in a private area with the appropriate nurse, health care provider, or PN faculty member. Assignments for each clinical rotation are to be completed by the due date, and electronically submitted via the Canvas portal. The student must obtain a score of 80% or better on all assignments. This Clinical Learning course requires 135 hours of work-based learning. The hours will be documented and signed off by the clinical coordinator.",
          "<strong>Grading:</strong> A cumulative average of 80% or better is required on all course requirements. Evaluation methods include assignments (50%), participation (25%), and clinical performance evaluations (25%). Late assignments receive a 5% deduction per day. I have my Canvas settings to automatically deduct the late points. Late assignments are not accepted seven days after the submission deadline. Grading Scale: A 93-100% A-90-92 B+87-89 B 83-86 B-80-82% Failure 79% or below",
          "<strong>Attendance:</strong> The exact hours and dates of your clinical courses may vary depending on which site or hospital you are assigned, but they are typically 8-12 hours long and are both A.M. and P.M. shifts. Students are not allowed to work 8 hours prior to any clinical shift.",
          "Within each academic term, students are required to fulfill the 90-hour clinical hour requirement. Students are allowed to reschedule a maximum of two clinical shifts: Rescheduling clinical hours is dependent on the clinical site availability. Please note that clinical site availability is becoming increasingly difficult to obtain; every effort should be made to attend each scheduled shift.",
          "Exceeding this limit by requesting additional rescheduled shifts will not be accommodated, resulting in the inability to meet the mandatory 90-hour clinical requirement and, consequently, course failure.",
          "In the event of an absence, the student is responsible for contacting the clinical faculty member assigned to that shift and Patricia Weller {Clinical Coordinator} to arrange a clinical makeup. Note: clinical makeups are increasingly hard to schedule and dependent on clinical faculty and facility availability. Therefore, alternative learning assignments may be assigned.",
          "<strong>Cell Phone / Electronics:</strong> See Practical Nursing Orientation Guide.",
          "<strong>Industry Environment:</strong> The environment is a classroom setting with varied methods of instruction. Group projects and presentations are part of the curriculum. Laptop computers are required to access the electronic library and a host of other learning modalities. The majority of the time spent in the classroom will be sitting, with scheduled breaks as the lesson plan allows.",
        ]  
      },
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "_Spring 2025 Level I Clinical Rotation.xlsx",
      "Clinical Meeting Area Instructions 2024 (1) (2).docx",
      "Clinical Faculty Contact Sheet 2024 - Roster.pdf",
      "Orientation Participation Tuesday March 18",
      "Orientation Participation Tuesday March 25",
      "Orientation Participation Monday March 31",
      "Grading Rubrics",
      "Assignment Submission Schedule",
      "Post Conference in Discussions",
      "Midterm Evaluation",
      "Final Evaluation",
      "Clinical Paperwork - Head to Toe Assessment.docx",
      "Clinical_Judgment_ Worksheet.docx",
      "Clinical_Judgment_ Worksheet_Examplar.docx",
      "Hypoglycemia",
      "Clinical_Judgment_ Worksheet Exemplar.docx Falls Risk",
      "Clinical_Judgment_ Worksheet (2).docx Pain Example",
      "NANDA.pdf",
      "lniurv Reflection",
      "Medication Error Reflection",
      "Focused_Assessment_Dialysis_Clinical_Rotation (1).docx",
      "Condensed_Early lntervention_Assessment_ Guide.docx",
      "Clinical Rotation Goal",
      "Patient-Centered Care Video",
      "Participation Tuesday, April 1",
      "Clinical Evaluation Tool Tuesday April 1",
      "Post Confererence",
      "Clinical Paperwork Head-to Toe Assessment",
      "Clinical Rotation Goal",
      "National Patient Safety Goals",
      "Participation Monday 4/7",
      "Clinical Evaluation Tool Monday 4/7",
      "Participation Tuesday 4/8",
      "Clinical Evaluation Tool Tuesday 4/8",
      "Post Conference",
      "Clinical Paperwork Head-to Toe Assessment",
      "Clinical Judgment Plan of Care",
      "Teamworik and Collaboration",
      "Clinical Rotation Goal",
      "Evidence-Based Practice in Nursing Article (about a 5 minute read)",
      "Evidence-Based Practice in Nursing",
      "Participation Monday 4/21",
      "Clinical Evaluation Tool Monday 4/21",
      "Participation Tuesday 4/22",
      "Clinical Evaluation Tool Tuesday 4/2,2",
      "Post Conference",
      "Clinical Paperwork Head-to Toe Assessment",
      "Midterm Evaluation Friendly Reminder",
      "Clinical Judgment Plan of Care",
      "Quality Improvement and You",
      "Clinical Rotation Goal",
      "What is Healthcare Informatics",
      "Participation Monday 4/28",
      "Clinical Evaluation Tool Monday 4/28",
      "Participation Tuesday 4/29",
      "Clinical Evaluation Tool Tuesday 4/29",
      "Post Conference",
      "Clinical Paperwork Head-to Toe Assessment",
      "Staff Communication",
      "Clinical Rotation Goal",
      "Participation Monday 5/5",
      "Clinical Evaluation Tool Monday 5/5",
      "Participation Tuesday 5/6",
      "Clinical Evaluation Tool Tuesday 5/6",
      "Post Conference",
      "Final Reflective Essay",
      "Practical !Nursing Clinical Experience Site Evaluation Form(2).pdf",
      "Upload C!linical Site Evaluations Here",
      "Course Evaluation",
    ]
  }
]

export default TEPN2970;