// PN 1090

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const PN1090 = [
  {
    id: 80011,
    programId: 1,
    courseNumber: "PN 1090",
    courseName: "Career Readiness",
    courseCredits: 1,
    statewideAlignment: "Non-Aligned",
    courseClockHours: 30,
    courseTuition: 95.00,
    courseFee: 299.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      'The Career Readiness for Practical Nursing course is designed to equip students with the essential skills and knowledge necessary for a successful transition into the workforce as practical nursing professionals. This comprehensive course emphasizes the development of critical thinking abilities, effective test-taking strategies specifically tailored for the NCLEX examination, and comprehensive preparation for career-focused interviews within the nursing field.',

    courseObjectives: [
      "Analyze critical thinking abilities by examining complex nursing questions and applying evidence-based reasoning to solve clinical problems",
      "Explain effective test-taking strategies explicitly tailored for the NCLEX examination",
      "Engage in career-focused interviews within the nursing field, including resume writing, interview etiquette, professional communication, and showcasing relevant experience and qualifications",
    ],

    courseOutline: [
      { title: "NCLEX Test Taking Strategies", hours: 10},
      { title: "Critical Thinking Application", hours: 10},
      { title: "Resume and Interview Skills", hours: 10},
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
        startDate: "11-11-2025",
        endDate: "12-09-2025",
        Monday: "",
        Tuesday: "9:00 AM - 3:00 PM",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
      },
      {
        termLabel: "Spring",
        startDate: "03-31-2026",
        endDate: "05-05-2026",
        Monday: "",
        Tuesday: "9:00 AM - 3:00 PM",
        Wednesday: "",
        Thursday: "",
        Friday: "",
        Saturday: "",
      },
    ],

    instructorContactInformation: [
      { 
        name: "Kylee McBride",
        title: "",
        email: "kmcbride@stech.edu",
        phone: "",
        office: "",
        instructorNote: ``
      },
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
          "Arriving late, leaving early, or frequently exiting the classroom during class disrupts the instructor and classmates. In order to mirror professional workplace standards, punctuality will be tracked. Tardiness is defined as missing 1 to 14 minutes of class time after the class has started. The determination of tardiness will be made at the discretion of the faculty.",
          "Habitual tardiness in the didactic setting will prompt the implementation of an academic intervention plan, which will be structured according to the following scale:",
          "&nbsp;&nbsp;• 2 tardies/course = verbal warning, each subsequent tardy will result in a 2% reduction in the student's overall theory grade.",
          "&nbsp;&nbsp;• 3 tardies/course = academic intervention plan and a 2% deduction to their overall grade ",
          "&nbsp;&nbsp;• 5 tardies/course = dismissal from program",
          "Students who are late or absent on the day of an exam will be required to take the examination within a 24-hour window. Failure to do so within this timeframe will result in a 5% deduction per day, up to a maximum of 7 days, with no opportunity for remediation.",
        ]  
      },
    ],

    courseAssignmentsandAsssessments: [
      "Orientation",
      "PN 1090 Career Readiness Agenda",
      "PN 1090 Career Readiness",
      "NCLEX Test Taking Strategies",
      "Passpoint Test",
      "UWorld Self Assessment 1",
      "UWorld Self Assessment 2",
      "Participation Day 1",
      "Participation Day 2",
      "Uworld Assignment 1",
      "Health Policy paper",
      "Participation Day 3",
      "Participation Day 4",
      "EPSLO Exam",
      "Interview Questions and Answers",
      "Resume",
      "Mock Interview Day",
      "Participation Day 5",
      "Uworld Assignment 6",
      "Linkedln Profile",
      "NCLEX Information- How to Sign up",
      "Question Collection_EPSLO Review 20255",
      "End of Course Survey",
    ]
  }
]

export default PN1090;