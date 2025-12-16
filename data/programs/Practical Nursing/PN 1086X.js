// PN 1086X

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const PN1086X = [
  {
    id: 80010,
    programId: 1,
    courseNumber: "PN 1086X",
    courseName: "Introductory Mental Health Nursing",
    courseCredits: 2,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 120,
    courseTuition: 190.00,
    courseFee: 10.00,
    instructionalType: "WBL",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      'Clinical Learning II provides you off-campus environment where you will transfer and apply the knowledge, skills and attitudes acquired in the classroom, skills lab, and  simulation settings. The professional standards of QSEN provide the context for this course to guide your learning and provide meaningful purpose. With supervision and  prompting, you will begin providing care for clients with commonly occurring problems, as well as for the elderly and mentally ill client. In the context of patient-centered  care, in a variety of settings, and with a focus on health assessment and wellness, you will begin applying the fundamental skills and concepts of nursing. When you have  completed this course, you will be able to use the nursing process to provide patient-centered care in the clinical setting.',

    courseObjectives: [
      "Construct compassionate, coordinated patient care by respecting patient preferences, values, and needs (EPSLO # 1, 3, 4, 5).",
      "Choose effective communication and collaboration with patients, families, and other healthcare team members in providing patient-centered care (EPSLO # 1, 2, 3, 4, 5).",
      "Analyze the nursing process to plan nursing care that promotes the health and well-being of individuals (EPSLO # 1, 2, 3, 4, 5).",
      "Prioritize adherence to NPSG in providing patient-centered care (EPSLO # 1,2, 3, 4, 5).",
      "Model professional accountability by following the legal and ethical standards set forth by the Utah Nurse Practice Act for the Licensed Practical Nurse (EPSLO #1, 2, 3, 4, 5).",
      "Appraise competency when performing fundamental nursing skills for selected clients (EPSLO# 1, 2, 3, 4, 5).",
    ],

    courseOutline: [
      { title: "Orientation", hours: 12},
      { title: "Compassionate Care Concept", hours: 15},
      { title: "Clinical Judgement Concept", hours: 15},
      { title: "Ethics Concept", hours: 15},
      { title: "Evidence-Based Practice Concept", hours: 15},
      { title: "Health Policy Concept", hours: 15},
      { title: "Communication Concept", hours: 15},
      { title: "Diversity, Equity, and Inclusion Concept", hours: 15},
      { title: "Course Evaluation, Final Reflection, Final Clinical Evaluation", hours: 3},
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
        startDate: "08-11-2025",
        endDate: "10-21-2025",
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
      },
      {
        termLabel: "Spring",
        startDate: "01-05-2026",
        endDate: "03-17-2026",
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
        instructorNote: ``
      },
    ],

    course_Policies: [
      {
        title: "Course Policies",
        content: [
          "<strong>Instructor Information and Course Requirements:</strong> Professionalism, client confidentiality, and eagerness to learn are key aspects for success in this course. A positive professional attitude is essential. Students are expected to protect the health information of the clients they observe or to whom they provide care. Client situations are to be discussed in a private area with the appropriate nurse, health care provider, or PN faculty member. Assignments for each clinical rotation are to be completed by the due date, and electronically submitted via the Canvas portal. The student must obtain a score of 80% or better on all assignments. This Clinical Learning course requires 120 hours of work-based learning. The hours will be documented and signed off by the clinical coordinator. The exact hours and dates of your clinical courses may vary depending on which site or  hospital you are assigned, but they are typically 8-12 hours long and are both A.M. and P.M. shifts. Students are not allowed to work 8 hours prior to any clinical shift.",
          "<strong>Grading:</strong> A cumulative average of 80% or better is required on all course requirements. Evaluation methods include assignments, participation, and clinical performance evaluations. Grading Scale: A 93-100% A-90-92 B+87-89 B83-86 B-80-82% Failure 79% or below. Late assignments (if accepted) receive a 5% deduction per day. Late assignments are not accepted seven days after the submission deadline. If a student's grade falls below 80%, an Academic Intervention Plan will be initiated, requiring remediation for successful course completion.",
          "<strong>Attendance:</strong> Within each academic term, students are required to fulfill the 120-hour clinical hour requirement. Students are allowed to reschedule a maximum of two clinical shifts: Rescheduling clinical hours is dependent on the clinical site availability. Every effort should be made to attend each scheduled shift. Exceeding this limit by requesting additional rescheduled shifts will not be accommodated, resulting in the inability to meet the mandatory 120-hour clinical requirement and, consequently, course failure. In the event of an absence, the student is responsible for contacting the clinical faculty member assigned to that shift and Patricia Weller {clinical coordinator} to arrange a clinical makeup. Note: clinical makeups are increasingly hard to schedule and dependent on clinical faculty and facility availability.",
          "<strong>Cell Phone / Electronics:</strong> See Practical Nursing Orientation Guide.",
          "<strong>Industry Environment:</strong> The environment is a clinical setting with varied methods of instruction. The majority of the time spent in this setting will be standing and walking. Lifting and transferring clients will be required. In these situations, it is expected the student will seek assistance in order to safeguard their own health and safety.",
        ]  
      },
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "Spring 2025 Level II Clinical Rotation.xlsx",
      "Clinical Meeting Area Instructions 2024 (1) (2).docx",
      "Clinical Faculty Contact Sheet 2024 - Roster.pdf",
      "Grading Rubrics",
      "Submission Schedule",
      "Post Conference in Discussions",
      "Participation 8/11/25",
      "Skills Blitz Agenda 8/11",
      "Skills Blitz List.pdf",
      "Skills Blitz 8/11/25 0900-1400",
      "PN 1085X Student Clinical Mid-term & Final Evaluation.docx",
      "MidTerm Clinical Evaluation Rubric",
      "Final Clinical Evaluation",
      "Clinical Judgment Plan of Care 2025.docx",
      "Clinical Judgment Plan of Care Exemplar.docx",
      "NANDA.pdf",
      "Medication Error Reflection",
      "lniurv Reflection",
      "Clinical Paperwork - Head to Toe Assessment (3).docx",
      "Focused~Assessment_Dialysis_Clinical_Rotation (1).docx",
      "Condensed_Early lntervention_Assessment_ Guide.docx",
      "Focused~Assessment_LPN_ER_ Clinical_Rotation.docx",
      "Clinical Rotation Goal",
      "Video: Sympathy, Empathy, and Compassion: How do they",
      "differ and which one do people prefer?",
      "Participation Monday 8/18",
      "Clinical Evaluation Tool Monday 8/18",
      "Participation Tuesday 8/19",
      "Clinical Evaluation Tool Tuesday 8/19",
      "Clinical Judgment Plan of Care",
      "Journal Week of Compassionate Care",
      "Clinical Rotation Goal",
      "Video: Understanding Clinical Judgment",
      "Participation Monday 8/25",
      "Clinical Evaluation Tool Monday 8/25",
      "Participation Tuesday 8/26",
      "Post Conference Now in Discussions",
      "Clinical Rotation Goal",
      "Participation Tuesday 9 / 2",
      "Clinical Evaluation Tool Tuesday 9/ 2",
      "Post Conference Now in Discussions-Excused this week",
      "(yesterday was Labor Day)",
      "Clinical Judgment Plan of Care",
      "Journal Week of Clinical Judgement",
      "Clinical Rotation Goal",
      "Ethics in Nursing Article",
      "Participation Monday 9 / 8",
      "Clinical Evaluation Tool Monday 9/ 8",
      "Participation Tuesday 9 / 9",
      "Clinical Evaluation Tool Tuesday 9/ 9'",
      "Post Conference Now in Discussions",
      "Clinical Judgment Plan of Care",
      "Journal Week of Ethics Concept",
      "Clinical Rotation Goal",
      "Video What is Evidence-Based Practice & 2024 National",
      "Patient Safety Goals",
      "Participation Monday 9/15",
      "Clinical Evaluation Tool Monday 9/15",
      "Participation Tuesday 9 /16",
      "Clinical Evaluation Tool Tuesday 9/16",
      "Post Conference in Discussions",
      "Clinical Judgment Plan of Care",
      "Journal Week of Evidence-Based Practice Concept",
      "MidTerm Evaluation",
      "Clinical Rotation Goal",
      "Videos: Why Health Care Policy Matters & Health Care Policy for Nurses",
      "Participation Monday 9/22",
      "Clinical Evaluation Tool Monday 9/22",
      "Participation Tuesday 9 /23",
      "Clinical Evaluation Tool Tuesday 9/2:3",
      "Post Conference in Discussions",
      "Clinical Judgment Plan of Care",
      "Journal Week of Health Policy Concept",
      "Clinical Rotation Goal",
      "Video: Improving Communication Between Patients and Nurses",
      "Participation Monday 9/29",
      "Clinical Evaluation Tool Monday 9/29",
      "Participation Tuesday 9 /30",
      "Clinical Evaluation Tool Tuesday 9/30",
      "Post Conference in Discussions",
      "Clinical Judgment Plan of Care",
      "Journal Week of Communication Concept",
      "Clinical Rotation Goal",
      "Videos: Diversity, Equity, and Inclusion in Healthcare",
      "Participation Monday 10/6",
      "Clinical Evaluation Tool Monday 10/6",
      "Participation Tuesday 10/7",
      "Clinical Evaluation Tool Tuesday 10/7",
      "Clinical Judgment Plan of Care",
      "Journal Week 7 Culturally Competent Care Concept",
      "Participation Tuesday 10/21",
      "Clinical Evaluation Tool Tuesday 10/21",
      "Reflective Essay",
      "Final Evaluation",
      "Practical Nursing Clinical Experience Site Evaluation",
      "Form.pdf",
      "Practical Nursing Clinical Experience Site Evaluation (Upload your documents here)",
      "Evaluation",
    ]
  }
]

export default PN1086X;