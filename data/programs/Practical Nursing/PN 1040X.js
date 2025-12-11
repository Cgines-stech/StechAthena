// PN 1040X

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const PN1040X = [
  {
    id: 80006,
    programId: 1,
    courseNumber: "PN 1040X",
    courseName: "Clinical Learning I",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 90,
    courseTuition: 190.00,
    courseFee: 10.00,
    instructionalType: "SUP",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "Clinical Learning I provides safe off-campus practice-learning environments where students will transfer and apply the knowledge, skills, and behaviors acquired in the  classroom and skills lab. With supervision and prompting, you will begin providing care for adults with commonly occurring problems as well as with the elderly. With a focus  on health assessment and wellness, you will begin applying the fundamental skills and concepts of nursing. The professional standards of QSEN provide the context for this  course to guide your learning and provide meaningful purpose.",

    courseObjectives: [
      "Define and provide compassionate, coordinated patient care by respecting patient preferences, values, and needs (EPSLO # 1, 3, 4, 5).",
      "Extend effective communication and collaboration with patients, families, and other healthcare team members in providing patient-centered care (EPSLO # 1, 2, 3, 4, 5, )",
      "Relate and include the nursing process to plan nursing care that promotes the health and well-being of individuals (EPSLO # 1, 2, 3, 4, 5, ).",
      "Show adherence to NPSG in providing patient-centered care (EPSLO # 1,2, 3, 4, 5, )",
      "Choose professional accountability by following the legal and ethical standards set forth by the Utah Nurse Practice Act for the Licensed Practical Nurse (EPSLO #1, 2, 3, 4, 5,).",
      "Demonstrate competency in performing fundamental nursing skills for selected clients (EPSLO# 1, 2, 3, 4, 5,).",
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
        startDate: "10-28-2025",
        endDate: "12-08-2025",
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
      },
      {
        termLabel: "Spring",
        startDate: "03-24-2026",
        endDate: "05-12-2026",
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
      {},
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

export default PN1040X;