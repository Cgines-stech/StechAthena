// PN 1031

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const PN1031 = [
  {
    id: 80008,
    programId: 1,
    courseNumber: "PN 1031",
    courseName: "Introductory Mental Health Nursing",
    courseCredits: 1,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 20.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      'Introductory Mental Health Nursing provides an introduction to mental health nursing which will require you to examine human dynamics and adaptive/maladaptive  responses to internal and external stressors. While in this course you will be provided a summary of foundational psychological theory, an overview of current  psychotherapeutic treatment modalities, and common mental health disorders. The professional standards of QSEN provide the context for this course to direct learning and  provide meaningful purpose as you prepare to care compassionately for this vulnerable population. Upon completion of this course you will be able to identify the  professional role of LPNs in providing compassionate care for those with selected psychiatric disorders.',

    courseObjectives: [
      "Examine the legal, ethical, and historical aspects of mental health nursing (EPSLO # 1, 2, 3, 4, 5).",
      "Define the essential components of the nurse-client relationship in mental health nursing (EPSLO # 1, 2, 3, 4, 5).",
      "Explain the nursing process in the care of the client with mental health alterations (EPSLO # 1, 2, 3, 4, 5).",
      "Discuss screening tools for mental health alterations (EPSLO # 1, 2, 3, 4, 5).",
      "Define characteristics of various mental health alterations (EPSLO # 1, 2, 3, 4, 5).",
      "Relate the aspects of National Patient Safety Goals (NPSG) to the mental health client (EPSLO # 1, 2, 3, 4, 5).",
      "Identify mental health concerns on a life continuum, including children, adolescents, and adult populations (EPSLO # 1, 2, 3, 4, 5).",
      "Explain the dynamics of anger, violence, and crisis as it applies to mental health (EPSLO # 1, 2, 3, 4, 5).",
    ],

    courseOutline: [
      { title: "Introduction to Mental Health and Mental Illness", hours: 3},
      { title: "Mental Health Care", hours: 3},
      { title: "Fundamental Nursing Roles in Mental Health Nursing", hours: 3},
      { title: "Specific Psychiatric Disorders", hours: 3},
      { title: "Age-Specific Disorder and Issues", hours: 3},
      { title: "Introductory Mental Health Nursing Final", hours: 3},
    ],

    courseBooks: [
      {},
    ],

    syllabiBooks: [
      {
        name: "Docucare, Lippincott", 
        isbn: "9781451185171",
      },
      {
        name: "NCLEX-Passpoint", 
        isbn: "9781496309327",
      },
      {
        name: "Introductory Mental Health Nursing, 4th Edition", 
        isbn: "9781975103781",
      },
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
        startDate: "10-10-2025",
        endDate: "12-12-2025",
        Monday: "",
        Tuesday: "",
        Wednesday: "",
        Thursday: "",
        Friday: "9:00 AM - 1:00 PM",
        Saturday: "",
      },
      {
        termLabel: "Spring",
        startDate: "03-06-2026",
        endDate: "05-08-2026",
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
        instructorNote: ``},
    ],

    course_Policies: [
      {
        title: "Course Policies",
        content: [
          "<strong>Instructor Information and Course Requirements:</strong> The instructor will be available for more individualized questions during class breaks and by appointment. Students are expected to arrive on time to class ready to learn, having completed pre-class assignments and the required reading.",
          "<strong>Grading:</strong> A cumulative average 80% or better is expected on all course requirements. Evaluation methods will include: Tickets to class (10%), Tests and quizzes (40%), Assignments (25%), and Class participation/professional behavior (25%). If a student's grade falls below 80%, an Academic Intervention Plan will be initiated, requiring remediation for successful course completion. A cumulative test average of 80% is required to pass the course.",
          "<strong>Remediation:</strong> Remediation, if available, must be requested within 24 hours of the original assignment/test completion.",
          "<strong>Artificial Intelligence:</strong> The use of generative AI (ChatGPT etc.) is not banned for this course. AI may be used as a tool to assist with the generation of ideas, but it may not be used to replace student work and is not an approved source for cited information",
          "<strong>Attendance:</strong> It is expected students will attend all scheduled classes. In the event of an absence, the student is responsible for content discussed in class. Habitual tardiness or absences will be handled on a case by case basis.",
          "<strong>Cell Phone / Electronics:</strong> See Practical Nursing Orientation Guide.",
          "<strong>Industry Environment:</strong> The environment is a classroom setting with varied methods of instruction. Group projects and presentations are part of the curriculum. Laptop computers are required to access the electronic library and a host of other learning modalities. The majority of the time spent in the classroom will be sitting, with scheduled breaks as the lesson plan allows.",
        ]  
      },
      {
        title: "Attendance: Didactic Class",
        content: [
          "The didactic curriculum will be covered over two semesters. Students who are not in class will be unable to learn and miss needed information; therefore, attendance is mandatory. If an absence is unavoidable, the student must notify the instructor prior to the absence when possible. An absence is defined as more than 15 minutes of missed class time, regardless of whether missed time occurs at the beginning, middle, or end of a scheduled class. Following the second absence, each subsequent absence will result in a 5% reduction in the student's overall theory grade. Breaks will be provided at specified intervals throughout the class sessions to attend to personal needs. Mobile phones and other electronic devices must remain in silent mode throughout the duration of the class. Please do not disrupt the class by receiving calls, being paged, or leaving inappropriately. Excessive text messaging/social media during class will not be tolerated. Use of the technologies, as mentioned above, during class will result in students being asked to leave for the remainder of the class with an absence recorded on their attendance record. Should any specific issues arise, students should discuss them with the instructor.",
        ]  
      },
      {
        title: "Punctuality: Didactic Class",
        content: [
          "Arriving late, leaving early, or frequently exiting the classroom during class disrupts the instructor and classmates. In order to mirror professional workplace standards, punctuality will be tracked. Tardiness is defined as missing 1 to 14 minutes of class time after the class has started. The determination of tardiness will be made at the discretion of the faculty. Habitual tardiness in the didactic setting will prompt the implementation of an academic intervention plan, which will be structured according to the following scale: 2 tardies/course = verbal warning, each subsequent tardy will result in a 2% reduction in the student's overall theory grade. 3 tardies/course = academic intervention plan and a 2% deduction to their overall grade 5 tardies/course = dismissal from program Students who are late or absent on the day of an exam will be required to take the examination within a 24-hour window. Failure to do so within this timeframe will result in a 5% deduction per day, up to a maximum of 7 days, with no opportunity for remediation.",
        ]  
      },
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "Syllabus Agreement",
      "Class Rubrics",
      "Course Introduction",
      "APA Template",
      "Sign up for Prep U",
      "Mental Health Agenda Spring 2024.docx",
      "Participation",
      "Objectives - Day 1",
      "Reading - Day 1",
      "Ticket to Class",
      "Ticket to Class - Day 1",
      "Lecture Materials",
      "Chapter 1 Powerpoint",
      "Chapter 2 Powerpoint",
      "Chapter 3 Powerpoint",
      "Weekly Assignments",
      "Why Psych",
      "Participation",
      "Objectives - Day 2",
      "Reading - Day 2",
      "Ticket to Class",
      "Ticket to Class Day 2",
      "Lecture Materials",
      "Chapter 4 Powerpoint",
      "Chapter 5 Powerpoint",
      "Chapter 6 Powerpoint",
      "Weekly Assignments",
      "Reading Guide Worksheet CH 1-6",
      "Tests/Quizzes",
      "Test 1-6- Requires Respondus LockDown Browser",
      "Test 1 Stuldy Guide",
      "Participation",
      "Objectives - Day 3",
      "Reading - Day 3",
      "Ticket to ·Class",
      "Ticket to Class - Day 3",
      "Lecture Materials",
      "Chapter 7 Powerpoint",
      "Chapter 8 Powerpoint",
      "Weekly Assignments",
      "Reading Guide Day 3",
      "Effective Communication Reflection",
      "Communication Case Studies",
      "Communication Case Studies Answers",
      "Tests/Quizzes",
      "Test 7 and 8- Requires Respondus LockDown Browser",
      "Test 2 Stl!ldy Guide",
      "Particioation",
      "Objectives- Day 4",
      "Reading - Day 4",
      "Objectives- Day 5",
      "Reading - Day 5",
      "Objectives- Day 6",
      "Reading - Day 6",
      "Ticket to Class",
      "Ticket to Class - Day 4",
      "Ticket to Class - Day 5",
      "Ticket to Class - Day 6",
      "Lecture Materials",
      "Chapter 9 Powerpoint",
      "Chapter 10 Powerpoint",
      "Chapter 11 Powerpoint",
      "Chapter 12 Powerpoint",
      "Chapter 13 Powerpoint",
      "Chapter 14 Powerpoint",
      "Chapter 15 Powerpoint",
      "Chapter 16 l'owerpoint",
      "Chapter 17 Powerpoint",
      "Weekly Assignments",
      "Reading Guide Part 1",
      "Reading Guide Part 2",
      "Drug Cards Week 4-6",
      "Case Studies",
      "Tests/Quizzes",
      "Study Guide Module 4 Test Part 1",
      "Study Guide Module 4 Test Part 2",
      "Test 9-13- Requires Respondus LockDown Browser",
      "Test CH 1l4-17- Requires Respondus LockDown Browser",
      "Participation",
      "Objectives - Day 7",
      "Reading - Day 7",
      "Ticket to Class",
      "Ticket to Class - Day 7",
      "Lecture Materials",
      "Chapter 18 Powerpoint",
      "Chapter 19 Powerpoint",
      "Weekly Assignments",
      "Prepare for all Finals",
      "Test/Quiz",
      "Chapter 18 and 19 Quiz",
      "18 and 19 Study Guide",
      "Participation",
      "Objectives - Day 8",
      "Ticket to ·Class",
      "Ticket to Class - Day 8",
      "Weekly Assignments",
      "End of Course Feedback Submission",
      "Student Feedback",
      "End of Course Survey",
    ]
  }
]

export default PN1031;