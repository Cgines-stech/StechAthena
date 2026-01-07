// TEPN 1300

// imports
import gradeScale from "../../gradescale.js";
import { courseTotals, sum, money } from "../../utils/helpers.js";

const GS = Array.isArray(gradeScale) ? gradeScale[0] : gradeScale;

const TEPN1300 = [
  {
    id: 80019,
    programId: 1,
    courseNumber: "TEPN 1300",
    courseName: "Comprehensive Mental Health Nursing",
    courseCredits: 2,
    statewideAlignment: "Aligned",
    courseClockHours: 60,
    courseTuition: 180.00,
    courseFee: 20.00,
    instructionalType: "LEC",
    isElective: false,
    includeInProgramTotals: true,

    courseDescription:
      "This course introduces essential mental health nursing concepts, emphasizing therapeutic communication to build strong nurse-client relationships. Students will learn to recognize and manage common mental health conditions using evidence-based interventions. The course prioritizes individualized, person-centered care, considering cultural and psychosocial factors, preparing students to deliver empathic, holistic care across the lifespan.",

    courseObjectives: [
      "Identify the characteristics and management of common mental health disorders and associated treatments.",
      "Apply therapeutic communication techniques to foster effective nurse-client relationships.",
      "Discuss individualized care including cultural, spiritual, and psychosocial factors.",
    ],

    courseOutline: [
      { title: "Orientation/Professional Standards of Nursing", hours: 4},
      { title: "Getting Started", hours: 4},
      { title: "Understanding Your Profession", hours: 4},
      { title: "Theory, Culture and Diversity", hours: 4},
      { title: "Preparing for Successful Practice", hours: 4},
      { title: "Moving Forward", hours: 4},
      { title: "Professionalism", hours: 4},
      { title: "Intro to Mental Healthcare", hours: 4},
      { title: "Mental Healthcare Nursing", hours: 4},
      { title: "Fundamental Roles in Mental Healthcare", hours: 4},
      { title: "Specific Psychiatric Disorders", hours: 12},
      { title: "Age-Specific Psychiatric Disorders", hours: 4},
      { title: "Final", hours: 4},

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
        isbn: "9781496362995",
      },
      {
        name: "Docucare, Lippincott", 
        isbn: "9781451185171",
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
        termLabel: "Fall",
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
        termLabel: "Spring",
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

export default TEPN1300;